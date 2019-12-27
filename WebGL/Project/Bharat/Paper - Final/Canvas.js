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

// coordinates for camera
var cameraPosition 	= [0.0, 0.0, 5.1];
var cameraCenter	= [0.0, 0.0, 0.0];
var cameraUp		= [0.0, 1.0, 0.0];

var scene_stop = 0;


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
	{	/*
		case 76: // for 'L' or 'l'
            if(bLKeyPressed==false)
                bLKeyPressed=true;
            else
                bLKeyPressed=false;
			break;
		*/	
		// a
		case 65:
		case 97:
			cameraCenter[0] = cameraCenter[0] - 0.1;
			break;

		// d
		case 68:
		case 100:
				cameraCenter[0] = cameraCenter[0] + 0.1;
			break;
		
		// s
		case 83:
		case 115:
				cameraCenter[1] = cameraCenter[1] - 0.1;
			break;

		// w
		case 87:
		case 119:
				cameraCenter[1] = cameraCenter[1] + 0.1;
			break;

		// q
		case 81:
		case 113:
			cameraUp[0] = cameraUp[0] + 0.1;
			break;

		// e
		case 69:
		case 101:
				cameraUp[0] = cameraUp[0] - 0.1;
			break;
	
		// i
		case 73:
		case 105:
			cameraPosition[2] = cameraPosition[2] - 0.1;
			break;

		// o
		case 79:
		case 111:
				cameraPosition[2] = cameraPosition[2] + 0.1;
			break;

		// j
		case 74:
		case 106:
				cameraPosition[0] = cameraPosition[0] - 0.1;
				cameraCenter[0] = cameraCenter[0] - 0.1;
			break;

		// k
		case 75:
		case 107:
				cameraPosition[0] = cameraPosition[0] + 0.1;
				cameraCenter[0] = cameraCenter[0] + 0.1;
			break;

		// h
		case 72:
		case 104:
				cameraPosition[1] = cameraPosition[1] - 0.1;
				cameraCenter[1] = cameraCenter[1] - 0.1;
			break;

		// l
		case 76:
		case 108:
			cameraPosition[1] = cameraPosition[1] + 0.1;
			cameraCenter[1] = cameraCenter[1] + 0.1;
			break;


		// p
		case 80:
		case 112:
			console.log("position : "+cameraPosition[0]+" "+cameraPosition[1]+" "+cameraPosition[2]);
			console.log("center   : "+cameraCenter[0]+" "+cameraCenter[1]+" "+cameraCenter[2]);
			console.log("up       : "+cameraUp[0]+" "+cameraUp[1]+" "+cameraUp[2]);
			break;
			
		case 70:// for 'F' or 'f'
			toggleFullScreen();
			break;
			
		case 27:// Escape
			uninitialize();
			// close our application's tab
			window.close();// may not work in Firefox but works in Safari and chrome
			break;

		case 90:
		case 122:
			if(scene_stop == 0)
				scene_stop = 1;
			else
				scene_stop = 0;
			break;
	}
	
}

function mouseDown() {
	
}

function init()
{
	toggleFullScreen();
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
	
	paper_init();
	
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
	paper_draw();

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
	paper_unititialize();
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