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
//1.Ajay's Matrix first Part
var scene_one_Ajay_matrix_part = true;

//3.Bhushan's WebPaper second part
var scene_third_Bhushan_webNews_part = false;
var finishBhushansThirdScene = false;

//4.Nagesh's City fourth Part
//var scene_fourth_Nagesh_city_part = false;
// = false;
var finishNageshsFourthScene = false;

//5.Bharat's paper fourth Part
var scene_fifth_Bharat_paper_part = false;
var finishBharatsFifthScene = false;

//6.Nagesh's City fourth Part
var scene_sixth_Nagesh_city_part = false;

//7.Bhushan's WebPaper second part
var scene_seventh_Bhushan_webNews_part = false;


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
		//1		
		case 49: //1
			/*scene_one_Ajay_matrix_part = true;
			scene_third_Bhushan_webNews_part = false;
			scene_fourth_Nagesh_city_part = false;
			scene_fifth_Bharat_paper_part = false;
			scene_sixth_Nagesh_city_part = false;
			scene_seventh_Bhushan_webNews_part = false;*/
		break;
		case 50://2
			
		break;
		case 51: //3
			//scene_one_Ajay_matrix_part = false;
			scene_third_Bhushan_webNews_part = true;
			/*scene_fourth_Nagesh_city_part = false;
			scene_fifth_Bharat_paper_part = false;
			scene_sixth_Nagesh_city_part = false;
			scene_seventh_Bhushan_webNews_part = false;*/
			
			break;
		case 52: //4
			//scene_third_Bhushan_webNews_part = false;
			/*scene_one_Ajay_matrix_part = false;
			scene_third_Bhushan_webNews_part = false;*/
			//scene_fourth_Nagesh_city_part = true;
			/*scene_fifth_Bharat_paper_part = false;
			scene_sixth_Nagesh_city_part = false;
			scene_seventh_Bhushan_webNews_part = false;*/
			
			break;
		case 53://5
		
		
			/*scene_one_Ajay_matrix_part = false;
			scene_third_Bhushan_webNews_part = false;
			scene_fourth_Nagesh_city_part = false;*/
			scene_fifth_Bharat_paper_part = true;
			/*scene_sixth_Nagesh_city_part = false;
			scene_seventh_Bhushan_webNews_part = false;*/
						
			break;
		case 54://6

			/*scene_one_Ajay_matrix_part = false;
			scene_third_Bhushan_webNews_part = false;
			scene_fourth_Nagesh_city_part = false;
			scene_fifth_Bharat_paper_part = false;
			scene_sixth_Nagesh_city_part = true;
			scene_seventh_Bhushan_webNews_part = false;*/
			break;
		case 55://7

			/*scene_one_Ajay_matrix_part = false;
			scene_third_Bhushan_webNews_part = false;
			scene_fourth_Nagesh_city_part = false;
			scene_fifth_Bharat_paper_part = false;
			scene_sixth_Nagesh_city_part = false;
			scene_seventh_Bhushan_webNews_part = true;*/
			break;
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
			
		//Key D animation is for Ajay's Matrix Part
		case 68:
			if(scene_one_Ajay_matrix_part == true)
			{
				iStart = START;
				fSpeed = 0.4;// * 0.5;// * 5.5;
				fCSpeed = 0.0512;// * 0.5;// * 5.5;
				fCDecrement = 0.1;// * 0.5;// * 5.0;
				bMatrixScene = true;
			}
			break;
			
		/*case 40://Down Arrow
		if(scene_third_Nagesh_city_part == true)
		{
			cameraPositionZ_city+=1.0;
			cameraCentreZ_city=cameraPositionZ_city-0.1;
			console.log("cameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
			
		}
		break;
		case 38://Up Arrow
		if(scene_third_Nagesh_city_part == true)
		{
			cameraPositionZ_city-=1.0;
			cameraCentreZ_city=cameraPositionZ_city-0.1;
			console.log("cameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;*/
		case 100://Left NumPad  Arrow 4
		if(scene_one_Ajay_matrix_part == true)
		{
				iStart = START;
				fSpeed = 0.4;// * 0.5;// * 5.5;
				fCSpeed = 0.0512;// * 0.5;// * 5.5;
				fCDecrement = 0.1;// * 0.5;// * 5.0;
				bMatrixScene = true;
		}
	/*	if(scene_third_Nagesh_city_part == true)
		{
			//cameraAngleY=Math.atan(((cameraCentreZ-cameraPositionZ)/(cameraCentreX-cameraPositionX) ));
			cameraAngleY_city-=0.01;
			cameraCentreX_city=cameraPositionX_city+(0.1-Math.abs(cameraCentreY_city))*Math.cos(cameraAngleY_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleY_city);
			console.log("cameraCentreX="+cameraCentreX_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleY"+cameraAngleY_city+"\ncameraAngleX"+cameraAngleX_city);
		}*/
		break;
		/*case 102://Right Numpad Arrow 6
		if(scene_third_Nagesh_city_part == true)
		{
			cameraAngleY_city+=0.01;
			cameraCentreX_city=cameraPositionX_city+(0.1-Math.abs(cameraCentreY_city))*Math.cos(cameraAngleY_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleY_city);
			console.log("cameraCentreX="+cameraCentreX_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleY"+cameraAngleY_city+"\ncameraAngleX"+cameraAngleX_city);
		}
		break;
		case 104://Up Numpad Arrow 8
		if(scene_third_Nagesh_city_part == true)
		{
			cameraAngleX_city+=0.01;
			cameraCentreY_city=cameraPositionY_city+(0.1)*Math.cos(cameraAngleX_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleX_city);
			console.log("cameraCentreY="+cameraCentreY_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;
		case 98://Down Numpad Arrow 2
		if(scene_third_Nagesh_city_part == true)
		{
			cameraAngleX_city-=0.01;
			cameraCentreY_city=cameraPositionY_city+(0.1)*Math.cos(cameraAngleX_city);
			cameraCentreZ_city=cameraPositionZ_city+(0.1)*Math.sin(cameraAngleX_city);
			console.log("cameraCentreY="+cameraCentreY_city+"cameraCentreZ"+cameraCentreZ_city+"\ncameraPositionX"+cameraPositionX_city+"cameraPositionZ:"+cameraCentreZ_city+"\ncameraAngleX"+cameraAngleX_city+"\ncameraAngleY"+cameraAngleY_city);
		}
		break;*/
	}
	
}

