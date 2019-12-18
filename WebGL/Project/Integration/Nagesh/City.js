
// For Shader 
var shaderProgramObject_city;
var vertexShaderObject_city;
var fragmentShaderObject_city;

var vao_city;
var vbo_city;
var vbo_color_city;
var mvpUniform_city;

//Stack
var stackMatrix_city;
var sizeStrackMatrix_city=0;

var translateX_city=0.0;
var translateZ_city=-25.0;
var translateY_city=0.0;
var cameraPositionZ_city=0.0;
var cameraPositionX_city=0.0;
var cameraPositionY_city=0.0;
var cameraAngleX_city=0.0;
var cameraAngleY_city=0.0;
var cameraCentreX_city=0.0;
var cameraCentreY_city=0.0;
var cameraCentreZ_city=0.0;


function City_Initialize()
{	
	var vertexShaderSourceCode=
	"#version 300 es"+
	"\n"+
	"in vec4 vPosition;" +
	"in vec3 vColor;" +
	"out vec3 outColor;"+
	"uniform mat4 u_mvp_uniform;"+
	"void main()"+
	"{"+
	"\n"+
	"outColor=vColor;"+
	"gl_Position=u_mvp_uniform * vPosition;"+
	"}";

	vertexShaderObject_city=gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShaderObject_city,vertexShaderSourceCode);
	gl.compileShader(vertexShaderObject_city);

	if(gl.getShaderParameter(vertexShaderObject_city,gl.COMPILE_STATUS)==false)
	{
		var error=gl.getShaderInfoLog(vertexShaderObject_city);
		if(error.length>0)
		{
			alert("VertexShaderError:"+error);
			City_Uninitialize();
		}

	}

	var fragmentShaderSourceCode=
	"#version 300 es"+
	"\n"+
	"precision highp float;"+
	"in vec3 outColor;"+
	"out vec4 fragColor;"+
	"void main()"+
	"{"+
	"fragColor=vec4(outColor,1.0);"+
	"}";


	fragmentShaderObject_city=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShaderObject_city,fragmentShaderSourceCode);
	gl.compileShader(fragmentShaderObject_city);

	if(gl.getShaderParameter(fragmentShaderObject_city,gl.COMPILE_STATUS)==false)
	{
		var error=gl.getShaderInfoLog(fragmentShaderObject_city);
		if(error.length>0)
		{

			alert("FragmentShaderErrror:"+error);
			City_Uninitialize();
		}
	}

	shaderProgramObject_city=gl.createProgram();
	gl.attachShader(shaderProgramObject_city,vertexShaderObject_city);
	gl.attachShader(shaderProgramObject_city,fragmentShaderObject_city);


	gl.bindAttribLocation(shaderProgramObject_city,WebGLMacros.AMC_ATTRIBUTE_POSITION,"vPosition");
	gl.bindAttribLocation(shaderProgramObject_city,WebGLMacros.AMC_ATTRIBUTE_COLOR,"vColor");


	//Linking the Program
	gl.linkProgram(shaderProgramObject_city);
	if(gl.getProgramParameter(shaderProgramObject_city,gl.LINK_STATUS) == false)
	{
		var error=gl.getProgramInfoLog(shaderProgramObject_city)
		if(error.length>0)
		{
			alert("Shader Program Link Error:"+error);
			City_Uninitialize();
		}
	}



	mvpUniform_city=gl.getUniformLocation(shaderProgramObject_city,"u_mvp_uniform");


	// Give Triangle Vertices
	var triangleVertices_city=new Float32Array([
					0.0,1.0,0.0, //Appex
					0.0,-1.0,0.0, //Left-Bottom
					1.0,-1.0,0.0,	//Right-Bottom
					1.0,-1.0,0.0,
					1.0,1.0,1.0

					]);


	var triangleColor_city=new Float32Array([
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0	//Right-Bottom
					]);



	vao_city=gl.createVertexArray();
	gl.bindVertexArray(vao_city);

	vbo_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,triangleVertices,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,triangleVertices_city,gl.DYNAMIC_DRAW,0,triangleVertices_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	vbo_color_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,triangleColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,triangleColor_city,gl.DYNAMIC_DRAW,0,triangleColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.bindVertexArray(null);

	cameraCentreZ_city=cameraPositionZ_city-1.0;
	cameraAngleY_city=Math.atan(((cameraCentreZ_city-cameraPositionZ_city)/(cameraCentreX_city-cameraPositionX_city) ));
	cameraAngleX_city=Math.atan(((cameraCentreZ_city-cameraPositionZ_city)/(cameraCentreY_city-cameraPositionY_city) ));


	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);

}

function City_Draw()
{
	// Set Clear Color
	gl.clearColor(0.6017,0.4627,0.3255,1.0);

	gl.useProgram(shaderProgramObject_city);
	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	/*translateY+=2.0;
	if(translateY>=0.0)
		translateY=-20.0;*/
	translateY_city=-2.0;
	//CameraImplementation6
	//cameraPositionZ-=0.5;
	if(cameraPositionZ_city<=-85.0)
		cameraPositionZ_city=25.0;
	var viewMatrix=mat4.create();
	//cameraCentreX=(cameraCentreX==0.0)?cameraCentreX:(cameraCentreX-0.1);
	//cameraCentreY=(cameraCentreY==0.0)?cameraCentreY:(cameraCentreY-0.1);
	//cameraCentreZ=(cameraCentreZ==0.0)?cameraCentreZ:(cameraCentreZ-0.1);

	var centre=[cameraCentreX_city,cameraCentreY_city,cameraCentreZ_city];
	var cameraUp=[0.0,1.0,0.0];
	var cameraPos=[cameraPositionX_city,cameraPositionY_city,cameraPositionZ_city];//x,y,z
	mat4.lookAt(viewMatrix,cameraPos,centre,cameraUp);

	//viewMatrix=mat4.create();
	//mat4.translate(viewMatrix,viewMatrix,[0.0,0.0,translateZ-0.1]);
	var modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	//gl.bindVertexArray(vao);

	//gl.drawArrays(gl.TRIANGLES,0,3);

	//gl.bindVertexArray(null);
	

	road();

	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[2.0,0.0,translateZ_city]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	building(2.0,3.0,1.0);


	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[-2.0,0.0,translateZ_city]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	/*

	//modelViewMatrix=mat4.create();
	mat4.translate(modelViewMatrix,viewMatrix,[-2.0,0.0,translateZ]);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);
	*/
	building(2.0,3.0,1.0);

	

	gl.useProgram(null);

}


