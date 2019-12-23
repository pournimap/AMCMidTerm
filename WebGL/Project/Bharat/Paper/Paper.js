var vertexShaderObject_paper;
var fragmentShaderObject_paper;
var shaderProgramObject_paper;

var vao_paper;
var vao_paper2;
var vao_paper3;
var vao_paper4;
var vao_paper5;

var vbo_position;
var vbo_color;
var vbo_texture;

var mUniform;
var vUniform;
var pUniform;

var Paper_texture1 	= 0;
var Paper_texture2 	= 0;
var Paper_texture3 	= 0;
var Paper_texture4 	= 0;

var uniform_texture0_sampler;

var cameraPosition 	= [0.0, 0.0, 5.1];
var cameraCenter	= [0.0, 0.0, 0.0];
var cameraUp		= [0.0, 1.0, 0.0];


var stopAnimation 		= 1;
var FirstZoomOutNotDone = 1;

var cameraPositionXToggle 	= 1;
var cameraUpXToggle 		= 1;

var startAnimationOfPamplate	= 0;

var pamplateX = 0.0;
var pamplateY = 0.0;
var pamplateZ = 2.0;

var rotatePamplateZ = 0.0;
var startReverseAnimation = 0;

var lastZoomIn = 0;


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

	// paper 3
	Paper_texture3 = gl.createTexture();
	Paper_texture3.image = new Image();
	Paper_texture3.image.src = "NP2.png";
	
	Paper_texture3.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture3);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, Paper_texture3.image);
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
		 2.5, 1.0, 5.0,
		-2.5, 1.0, 5.0,
		-2.5,-1.0, 5.0,
		 2.5,-1.0, 5.0
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
	
	
// 4rt paper . last
	cubeVertices = new Float32Array
	([
		 1.0, 2.0, -2.0,
		-1.0, 2.0, -2.0,
		-1.0,-2.0, -2.0,
		 1.0,-2.0, -2.0
	]);

	cubeTexcoords = new Float32Array
	([
		0.0, 0.0,
		1.0, 0.0,
		1.0, 1.0,
		0.0, 1.0, 
	]);

	vao_paper4 = gl.createVertexArray();
	gl.bindVertexArray(vao_paper4);

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

// 5th paper . last last
cubeVertices = new Float32Array
([
	 1.0, 2.0, -2.1,
	-1.0, 2.0, -2.1,
	-1.0,-2.0, -2.1,
	 1.0,-2.0, -2.1
]);

var cubeColors = new Float32Array
([
	1.0,1.0,1.0,0.5,
	1.0,1.0,1.0,0.5,
	1.0,1.0,1.0,0.5,
	1.0,1.0,1.0,0.5

]);

vao_paper5 = gl.createVertexArray();
gl.bindVertexArray(vao_paper5);

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
//.....

	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	//gl.enable(gl.CULL_FACE);					// if this is enable, texture will not get applied on backside (inside)
	gl.enable(0x8642);

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
	
	if(cameraPosition[2] < -2.9 && startAnimationOfPamplate == 1)
	{
	
		mat4.translate(modelMatrix, modelMatrix, [pamplateX, pamplateY, pamplateZ]);
		mat4.rotateZ(modelMatrix, modelMatrix, degToRad(rotatePamplateZ));

		mat4.lookAt(viewMatrix,cameraPosition,cameraCenter,cameraUp);

		projectionMatrix = perspectiveProjectionMatrix;

		gl.uniformMatrix4fv(mUniform, false, modelMatrix);
		gl.uniformMatrix4fv(vUniform, false, viewMatrix);
		gl.uniformMatrix4fv(pUniform, false, projectionMatrix);

		// paper 4
		gl.bindTexture(gl.TEXTURE_2D, Paper_texture3);
		gl.bindVertexArray(vao_paper4);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		gl.bindVertexArray(null);
		//gl.bindTexture(gl.TEXTURE_2D, 0);
	}
	gl.useProgram(null);

	paper_update();
}

