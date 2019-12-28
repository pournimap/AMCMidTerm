// global variables for this scene
var vertexShaderObject_paper;
var fragmentShaderObject_paper;
var shaderProgramObject_paper;

var vertexShaderObject_paper2;
var fragmentShaderObject_paper2;
var shaderProgramObject_paper2;

var vao_paper;
var vao_paper2;
var vao_cursor;

var vbo_position;
var vbo_color;
var vbo_texture;

var mUniform;
var vUniform;
var pUniform;

var mUniform2;
var vUniform2;
var pUniform2;

var Paper_texture1 	= 0;
var Paper_texture2 	= 0;

var uniform_texture0_sampler;

var FirstQuad 	= -0.55;
var SecondQuad 	= -0.1;

var cursor_X = 2.0;
var cursor_Y = -1.0;

var show_link 	= 0;
// function for loading texture
function load_texture(image_name)
{
	var Paper_texture = gl.createTexture();
	Paper_texture.image = new Image();
	Paper_texture.image.src = image_name;

	Paper_texture.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Paper_texture.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}

	return(Paper_texture);
}

function paper_init()
{
	// 1st shader combo part
	
	var vertexShaderSourceCode=
	"#version 300 es" +
	"\n" +
	"in vec4 vPosition;" +
	"in vec2 vTexture0_Coord;" +

	"out vec2 out_texture0_coord;" +


	"uniform mat4 u_m_matrix;" +
	"uniform mat4 u_v_matrix;" +
	"uniform mat4 u_p_matrix;" +

	"void main(void)" +
	"{" +
		"gl_Position 		= u_p_matrix * u_v_matrix * u_m_matrix *  vPosition;" +
		"out_texture0_coord = vTexture0_Coord;" +
	"}";

	vertexShaderObject_paper = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShaderObject_paper, vertexShaderSourceCode);
	gl.compileShader(vertexShaderObject_paper);
	if(gl.getShaderParameter(vertexShaderObject_paper, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(vertexShaderObject_paper);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}


	var fragmentShaderSourceCode=
	"#version 300 es" +
	"\n" +
	"precision highp float;" +

	"in vec2 out_texture0_coord;" +

	"uniform highp sampler2D u_texture0_sampler;" +
	
	"out vec4 FragColor;" +

	"void main(void)" +
	"{" +
		"vec4 temp_color;" +
		"temp_color = texture(u_texture0_sampler, out_texture0_coord);" +
		"FragColor = temp_color;"+
	"}";

	fragmentShaderObject_paper = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShaderObject_paper, fragmentShaderSourceCode);
	gl.compileShader(fragmentShaderObject_paper);
	if(gl.getShaderParameter(fragmentShaderObject_paper, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(fragmentShaderObject_paper);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}


	shaderProgramObject_paper = gl.createProgram();
	gl.attachShader(shaderProgramObject_paper, vertexShaderObject_paper);
	gl.attachShader(shaderProgramObject_paper, fragmentShaderObject_paper);

	gl.bindAttribLocation(shaderProgramObject_paper, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(shaderProgramObject_paper, WebGLMacros.AMC_ATTRIBUTE_TEXTURE,"vTexture0_Coord");

	gl.linkProgram(shaderProgramObject_paper);
	if(!gl.getProgramParameter(shaderProgramObject_paper, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(shaderProgramObject_paper);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}

	mUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_m_matrix");
	vUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_v_matrix");
	pUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_p_matrix");
	uniform_texture0_sampler 	= gl.getUniformLocation(shaderProgramObject_paper, "u_texture0_sampler");

	
	// 2nd shader combo part
	
	var vertexShaderSourceCode2=
	"#version 300 es" +
	"\n" +
	"precision highp float;" +
	"in vec4 vPosition;" +
	"in vec4 vColor;" +

	"uniform mat4 u_m_matrix;" +
	"uniform mat4 u_v_matrix;" +
	"uniform mat4 u_p_matrix;" +

	"out vec4 out_color;" +

	"void main(void)" +
	"{" +
		"gl_Position 		= u_p_matrix * u_v_matrix * u_m_matrix *  vPosition;" +
		"out_color 			= vColor;" +
	"}";

	vertexShaderObject_paper2 = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShaderObject_paper2, vertexShaderSourceCode2);
	gl.compileShader(vertexShaderObject_paper2);
	if(gl.getShaderParameter(vertexShaderObject_paper2, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(vertexShaderObject_paper2);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}


	var fragmentShaderSourceCode2=
	"#version 300 es" +
	"\n" +
	"precision highp float;" +
	"in vec4 out_color;" +
	
	"out vec4 FragColor;" +

	"void main(void)" +
	"{" +
		"FragColor = out_color;"+
	"}";

	fragmentShaderObject_paper2 = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShaderObject_paper2, fragmentShaderSourceCode2);
	gl.compileShader(fragmentShaderObject_paper2);
	if(gl.getShaderParameter(fragmentShaderObject_paper2, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(fragmentShaderObject_paper2);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}


	shaderProgramObject_paper2 = gl.createProgram();
	gl.attachShader(shaderProgramObject_paper2, vertexShaderObject_paper2);
	gl.attachShader(shaderProgramObject_paper2, fragmentShaderObject_paper2);

	gl.bindAttribLocation(shaderProgramObject_paper2, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(shaderProgramObject_paper2, WebGLMacros.AMC_ATTRIBUTE_COLOR, "vColor");

	gl.linkProgram(shaderProgramObject_paper2);
	if(!gl.getProgramParameter(shaderProgramObject_paper2, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(shaderProgramObject_paper2);
		if(error.length > 0)
		{
			alert(error);
			unititialize();
		}
	}

	mUniform2 					= gl.getUniformLocation(shaderProgramObject_paper2, "u_m_matrix");
	vUniform2 					= gl.getUniformLocation(shaderProgramObject_paper2, "u_v_matrix");
	pUniform2 					= gl.getUniformLocation(shaderProgramObject_paper2, "u_p_matrix");

	// texture loading part
	Paper_texture1 = load_texture("Wakeup.png");
	Paper_texture2 = load_texture("WakeupLink.png");


// vao vbo

// 1st paper
	var quadVertices = new Float32Array
	([
		 2.5, 1.5, 0.0,
		-2.5, 1.5, 0.0,
		-2.5,-1.5, 0.0,
		 2.5,-1.5, 0.0
	]);

	var quadTexcoords = new Float32Array
	([
 		1.0,0.0,
		0.0,0.0,
		0.0,1.0,
		1.0,1.0
	]);

	vao_paper = gl.createVertexArray();
	gl.bindVertexArray(vao_paper);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	vbo_texture = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
	gl.bufferData(gl.ARRAY_BUFFER, quadTexcoords, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);
	
// 2nd paper
	quadVertices = new Float32Array
	([
		 1.2,  0.1, 0.00,
		-1.2,  0.1, 0.00,
		-1.2, -0.1, 0.00,
		 1.2, -0.1, 0.00		 
	]);

	quadColor = new Float32Array
	([
 		0.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0
	]);

	vao_paper2 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper2);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	vbo_color = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);

// 3rd paper
	quadVertices = new Float32Array
	([
		 0.00, 0.05, 0.00,
		-0.03, 0.0, 0.00,
		 0.03, 0.0, 0.00,
		 0.00, 0.05, 0.00,
		
		-0.01, 0.0, 0.00,
		-0.01,-0.02, 0.00,
		 0.01,-0.02, 0.00,
		 0.01, 0.0, 0.00,
	]);

	quadColor = new Float32Array
	([
 		1.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0,
		1.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0,
		0.0,0.0,0.0
	]);

	vao_cursor = gl.createVertexArray();
	gl.bindVertexArray(vao_cursor);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	vbo_color = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, quadColor, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);

	
// other initialization task

	gl.clearColor(0.0, 0.0, 0.0, 1.0);	
	
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	//gl.enable(gl.CULL_FACE);					// if this is enable, texture will not get applied on backside (inside)

	perspectiveProjectionMatrix = mat4.create();
}

function paper_draw()
{	
	var modelMatrix				= mat4.create();
	var rotateMatrix			= mat4.create();
	var viewMatrix				= mat4.create();
	var projectionMatrix		= mat4.create();

  // shader program 1
	gl.useProgram(shaderProgramObject_paper);

	mat4.identity(modelMatrix);
	
	mat4.translate(modelMatrix, modelMatrix, [-0.5, 0.0, -3.0]);
	
	projectionMatrix = perspectiveProjectionMatrix;

	gl.uniformMatrix4fv(mUniform, false, modelMatrix);
	gl.uniformMatrix4fv(vUniform, false, viewMatrix);
	gl.uniformMatrix4fv(pUniform, false, projectionMatrix);

	// paper 1
	if(show_link == 0)
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture1);
	}	
	else
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture2);
	}	

	gl.uniform1i(uniform_texture0_sampler, 0);
	gl.bindVertexArray(vao_paper);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	gl.useProgram(null);

 	if(show_link == 0)
 	{
		// shader program object 2
		gl.useProgram(shaderProgramObject_paper2);

		// 1st quad
		mat4.identity(modelMatrix);
		mat4.translate(modelMatrix, modelMatrix, [FirstQuad, 0.41, -2.0]);

		gl.uniformMatrix4fv(mUniform2, false, modelMatrix);
		gl.uniformMatrix4fv(vUniform2, false, viewMatrix);
		gl.uniformMatrix4fv(pUniform2, false, projectionMatrix);

		gl.bindVertexArray(vao_paper2);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.bindVertexArray(null);

		// 2nd quad
		mat4.identity(modelMatrix);
		mat4.translate(modelMatrix, modelMatrix, [SecondQuad, 0.2, -2.0]);

		gl.uniformMatrix4fv(mUniform2, false, modelMatrix);
		gl.uniformMatrix4fv(vUniform2, false, viewMatrix);
		gl.uniformMatrix4fv(pUniform2, false, projectionMatrix);

		gl.bindVertexArray(vao_paper2);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.bindVertexArray(null);

		

		gl.useProgram(null);
	}
	gl.useProgram(shaderProgramObject_paper2);
	// cursor
	if(show_link == 1)
	{
		mat4.identity(modelMatrix);
		mat4.identity(rotateMatrix);
		mat4.translate(modelMatrix, modelMatrix, [cursor_X, cursor_Y, -2.0]);
		mat4.rotateZ(modelMatrix,modelMatrix,degToRad(45.0));

		gl.uniformMatrix4fv(mUniform2, false, modelMatrix);
		gl.uniformMatrix4fv(vUniform2, false, viewMatrix);
		gl.uniformMatrix4fv(pUniform2, false, projectionMatrix);

		gl.bindVertexArray(vao_cursor);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.drawArrays(gl.TRIANGLE_FAN, 4, 4);
		gl.bindVertexArray(null);
	}
	gl.useProgram(null);	
	paper_update();
	
}
var FirstQuad_done = 0;

