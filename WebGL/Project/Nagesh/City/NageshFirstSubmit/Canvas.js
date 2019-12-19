// Onload Function

var canvas=null;//Mandatory To Initialize
var context=null;
var gl=null;
var bFullScreen=false;
var canvas_original_height;
var canvas_original_width;


// For Shader 
var shaderProgram;
var vertexShader;
var FragmentShader;

const WebGLMacros=
{
ATTRIBUTE_VERTEX:0,
ATTRIBUTE_COLOR:1,
ATTRIBUTE_NORMAL:2,
ATTRIBUTE_TEXCOORD0:3
};

var translateX=0.0;
var translateZ=-25.0;
var translateY=0.0;
var cameraPositionZ=0.0;
var cameraPositionX=0.0;
var cameraPositionY=0.0;
var cameraAngleX=0.0;
var cameraAngleY=0.0;
var cameraCentreX=0.0;
var cameraCentreY=0.0;
var cameraCentreZ=0.0;

var vao;
var vbo;
var vbo_color;
var mvpUniform;

var perspectiveProjectionMatrix;



//Stack
var stackMatrix;
var sizeStrackMatrix=0;

//To start Animation : To Have requestAnimationFrame And being Browser Independent
var requestAnimationFrame=
	window.requestAnimationFrame||
	window.mozRequestAnimationFrame || //Mozilla
	window.webkitRequestAnimationFrame || // SAFARI and Chrome
	window.oRequestAnimationFrame || // Opera
	window.msRequestAnimationFrame || //Edge
	null;


var cancelAnimation=
	window.cancelAnimation ||
	window.webkitCancelRequestAnimationFrame || window.webkitCancelAnimationFrame ||
	window.mozCancelRequestAnimationFrame || window.mozCancelAnimationFrame ||
	window.oCancelRequeestAnimationFrame || window.oCancelAnimationFrame ||
	window.msCancelRequestAnimationFrame || window.msCancelAnimationFrame;

function main()
{

	//get <canvas> element
	 canvas=document.getElementById("AMC");
	if(!canvas)
		console.log("Obtaining Canvas Failed\n");
	else 
		console.log("Obtaining Canvas Succeeded\n");

	//Print Canvas Width And Height on Console
	
	console.log("Canvas Width :"+canvas.width + "And Canvas Height"+canvas.height);

	//Get 2d Context


	canvas_original_width=canvas.width;
	canvas_original_height=canvas.height;

	//Register EventListeners
	// false...?
	//
	window.addEventListener("keydown",keyDown,false);
	window.addEventListener("click",mouseDown,false);
	window.addEventListener("resize",resize,false);


	// Initialize WebGL
	init();
	console.log("Init Completed");

	// Start Drawing Here As a warming up
	resize();
	console.log("resize Completed");
	draw();

	

}

function init()
{

	//Get WebGL 2.0 Context
	gl=canvas.getContext("webgl2");
	if(gl==null)
	{
		//Failed To Get The Context
		alert("Error: Couldnt get WebGL context");
		uninitialize();
				
	}
	
	gl.viewportWidth=canvas.width;
	gl.viewportHeight=canvas.Height;

	
	mainShaderInitialization();
	// Set Clear Color
	gl.clearColor(0.6017,0.4627,0.3255,1.0);

	perspectiveProjectionMatrix=mat4.create();
	
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	
}

function mainShaderInitialization()
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

vertexShaderObject=gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShaderObject,vertexShaderSourceCode);
gl.compileShader(vertexShaderObject);