function paper_update()
{

	if(FirstZoomOutNotDone == 1)
	{
		// first go back
		if(cameraPosition[2] < 6.5)
		{
			cameraPosition[2] = cameraPosition[2] + 0.005;

		}
		else
		{
			FirstZoomOutNotDone = 0;
		}
	}
	else if (startReverseAnimation != 1)
	{	
		// go in again till -3
		if(cameraPosition[2] > -3.5 )
		{
			cameraPosition[2] = cameraPosition[2] - 0.007;
		}
		// tild the camera up to see tild
		if(cameraUp[0] < 1.0 && cameraUpXToggle == 1)
		{
			cameraUp[0] = cameraUp[0] + 0.005;
		}
		else
		{
			cameraUpXToggle = 0;
		}
		// this check is for changing camera position x so that it will flip back effect
		if(cameraPosition[2] < 3.0)
		{
			if(cameraPosition[0] < 0.5 && cameraPositionXToggle == 1)
			{
				cameraPosition[0]  = cameraPosition[0] + 0.001;
				if(cameraUp[0] > 0.0 && cameraUpXToggle == 0)
				{
					cameraUp[0] = cameraUp[0] - 0.001;
				}
			}
			else
			{
				cameraPositionXToggle = 0;
			}
			if(cameraPosition[0] > 0.0 && cameraPositionXToggle == 0)
			{
				cameraPosition[0] = cameraPosition[0] - 0.001;
				if(cameraUp[0] > 0.0 && cameraUpXToggle == 0)
				{
					cameraUp[0] = cameraUp[0] - 0.001;
				}
			}
		}
		if(cameraPosition[2] < -3.0)
		{
			startAnimationOfPamplate = 1;
		}
		
	}
	if(startAnimationOfPamplate == 1 && startReverseAnimation == 0)
	{
		if(pamplateZ >= 0.0)
		{
			pamplateZ = pamplateZ - 0.009;
		}
		if(rotatePamplateZ <= (360.0 * 3))
		{
			rotatePamplateZ = rotatePamplateZ + 5.0;
		}
		if(rotatePamplateZ >= (360.0 * 3))
		{
			startReverseAnimation = 1;
		}
		/*else
		{
			rotatePamplateZ = 0.0;
		}*/
	}


	if(startReverseAnimation == 1)
	{
		if(cameraPosition[2] <= 6.1 && lastZoomIn != 1)
		{
			cameraPosition[2] = cameraPosition[2] + 0.005;
		}
		else
		{
			lastZoomIn  = 1;
		}
		// pamplate reverse animation
		if(pamplateZ <= 2.0)
		{
			pamplateZ = pamplateZ + 0.01;
		}
		else
		{
			startAnimationOfPamplate = 0;
		}
		if(rotatePamplateZ >= 0.0)
		{
			rotatePamplateZ = rotatePamplateZ - 5.0;
		}

		// last paper reverse animation
		if(cameraPosition[0] < 0.7 && cameraPosition[2] <= 0.0)
		{
			cameraPosition[0] = cameraPosition[0] + 0.001;
		}
		if(cameraPosition[0] >= 0.0 && cameraPosition[2] >= 0.0)
		{
			cameraPosition[0] = cameraPosition[0] - 0.001;
		}
		if(cameraPosition[2] <= 3.0 && cameraPosition[2] <= 0.0)
		{
			if(cameraUp[0] < 1.0)
			{
				cameraUp[0] = cameraUp[0] + 0.001;
			}
		}

		if(lastZoomIn == 1)
		{
			if(cameraUp[0] > 0.0)
			{
				cameraUp[0] = cameraUp[0] - 0.001;
			}
			if(cameraPosition[2] >= 5.2)
			{
				cameraPosition[2] = cameraPosition[2] - 0.001;
			}
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