function excessiveBuildings()
{


	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	mat4.translate(modelViewMatrix,modelViewMatrix,[4.5,0.0,translateY-10.0]);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2);

}



function road()
{


	var roadLineCoordinates_city=new Float32Array([

					-1.0,-1.0,40.0, //Appex
					-1.0,-1.0,-40.0, //Left-Bottom
					1.0,-1.0,40.0,	//Right-Bottom
					1.0,-1.0,-40.0

					]);

	var roadLineColor_city=new Float32Array([
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0
					]);



	//vao=gl.createVertexArray();
	gl.bindVertexArray(vao_city);

	vbo_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates_city,gl.DYNAMIC_DRAW,0,roadLineCoordinates_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	vbo_color_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineColor_city,gl.DYNAMIC_DRAW,0,roadLineColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.LINES,0,4);
	//gl.drawArrays(gl.LINES,1,2);
	//gl.drawArrays(gl.LINES,2,2);
	//gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);

}

function pushMatrix( newMartix)
{


	
}

function building(length,height,width)
{
	length=length/2.0;
	height=height;
	width=width/2.0;

	var buildingVertices_city=new Float32Array([


					length,height,width, //Appex
					(-1.0)*length,height,width, //Left-Bottom
					(-1.0)*length,-1.0,width,	//Right-Bottom
					length,-1.0,width,

					//Right
					length,height,(-1.0)*width,
					length,height,width,
					length,-1.0,width,
					length,-1.0,(-1.0)*width,

					//Back
					(-1.0)*length,height,(-1.0)*width,
					length,height,(-1.0)*width,
					length,-1.0,(-1.0)*width,
					(-1.0)*length,-1.0,(-1.0)*width,

					//Left
					(-1.0)*length,height,width,
					(-1.0)*length,height,(-1.0)*width,
					(-1.0)*length,-1.0,(-1.0)*width,
					(-1.0)*length,-1.0,width



					]);
	/*
	var buildingColor=new Float32Array([
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0,

					
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0,


					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0,


					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0
					]);*/


	var buildingColor_city=new Float32Array([
					1.0,0.0,0.0, //Appex
					1.0,0.0,0.0, //Appex
					1.0,0.0,0.0, //Appex
					1.0,0.0,0.0, //Appex

					
					0.0,1.0,0.0, //Appex
					0.0,1.0,0.0, //Appex
					0.0,1.0,0.0, //Appex
					0.0,1.0,0.0, //Appex


					1.0,0.0,1.0, //Appex
					1.0,0.0,1.0, //Appex
					1.0,0.0,1.0, //Appex
					1.0,0.0,1.0, //Appex

					
					1.0,1.0,0.0, //Appex
					1.0,1.0,0.0, //Appex
					1.0,1.0,0.0, //Appex
					1.0,1.0,0.0 //Appex
					]);




	//vao=gl.createVertexArray();
	gl.bindVertexArray(vao_city);

	vbo_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,buildingVertices_city,gl.DYNAMIC_DRAW,0,buildingVertices_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	vbo_color_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,buildingColor_city,gl.DYNAMIC_DRAW,0,buildingColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	//gl.drawArrays(gl.LINE_LOOP,0,4);
	//gl.drawArrays(gl.LINE_LOOP,4,4);
	//gl.drawArrays(gl.LINE_LOOP,8,4);
	//gl.drawArrays(gl.LINE_LOOP,12,4);
	//gl.drawArrays(gl.LINES,1,2);
	//gl.drawArrays(gl.LINES,2,2);
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);

	gl.drawArrays(gl.TRIANGLE_FAN,4,4);

	gl.drawArrays(gl.TRIANGLE_FAN,8,4);

	gl.drawArrays(gl.TRIANGLE_FAN,12,4);
	gl.bindVertexArray(null);

}

function City_Uninitialize()
{
	if(vbo_city)
	{
	gl.deleteBuffer(vbo_city);
	vbo_city=null;
	}
	if(vao_city)
	{
	gl.deleteBuffer(vao_city);
	vao_city=null;

	}

	if(shaderProgramObject_city)
	{

		if(fragmentShaderObject_city)
		{
		gl.detachShader(shaderProgramObject_city,fragmentShaderrObject_city);
		gl.deleteShader(fragmentShaderObject_city);
		fragmentShaderObject_city=null;
		}

		if(vertexShadeObject_city)
		{
		gl.detachShader(shaderProgramObject_city,vertexShaderObjct_city);
		gl.deleteShader(vertexShaderObjcet_city);
		vertexShaderObjcet_city=null;

		}

		gl.deleteProgram(shaderProgramObject_city);
		shaderProgramObject_city=null;
	}
}