if(gl.getShaderParameter(vertexShaderObject,gl.COMPILE_STATUS)==false)
{
var error=gl.getShaderInfoLog(vertexShaderObject);
if(error.length>0)
{
alert("VertexShaderError:"+error);
uninitialize();
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


fragmentShaderObject=gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShaderObject,fragmentShaderSourceCode);
gl.compileShader(fragmentShaderObject);

if(gl.getShaderParameter(fragmentShaderObject,gl.COMPILE_STATUS)==false)
{
var error=gl.getShaderInfoLog(fragmentShaderObject);
if(error.length>0)
{

alert("FragmentShaderErrror:"+error);
uninitialize();
}
}

shaderProgramObject=gl.createProgram();
gl.attachShader(shaderProgramObject,vertexShaderObject);
gl.attachShader(shaderProgramObject,fragmentShaderObject);


gl.bindAttribLocation(shaderProgramObject,WebGLMacros.ATTRIBUTE_VERTEX,"vPosition");
gl.bindAttribLocation(shaderProgramObject,WebGLMacros.ATTRIBUTE_COLOR,"vColor");


//Linking the Program
gl.linkProgram(shaderProgramObject);
if(!gl.getProgramParameter(shaderProgramObject,gl.LINK_STATUS))
{
var error=gl.getProgramInfoLog(shaderProgramObject)
if(error.length>0)
{

alert("Shader Program Link Error:"+error);
uninitialize();
}
}



mvpUniform=gl.getUniformLocation(shaderProgramObject,"u_mvp_uniform");


// Give Triangle Vertices
var triangleVertices=new Float32Array([
					0.0,1.0,0.0, //Appex
					0.0,-1.0,0.0, //Left-Bottom
					1.0,-1.0,0.0,	//Right-Bottom
					1.0,-1.0,0.0,
					1.0,1.0,1.0

					]);


var triangleColor=new Float32Array([
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0	//Right-Bottom
					]);



vao=gl.createVertexArray();
gl.bindVertexArray(vao);

vbo=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
//gl.bufferData(gl.ARRAY_BUFFER,triangleVertices,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,triangleVertices,gl.DYNAMIC_DRAW,0,triangleVertices.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_VERTEX,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_VERTEX);
gl.bindBuffer(gl.ARRAY_BUFFER,null);


vbo_color=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color);
//gl.bufferData(gl.ARRAY_BUFFER,triangleColor,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,triangleColor,gl.DYNAMIC_DRAW,0,triangleColor.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_COLOR);
gl.bindBuffer(gl.ARRAY_BUFFER,null);


gl.bindVertexArray(null);

cameraCentreZ=cameraPositionZ-1.0;
cameraAngleY=Math.atan(((cameraCentreZ-cameraPositionZ)/(cameraCentreX-cameraPositionX) ));
cameraAngleX=Math.atan(((cameraCentreZ-cameraPositionZ)/(cameraCentreY-cameraPositionY) ));


}


function draw()
{
	// Code
	gl.clear(gl.COLOR_BUFFER_BIT);
	

	gl.useProgram(shaderProgramObject);
	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	/*translateY+=2.0;
	if(translateY>=0.0)
		translateY=-20.0;*/
	translateY=-2.0;
	//CameraImplementation6
	//cameraPositionZ-=0.5;
	if(cameraPositionZ<=-85.0)
		cameraPositionZ=25.0;
	var viewMatrix=mat4.create();
	//cameraCentreX=(cameraCentreX==0.0)?cameraCentreX:(cameraCentreX-0.1);
	//cameraCentreY=(cameraCentreY==0.0)?cameraCentreY:(cameraCentreY-0.1);
	//cameraCentreZ=(cameraCentreZ==0.0)?cameraCentreZ:(cameraCentreZ-0.1);

	var centre=[cameraCentreX,cameraCentreY,cameraCentreZ];
	var cameraUp=[0.0,1.0,0.0];
	var cameraPos=[cameraPositionX,cameraPositionY,cameraPositionZ];//x,y,z
	mat4.lookAt(viewMatrix,cameraPos,centre,cameraUp);

	//viewMatrix=mat4.create();
	//mat4.translate(viewMatrix,viewMatrix,[0.0,0.0,translateZ-0.1]);
	var modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);

	//gl.bindVertexArray(vao);

	//gl.drawArrays(gl.TRIANGLES,0,3);

	//gl.bindVertexArray(null);
	



	road();



	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[2.0,0.0,translateZ]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);
	building(2.0,3.0,1.0);



	
	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[-2.0,0.0,translateZ]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);

