// global variables for this scene
var vertexShaderObject_paper;
var fragmentShaderObject_paper;
var shaderProgramObject_paper;

var vertexShaderObject_paper2;
var fragmentShaderObject_paper2;
var shaderProgramObject_paper2;

var vao_paper;
var vao_paper2;
var vao_paper3;
var vao_paper4;

var vbo_position;
var vbo_texture;

var mUniform;
var vUniform;
var pUniform;

var mUniform2;
var vUniform2;
var pUniform2;

var Paper_texture1 	= 0;
var Paper_texture2 	= 0;
var Paper_texture3	= 0;
var Paper_texture4	= 0;

var reverse_Paper_texture1 	= 0;
var reverse_Paper_texture2 	= 0;
var reverse_Paper_texture3	= 0;
var reverse_Paper_texture4	= 0;

var uniform_texture0_sampler;
var uniform_texture0_sampler2;

var uniform_blast_value;
var blast_incr_value = 0.0;
var pre_reverse_effect_start = 0;

/*
var cameraPosition 	= [0.0, 0.0, 5.1];
var cameraCenter	= [0.0, 0.0, 0.0];
var cameraUp		= [0.0, 1.0, 0.0];
*/

// variables
var scene1_zoomout_done 				= 0;
var scene1_centerToLeft_done 			= 0;
var scene1_leftToRight_done 			= 0;
var scene1_rightToCenterToTilled_done 	= 0;
var scene2_zoom_in_done 				= 0;
var scene2_centerToRight_done 			= 0;
var scene2_rightToLeft_done				= 0;

var start_reverse		 				= 0;

var reverse_scene1_done 				= 0;
var reverse_scene1_leftToRight_done 	= 0;
var reverse_scene1_rightToCenter_done	= 0;
var revesrse_scene2_zoom_out_done 		= 0;
var reverse_centerToRight_done 			= 0;
var reverse_rightToLeft_done 			= 0;


// coordinates for camera
var cameraPosition 	= [0.0, 0.0, 5.1];
var cameraCenter	= [0.0, 0.0, 0.0];
var cameraUp		= [0.0, 1.0, 0.0];

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

	"in vec2 out_texture0_coord;" +

	"uniform highp sampler2D u_texture0_sampler;" +
	"uniform float u_blast_value;" +
	
	"out vec4 FragColor;" +

	"void main(void)" +
	"{" +
		"vec4 temp_color;" +
		
		"temp_color = texture(u_texture0_sampler, out_texture0_coord);" +
		"if(u_blast_value >= 0.05)" +
		"{" +
			"if(temp_color.r <= u_blast_value)" +
			"{" +
				"discard;" +
			"}" +
		"}" +
		"FragColor = temp_color;"+
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
	gl.bindAttribLocation(shaderProgramObject_paper2, WebGLMacros.AMC_ATTRIBUTE_TEXTURE,"vTexture0_Coord");

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
	uniform_texture0_sampler2 	= gl.getUniformLocation(shaderProgramObject_paper2, "u_texture0_sampler");
	uniform_blast_value			= gl.getUniformLocation(shaderProgramObject_paper2, "u_blast_value");


	// texture loading part
	Paper_texture1 = load_texture("resources/BharatNewsPaper/FirstTexture-02.png");
	Paper_texture2 = load_texture("resources/BharatNewsPaper/SecondTexture-01.png");
	Paper_texture3 = load_texture("resources/BharatNewsPaper/ThirdTexture-02.png");
	Paper_texture4 = load_texture("resources/BharatNewsPaper/ForthTexture-02.png");

	reverse_Paper_texture1 = load_texture("resources/BharatNewsPaper/ReverseFirstTexture-01.png");
	reverse_Paper_texture2 = load_texture("resources/BharatNewsPaper/ReverseSecondTexture-01.png");
	reverse_Paper_texture3 = load_texture("resources/BharatNewsPaper/ReverseThirdTexture.png");
	reverse_Paper_texture4 = load_texture("resources/BharatNewsPaper/ReverseForthTexture-01.png");


// vao vbo

