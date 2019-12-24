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

var fbo;
var color_texture;
var depth_texture;

var lookAtZ = 0.0;
var texComputer;

var mvpUniform;
var Matrix_gShaderProgramObject = 0;

var vertexTextureShaderObject;
var fragmentTextureShaderObject;
var textureShaderProgramObject;

var mvpTextureUniform;
var samplerTextureUniform;

// code
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
		"void main(void)" +
		"{" +
		"FragColor = out_color;" +
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
	
	// Load  Texture
	texComputer = gl.createTexture();
	texComputer.image = new Image();
	texComputer.image.src = "Monitor.png";
	texComputer.image.onload = function() 
	{
		gl.bindTexture(gl.TEXTURE_2D, texComputer);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texComputer.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
	}
	
	// Texture Shader Program
	// vertex shader
	vertexShaderSourceCode = 
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
	fragmentShaderSourceCode = 
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
	
	// get mvpUniform location
	mvpTextureUniform = gl.getUniformLocation(textureShaderProgramObject, "u_mvp_matrix");
	samplerTextureUniform = gl.getUniformLocation(textureShaderProgramObject, "u_sampler");
	
	// ***** vertices, colors, shader attribs, vbo, vao initialization ******
	// Create vao- Vertex Array Object
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
	
	// ***** vertices, colors, shader attribs, vbo, vao initialization ******
	// Create vao- Vertex Array Object
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
	
	// ***** vertices, colors, shader attribs, vbo, vao initialization ******
	// Create vao- Vertex Array Object
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
	
	// Frame buffer
	fbo = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

	color_texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, color_texture);
	gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, 1536, 1536);

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

	depth_texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, depth_texture);
	gl.texStorage2D(gl.TEXTURE_2D, 1, gl.DEPTH_COMPONENT32F, 1536, 1536);

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, color_texture, 0);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depth_texture, 0);
	
	//static const int draw_buffers[] = new int[] { GL_COLOR_ATTACHMENT0 };
	
	//var draw_buffers = new Int32Array([gl.COLOR_ATTACHMENT0]);
	gl.drawBuffers([gl.COLOR_ATTACHMENT0]);

	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	//gl.enable(gl.TEXTURE_2D);
	
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
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// **** FRAMEBUFFER ****
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	
	gl.clearBufferfv(gl.COLOR, 0, black);
	gl.clearBufferfv(gl.DEPTH, 0, one);
	gl.viewport(0, 0, 1536, 1536);
	
	// Columns
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
	
	makeMatrixStop();
	
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
	gl.useProgram(null);
	
	// **** RENDER TO TEXTURE ****
	gl.useProgram(textureShaderProgramObject);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, color_texture);
	
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();

	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.05, -0.7, -2.9]);
	//mat4.lookAt(viewMatrix, viewMatrix, [0.0, 0.0, lookAtZ], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [2.5, 0.6, 0.0]);
	//mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	
	gl.uniform1i(samplerTextureUniform, 0);
	gl.uniformMatrix4fv(mvpTextureUniform, false, modelViewProjectionMatrix);
	
	gl.bindVertexArray(vao_framebuffer_quad)
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	
	gl.bindTexture(gl.TEXTURE_2D, null);
	
	// **** DISPLAYING COMPUTER SCREEN ****
	getComputerOnScreen();
	
	gl.useProgram(null);
	
	Matrix_Update();
}

function makeMatrixStop() {
	// code
	if (countOfReappearance == 100) {
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

function getComputerOnScreen() {
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	// code
	mat4.translate(modelViewMatrix, modelViewMatrix, [-0.2, -1.3, -5.0]);
	//mat4.lookAt(viewMatrix, viewMatrix, [0.0, 0.0, lookAtZ], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0]);
	//mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.scale(modelViewMatrix, modelViewMatrix, [5.3, 1.63, 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpTextureUniform, false, modelViewProjectionMatrix);

	gl.bindTexture(gl.TEXTURE_2D, texComputer);
	gl.uniform1i(samplerTextureUniform, 0);

	gl.bindVertexArray(vao_computer);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	
	gl.bindTexture(gl.TEXTURE_2D, null);
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