function paper_update()
{
	if(FirstQuad < 0.5 && FirstQuad_done == 0)
	{
		FirstQuad = FirstQuad + 0.01;
		FirstQuad_done = 0;
	}
	else
	{
		FirstQuad_done = 1;
	}
	if(FirstQuad_done == 1 &&  SecondQuad < 3.1)
	{
		SecondQuad = SecondQuad + 0.01;
	}
	if(SecondQuad >= 3.0)
	{
		show_link = 1;
	}
	if(show_link == 1)
	{
		if(cursor_X >= 0.0)
		{
			cursor_X = cursor_X - 0.005;
		}
		if(cursor_Y <= 0.3)
		{
			cursor_Y = cursor_Y + 0.005;
		}
	}
}


function paper_unititialize()
{
// paper_texture
	if(Paper_texture1)
	{
		gl.deleteTexture(Paper_texture1);
		Paper_texture1 = 0;
	}

	if(Paper_texture2)
	{
		gl.deleteTexture(Paper_texture2);
		Paper_texture2 = 0;
	}

// vao
	if(vao_paper1)
	{
		gl.deleteVertexArray(vao_paper1);
		vao_paper1 = null;
	}

	if(vao_paper2)
	{
		gl.deleteVertexArray(vao_paper2);
		vao_paper2 = null;
	}

// vbo
	if(vbo_position)
	{
		gl.deleteBuffer(vbo_position);
		vbo_position = null;
	}

	if(vbo_texture)
	{
		gl.deleteBuffer(vbo_texture);
		vbo_texture = null;
	}

// shader programs
	if(shaderProgramObject_paper)
	{
		if(fragmentShaderObject_paper)
		{
			gl.detachShader(shaderProgramObject_paper, fragmentShaderObject_paper);
			gl.deleteShader(fragmentShaderObject_paper);
			fragmentShaderObject_paper = null;
		}

		if(vertexShaderObject_paper)
		{
			gl.detachShader(shaderProgramObject_paper, vertexShaderObject_paper);
			gl.deleteShader(vertexShaderObject_paper);
			vertexShaderObject_paper = null;
		}

		gl.delteProgram(shaderProgramObject_paper);
		shaderProgramObject_paper = null;
	}

	if(shaderProgramObject_paper2)
	{
		if(fragmentShaderObject_paper2)
		{
			gl.detachShader(shaderProgramObject_paper2, fragmentShaderObject_paper2);
			gl.deleteShader(fragmentShaderObject_paper2);
			fragmentShaderObject_paper2 = null;
		}

		if(vertexShaderObject_paper2)
		{
			gl.detachShader(shaderProgramObject_paper2, vertexShaderObject_paper2);
			gl.deleteShader(vertexShaderObject_paper2);
			vertexShaderObject_paper2 = null;
		}

		gl.delteProgram(shaderProgramObject_paper2);
		shaderProgramObject_paper2 = null;
	}
}


function degToRad(degrees)
{
	return(degrees * Math.PI / 180);
}
