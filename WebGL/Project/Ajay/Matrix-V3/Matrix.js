// Matrix Scene Global Variables
var vao;
var vbo;
var color;
var vbo_texcoord;

var vao_framebuffer_quad;
var vbo_framebuffer_position;
var vbo_framebuffer_texcoord;

var vao_computer;
var vbo_position_computer;
var vbo_texcoord_computer;

var vao_matrix;
var vbo_matrix_position;
var vbo_matrix_color;
var vbo_matrix_normal;

var vao_room;
var vbo_room_position;
var vbo_room_color;
var vbo_room_normal;

var bQuadBlack = false;
var blinkCount = 0;
var makeQuadBlackOrWhite = 0.0;

var fbo;
var color_texture;
var depth_texture;

var mvpUniform;
var samplerUniform;
var makeBlackUniform;

var mvpTextureUniform;
var samplerTextureUniform;

var showTextureUniform;

var vertexTextureShaderObject;
var fragmentTextureShaderObject;
var textureShaderProgramObject;

var lightVertexShaderObject;
var lightFragmentShaderObject;
var lightShaderProgramObject;

var bLighting = false;

var laUniform;
var ldUniform;
var lsUniform;
var kaUniform;
var kdUniform;
var ksUniform;
var materialShininessUniform;

var lightPositionUniform;
var lKeyIsPressedUniform;
var modelMatrixUniform;
var viewMatrixUniform;
var projectionMatrixUniform;

var lightAmbient = new Float32Array([ 0.0, 1.0, 0.0]);
var lightDiffuse = new Float32Array([ 0.0, 1.0, 0.0]);
var lightSpecular = new Float32Array([ 0.0, 1.0, 0.0]);
var lightPosition = new Float32Array([ 0.0, 0.0, 1.0, 1.0 ]);

var materialAmbient = new Float32Array([ 0.0, 1.0, 0.0]);
var materialDiffuse = new Float32Array([ 0.0, 1.0, 0.0]);
var materialSpecular = new Float32Array([ 0.0, 1.0, 0.0]);
var materialShininess = 128.0;	// 128.0f

var texComputer;
var texture_smiley;

// R = -0.02
// RCircle = R + 0.03
// RSlant = R + 0.002

var mYTranslate = 0.3;
var aYTranslate = 0.6;
var tYTranslate = 0.9;
var rYTranslate = 1.2;
var iYTranslate = 1.5;
var xYTranslate = 1.8;

var lookAtZ = 3.0;
var lookAtY = 1.0;
var lookAtX = 0.0;

var upX = 0.0;
var upY = 1.0;
var upZ = 0.0;

var centerX = 0.0;
var centerY = 0.0;
var centerZ = -6.0;

var positiveY = -5.0;
var negativeY = -1.0;
var extend = 0.1;

var xXScale = 0.1 * 0.25 * 0.4;
var xYScale = (0.25 / 3) * 0.25 * 0.4;

var iXScale = 0.1 * 0.5 * 0.4;
var iYScale = (0.25 / 3) * 0.574 * 0.4;

var tXScale = 0.1 * 0.3 * 0.4;
var tYScale = (0.25 / 3) * 0.52 * 0.4;

var aXScale = 0.1 * 1.3 * 0.4;
var aYScale = (0.25 / 3) * 1.3 * 0.4;

var mXScale = 0.1 * 0.3 * 0.4;
var mYScale = (0.25 / 3) * 0.5 * 0.4;

var framebufferQuadYTranslate = -0.45;

var yTranslateForMatrix = -0.4; // -0.7
var zTranslateForMatrix = -1.5; // -2.9

var perspectiveProjectionMatrix;
var gShaderProgramObject = 0;

var getFramebufferViewportWidth = 0;
var getFramebufferViewportHeight = 0;

var bMatrixScene = false;

// code
function makeFramebufferObject() {
	// code
	fbo = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

	color_texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, color_texture);
	//gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, canvas.width - 384, canvas.height + 456);
	if (bFullscreen) {
		gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, canvas.width - 384, canvas.height + 456);
	}
	else {
		gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, canvas.width, canvas.height);
	}

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

	depth_texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, depth_texture);
	if (bFullscreen) {
		gl.texStorage2D(gl.TEXTURE_2D, 1, gl.DEPTH_COMPONENT32F, canvas.width - 384, canvas.height + 456);
	}
	else {
		gl.texStorage2D(gl.TEXTURE_2D, 1, gl.DEPTH_COMPONENT32F, canvas.width, canvas.height);
	}

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, color_texture, 0);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depth_texture, 0);
	
	//static const int draw_buffers[] = new int[] { GL_COLOR_ATTACHMENT0 };
	
	//var draw_buffers = new Int32Array([gl.COLOR_ATTACHMENT0]);
	gl.drawBuffers([gl.COLOR_ATTACHMENT0]);

	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