/*

	//modelViewMatrix=mat4.create();
	mat4.translate(modelViewMatrix,viewMatrix,[-2.0,0.0,translateZ]);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);
*/
	building(2.0,3.0,1.0);

	

	gl.useProgram(null);



	// Animation Loop
	requestAnimationFrame(draw,canvas);
}

function excessiveBuildings()
{


	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	mat4.translate(modelViewMatrix,modelViewMatrix,[4.5,0.0,translateY-10.0]);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2);

}


function road()
{


var roadLineCoordinates=new Float32Array([

					-1.0,-1.0,40.0, //Appex
					-1.0,-1.0,-40.0, //Left-Bottom
					1.0,-1.0,40.0,	//Right-Bottom
					1.0,-1.0,-40.0

					]);

var roadLineColor=new Float32Array([
					1.0,0.0,0.0, //Appex
					0.0,1.0,0.0, //Left-Bottom
					0.0,0.0,1.0,	//Right-Bottom
					1.0,1.0,1.0
					]);



//vao=gl.createVertexArray();
gl.bindVertexArray(vao);

//vbo=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW,0,roadLineCoordinates.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_VERTEX,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_VERTEX);
gl.bindBuffer(gl.ARRAY_BUFFER,null);



//vbo_color=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color);
//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW,0,roadLineColor.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_COLOR);
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

var buildingVertices=new Float32Array([


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


var buildingColor=new Float32Array([
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
gl.bindVertexArray(vao);

//vbo=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo);
//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,buildingVertices,gl.DYNAMIC_DRAW,0,buildingVertices.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_VERTEX,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_VERTEX);
gl.bindBuffer(gl.ARRAY_BUFFER,null);



//vbo_color=gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color);
//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
gl.bufferData(gl.ARRAY_BUFFER,buildingColor,gl.DYNAMIC_DRAW,0,buildingColor.length);
gl.vertexAttribPointer(WebGLMacros.ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
gl.enableVertexAttribArray(WebGLMacros.ATTRIBUTE_COLOR);
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


function resize()
{
	if(bFullScreen==true)
	{
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	}
	else
	{
	canvas.width=canvas_original_width;
	canvas.height=canvas_original_height;
	}
	
	// Set The ViewPort
	gl.viewport(0,0,canvas.width,canvas.height);

	mat4.perspective(perspectiveProjectionMatrix,45.0,parseFloat(canvas.width)/parseFloat(canvas.height),0.1,100.0);
	
console.log("PerspectiveProjMat"+perspectiveProjectionMatrix);
}


function toggleFullScreen()
{
	var fullscreen_element=
		document.fullscreenElement||
		document.webkitFullscreenElement||
		document.mozFullscreenElement||
		document.msFullscreenElement;

		//If not Fullscreen 
	if(bFullScreen==false)
	{
		if(canvas.RequestFullscreen)
			canvas.RequestFullscreen();
		else if(canvas.mozRequestFullScreen)
			canvas.mozRequestFullScreen();
		else if(canvas.msRequestFullscreen)
			canvas.msRequestFullscreen();
		else if(canvas.webkitRequestFullscreen)
			canvas.webkitRequestFullscreen();
	bFullScreen=true;
	}
	else 
	{
		//Aldready Full screen
		if(document.exitFullscreen)
			document.exitFullscreen();
		else if(document.mozCancelFullScreen)
			document.mozCancelFullScreen();
		else if(document.msExitFullscreen)
			document.msExitFullscreen();
		else if(document.webkitCancelFullscreen)
			document.webkitCancelFullscreen();
	bFullScreen=false;
	}

}	


function uninitialize()

{
if(vbo)
{
gl.deleteBuffer(vbo);
vbo=null;
}
if(vao)
{
gl.deleteBuffer(vao);
vao=null;

}

if(shaderProgramObject)
{

if(fragmentShaderObject)
{
gl.detachShader(shaderProgramObject,fragmentShaderrObject);
gl.deleteShader(fragmentShaderObject);
fragmentShaderObject=null;
}

if(vertexShadeObject)
{
gl.detachShader(shaderProgramObject,vertexShaderObjct);
gl.deleteShader(vertexShaderObjcet);
vertexShaderObjcet=null;

}

gl.deleteProgram(shaderProgramObjcet);
shaderProgramObject=null;
}
}

function keyDown(event)
{
switch(event.keyCode)
{	case 70:
		toggleFullScreen();
		//repaint

		break;

	case 27:
		//Escape---
		unitialize();
		
		window.close();//Might Not Work in Mozilla FireFox
		break;

	case 40://Down Arrow
		cameraPositionZ+=1.0;
		cameraCentreZ=cameraPositionZ-0.1;
		console.log("cameraAngleX"+cameraAngleX+"\ncameraAngleY"+cameraAngleY);
			break;
	case 38://Up Arrow
		cameraPositionZ-=1.0;
		cameraCentreZ=cameraPositionZ-0.1;
		console.log("cameraAngleX"+cameraAngleX+"\ncameraAngleY"+cameraAngleY);
		break;




	case 100://Left NumPad  Arrow 4
		//cameraAngleY=Math.atan(((cameraCentreZ-cameraPositionZ)/(cameraCentreX-cameraPositionX) ));
		cameraAngleY-=0.01;
		cameraCentreX=cameraPositionX+(0.1-Math.abs(cameraCentreY))*Math.cos(cameraAngleY);
		cameraCentreZ=cameraPositionZ+(0.1)*Math.sin(cameraAngleY);
		console.log("cameraCentreX="+cameraCentreX+"cameraCentreZ"+cameraCentreZ+"\ncameraPositionX"+cameraPositionX+"cameraPositionZ:"+cameraCentreZ+"\ncameraAngleY"+cameraAngleY+"\ncameraAngleX"+cameraAngleX);
			break;
	case 102://Right Numpad Arrow 6
		cameraAngleY+=0.01;
		cameraCentreX=cameraPositionX+(0.1-Math.abs(cameraCentreY))*Math.cos(cameraAngleY);
		cameraCentreZ=cameraPositionZ+(0.1)*Math.sin(cameraAngleY);
		console.log("cameraCentreX="+cameraCentreX+"cameraCentreZ"+cameraCentreZ+"\ncameraPositionX"+cameraPositionX+"cameraPositionZ:"+cameraCentreZ+"\ncameraAngleY"+cameraAngleY+"\ncameraAngleX"+cameraAngleX);

		break;

	case 104://Up Numpad Arrow 8
		cameraAngleX+=0.01;
		cameraCentreY=cameraPositionY+(0.1)*Math.cos(cameraAngleX);
		cameraCentreZ=cameraPositionZ+(0.1)*Math.sin(cameraAngleX);
		console.log("cameraCentreY="+cameraCentreY+"cameraCentreZ"+cameraCentreZ+"\ncameraPositionX"+cameraPositionX+"cameraPositionZ:"+cameraCentreZ+"\ncameraAngleX"+cameraAngleX+"\ncameraAngleY"+cameraAngleY);
		break;
	case 98://Down Numpad Arrow 2
	cameraAngleX-=0.01;
		cameraCentreY=cameraPositionY+(0.1)*Math.cos(cameraAngleX);
		cameraCentreZ=cameraPositionZ+(0.1)*Math.sin(cameraAngleX);
		console.log("cameraCentreY="+cameraCentreY+"cameraCentreZ"+cameraCentreZ+"\ncameraPositionX"+cameraPositionX+"cameraPositionZ:"+cameraCentreZ+"\ncameraAngleX"+cameraAngleX+"\ncameraAngleY"+cameraAngleY);
				break;
}
}

function mouseDown()
{
alert("Mouse Is clicked");
}