// 1st paper
	var quadVertices = new Float32Array
	([
		 2.5, 1.5, 5.0,
		-2.5, 1.5, 5.0,
		-2.5,-1.5, 5.0,
		 2.5,-1.5, 5.0
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
		 2.5,-2.0, 3.0,
		 2.5, 2.0, 3.0,
		-2.5, 2.0, 3.0,
		-2.5,-2.0, 3.0		 
	]);

	quadTexcoords = new Float32Array
	([
		1.0,0.0,
		0.0,0.0,
		0.0,1.0,
		1.0,1.0
	]);

	vao_paper2 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper2);

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

// 3rd paper
	quadVertices = new Float32Array
	([
		 5.0, 3.0, 0.0,
		-5.0, 3.0, 0.0,
		-5.0,-3.0, 0.0,
		 5.0,-3.0, 0.0
	]);

	quadTexcoords = new Float32Array
	([
		1.0,0.0,
		0.0,0.0,
		0.0,1.0,
		1.0,1.0 
	]);

	vao_paper3 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper3);

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

// 4rth paper
	quadVertices = new Float32Array
	([
		-5.0, 3.0, -0.01,
		 5.0, 3.0, -0.01,
		 5.0,-3.0, -0.01,
		-5.0,-3.0, -0.01
	]);

	quadTexcoords = new Float32Array
	([
		1.0,0.0,
		0.0,0.0,
		0.0,1.0,
		1.0,1.0 
	]);

	vao_paper4 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper4);

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
	
// other initialization task

	gl.clearColor(0.0, 0.0, 0.0, 1.0);	
	
	//gl.enable(gl.BLEND);
	//gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	//gl.enable(gl.CULL_FACE);					// if this is enable, texture will not get applied on backside (inside)

	perspectiveProjectionMatrix = mat4.create();
}

function paper_draw()
{
	gl.enable(gl.CULL_FACE);
	
	var modelMatrix				= mat4.create();
	var rotateMatrix			= mat4.create();
	var viewMatrix				= mat4.create();
	var projectionMatrix		= mat4.create();

  // shader program 1
	gl.useProgram(shaderProgramObject_paper);

	//mat4.identity(modelMatrix);
	//mat4.identity(rotateMatrix);
	//mat4.identity(viewMatrix);
	//mat4.identity(projectionMatrix);
	
	//mat4.translate(modelMatrix, modelMatrix, [0.0, 0.0, 0.0]);

	mat4.lookAt(viewMatrix,cameraPosition,cameraCenter,cameraUp);
	
	projectionMatrix = perspectiveProjectionMatrix;

	gl.uniformMatrix4fv(mUniform, false, modelMatrix);
	gl.uniformMatrix4fv(vUniform, false, viewMatrix);
	gl.uniformMatrix4fv(pUniform, false, projectionMatrix);

	// paper 1
	if(start_reverse != 1)
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture1);
	else
		gl.bindTexture(gl.TEXTURE_2D, reverse_Paper_texture1);

	gl.uniform1i(uniform_texture0_sampler, 0);
	gl.bindVertexArray(vao_paper);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	// paper 2
	if(start_reverse != 1)
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture2);
	else
		gl.bindTexture(gl.TEXTURE_2D, reverse_Paper_texture2);

	gl.bindVertexArray(vao_paper2);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	// paper 3
	if(start_reverse != 1)
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture3);
	else
		gl.bindTexture(gl.TEXTURE_2D, reverse_Paper_texture3);

	gl.bindVertexArray(vao_paper3);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	// paper 4
	gl.bindTexture(gl.TEXTURE_2D, Paper_texture4);		
	gl.bindVertexArray(vao_paper4);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	gl.useProgram(null);

  // shader program 2
	if(scene2_rightToLeft_done == 1)
	{
		if(pre_reverse_effect_start == 1)
		{
			blast_incr_value = blast_incr_value + 0.0005;
		}	

		gl.useProgram(shaderProgramObject_paper2);
		
		gl.uniformMatrix4fv(mUniform2, false, modelMatrix);
		gl.uniformMatrix4fv(vUniform2, false, viewMatrix);
		gl.uniformMatrix4fv(pUniform2, false, projectionMatrix);

		gl.uniform1f(uniform_blast_value, blast_incr_value);

		// paper 4
		gl.bindTexture(gl.TEXTURE_2D, reverse_Paper_texture4);
		gl.bindVertexArray(vao_paper4);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.bindVertexArray(null);
		//gl.bindTexture(gl.TEXTURE_2D, 0);
		gl.useProgram(null);
	}
		
	paper_update();
	gl.disable(gl.CULL_FACE);
}