function lightShaderProgram() {
	// code
	// vertex shader
	var lightVertexShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"in vec4 vPosition;" +
		"in vec3 vNormal;" +
		"uniform mat4 u_model_matrix;" +
		"uniform mat4 u_view_matrix;" +
		"uniform mat4 u_projection_matrix;" +
		"uniform int u_l_key_is_pressed;" +
		"uniform vec4 u_light_position;" +
		"out vec3 t_norm;" +
		"out vec3 light_direction;" +
		"out vec3 viewer_vector;" +
		"void main(void)" +
		"{" +
		"if (u_l_key_is_pressed == 1)" +
		"{" +
		"vec4 eye_coordinates = u_view_matrix * u_model_matrix * vPosition;" +
		"t_norm = mat3(u_view_matrix * u_model_matrix) * vNormal;" +
		"light_direction = vec3(u_light_position - eye_coordinates);" +
		"viewer_vector = vec3(-eye_coordinates.xyz);" +
		"}" +
		"gl_Position = u_projection_matrix * u_view_matrix * u_model_matrix * vPosition;" +
		"}";
		
	lightVertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(lightVertexShaderObject, lightVertexShaderSourceCode);
	gl.compileShader(lightVertexShaderObject);
	if (gl.getShaderParameter(lightVertexShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(lightVertexShaderObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	// fragment shader
	var lightFragmentShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"precision highp float;" +
		"precision highp int;" +
		"in vec3 t_norm;" +
		"in vec3 viewer_vector;" +
		"in vec3 light_direction;" +
		"uniform vec3 u_la;" +
		"uniform vec3 u_ld;" +
		"uniform vec3 u_ls;" +
		"uniform vec3 u_ka;" +
		"uniform vec3 u_kd;" +
		"uniform vec3 u_ks;" +
		"uniform float u_material_shininess;" +
		"uniform int u_l_key_is_pressed;" +
		"out vec4 FragColor;" +
		"void main(void)" +
		"{" +
		"if (u_l_key_is_pressed == 1)" +
		"{" +
		"vec3 normalized_viewer_vector = normalize(viewer_vector);" +
		"vec3 normalized_light_direction = normalize(light_direction);" +
		"vec3 normalized_t_norm = normalize(t_norm);" +
		"float tn_dot_light_direction = max(dot(normalized_light_direction, normalized_t_norm), 0.0);" +
		"vec3 reflection_vector = reflect(-normalized_light_direction, normalized_t_norm);" +
		"vec3 ambient = u_la * u_ka;" +
		"vec3 diffuse = u_ld * u_kd * tn_dot_light_direction;" +
		"vec3 specular = u_ls * u_ks * pow(max(dot(reflection_vector, normalized_viewer_vector), 0.0), u_material_shininess);" +
		"vec3 phong_ads_light = ambient + diffuse + specular;" +
		"FragColor = mix(vec4(phong_ads_light, 1.0), vec4(1.0, 1.0, 1.0, 1.0), 0.6);" +
		"}" +
		"else" +
		"{" +
		"FragColor = vec4(1.0, 1.0, 1.0, 1.0);" +
		"}" +
		"}";
		
		//"FragColor = vec4(phong_ads_light, 1.0);" +
	
	lightFragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(lightFragmentShaderObject, lightFragmentShaderSourceCode);
	gl.compileShader(lightFragmentShaderObject);
	if (gl.getShaderParameter(lightFragmentShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(lightFragmentShaderObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	// Shader program
	lightShaderProgramObject = gl.createProgram();
	gl.attachShader(lightShaderProgramObject, lightVertexShaderObject);
	gl.attachShader(lightShaderProgramObject, lightFragmentShaderObject);
	
	// pre-link binding of shader program object with vertex shader attributes
	gl.bindAttribLocation(lightShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(lightShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_COLOR, "vColor");
	gl.bindAttribLocation(lightShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_NORMAL, "vNormal");
	
	// linking
	gl.linkProgram(lightShaderProgramObject);
	if (gl.getProgramParameter(lightShaderProgramObject, gl.LINK_STATUS) == false) {
		var error = gl.getProgramInfoLog(lightShaderProgramObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	modelMatrixUniform = gl.getUniformLocation(lightShaderProgramObject, "u_model_matrix");
	viewMatrixUniform = gl.getUniformLocation(lightShaderProgramObject, "u_view_matrix");
	projectionMatrixUniform = gl.getUniformLocation(lightShaderProgramObject, "u_projection_matrix");
	lKeyIsPressedUniform = gl.getUniformLocation(lightShaderProgramObject, "u_l_key_is_pressed");
	laUniform = gl.getUniformLocation(lightShaderProgramObject, "u_la");
	ldUniform = gl.getUniformLocation(lightShaderProgramObject, "u_ld");
	lsUniform = gl.getUniformLocation(lightShaderProgramObject, "u_ls");
	kaUniform = gl.getUniformLocation(lightShaderProgramObject, "u_ka");
	kdUniform = gl.getUniformLocation(lightShaderProgramObject, "u_kd");
	ksUniform = gl.getUniformLocation(lightShaderProgramObject, "u_ks");
	materialShininessUniform = gl.getUniformLocation(lightShaderProgramObject, "u_material_shininess");
	lightPositionUniform = gl.getUniformLocation(lightShaderProgramObject, "u_light_position");
}

function createComputerQuad() {
	// code
	vao_computer = gl.createVertexArray();
	gl.bindVertexArray(vao_computer);
	
	var framebuffer_position = new Float32Array([
												1.0, 1.0,
												-1.0, 1.0,
												-1.0, -1.0,
												1.0, -1.0]);
												
	var framebuffer_texcoord = new Float32Array([
												1.0, 1.0,
												0.0, 1.0,
												0.0, 0.0,
												1.0, 0.0]);

	vbo_position_computer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position_computer);	

	gl.bufferData(gl.ARRAY_BUFFER, framebuffer_position, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	// Creating TexCoord Buffer
	vbo_texcoord_computer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texcoord_computer);

	gl.bufferData(gl.ARRAY_BUFFER, framebuffer_texcoord, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
}

function loadGLTexture() {
	// code
	texComputer = gl.createTexture();
	texComputer.image = new Image();
	texComputer.image.src = "Pinterest-01.png";
	texComputer.image.onload = function() 
	{
		gl.bindTexture(gl.TEXTURE_2D, texComputer);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texComputer.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}
}

function createMatrixRainQuad() {
	// code
	vao = gl.createVertexArray();
	gl.bindVertexArray(vao);

	vbo = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);	

	gl.bufferData(gl.ARRAY_BUFFER, 20 * 2 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	// Creating Color Buffer
	vbo_color = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);

	gl.bufferData(gl.ARRAY_BUFFER, 20 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	// Creating TexCoord Buffer
	vbo_texcoord = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texcoord);

	gl.bufferData(gl.ARRAY_BUFFER, 20 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
}

function makeTextureShaderProgram() {
	// code
	// vertex shader
	var vertexShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"in vec4 vPosition;" +
		"in vec2 vTexCoord;" +
		"out vec2 out_texcoord;" +
		"uniform mat4 u_mvp_matrix;" +
		"void main(void)" +
		"{" +
		"gl_Position = u_mvp_matrix * vPosition;" +
		"out_texcoord = vTexCoord;"	+
		"}"
		
	vertexTextureShaderObject = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexTextureShaderObject, vertexShaderSourceCode);
	gl.compileShader(vertexTextureShaderObject);
	if (gl.getShaderParameter(vertexTextureShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(vertexTextureShaderObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	// fragment shader
	var fragmentShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"precision highp float;" +
		"in vec2 out_texcoord;" + 
		"out vec4 FragColor;" +
		"uniform sampler2D u_sampler;" +
		"void main(void)" +
		"{" +
		"FragColor = texture(u_sampler, out_texcoord);" +
		"}"
	
	fragmentTextureShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentTextureShaderObject, fragmentShaderSourceCode);
	gl.compileShader(fragmentTextureShaderObject);
	if (gl.getShaderParameter(fragmentTextureShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(fragmentTextureShaderObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	// shader program
	textureShaderProgramObject = gl.createProgram();
	gl.attachShader(textureShaderProgramObject, vertexTextureShaderObject);
	gl.attachShader(textureShaderProgramObject, fragmentTextureShaderObject);
	
	// pre-link binding of shader program object with vertex shader attributes
	gl.bindAttribLocation(textureShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(textureShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_TEXTURE, "vTexCoord");
	
	// linking
	gl.linkProgram(textureShaderProgramObject);
	if (gl.getProgramParameter(textureShaderProgramObject, gl.LINK_STATUS) == false) {
		var error = gl.getProgramInfoLog(textureShaderProgramObject);
		if (error.length > 0) {
			alert(error);
			uninitialize();
		}
	}
	
	//  ***** LIGHT SHADER PROGRAM ****
	lightShaderProgram();
	
	// get mvpUniform location
	mvpTextureUniform = gl.getUniformLocation(textureShaderProgramObject, "u_mvp_matrix");
	samplerTextureUniform = gl.getUniformLocation(textureShaderProgramObject, "u_sampler");
}

function createFramebufferQuad() {
	// code
	vao_framebuffer_quad = gl.createVertexArray();
	gl.bindVertexArray(vao_framebuffer_quad);
	
	var framebuffer_position = new Float32Array([
												1.0, 1.0,
												-1.0, 1.0,
												-1.0, -1.0,
												1.0, -1.0]);
												
	var framebuffer_texcoord = new Float32Array([
												1.0, 1.0,
												0.0, 1.0,
												0.0, 0.0,
												1.0, 0.0]);

	vbo_framebuffer_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_framebuffer_position);	

	gl.bufferData(gl.ARRAY_BUFFER, framebuffer_position, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	// Creating TexCoord Buffer
	vbo_framebuffer_texcoord = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_framebuffer_texcoord);

	gl.bufferData(gl.ARRAY_BUFFER, framebuffer_texcoord, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
}

function createMatrixQuad() {
	// code
	vao_matrix = gl.createVertexArray();
	gl.bindVertexArray(vao_matrix);

	vbo_matrix_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);	

	gl.bufferData(gl.ARRAY_BUFFER, 26 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	// Creating Color Buffer
	vbo_matrix_color = gl.createBuffer();
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, 1600 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
	
	// Creating Normal Buffer
	vbo_matrix_normal = gl.createBuffer();
	
	var matrix_normal = new Float32Array(1600);
	
	for (var i = 0; i < matrix_normal.length; i = i + 3) {
		matrix_normal[i] = 0.0;
		matrix_normal[i + 1] = 0.0;
		matrix_normal[i + 2] = 1.0;
	}
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_normal);
	gl.bufferData(gl.ARRAY_BUFFER, matrix_normal, gl.STATIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_NORMAL, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_NORMAL);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
}

function createRoomQuad() {
	// code
	vao_room = gl.createVertexArray();
	gl.bindVertexArray(vao_room);

	vbo_room_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);	

	gl.bufferData(gl.ARRAY_BUFFER, 20 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	// Creating Color Buffer
	vbo_room_color = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);

	gl.bufferData(gl.ARRAY_BUFFER, 4 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	// Creating Normal Buffer
	vbo_room_normal = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);

	gl.bufferData(gl.ARRAY_BUFFER, 20 * 3 * 4, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_NORMAL, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_NORMAL);

	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
}

function Matrix_Initialize() {
	// code
	// get WebGL 2.0 context
	gl = canvas.getContext("webgl2");
	if (gl == null) {
		console.log("Failed to get the rendering context for WebGL");
		return;
	}
	
	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;
	
	// vertex shader
	var vertexShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"in vec4 vPosition;" +
		"in vec4 vColor;" +
		"out vec4 out_color;" +
		"uniform mat4 u_mvp_matrix;" +
		"void main(void)" +
		"{" +
		"gl_Position = u_mvp_matrix * vPosition;" +
		"out_color = vColor;" +
		"}"
		
	vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShaderObject, vertexShaderSourceCode);
	gl.compileShader(vertexShaderObject);
	if (gl.getShaderParameter(vertexShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(vertexShaderObject);
		if (error.length > 0) {
			alert(error);
			Matrix_Uninitialize();
		}
	}
	
	// fragment shader
	var fragmentShaderSourceCode = 
		"#version 300 es" +
		"\n" +
		"precision highp float;" +
		"in vec4 out_color;" +
		"out vec4 FragColor;" +
		"uniform int u_make_black;" +
		"void main(void)" +
		"{" +
		"	FragColor = out_color;" +
		"	if (u_make_black == 1) {" +
		"		FragColor = vec4(0.0, 0.0, 0.0, 1.0);" +
		"	}" +
		"}"
	
	fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShaderObject, fragmentShaderSourceCode);
	gl.compileShader(fragmentShaderObject);
	if (gl.getShaderParameter(fragmentShaderObject, gl.COMPILE_STATUS) == false) {
		var error = gl.getShaderInfoLog(fragmentShaderObject);
		if (error.length > 0) {
			alert(error);
			Matrix_Uninitialize();
		}
	}
	
	// shader program
	Matrix_ShaderProgramObject = gl.createProgram();
	gl.attachShader(Matrix_ShaderProgramObject, vertexShaderObject);
	gl.attachShader(Matrix_ShaderProgramObject, fragmentShaderObject);
	
	// pre-link binding of shader program object with vertex shader attributes
	gl.bindAttribLocation(Matrix_ShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(Matrix_ShaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_COLOR, "vColor");
	
	// linking
	gl.linkProgram(Matrix_ShaderProgramObject);
	if (gl.getProgramParameter(Matrix_ShaderProgramObject, gl.LINK_STATUS) == false) {
		var error = gl.getProgramInfoLog(Matrix_ShaderProgramObject);
		if (error.length > 0) {
			alert(error);
			Matrix_Uninitialize();
		}
	}
	
	// get mvpUniform location
	mvpUniform = gl.getUniformLocation(Matrix_ShaderProgramObject, "u_mvp_matrix");
	makeBlackUniform =  gl.getUniformLocation(Matrix_ShaderProgramObject, "u_make_black"); 
	
	// Texture Shader Program
	loadGLTexture();
	
	makeTextureShaderProgram();
	
	createMatrixRainQuad();
	
	createFramebufferQuad();

	createComputerQuad();
	
	createMatrixQuad();
	
	createRoomQuad();
	
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	
	// set clear color
	gl.clearColor(0.0, 0.0, 0.0, 1.0);	
}

function Matrix_Draw() {
	// code
	// variable declarations
	var one = new Float32Array([1.0 ]);
	var black = new Float32Array ([ 0.0 , 0.0 , 0.0 , 1.0  ]);
	
	// code
	if (bMatrixScene == true) {
	
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		
		gl.useProgram(Matrix_ShaderProgramObject);
		
		// **** FRAMEBUFFER ****
		gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
		
		gl.clearBufferfv(gl.COLOR, 0, black);
		gl.clearBufferfv(gl.DEPTH, 0, one);
		if (bFullscreen) {
			gl.viewport(0, 0, canvas.width - 384, canvas.height + 456);
		}
		else {
			gl.viewport(0, 0, canvas.width, canvas.height);
		}
		
		// Columns
		
		if (bMatrixHasDisappeared == false) {
		
			if (countOfReappearance >= 1000) {
				Column_1(0.0);
				Column_2(0.0);
				Column_3(0.0);
				Column_4(0.0);
				Column_5(0.0);
				Column_6(0.0);
				Column_7(0.0);
				Column_8(0.0);
				
				Column_1(5.0);
				Column_4(3.0);
				Column_2(5.0);
				Column_5(4.0);
				Column_3(6.5);
				Column_7(5.5);
				Column_6(5.0);
				Column_2(8.0);
				Column_4(10.0);
				Column_8(5.0);
				Column_7(9.0);
				Column_1(10.0);
				Column_2(14.0);
				Column_4(14.0);
				Column_1(15.0);
				
				Column_8(-10.0);
				Column_3(2.0);
				Column_5(-4.0);
				Column_1(-2.5);
				Column_6(8.0);
			}
			if (countOfReappearance <= 4) {
				Column_1(0.0);
				Column_2(0.0);
				Column_3(0.0);
				Column_4(0.0);
				Column_5(0.0);
				Column_6(0.0);
				Column_7(0.0);
				Column_8(0.0);
				
				Column_1(5.0);
				Column_1(10.0);
				Column_2(12.0);
				Column_3(13.0);
				Column_4(3.0);
				Column_4(10.0);
				Column_4(5.0);
				Column_4(7.0);
				Column_4(10.0);
				Column_2(9.0);
				Column_2(-1.0);
				Column_2(5.0);
				Column_5(4.0);
				Column_3(-3.5);
				Column_3(-6.5);
				Column_3(6.5);
				Column_7(5.5);
				Column_6(5.0);
				Column_2(8.0);
				Column_4(10.0);
				Column_8(5.0);
				Column_7(9.0);
				Column_1(10.0);
				Column_2(14.0);
				Column_4(14.0);
				Column_1(15.0);
				
				Column_8(-10.0);
				Column_3(2.0);
				Column_5(-4.0);
				Column_1(-2.5);
				Column_6(8.0);
				
				Column_5(-2.0);
				Column_5(-8.0);
				Column_6(1.0);
				Column_6(6.0);
				Column_7(1.5);
				Column_7(3.5);
			}
			
			if (framebufferQuadYTranslate >= -0.25) {
				Column_1(8.0);
				Column_1(7.0);
				Column_1(6.0);
				Column_1(5.0);
				Column_1(4.0);
				Column_1(3.0);
				Column_1(2.0);
				Column_2(6.0);
				Column_2(5.0);
				Column_2(4.0);
				Column_2(3.0);
				Column_2(1.0);
				Column_2(5.0);
				Column_3(4.0);
				Column_3(3.0);
				Column_3(3.0);
				Column_4(0.0);
				Column_4(1.0);
				Column_4(2.0);
				Column_4(0.0);
				Column_4(-2.0);
				Column_5(1.0);
				Column_5(-1.0);
				Column_5(0.0);
				Column_5(4.0);
				Column_6(-2.0);
				Column_7(-2.0);
				Column_8(-2.0);
				Column_1(-2.0);
			}
			
			makeMatrixStop();
		}	
		
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		
		gl.useProgram(null);
		
		// **** RENDER TO TEXTURE ****
		gl.useProgram(textureShaderProgramObject);
		
		gl.viewport(0, 0, canvas.width, canvas.height);
		
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, color_texture);
		
		var modelViewMatrix = mat4.create();
		var viewMatrix = mat4.create();
		var modelViewProjectionMatrix = mat4.create();
		
		//mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, -0.34, -2.0]);
		//mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, -0.5, -6.0]);
		//mat4.lookAt(modelViewMatrix, [lookAtX, lookAtY, lookAtZ], [0.0, 0.0, -6.5], [0.0, 1.0, 0.0]);
		//mat4.scale(modelViewMatrix, modelViewMatrix, [0.64, 0.55, 0.0]);
		mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, framebufferQuadYTranslate, -5.9]);
		mat4.scale(modelViewMatrix, modelViewMatrix, [0.75, 0.6, 0.0]);
		mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
		mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
		mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
		
		gl.uniform1i(samplerTextureUniform, 0);
		gl.uniformMatrix4fv(mvpTextureUniform, false, modelViewProjectionMatrix);
		
		if (blinkCount >= 30 && bStartMatrixAnimation) {
			IsFirstColumnReady = true;
			IsThirdColumnReady = true;	
			
			gl.bindVertexArray(vao_framebuffer_quad)
			gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
			gl.bindVertexArray(null);
		}
		
		gl.bindTexture(gl.TEXTURE_2D, null);
		
		modelViewMatrix = mat4.create();
		viewMatrix = mat4.create();
		modelViewProjectionMatrix = mat4.create();
		
		gl.viewport(0, 0, canvas.width, canvas.height);
		
		// **** DISPLAYING COMPUTER SCREEN ****
		getComputerOnScreen();
		//twoQuadAnimation();
		
		gl.useProgram(null);
		
		if (lookAtZ <= -5.53) {
			displayMatrix();
			if (xYTranslate == 0.0) {
				//makeMatrixStop();
				
				if (bMatrixHasDisappeared) {
					twoQuadAnimation();
				}
			}
		}
		
		makeARoom();
		if (blinkCount <= 30) {
			makeRoomLightsBlink();
		}
		
		Matrix_Update();
	}
}

function twoQuadAnimation() {
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	// code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.07, 0.0, -5.75]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [(3.0) * extend, (0.25 / 3) * 0.01, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var back_vertices = new Float32Array([
		1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,
		-1.0, -1.0, 1.0,
		1.0, -1.0, 1.0
	]);
	
	if (positiveY < 0.27) {		
		var back_color = new Float32Array([
			0.0, 0.0, 0.0,
			0.0, 0.0, 0.0,
			0.0, 0.0, 0.0,
			0.0, 0.0, 0.0,
		]);
	}
	else {
		var back_color = new Float32Array([
			0.0, 1.0, 0.0,
			0.0, 1.0, 0.0,
			0.0, 1.0, 0.0,
			0.0, 1.0, 0.0,
		]);
		
		if (extend > 2.0) {
			var back_color = new Float32Array([
				0.0, 0.0, 0.0,
				0.0, 0.0, 0.0,
				0.0, 0.0, 0.0,
				0.0, 0.0, 0.0,
			]);
			
			bMatrixScene = false;
		}
		
		gl.bindVertexArray(vao_room);
	
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
		gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
		
		gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
		gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
		
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		
		gl.bindVertexArray(null);
	}
	
	// Upper Quad
	modelViewMatrix = mat4.create();
	viewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.07, 0.40, -5.8]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [2.0, 0.2, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var up_vertices = new Float32Array([
		1.0, 1.0, 1.0,
		-1.0, 1.0, 1.0,
		-1.0, -1.0 - negativeY, 1.0,
		1.0, -1.0 - negativeY, 1.0
	]);
	
	var color = new Float32Array([
		0.0, 0.0, 0.0,
		0.0, 0.0, 0.0,
		0.0, 0.0, 0.0,
		0.0, 0.0, 0.0,
	]);
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, up_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	
	// Lower Quad
	modelViewMatrix = mat4.create();
	viewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.07, -0.1, -5.8]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [2.0, 0.4, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var down_vertices = new Float32Array([
		1.0, positiveY, 1.0,
		-1.0, positiveY, 1.0,
		-1.0, -1.0, 1.0,
		1.0, -1.0, 1.0
	]);
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, down_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (negativeY <= 1.0) {
		negativeY += 0.01;
	}
	else {
		extend += 1.0;
		//back_color[1] = back_color[4] = back_color[7] = back_color[10] = 1.0;
	}
	
	if (positiveY <= 0.25) {
		positiveY += 0.1;
	}
}

function displayMatrix() {
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	// code
	gl.useProgram(Matrix_ShaderProgramObject);
	//gl.useProgram(lightShaderProgramObject);
	
	/*if (bLighting) {
		gl.uniform1i(lKeyIsPressedUniform, 1);

		gl.uniform3fv(laUniform, lightAmbient);
		gl.uniform3fv(ldUniform, lightDiffuse);
		gl.uniform3fv(lsUniform, lightSpecular);
		gl.uniform4fv(lightPositionUniform, lightPosition);

		gl.uniform3fv(kaUniform, materialAmbient);
		gl.uniform3fv(kdUniform, materialDiffuse);
		gl.uniform3fv(ksUniform, materialSpecular);
		gl.uniform1f(materialShininessUniform, materialShininess);
	}
	else {
		gl.uniform1i(lKeyIsPressedUniform, 0);
	}*/
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.2 + 0.1, -0.02, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.2 + 0.1 - 0.013, mYTranslate, -5.89]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [(0.1 * 0.3), (0.25 / 3) * 0.5, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [mXScale, mYScale, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	/*gl.uniformMatrix4fv(modelMatrixUniform, false, modelViewMatrix);
	gl.uniformMatrix4fv(viewMatrixUniform, false, viewMatrix);
	gl.uniformMatrix4fv(projectionMatrixUniform, false, perspectiveProjectionMatrix);*/
	
	var M_Vertices = new Float32Array([
		-0.5, 1.0, 0.0,
		-0.75, 1.0, 0.0,
		-0.75, 0.0, 0.0,
		-0.5, 0.0, 0.0,
		
		-0.4, 0.0, 0.0,
		-0.85, 0.0, 0.0,
		-0.85, -0.1, 0.0,
		-0.4, -0.1, 0.0,
		
		-0.5, 1.0, 0.0,
		-0.75, 1.0, 0.0,
		0.0, 0.0, 0.0,
		0.25, 0.0, 0.0,
		
		1.0, 1.0, 0.0,
		0.75, 1.0, 0.0,
		0.0, 0.0, 0.0,
		0.25, 0.0, 0.0,
		
		1.0, 1.0, 0.0,
		0.75, 1.0, 0.0,
		0.75, 0.0, 0.0,
		1.0, 0.0, 0.0,
		
		1.1, 0.0, 0.0,
		0.65, 0.0, 0.0,
		0.65, -0.1, 0.0,
		1.1, -0.1, 0.0,
	]);
	
	var Color = new Float32Array(1600);
	
	for (var i = 0; i < Color.length; i = i + 3) {
		Color[i] = 0.5;
		Color[i + 1] = 1.0;
		Color[i + 2] = 0.0;
	}
	
	/*if (bMatrixHasDisappeared) {
		for (var i = 0; i < Color.length; i = i + 3) {
			Color[i] = 0.0;
			Color[i + 1] = 0.0;
			Color[i + 2] = 0.0;
		}
	}*/

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, M_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
	
	gl.bindVertexArray(null);	
	
	if (mYTranslate > -0.02) {
		mYTranslate -= 0.002;
		
		if (mYTranslate < 0.15) {
			if (mXScale < (0.1 * 0.3)) {
				mXScale += 0.00025;
			}
			else {
				mXScale = 0.1 * 0.3;
			}
			if (mYScale < (0.25 / 3) * 0.5) {
				mYScale += 0.00025;
			}
			else {
				mYScale = (0.25 / 3) * 0.5;
			}
		}
	}
	else {
		mYTranslate = -0.02;
		if (mXScale < (0.1 * 0.3)) {
			mXScale += 0.00025;
		}
		else {
			mXScale = 0.1 * 0.3;
			
			bMHasReached = true;
		}
		if (mYScale < (0.25 / 3) * 0.5) {
			mYScale += 0.00025;
		}
		else {
			mYScale = (0.25 / 3) * 0.5;
		}
	}
	
	gl.useProgram(null);
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// ***** A *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-2.5, -1.02, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [3.4, 1.4, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.2, 0.1, -5.89]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.17 + 0.1, 0.0, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.17 + 0.1 - 0.013, aYTranslate, -5.89]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [(0.1 * 0.3), (0.25 / 3) * 0.5, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 1.3, (0.25 / 3) * 1.3, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [aXScale, aYScale, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var A_Vertices = new Float32Array([
		0.28 , 0.2 , 0.0,
		0.24 , 0.2 , 0.0,
		0.16 , -0.2 , 0.0,
		0.2 , -0.2 , 0.0,
		
		0.22, -0.167, 0.0,
		0.145, -0.167, 0.0,
		0.145, -0.2, 0.0,
		0.22, -0.2, 0.0,

		0.28 , 0.2 , 0.0,
		0.24 , 0.2 , 0.0,
		0.36 , -0.2 , 0.0,
		0.40 , -0.2 , 0.0,
		
		0.416, -0.167, 0.0,
		0.338, -0.167, 0.0,
		0.338, -0.2, 0.0,
		0.416, -0.2, 0.0,

		0.297 , 0.02 , 0.0, 
		0.241 , 0.02 , 0.0,
		0.223 , -0.05 , 0.0,
		0.324 , -0.05, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, A_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
	//gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
	
	gl.bindVertexArray(null);	
	
	//  && mXScale == 0.1 * 0.3
	if (aYTranslate > 0.0) {
		aYTranslate -= 0.002;
		
		if (aYTranslate < 0.2) {
			if (aXScale < (0.1 * 1.3)) {
				aXScale += 0.00025 * 5.0;
			}
			else {
				aXScale = 0.1 * 1.3;
			}
			if (aYScale < (0.25 / 3) * 1.3) {
				aYScale += 0.00025 * 5.0;
			}
			else {
				aYScale = (0.25 / 3) * 1.3;
			}
		}
	}
	else {
		aYTranslate = 0.0;
		
		if (aXScale < (0.1 * 1.3)) {
			aXScale += 0.00025 * 5.0;
		}
		else {
			aXScale = 0.1 * 1.3;
		}
		if (aYScale < (0.25 / 3) * 1.3) {
			aYScale += 0.00025 * 5.0;
		}
		else {
			aYScale = (0.25 / 3) * 1.3;
		}
	}
	
	// ***** T *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.5, -1.3, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.55, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.08 + 0.1, -0.024, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.08 + 0.1 - 0.013, tYTranslate, -5.89]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.3, (0.25 / 3) * 0.52, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [tXScale, tYScale, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var T_Vertices = new Float32Array([
		0.9 , 1.0 , 0.0,
		-0.9 , 1.0 , 0.0,
		-0.9 , 0.8 , 0.0,
		0.9 , 0.8 , 0.0,
		
		0.9, 1.05, 0.0,
		0.75, 1.05, 0.0,
		0.75, 0.75, 0.0,
		0.9, 0.75, 0.0,
		
		-0.9, 1.05, 0.0,
		-0.75, 1.05, 0.0,
		-0.75, 0.75, 0.0,
		-0.9, 0.75, 0.0,
		
		0.125, 1.0, 0.0,
		-0.125, 1.0, 0.0,
		-0.125, 0.0, 0.0,
		0.125, 0.0, 0.0,
		
		0.22, 0.08, 0.0,
		-0.22, 0.08, 0.0,
		-0.22, 0.0, 0.0,
		0.22, 0.0, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, T_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
	//gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
	
	gl.bindVertexArray(null);	
	
	if (tYTranslate > -0.024) {
		tYTranslate -= 0.002;
		
		if (tYTranslate < 0.2) {
			if (tXScale < (0.1 * 0.3)) {
				tXScale += 0.00025 * 2.5;
			}
			else {
				tXScale = 0.1 * 0.3;
			}
			if (tYScale < (0.25 / 3) * 0.52) {
				tYScale += 0.00025 * 2.5;
			}
			else {
				tYScale = (0.25 / 3) * 0.52;
			}
		}
	}
	else {
		tYTranslate = -0.024;
		
		if (tXScale < (0.1 * 0.3)) {
			tXScale += 0.00025 * 2.5;
		}
		else {
			tXScale = 0.1 * 0.3;
		}
		if (tYScale < (0.25 / 3) * 0.52) {
			tYScale += 0.00025 * 2.5;
		}
		else {
			tYScale = (0.25 / 3) * 0.52;
		}
	}
	
	// ***** R *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [2.2 - 1.8, -1.3, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.7, 0.6, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.315 + 0.2778 + 0.1 - 0.013, -0.02, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.315 + 0.2778 + 0.1 - 0.013, rYTranslate, -5.89]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.8 * 0.27, (0.25 / 3) * 0.8 * 0.28, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var R_Vertices = new Float32Array([
		0.125, 1.0, 0.0,
		-0.125, 1.0, 0.0,
		-0.125, 0.0, 0.0,
		0.125, 0.0, 0.0,
		
		0.22, 0.08, 0.0,
		-0.22, 0.08, 0.0,
		-0.22, 0.0, 0.0,
		0.22, 0.0, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, R_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	
	gl.bindVertexArray(null);
	
	// ***** GREEN COLORED SEMICIRCLE *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [2.28 - 1.8, -0.88, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.15, 0.06, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.32 + 0.28 + 0.1 - 0.013, 0.01, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.32 + 0.28 + 0.1 - 0.013, rYTranslate + 0.03, -5.89]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.3 * 0.6 * 0.32, (0.25 / 3) * 0.3 * 0.6 * 0.32, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.rotateZ(modelViewMatrix, modelViewMatrix, -1.0 * Math.PI / 2);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var GCircle_Vertices = new Float32Array(1600);
	
	for (var i = 0, j = 0; i < 500; i++, j += 3) {
		var angle = Math.PI * i / 500;
		
		GCircle_Vertices[j] = 3.0 * Math.cos(angle);
		GCircle_Vertices[j + 1] = 3.0 * Math.sin(angle);
		GCircle_Vertices[j + 2] = 0.0;
	}

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, GCircle_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 499);
	
	gl.bindVertexArray(null);
	
	// ***** BLACK COLORED SEMICIRCLE *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	gl.uniform1i(makeBlackUniform, 1);
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [2.22 - 1.8, -0.86, -4.9]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.1, 0.04, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.318 + 0.28 + 0.1, 0.01, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.318 + 0.28 + 0.1 - 0.013, rYTranslate + 0.03, -5.89]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.3 * 0.4 * 0.32, (0.25 / 3) * 0.3 * 0.4 * 0.32, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.4, 0.4, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.rotateZ(modelViewMatrix, modelViewMatrix, -1.0 * Math.PI / 2);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, GCircle_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 499);
	gl.bindVertexArray(null);
	
	gl.uniform1i(makeBlackUniform, 0);
	
	// ***** R(Slant Line) ****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [2.69 - 1.8, -1.27, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.7, 0.36, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [-0.285 + 0.26 + 0.1, -0.018, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.285 + 0.26 + 0.1 - 0.013, rYTranslate + 0.002, -5.89]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.7 * 0.27, (0.25 / 3) * 0.8 * 0.28, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.rotateZ(modelViewMatrix, modelViewMatrix, Math.PI / 4.3);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var R_Vertices = new Float32Array([
		0.125, 1.0, 0.0,
		-0.125, 1.0, 0.0,
		-0.125, 0.0, 0.0,
		0.125, 0.0, 0.0,
		
		0.18, 0.11, 0.0,
		-0.18, 0.11, 0.0,
		-0.18, 0.0, 0.0,
		0.18, 0.0, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, R_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	
	gl.bindVertexArray(null);
	
	if (rYTranslate > -0.02) {
		rYTranslate -= 0.002;
	}
	else {
		rYTranslate = -0.02;
	}
	
	
	// ***** I *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [1.3, -1.3, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.7, 0.57, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [0.01 - 0.008 + 0.1, -0.023, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [0.01 - 0.008 + 0.1 - 0.013, iYTranslate, -5.89]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.5, (0.25 / 3) * 0.574, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [iXScale, iYScale, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var I_Vertices = new Float32Array([
		0.125, 1.0, 0.0,
		-0.125, 1.0, 0.0,
		-0.125, 0.0, 0.0,
		0.125, 0.0, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, I_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	if (iYTranslate > -0.023) {
		iYTranslate -= 0.002;
		
		if (iYTranslate < 0.2) {
			if (iXScale < (0.1 * 0.5)) {
				iXScale += 0.00025 * 2.5;
			}
			else {
				iXScale = 0.1 * 0.5;
			}
			if (iYScale < (0.25 / 3) * 0.574) {
				iYScale += 0.00025 * 2.5;
			}
			else {
				iYScale = (0.25 / 3) * 0.574;
			}
		}
	}
	else {
		iYTranslate = -0.023;
		
		if (iXScale < (0.1 * 0.5)) {
			iXScale += 0.00025 * 2.5;
		}
		else {
			iXScale = 0.1 * 0.5;
		}
		if (iYScale < (0.25 / 3) * 0.574) {
			iYScale += 0.00025 * 2.5;
		}
		else {
			iYScale = (0.25 / 3) * 0.574;
		}
	}
	
	// ***** X *****
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	//mat4.translate(modelViewMatrix, modelViewMatrix, [2.2, -1.0, -5.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.5, 0.25, 0.0]);
	//mat4.translate(modelViewMatrix, modelViewMatrix, [0.05 + 0.1, 0.0, -5.89]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [0.05 + 0.1 - 0.013, xYTranslate, -5.89]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.1 * 0.25, (0.25 / 3) * 0.25, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xXScale, xYScale, 0.0]);
	//mat4.scale(modelViewMatrix, modelViewMatrix, [0.6, 0.5, 0.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var X_Vertices = new Float32Array([
		1.0, 1.0, 0.0,
		0.65, 1.0, 0.0,
		-1.0, -1.0, 0.0,
		-0.65, -1.0, 0.0,
		
		1.15, 1.1, 0.0,
		0.5, 1.1, 0.0,
		0.5, 0.9, 0.0,
		1.15, 0.9, 0.0,
		
		-1.15, 1.1, 0.0,
		-0.5, 1.1, 0.0,
		-0.5, 0.9, 0.0,
		-1.15, 0.9, 0.0,
		
		-1.0, 1.0, 0.0,
		-0.65, 1.0, 0.0,
		1.0, -1.0, 0.0,
		0.65, -1.0, 0.0,
		
		-1.15, -0.9, 0.0,
		-0.5, -0.9, 0.0,
		-0.5, -1.1, 0.0,
		-1.15, -1.1, 0.0,
		
		1.15, -0.9, 0.0,
		0.5, -0.9, 0.0,
		0.5, -1.1, 0.0,
		1.15, -1.1, 0.0,
	]);

	gl.bindVertexArray(vao_matrix);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_position);
	gl.bufferData(gl.ARRAY_BUFFER, X_Vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_matrix_color);
	gl.bufferData(gl.ARRAY_BUFFER, Color, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 8, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 12, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 16, 4);
	gl.drawArrays(gl.TRIANGLE_FAN, 20, 4);
	
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (xYTranslate > 0.0) {
		xYTranslate -= 0.002;
		
		if (xYTranslate < 0.2) {
			if (xXScale < (0.1 * 0.25)) {
				xXScale += 0.00025 * 2.5;
			}
			else {
				xXScale = 0.1 * 0.25;
			}
			if (xYScale < (0.25 / 3) * 0.25) {
				xYScale += 0.00025 * 2.5;
			}
			else {
				xYScale = (0.25 / 3) * 0.25;
			}
		}
	}
	else {
		xYTranslate = 0.0;
		
		if (xXScale < (0.1 * 0.25)) {
			xXScale += 0.00025 * 2.5;
		}
		else {
			xXScale = 0.1 * 0.25;
		}
		if (xYScale < (0.25 / 3) * 0.25) {
			xYScale += 0.00025 * 2.5;
		}
		else {
			xYScale = (0.25 / 3) * 0.25;
		}
	}
}

function getComputerOnScreen() {
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	// code	
	mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, framebufferQuadYTranslate - 0.05, -6.0]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]); //[0.0, 0.0, -6.5]
	mat4.scale(modelViewMatrix, modelViewMatrix, [1.0, 1.0, 0.0]);
	mat4.multiply(viewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, viewMatrix);
	gl.uniformMatrix4fv(mvpTextureUniform, false, modelViewProjectionMatrix);

	gl.bindTexture(gl.TEXTURE_2D, texComputer);
	gl.uniform1i(samplerTextureUniform, 0);

	gl.bindVertexArray(vao_computer);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	
	gl.bindTexture(gl.TEXTURE_2D, null);
	
	if (lookAtZ > -3.5) {
		lookAtZ -= 0.04;
		
		if (lookAtY > 0.0) {
			lookAtY -= 0.02;
		}
	}
	else {
		if (!bStartMatrixAnimation) {
			lookAtZ = -3.5;
			bStartMatrixAnimation = true;
			console.log("bStartMatrixAnimation = true;");
		}
	}
	
	if (countOfReappearance >= 1) {
		if (lookAtZ > -5.53) {
			lookAtZ -= 0.04;
			
			if (framebufferQuadYTranslate < -0.25) {
				framebufferQuadYTranslate += 0.01;
			}
			
			/*if (centerY > -0.1) {
				centerY -= -0.01;
			}*/
		}
		else {
			lookAtZ = -5.53;
		}
		
		//console.log("lookAtZ: " + lookAtZ);
	}
}

