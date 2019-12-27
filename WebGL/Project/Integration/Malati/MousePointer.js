
var vertexShaderObject_mouse;
var fragmentShaderObject_mouse;
var shaderProgramObject_mouse;

var vao_Triangle;
var vao_Square;

var vbo_Triangle_position;
var vbo_Square_position;
var vbo_Triangle_color;
var vbo_Square_color;
var mvpUniform_mouse;

function initMousePointer()
{
	
	var vertexShaderSourceCode = 
			"#version 300 es" +
			"\n" +
			"in vec4 vPosition;" +
			"in vec4 vColor;" +
			"uniform mat4 u_mvp_matrix;" +
			"out vec4 out_color;"+
			"void main(void)" +
			"{"+
			"gl_Position = u_mvp_matrix * vPosition;" +
			"out_color = vColor;"+
			"}";
			
	vertexShaderObject_mouse = gl.createShader(gl.VERTEX_SHADER);
	
	gl.shaderSource(vertexShaderObject_mouse, vertexShaderSourceCode);
	
	gl.compileShader(vertexShaderObject_mouse);
	if(gl.getShaderParameter(vertexShaderObject_mouse, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(vertexShaderObject_mouse);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}
	
	
	var fragmentShaderSourceCode = 
			"#version 300 es" +
			"\n" +
			"precision highp float;" +
			"out vec4 FragColor;" +
			"in vec4 out_color;" +
			"void main(void)" +
			"{"+
			"FragColor = out_color;" +
			"}"
			
			
	fragmentShaderObject_mouse = gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(fragmentShaderObject_mouse, fragmentShaderSourceCode);
	
	gl.compileShader(fragmentShaderObject_mouse);
	if(gl.getShaderParameter(fragmentShaderObject_mouse, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(fragmentShaderObject_mouse);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}
	
	shaderProgramObject_mouse = gl.createProgram();
	gl.attachShader(shaderProgramObject_mouse, vertexShaderObject_mouse);
	gl.attachShader(shaderProgramObject_mouse, fragmentShaderObject_mouse);
	gl.bindAttribLocation(shaderProgramObject_mouse, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	gl.bindAttribLocation(shaderProgramObject_mouse, WebGLMacros.AMC_ATTRIBUTE_COLOR, "vColor");
	
	gl.linkProgram(shaderProgramObject_mouse);
	if(!gl.getProgramParameter(shaderProgramObject_mouse, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(shaderProgramObject_mouse);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}
	
	mvpUniform_mouse = gl.getUniformLocation(shaderProgramObject_mouse, "u_mvp_matrix");
	
	var triangleVertices = new Float32Array( [ 0.0, 1.0, 0.0, 
												-1.0, -1.0, 0.0,
												1.0, -1.0, 0.0
												]);
												
	var triangleColors = new Float32Array( [ 1.0, 0.0, 0.0, 
												0.0, 1.0, 0.0,
												0.0, 0.0, 1.0
												]);
	vao_Triangle = gl.createVertexArray();
	gl.bindVertexArray(vao_Triangle);
	
	vbo_Triangle_position= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Triangle_position);
	gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);
	
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 
							3, gl.FLOAT,
							false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	//color
	/*vbo_Triangle_color= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Triangle_color);
	gl.bufferData(gl.ARRAY_BUFFER, triangleColors, gl.STATIC_DRAW);
	
	gl.vertexAttribPointer(WebGLMacros.MPD_ATTRIBUTE_COLOR, 
							3, gl.FLOAT,
							false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.MPD_ATTRIBUTE_COLOR);*/
	
	//gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	gl.bindVertexArray(null);
	
	var squareVertices = new Float32Array( [ -1.0, 1.0, 0.0,
												-1.0, -1.0, 0.0,
												1.0, -1.0, 0.0,
												1.0, 1.0, 0.0]);
												
	vao_Square = gl.createVertexArray();
	gl.bindVertexArray(vao_Square);
	
	vbo_Square_position= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_Square_position);
	gl.bufferData(gl.ARRAY_BUFFER, squareVertices, gl.STATIC_DRAW);
	
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 
							3, gl.FLOAT,
							false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	gl.bindVertexArray(null);
	
	//gl.vertexAttrib3f(WebGLMacros.MPD_ATTRIBUTE_COLOR, 0.39, 0.58, 0.9294);
	gl.vertexAttrib3f(WebGLMacros.AMC_ATTRIBUTE_COLOR, 0.5, 0.5, 0.5);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
}

var xtrans =-6.0;
var ytrans = -6.0;
function drawMousePointer()
{
	var sceneDone = false;
	//gl.clear(gl.COLOR_BUFFER_BIT);
	
	gl.useProgram(shaderProgramObject_mouse);
	
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	
	mat4.translate(modelViewMatrix, modelViewMatrix,[xtrans,ytrans,-12.0]);
	mat4.scale(modelViewMatrix,modelViewMatrix,[0.13,0.13, 0.13]);
	var angleInRadians1 = 35.0 * Math.PI /180;
	mat4.rotate(modelViewMatrix, modelViewMatrix, angleInRadians1, [0,0,1]);
	//mat4.rotate(modelViewMatrix, modelViewMatrix, 45.0);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	
	gl.uniformMatrix4fv(mvpUniform_mouse, false, modelViewProjectionMatrix);
	
	gl.bindVertexArray(vao_Triangle);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	gl.bindVertexArray(null);
	
	//modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();
	
	mat4.translate(modelViewMatrix, modelViewMatrix,[0.0,-1.5,0.0]);
	mat4.scale(modelViewMatrix,modelViewMatrix,[0.2,0.5, 1.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	
	gl.uniformMatrix4fv(mvpUniform_mouse, false, modelViewProjectionMatrix);
	
	gl.bindVertexArray(vao_Square);
	gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if(xtrans <= 0.6)
	{
	xtrans += 0.02;
	}
	if(ytrans <= -0.3)
	{
	ytrans += 0.02;
	}
	if((xtrans > 0.6) && (ytrans > -0.3))
	{
		sceneDone = true;
	}
	return sceneDone;
}