function paper_update()
{
	// first zoom out
	if(cameraPosition[2] < 7.4 && scene1_zoomout_done == 0)
	{
		cameraPosition[2] = cameraPosition[2] + 0.01;
	}
	else
	{
		scene1_zoomout_done = 1;
	}

	// center to left
	if(scene1_zoomout_done == 1 && scene1_centerToLeft_done == 0)
	{
		if(cameraPosition[2] >= 6.4)
		{
			cameraPosition[2] = cameraPosition[2] - 0.01;
		}
		if(cameraPosition[0] >= -1.3)
		{
			cameraPosition[0] = cameraPosition[0] - 0.01;
			cameraCenter[0] = cameraCenter[0] - 0.01;
			
			scene1_centerToLeft_done = 0;
		}
		else
		{
			scene1_centerToLeft_done = 1;
		}
		if(cameraPosition[1] <= 0.5)
		{
			cameraPosition[1] = cameraPosition[1] + 0.005;
			cameraCenter[1] = cameraCenter[1] + 0.005;
			
			scene1_centerToLeft_done = 0;
		}
		else
		{
			scene1_centerToLeft_done = 1;
		}
	}

	// left to right
	if(scene1_centerToLeft_done == 1 && scene1_leftToRight_done == 0)
	{
		if(cameraPosition[0] < 1.2)
		{
			cameraPosition[0] = cameraPosition[0] + 0.008;
			cameraCenter[0] = cameraCenter[0] + 0.008;
		}
		else
		{
			scene1_leftToRight_done = 1;
		}
	}

	// right to center and camera up tild
	if(scene1_leftToRight_done == 1 && scene1_rightToCenterToTilled_done == 0)
	{
		if(cameraPosition[0] >= 0.20)
		{
			cameraPosition[0] = cameraPosition[0] - 0.008;
			cameraCenter[0] = cameraCenter[0] - 0.008;
			
			scene1_rightToCenterToTilled_done = 0;	
		}
		else
		{
			scene1_rightToCenterToTilled_done = 1;
		}
		cameraUp[0] = cameraUp[0] + 0.004;
	}

	// going for scene2 
	if(scene1_rightToCenterToTilled_done == 1 && scene2_zoom_in_done == 0)
	{
		
		cameraUp[0] = cameraUp[0] + 0.01;
		if(cameraPosition[2] > 3.3)
		{
			cameraPosition[2] = cameraPosition[2] - 0.01;
		}
		else
		{
			scene2_zoom_in_done = 1;
		}
	}

	// going to make camera up stright and other operations
	if(scene2_zoom_in_done == 1 && scene2_centerToRight_done == 0)
	{
		if(cameraPosition[0] <= 3.16)
		{
			cameraPosition[0] = cameraPosition[0] + 0.02;
		}
		if(cameraPosition[1] < 1.5)
		{
			cameraPosition[1] = cameraPosition[1] + 0.008;
		}
		if(cameraPosition[2] > 1.4)
		{
			cameraPosition[2] = cameraPosition[2] - 0.005;
		}

		if(cameraCenter[0] < 4.5)
		{
			cameraCenter[0] = cameraCenter[0] + 0.02;
			if(scene2_centerToRight_done == 1)
			{
				scene2_centerToRight_done = 0;
			}
		}
		else
		{
			scene2_centerToRight_done = 1;
		}
		if(cameraCenter[1] < 1.5)
		{
			cameraCenter[1] = cameraCenter[1] + 0.008;
		}

		if(cameraUp[0] > -0.05)
		{
			cameraUp[0] = cameraUp[0] - 0.05;
		}
	}

	// scene 2 - right to left
	if(scene2_centerToRight_done == 1 && scene2_rightToLeft_done == 0)
	{
		if(cameraPosition[0] >= -4.8)
		{
			cameraPosition[0] = cameraPosition[0] - 0.01;
			if(scene2_rightToLeft_done == 1)
			{
				scene2_rightToLeft_done = 0;
			}
		}
		else
		{
			scene2_rightToLeft_done = 1;
		}
		if(cameraCenter[0] >= -4.34)
		{
			cameraCenter[0] = cameraCenter[0] - 0.01;
			if(scene2_rightToLeft_done == 1)
			{
				scene2_rightToLeft_done = 0;
			}
		}
		else
		{
			scene2_rightToLeft_done = 1;
		}
		if(cameraPosition[1] <= 1.3)
		{
			cameraPosition[1] = cameraPosition[1] + 0.01;
		}
		if(cameraCenter[1] <= 1.3)
		{
			cameraCenter[1] = cameraCenter[1] + 0.01;
		}
	}

	// scene 2 - end
	if(scene2_rightToLeft_done == 1 && start_reverse == 0)
	{
		if(cameraPosition[0] < -0.8)
		{
			cameraPosition[0] = cameraPosition[0] + 0.01;
			if(start_reverse == 1)
			{
				start_reverse = 0;
			}
		}
		else
		{
			start_reverse = 1;
		}

		if(cameraCenter[0] < -0.8)
		{
			cameraCenter[0] = cameraCenter[0] + 0.01;
			if(start_reverse == 1)
			{
				start_reverse = 0;
			}
		}
		else
		{
			start_reverse = 1;
		}

		if(cameraPosition[2] >= -5.6)
		{
			cameraPosition[2] = cameraPosition[2] - 0.01;
			if(start_reverse == 1)
			{
				start_reverse = 0;
			}
		}
		else
		{
			start_reverse = 1;
			pre_reverse_effect_start = 1;
		}

		// y adjust
		if(cameraPosition[1] >= 0.01)
		{
			cameraPosition[1] = cameraPosition[1] - 0.01;
		}
		if(cameraCenter[1] >= 0.01)
		{
			cameraCenter[1] = cameraCenter[1] - 0.01;
		}
	}	


	// REVERSE ---------------

	if(start_reverse == 1 && blast_incr_value >= 0.90)
	{
		
		// center to right and back side
		if(reverse_scene1_done == 0 )
		{
			if(cameraPosition[0] >= -4.8)
			{
				cameraPosition[0] = cameraPosition[0] - 0.05;
				reverse_scene1_done = 0;
			}
			else
			{
				reverse_scene1_done = 1;
			}

			if(cameraCenter[0] >= -4.34)
			{
				cameraCenter[0] = cameraCenter[0] - 0.05;
				reverse_scene1_done = 0;
			}
			else
			{
				reverse_scene1_done = 1;
			}

			if(cameraPosition[2] < 1.4)
			{
				cameraPosition[2] = cameraPosition[2] + 0.05;
				reverse_scene1_done = 0;
			}
			else
			{
				reverse_scene1_done = 1;
			}
		}

		// left to right
		if(reverse_scene1_done == 1 && reverse_scene1_leftToRight_done == 0)
		{
			if(cameraPosition[0] <= 3.5)
			{
				cameraPosition[0] = cameraPosition[0] + 0.05;
				reverse_scene1_leftToRight_done = 0;
			}
			else
			{
				reverse_scene1_leftToRight_done = 1;
			}
			if(cameraCenter[0] <= 4.0)
			{
				cameraCenter[0] = cameraCenter[0] + 0.05;
				reverse_scene1_leftToRight_done = 0;
			}
			else
			{
				reverse_scene1_leftToRight_done = 1;
			}
		}

		// right to center
		if(reverse_scene1_leftToRight_done == 1 && reverse_scene1_rightToCenter_done == 0)
		{
			if(cameraPosition[0] >= 0.4)
			{
				cameraPosition[0] = cameraPosition[0] - 0.05;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}
			if(cameraPosition[1] >= 0.0)
			{
				cameraPosition[1] = cameraPosition[1] - 0.05;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}
			if(cameraPosition[2] < 5.0)
			{
				cameraPosition[2] = cameraPosition[2] + 0.05;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}
			
			if(cameraCenter[0] >= 0.5)
			{
				cameraCenter[0] = cameraCenter[0] - 0.05;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}
			if(cameraCenter[1] >= 0.0)
			{
				cameraCenter[1] = cameraCenter[1] - 0.05;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}

			if(cameraUp[0] < 1.5)
			{
				cameraUp[0] = cameraUp[0] + 0.02;
				reverse_scene1_rightToCenter_done = 0;
			}
			else
			{
				reverse_scene1_rightToCenter_done = 1;
			}
		}

		// scene2 - center to zoom out and then stright camera up
		if(reverse_scene1_rightToCenter_done == 1 && revesrse_scene2_zoom_out_done == 0)
		{
			if(cameraPosition[2] < 6.4)
			{
				cameraPosition[2] = cameraPosition[2] + 0.05;
				revesrse_scene2_zoom_out_done = 0;
			}
			else
			{
				revesrse_scene2_zoom_out_done = 1;
			}
			if(cameraUp[0] >= 0.0)
			{
				cameraUp[0] = cameraUp[0] - 0.05;
				revesrse_scene2_zoom_out_done = 0;
			}
			else
			{
				revesrse_scene2_zoom_out_done = 1;
			}
		}
		
		// reverse - center to right
		if(revesrse_scene2_zoom_out_done == 1 && reverse_centerToRight_done == 0)
		{
			if(cameraPosition[0] <= 1.6)
			{
				cameraPosition[0] = cameraPosition[0] + 0.05;
				reverse_centerToRight_done = 0;
			}
			else
			{
				reverse_centerToRight_done = 1;
			}
			if(cameraPosition[1] <= 0.4)
			{
				cameraPosition[1] = cameraPosition[1] + 0.05;
				reverse_centerToRight_done = 0;
			}
			else
			{
				reverse_centerToRight_done = 1;
			}

			if(cameraPosition[2] >= 5.6)
			{
				cameraPosition[2] = cameraPosition[2] - 0.05;
				reverse_centerToRight_done = 0;
			}
			else
			{
				reverse_centerToRight_done = 1;
			}

			if(cameraCenter[0] <= 1.6)
			{
				cameraCenter[0] = cameraCenter[0] + 0.05;
			
			}
			if(cameraCenter[1] <= 0.4)
			{
				cameraCenter[1] = cameraCenter[1] + 0.05;
			}

		}

		// reverse - right to left
		// && reverse_rightToLeft_done == 0
		if(reverse_centerToRight_done == 1 && reverse_rightToLeft_done == 0)
		{
			if(cameraPosition[0] >= -1.58)
			{
				cameraPosition[0] = cameraPosition[0] - 0.03;
				cameraCenter[0] = cameraCenter[0] - 0.03;
				reverse_rightToLeft_done = 0;
			}
			else
			{
				reverse_rightToLeft_done = 1;
			}
			if(cameraPosition[1] <= 0.9)
			{
				cameraPosition[1] = cameraPosition[1] + 0.03;
				cameraCenter[1] = cameraCenter[1] + 0.03;
			}
		}

		// reverse end coordinates. here where we need to be at end
		if(reverse_rightToLeft_done == 1)
		{
			if(cameraPosition[0] < 0.0)
			{
				cameraPosition[0] = cameraPosition[0] + 0.01;
			}
			if(cameraPosition[1] > 0.073)
			{
				cameraPosition[1] = cameraPosition[1] - 0.01;
			}
			if(cameraPosition[2] >= 5.195)
			{
				cameraPosition[2] = cameraPosition[2] - 0.01;
			}

			if(cameraCenter[0] <= -0.098)
			{
				cameraCenter[0] = cameraCenter[0] + 0.01;
			}
			if(cameraCenter[1] > 0.073)
			{
				cameraCenter[1] = cameraCenter[1] - 0.01;
			}

			if((cameraPosition[0] >= 0.0) && (cameraPosition[1] <= 0.073) && (cameraPosition[2] < 5.195))
			{
				finishBharatsFifthScene = true;
			}
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

	if(Paper_texture3)
	{
		gl.deleteTexture(Paper_texture3);
		Paper_texture3 = 0;
	}

	if(Paper_texture4)
	{
		gl.deleteTexture(Paper_texture4);
		Paper_texture4 = 0;
	}

	if(reverse_Paper_texture1)
	{
		gl.deleteTexture(reverse_Paper_texture1);
		reverse_Paper_texture1 = 0;
	}

	if(reverse_Paper_texture2)
	{
		gl.deleteTexture(reverse_Paper_texture2);
		reverse_Paper_texture2 = 0;
	}

	if(reverse_Paper_texture3)
	{
		gl.deleteTexture(reverse_Paper_texture3);
		reverse_Paper_texture3 = 0;
	}

	if(reverse_Paper_texture4)
	{
		gl.deleteTexture(reverse_Paper_texture4);
		reverse_Paper_texture4 = 0;
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

	if(vao_paper3)
	{
		gl.deleteVertexArray(vao_paper3);
		vao_paper3 = null;
	}

	if(vao_paper4)
	{
		gl.deleteVertexArray(vao_paper4);
		vao_paper4 = null;
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
