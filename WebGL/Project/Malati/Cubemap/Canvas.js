// global variables
var canvas=null;
var gl=null; // webgl context
var bFullscreen=false;
var canvas_original_width;
var canvas_original_height;


const WebGLMacros = // when whole 'WebGLMacros' is 'const', all inside it are automatically 'const'
{
	AMC_ATTRIBUTE_POSITION:0,
	AMC_ATTRIBUTE_COLOR:1,
	AMC_ATTRIBUTE_NORMAL:2,
	AMC_ATTRIBUTE_TEXTURE:3,	
};

//common for all
var perspectiveProjectionMatrix;
var bLKeyPressed=false;

//KeysForSeperatePart
//Nagesh's City fourth Part
var scene_four_Nagesh_city_part = true;

// To start animation : To have requestAnimationFrame() to be called "cross-browser" compatible
var requestAnimationFrame = window.requestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.oRequestAnimationFrame ||
							window.msRequestAnimationFrame;

// To stop animation : To have cancelAnimationFrame() to be called "cross-browser" compatible						
var cancelAnimationFrame = window.cancelAnimationFrame || 
							window.webkitCancelAnimationFramee || window.webkitCancelRequestAnimationFrame ||
							window.mozCancelAnimationFrame ||window.mozCancelRequestAnimationFrame ||
							window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
							window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame;	
		

// onload function
function MatrixMain()
{
	// get <canvas> element
	canvas = document.getElementById("MATRIX_RTR");
	
	if(!canvas) {
		console.log("Obtaining Canvas Failed.\n");
	}
	else {
		console.log("Obtaining Canvas Succeeded.\n");
	}
					
	canvas_original_width = canvas.width;
	canvas_original_height = canvas.height;

	// register keyboard's keydown event handler
	window.addEventListener("keydown", keyDown, false);
	window.addEventListener("click", mouseDown, false);
	window.addEventListener("resize", resize, false);

	// initialize WebGL
	init();
	
	// start drawing here as warming-up
	resize();
	draw();
}



function keyDown(event)
{
	 // code
	switch(event.keyCode) 
	{
		case 76: // for 'L' or 'l'
            if(bLKeyPressed==false)
                bLKeyPressed=true;
            else
                bLKeyPressed=false;
            break;
			
		case 70:// for 'F' or 'f'
			toggleFullScreen();
			break;
			
		case 27:// Escape
			uninitialize();
			// close our application's tab
			window.close();// may not work in Firefox but works in Safari and chrome
			break;

		case 40://Down Arrow
		if(scene_four_Nagesh_city_part == true)
		{
			cameraPositionZ_city+=1.0;
			cameraCentreZ_city=cameraPositionZ_city-0.1;
			console.log("cameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
			
		}
		break;
		case 38://Up Arrow
		if(scene_four_Nagesh_city_part == true)
		{
			cameraPositionZ_city-=1.0;
			cameraCentreZ_city=cameraPositionZ_city-0.1;
			console.log("cameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;
		case 100://Left NumPad  Arrow 4
		if(scene_four_Nagesh_city_part == true)
		{
			//cameraAngleY=Math.atan(((cameraCentreZ-cameraPositionZ)/(cameraCentreX-cameraPositionX) ));
			cameraAngleY_city-=0.01;
			cameraCentreX_city=cameraPositionX_city+(0.1-Math.abs(cameraCentreY_city))*Math.cos(cameraAngleY_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleY_city);
			console.log("cameraCentreX="+cameraCentreX_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleY"+cameraAngleY_city+"\ncameraAngleX"+cameraAngleX_city);
		}
		break;
		case 102://Right Numpad Arrow 6
		if(scene_four_Nagesh_city_part == true)
		{
			cameraAngleY_city+=0.01;
			cameraCentreX_city=cameraPositionX_city+(0.1-Math.abs(cameraCentreY_city))*Math.cos(cameraAngleY_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleY_city);
			console.log("cameraCentreX="+cameraCentreX_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleY"+cameraAngleY_city+"\ncameraAngleX"+cameraAngleX_city);
		}
		break;
		case 104://Up Numpad Arrow 8
		if(scene_four_Nagesh_city_part == true)
		{
			cameraAngleX_city+=0.01;
			cameraCentreY_city=cameraPositionY_city+(0.1)*Math.cos(cameraAngleX_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleX_city);
			console.log("cameraCentreY="+cameraCentreY_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;
		case 98://Down Numpad Arrow 2
		if(scene_four_Nagesh_city_part == true)
		{
			cameraAngleX_city-=0.01;
			cameraCentreY_city=cameraPositionY_city+(0.1)*Math.cos(cameraAngleX_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleX_city);
			console.log("cameraCentreY="+cameraCentreY_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;
	}
}

function mouseDown()
{
//alert("Mouse Is clicked");
}

function init()
{
	// code
	// get WebGL 2.0 context
	gl =canvas.getContext("webgl2");
	if(gl == null)// failed to get context
	{
		console.log("Falied to get redering context For WebGL");
		return;
	}
	
	gl.viewportWidth = canvas.width;
	gl.viewportHeight = canvas.height;
	
	
	//IMPORTANT => call your initialize here.
	//perFragmentInitialize();
	
	City_Initialize();
	initCubeMap();
    
	
	// set clear color
	gl.clearColor(0.0, 0.0, 0.0, 1.0);	// blue
	
	// initialize projection matrix
	perspectiveProjectionMatrix = mat4.create();
	
}


function draw()
{
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	//IMPORTANT => call your draw here.
	//perFragmentDraw();
	if(scene_four_Nagesh_city_part == true)
	{
	drawCubemap();
	City_Draw();
	}
	
	requestAnimationFrame(draw, canvas);
	
}

function resize()
{
	// code
	if (bFullscreen) 
	{
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}
	else 
	{
		canvas.width = canvas_original_width;
		canvas.height = canvas_original_height;
	}
	
	gl.viewport(0, 0, canvas.width, canvas.height);
	
	mat4.perspective(perspectiveProjectionMatrix, 45.0, (parseFloat(canvas.width)/parseFloat(canvas.height)), 0.1, 100.0);
}

function uninitialize() 
{
	
	//IMPORTANT => Call your uninitialize here.
	//perFragmentUninitialize();
	if(scene_four_Nagesh_city_part == true)
	{
		City_Uninitialize();
		Cubemap_Uninitialize();
	}
	
}

function toggleFullScreen() {
	// code
	var fullscreen_element=document.fullscreenElement ||
						   document.webkitFullscreenElement ||
						   document.mozFullScreenElement   ||
						   document.msFullscreenElement  ||
						   null;
	
	// if not fullscreen
	 if(fullscreen_element == null)
	 {
		 if(canvas.requestFullscreen)
			  canvas.requestFullscreen();
		  else if(canvas.mozRequestFullScreen)
			  canvas.mozRequestFullScreen();
		  else if(canvas.webkitRequestFullscreen)
			  canvas.webkitRequestFullscreen();
		  else if(canvas.msRequestFullscreen)
			  canvas.msRequestFullscreen();
		  
		  bFullscreen=true;
	 }
	else
	 {
		  if(document.exitFullscreen)
			  document.exitFullscreen();
		  else if(document.mozCancelFullScreen)
			  document.mozCancelFullScreen();
		  else if(document.webkitExitFullscreen)
			  document.webkitExitFullscreen();
		  else if(document.msExitFullscreen)
			  document.msExitFullscreen();
		  bFullscreen=false;
	 }
}