function makeRoomLightsBlink() {
	// Declaration of matrics
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	// code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -1.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [2.0, 2.0, 1.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	var back_vertices = new Float32Array([
		1.0, 1.0, -1.0,
		-1.0, 1.0, -1.0,
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0
	]);
	
	var back_color = new Float32Array(12);
	
	for (var i = 0; i < back_color.length; i++) {
		back_color[i] = makeQuadBlackOrWhite;
	}
	
	var back_normals = new Float32Array([
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
	]);
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	gl.useProgram(null);
	
	if (makeQuadBlackOrWhite <= 1.0 && bQuadBlack == false) {
		//makeQuadBlackOrWhite += 0.5;
		makeQuadBlackOrWhite += 0.3;
		bQuadBlack = false;
	}
	else {
		//makeQuadBlackOrWhite -= 0.5;
		makeQuadBlackOrWhite -= 0.3;
		bQuadBlack = true;
		if (makeQuadBlackOrWhite <= 0.0) {
			bQuadBlack = false;
		}
		
		blinkCount++;
	}
}

function makeARoom() {
	// Declaration of matrices
	var modelMatrix = mat4.create();
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var projectionMatrix = mat4.create();
	
	// code
	//gl.useProgram(lightShaderProgramObject);
	gl.useProgram(Matrix_ShaderProgramObject);
	
	//mat4.translate(modelMatrix, modelMatrix, [0.0, 0.0, -0]);
	mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -6.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [19.0, 19.0, 19.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);
	
	/*gl.uniformMatrix4fv(modelMatrixUniform, false, modelMatrix);
	gl.uniformMatrix4fv(viewMatrixUniform, false, viewMatrix);
	gl.uniformMatrix4fv(projectionMatrixUniform, false, perspectiveProjectionMatrix);*/
	
	/*if (bLighting) {
		gl.uniform1i(lKeyIsPressedUniform, 1);

		gl.uniform3fv(laUniform, lightAmbient);
		gl.uniform3fv(ldUniform, lightDiffuse);
		gl.uniform3fv(lsUniform, lightSpecular);
		gl.uniform4fv(lightPositionUniform, lightPosition);

		gl.uniform3fv(kaUniform, materialAmbient);
		gl.uniform3fv(kdUniform, materialDiffuse);
		gl.uniform3fv(ksUniform, materialSpecular);
		gl.uniform1f(materialShininessUniform, materialShininess);
	}
	else {
		gl.uniform1i(lKeyIsPressedUniform, 0);
	}*/
	
	var back_vertices = new Float32Array([
		1.0, 1.0, -1.0,
		-1.0, 1.0, -1.0,
		-1.0, -1.0, -1.0,
		1.0, -1.0, -1.0
	]);
	
	var back_color = new Float32Array([
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
		1.0, 1.0, 1.0,
	]);
	
	var back_normals = new Float32Array([
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
		0.0, 0.0, 1.0,
	]);
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	// Left Face
	back_vertices[0] = -1.0;
	back_vertices[1] = 1.0;
	back_vertices[2] = -1.0;
	back_vertices[3] = -1.0;
	back_vertices[4] = 1.0;
	back_vertices[5] = 1.0;
	back_vertices[6] = -1.0;
	back_vertices[7] = -1.0;
	back_vertices[8] = 1.0;
	back_vertices[9] = -1.0;
	back_vertices[10] = -1.0;
	back_vertices[11] = -1.0;
	
	back_normals[0] = 1.0;
	back_normals[1] = 0.0;
	back_normals[2] = 0.0;
	back_normals[3] = 1.0;
	back_normals[4] = 0.0;
	back_normals[5] = 0.0;
	back_normals[6] = 1.0;
	back_normals[7] = 0.0;
	back_normals[8] = 0.0;
	back_normals[9] = 1.0;
	back_normals[10] = 0.0;
	back_normals[11] = 0.0;
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	// Right Face
	back_vertices[0] = 1.0;
	back_vertices[1] = 1.0;
	back_vertices[2] = -1.0;
	back_vertices[3] = 1.0;
	back_vertices[4] = 1.0;
	back_vertices[5] = 1.0;
	back_vertices[6] = 1.0;
	back_vertices[7] = -1.0;
	back_vertices[8] = 1.0;
	back_vertices[9] = 1.0;
	back_vertices[10] = -1.0;
	back_vertices[11] = -1.0;
	
	back_normals[0] = -1.0;
	back_normals[1] = 0.0;
	back_normals[2] = 0.0;
	back_normals[3] = -1.0;
	back_normals[4] = 0.0;
	back_normals[5] = 0.0;
	back_normals[6] = -1.0;
	back_normals[7] = 0.0;
	back_normals[8] = 0.0;
	back_normals[9] = -1.0;
	back_normals[10] = 0.0;
	back_normals[11] = 0.0;
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	// Top Face
	back_vertices[0] = 1.0;
	back_vertices[1] = 1.0;
	back_vertices[2] = -1.0;
	back_vertices[3] = -1.0;
	back_vertices[4] = 1.0;
	back_vertices[5] = -1.0;
	back_vertices[6] = -1.0;
	back_vertices[7] = 1.0;
	back_vertices[8] = 1.0;
	back_vertices[9] = 1.0;
	back_vertices[10] = 1.0;
	back_vertices[11] = 1.0;
	
	back_normals[0] = 0.0;
	back_normals[1] = -1.0;
	back_normals[2] = 0.0;
	back_normals[3] = 0.0;
	back_normals[4] = -1.0;
	back_normals[5] = 0.0;
	back_normals[6] = 0.0;
	back_normals[7] = -1.0;
	back_normals[8] = 0.0;
	back_normals[9] = 0.0;
	back_normals[10] = -1.0;
	back_normals[11] = 0.0;
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	// Bottom Face
	back_vertices[0] = 1.0;
	back_vertices[1] = -1.0;
	back_vertices[2] = -1.0;
	back_vertices[3] = -1.0;
	back_vertices[4] = -1.0;
	back_vertices[5] = -1.0;
	back_vertices[6] = -1.0;
	back_vertices[7] = -1.0;
	back_vertices[8] = 1.0;
	back_vertices[9] = 1.0;
	back_vertices[10] = -1.0;
	back_vertices[11] = 1.0;
	
	back_normals[0] = 0.0;
	back_normals[1] = 1.0;
	back_normals[2] = 0.0;
	back_normals[3] = 0.0;
	back_normals[4] = 1.0;
	back_normals[5] = 0.0;
	back_normals[6] = 0.0;
	back_normals[7] = 1.0;
	back_normals[8] = 0.0;
	back_normals[9] = 0.0;
	back_normals[10] = 1.0;
	back_normals[11] = 0.0;
	
	gl.bindVertexArray(vao_room);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_position);
	gl.bufferData(gl.ARRAY_BUFFER, back_vertices, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_color);
	gl.bufferData(gl.ARRAY_BUFFER, back_color, gl.DYNAMIC_DRAW);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_room_normal);
	gl.bufferData(gl.ARRAY_BUFFER, back_normals, gl.DYNAMIC_DRAW);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
}

