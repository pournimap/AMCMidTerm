var vertexShaderObject_paper;
var fragmentShaderObject_paper;
var shaderProgramObject_paper;

var vao_paper;
var vao_paper2;
var vao_paper3;


var vbo_position;
var vbo_color;
var vbo_texture;

var mUniform;
var vUniform;
var pUniform;

var Paper_texture1 	= 0;
var Paper_texture2 	= 0;


var uniform_texture0_sampler;
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


function paper_init()
{
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

// texture part 
	// paper 1
	Paper_texture1 = gl.createTexture();
	Paper_texture1.image = new Image();
	Paper_texture1.image.src = "NP3.png";
	
	Paper_texture1.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture1);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Paper_texture1.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}

	// paper 2
	Paper_texture2 = gl.createTexture();
	Paper_texture2.image = new Image();
	Paper_texture2.image.src = "NP1.png";
	
	Paper_texture2.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture2);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Paper_texture2.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	}

	mUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_m_matrix");
	vUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_v_matrix");
	pUniform 					= gl.getUniformLocation(shaderProgramObject_paper, "u_p_matrix");
	uniform_texture0_sampler 	= gl.getUniformLocation(shaderProgramObject_paper, "u_texture0_sampler");


// 1st paper
	var cubeVertices = new Float32Array
	([
		 2.5, 1.5, 5.0,
		-2.5, 1.5, 5.0,
		-2.5,-1.5, 5.0,
		 2.5,-1.5, 5.0
	]);

	var cubeTexcoords = new Float32Array
	([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0, 
	]);

	vao_paper = gl.createVertexArray();
	gl.bindVertexArray(vao_paper);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	vbo_texture = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
	gl.bufferData(gl.ARRAY_BUFFER, cubeTexcoords, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);
	
// 2nd paper
	cubeVertices = new Float32Array
	([
		 2.5, 2.0, 3.0,
		-2.5, 2.0, 3.0,
		-2.5,-2.0, 3.0,
		 2.5,-2.0, 3.0
	]);

	cubeTexcoords = new Float32Array
	([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0, 
	]);

	vao_paper2 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper2);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	vbo_texture = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
	gl.bufferData(gl.ARRAY_BUFFER, cubeTexcoords, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);

// 3rd paper
	cubeVertices = new Float32Array
	([
		 5.0, 3.0, 0.0,
		-5.0, 3.0, 0.0,
		-5.0,-3.0, 0.0,
		 5.0,-3.0, 0.0
	]);

	cubeTexcoords = new Float32Array
	([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0, 
	]);

	vao_paper3 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper3);

	vbo_position = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_position);
	gl.bufferData(gl.ARRAY_BUFFER, cubeVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 3, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	vbo_texture = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_texture);
	gl.bufferData(gl.ARRAY_BUFFER, cubeTexcoords, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
		
	gl.bindVertexArray(null);
	

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	//gl.enable(gl.CULL_FACE);					// if this is enable, texture will not get applied on backside (inside)

	perspectiveProjectionMatrix = mat4.create();
}

function paper_draw()
{


	gl.useProgram(shaderProgramObject_paper);

	var modelMatrix				= mat4.create();
	var viewMatrix				= mat4.create();
	var projectionMatrix		= mat4.create();

	
	// news paper 1
	mat4.identity(modelMatrix);
	mat4.identity(viewMatrix);
	mat4.identity(projectionMatrix);
	
	
	mat4.translate(modelMatrix, modelMatrix, [0.0, 0.0, 0.0]);

	mat4.lookAt(viewMatrix,cameraPosition,cameraCenter,cameraUp);
	

	projectionMatrix = perspectiveProjectionMatrix;

	gl.uniformMatrix4fv(mUniform, false, modelMatrix);
	gl.uniformMatrix4fv(vUniform, false, viewMatrix);
	gl.uniformMatrix4fv(pUniform, false, projectionMatrix);

	// paper 1
	gl.bindTexture(gl.TEXTURE_2D, Paper_texture1);
	gl.uniform1i(uniform_texture0_sampler, 0);
	gl.bindVertexArray(vao_paper);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	// paper 2
	gl.bindTexture(gl.TEXTURE_2D, Paper_texture2);
	gl.bindVertexArray(vao_paper2);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);

	// paper 3
	gl.bindTexture(gl.TEXTURE_2D, Paper_texture1);
	gl.bindVertexArray(vao_paper3);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	//gl.bindTexture(gl.TEXTURE_2D, 0);
	

	gl.useProgram(null);

	paper_update();
}

function paper_update()
{
	// first zoom out
	if(cameraPosition[2] < 5.7 && scene1_zoomout_done == 0)
	{
		cameraPosition[2] = cameraPosition[2] + 0.005;
	}
	else
	{
		scene1_zoomout_done = 1;
	}

	// center to left
	if(scene1_zoomout_done == 1 && scene1_centerToLeft_done == 0)
	{
		
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
		if(cameraPosition[0] >= 0.19)
		{
			cameraPosition[0] = cameraPosition[0] - 0.008;
			cameraCenter[0] = cameraCenter[0] - 0.008;
			
			scene1_rightToCenterToTilled_done = 0;
			
		}
		else
		{
			scene1_rightToCenterToTilled_done = 1;
		}

		if(cameraPosition[2] < 6.2)
		{
			cameraPosition[2] = cameraPosition[2] + 0.005;
			
			scene1_rightToCenterToTilled_done = 0;
		}
		else
		{
			scene1_rightToCenterToTilled_done = 1;
		}

		if(cameraUp[0] < 0.7)
		{
			cameraUp[0] = cameraUp[0] + 0.004;
			
			scene1_rightToCenterToTilled_done = 0;
		}
		else
		{
			scene1_rightToCenterToTilled_done = 1;
		}
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
		if(cameraPosition[0] <= 3.5)
		{
			cameraPosition[0] = cameraPosition[0] + 0.01;
		}
		if(cameraPosition[1] < 1.0)
		{
			cameraPosition[1] = cameraPosition[1] + 0.01;
		}
		if(cameraPosition[2] > 1.4)
		{
			cameraPosition[2] = cameraPosition[2] - 0.01;
		}

		if(cameraCenter[0] < 4.0)
		{
			cameraCenter[0] = cameraCenter[0] + 0.01;
			if(scene2_centerToRight_done == 1)
			{
				scene2_centerToRight_done = 0;
			}
		}
		else
		{
			scene2_centerToRight_done = 1;
		}
		if(cameraCenter[1] < 1.0)
		{
			cameraCenter[1] = cameraCenter[1] + 0.01;
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
	}

	// scene 2 - end
	if(scene2_rightToLeft_done == 1)
	{
		if(cameraPosition[0] < -0.8)
		{
			cameraPosition[0] = cameraPosition[0] + 0.01;
		}

		if(cameraCenter[0] < -0.8)
		{
			cameraCenter[0] = cameraCenter[0] + 0.01;
		}

		if(cameraPosition[2] >= -3.6)
		{
			cameraPosition[2] = cameraPosition[2] - 0.01;
		}

	}	
}



function paper_unititialize()
{

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

	if(vao_paper5)
	{
		gl.deleteVertexArray(vao_paper5);
		vao_paper5 = null;
	}

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
}


function degToRad(degrees)
{
	return(degrees * Math.PI / 180);
}
