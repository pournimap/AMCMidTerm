// Matrix Scene Global Variables
var vao;
var vbo;
var color;

var mvpUniform;
var Matrix_gShaderProgramObject = 0;

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
	
	// Fragment shader
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
	gl.bindVertexArray(null);
	
	// set clear color
	gl.clearColor(0.0, 0.0, 0.0, 1.0);	
	//gl.enable(gl.CULL_FACE);
	//gl.cullFace(gl.BACK);
	
	// initialize projection matrix
	//perspectiveProjectionMatrix = mat4.create();
}

function Matrix_Draw() {
	// code
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	gl.useProgram(Matrix_ShaderProgramObject);
	
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
	
	
	gl.useProgram(null);
	
	Matrix_Update();
}

function Matrix_Uninitialize() {
	// code
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