function makeMatrixStop() {
	// code
	if (countOfReappearance > 2) {
		IsFirstColumnReady = false;
		IsSecondColumnReady = false;
		IsThirdColumnReady = false;
		IsFourthColumnReady = false;
		IsFifthColumnReady = false;
		IsSixthColumnReady = false;
		IsSeventhColumnReady = false;
		IsEighthColumnReady = false;
		
		for (var i = 0; i < G.length; i++) {
			G[i] = 0.0;
		}
		
		for (var i = 0; i < G2.length; i++) {
			G2[i] = 0.0;
		}
		
		for (var i = 0; i < G3.length; i++) {
			G3[i] = 0.0;
		}
		
		for (var i = 0; i < G4.length; i++) {
			G4[i] = 0.0;
		}
		
		for (var i = 0; i < G5.length; i++) {
			G5[i] = 0.0;
		}
		
		for (var i = 0; i < G6.length; i++) {
			G6[i] = 0.0;
		}
		
		for (var i = 0; i < G7.length; i++) {
			G7[i] = 0.0;
		}
		
		for (var i = 0; i < G8.length; i++) {
			G8[i] = 0.0;
		}
		
		bMatrixHasDisappeared = true;
	} 
}

function Matrix_Uninitialize() {
	// code
	if (vbo_framebuffer_position) {
		gl.deleteBuffer(vbo_framebuffer_position);
		vbo_framebuffer_position = null;
	}
	
	if (vbo_framebuffer_texcoord) {
		gl.deleteBuffer(vbo_framebuffer_texcoord);
		vbo_framebuffer_texcoord = null;
	}
	
	if (vao_framebuffer_quad) {
		gl.deleteVertexArray(vao_framebuffer_quad);
		vao_framebuffer_quad = null;
	}
	
	if (vbo_texcoord_computer) {
		gl.deleteBuffer(vbo_texcoord_computer);
		vbo_texcoord_computer = null;
	}
	
	if (vbo_position_computer) {
		gl.deleteBuffer(vbo_position_computer);
		vbo_position_computer = null;
	}
	
	if (vao_computer) {
		gl.deleteVertexArray(vao_computer);
		vao_computer = null;
	}
	
	if (vbo_color) {
		gl.deleteBuffer(vbo_color);
		vbo_color = null;
	}
	
	if (vbo) {
		gl.deleteBuffer(vbo);
		vbo = null;
	}
	
	if (vao) {
		gl.deleteVertexArray(vao);
		vao = null;
	}
	
	if (textureShaderProgramObject) {
		if (fragmentShaderObject) {
			gl.detachShader(textureShaderProgramObject, fragmentShaderObject);
			gl.deleteShader(fragmentShaderObject);
			fragmentShaderObject = null;
		}
		
		if (vertexShaderObject) {
			gl.detachShader(textureShaderProgramObject, vertexShaderObject);
			gl.deleteShader(vertexShaderObject);
			vertexShaderObject = null;
		}
		
		gl.deleteProgram(textureShaderProgramObject);
		textureShaderProgramObject = null;
	}
	
	if (Matrix_ShaderProgramObject) {
		if (fragmentShaderObject) {
			gl.detachShader(Matrix_ShaderProgramObject, fragmentShaderObject);
			gl.deleteShader(fragmentShaderObject);
			fragmentShaderObject = null;
		}
		
		if (vertexShaderObject) {
			gl.detachShader(Matrix_ShaderProgramObject, vertexShaderObject);
			gl.deleteShader(vertexShaderObject);
			vertexShaderObject = null;
		}
		
		gl.deleteProgram(Matrix_ShaderProgramObject);
		Matrix_ShaderProgramObject = null;
	}
}