function mouseDown() {
	
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
	//1st part Ajay's Matrix init
	Matrix_Initialize();
	
	//3rd part Bhushan's WebNews init
	OnLine_Paper_init();
	
	//4rth part Nagesh's City init
	City_Initialize();
	initCubeMap();
	
	//5th part Bharat's paper falling
	paper_init();
	
	//7th Bhushan's Reverse WebNews init
	OnLineReverce_Paper_init();
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
	if(scene_one_Ajay_matrix_part == true)
	{
		Matrix_Draw();
	}
	
	if(scene_third_Bhushan_webNews_part == true)
	{
		scrollstart = true;
		OnLine_Paper_draw();
		
	}
	if(finishBhushansThirdScene == true)
	{
		scene_third_Bhushan_webNews_part = false;
		
		drawCubemap();
		//City_Draw();
		City_Draw_Normal();
		
	}
	
	//if(scene_fifth_Bharat_paper_part == true)
	if(finishNageshsFourthScene == true)
	{
		finishBhushansThirdScene = false;
		paper_draw();
		
	}
	
	//if(scene_sixth_Nagesh_city_part == true)
	if(finishBharatsFifthScene == true)
	{
		finishNageshsFourthScene = false;
		drawCubemap();
		City_Draw_Reverse();
	}
	
	if(scene_seventh_Bhushan_webNews_part == true)
	{
		//reverse
		revese = true;
		OnLineReverce_Paper_draw();
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
	
	Matrix_Uninitialize();
	
	OnLine_Paper_unintialize();
	
	City_Uninitialize();
	
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