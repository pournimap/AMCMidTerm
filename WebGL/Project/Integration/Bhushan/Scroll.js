//Gloable variable

var copyVideo = false;

var Video_vertexShaderObject;
var Video_fragmentShaderObject;
var Video_shaderProgramObject;

var video_vao_rectangle;
var video_vbo_rectangle;
var video_vbo_texture;

var video_mvpUniform;
var video_uniform_texture0_sampler;



var TaskBar;
var TitleBar;
var PaperBody;

//var bodytranslate = 0.0;
var bodytranslate = -6.7;
var lastbodytranslate = 5.7;
var videoscenbodytranslate = 1.2;
var stadybodytranslate = 0.5;
var firstflag = false;
var secondflag = false;
var Baground;

var Video_texture ;
var video;
var flag = false;
var videostart = false;
var count = 0;
var scalex = 0.53;
var scaley =  0.35;
var scalez = 0.15;

var translatex = -0.6;
var translatey =  -0.42;
var translatez = -3.8;

var paperXtranslate = 0.0;
var paperYtranslate = -1.98;
var paperZtranslate = -3.7;
var paperXscale = 1.55;
var paperYscale = -0.1;
var paperZscale = 1.5;


var angle = 0.0;
var scrollstart = false;

function OnLine_Paper_init()
{
	//code 
		
	//vertex shader 
	var vertexShaderSourceCode=
	"#version 300 es"+
	"\n"+
	"in vec4 vPosition;" +
		"in vec2 vTexture0_Coord;" +
		"out vec2 out_texture0_coord;"+
		"uniform mat4 u_mvp_matrix;" +
		"void main(void)" +
		"{" +
		"gl_Position = u_mvp_matrix * vPosition;" +
		"out_texture0_coord = vTexture0_Coord;" +
		"}";
	Video_vertexShaderObject=gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(Video_vertexShaderObject, vertexShaderSourceCode);
	gl.compileShader(Video_vertexShaderObject);
	if(gl.getShaderParameter(Video_vertexShaderObject, gl.COMPILE_STATUS)==false)
	{
		var error = gl.getShaderInfoLog(Video_vertexShaderObject);
		if(error.length > 0)
		{
			alert(error);
			unitialize();
		}
	}
	
	// fragment shader
	var fragmentShaderSourceCode=
	"#version 300 es"+
	"\n"+
	"precision highp float;"+
	"in vec2 out_texture0_coord;"+
	"uniform highp sampler2D u_texture0_sampler;"+
	"out vec4 fragColor;" +
		
		"void main(void)" +
		"{" +
		"fragColor = texture(u_texture0_sampler,out_texture0_coord);" +
		"}";
	Video_fragmentShaderObject=gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(Video_fragmentShaderObject, fragmentShaderSourceCode);
	gl.compileShader(Video_fragmentShaderObject);
	if(gl.getShaderParameter(Video_fragmentShaderObject, gl.COMPILE_STATUS)==false)
	{
		var error=gl.getShaderInfoLog(Video_fragmentShaderObject);
		if(error.length>0)
		{
			alert(error);
			OnLine_Paper_unintialize();
		}
	}
	
	//shader program
	Video_shaderProgramObject=gl.createProgram();
	gl.attachShader(Video_shaderProgramObject, Video_vertexShaderObject);
	gl.attachShader(Video_shaderProgramObject, Video_fragmentShaderObject);
	
	//pre-link binding of shader program object with vertex shader attributes 
	gl.bindAttribLocation(Video_shaderProgramObject,WebGLMacros.AMC_ATTRIBUTE_POSITION,"vPosition");
	gl.bindAttribLocation(Video_shaderProgramObject,WebGLMacros.AMC_ATTRIBUTE_TEXTURE,"vTexture0_Coord");
	//linking
	gl.linkProgram(Video_shaderProgramObject);
	if(!gl.getProgramParameter(Video_shaderProgramObject, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(Video_shaderProgramObject);
		if(error.length > 0)
		{
			alert(error);
			OnLine_Paper_unintialize();
		}
	}
	
	// get MVP uniform location 
	video_mvpUniform=gl.getUniformLocation(Video_shaderProgramObject, "u_mvp_matrix");
	video_uniform_texture0_sampler=gl.getUniformLocation(Video_shaderProgramObject, "u_texture0_sampler");
	
	// ****** vertices, colors, shader attribs, vbo_triangle, vao_triangle intialization ****
	
											
	var rectangleVertices = new Float32Array([ 
										 2.4, 1.4, 0.0,
										-2.4, 1.4, 0.0,
										-2.4, -1.4, 0.0,
										2.4, -1.4, 0.0 
										]);
										
	var textcoord = new Float32Array([
										1.0,1.0,
										0.0,1.0,
										0.0,0.0,
										1.0,0.0
										]);									
			
	video_vao_rectangle=gl.createVertexArray();
	gl.bindVertexArray(video_vao_rectangle);
	
	video_vbo_rectangle=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, video_vbo_rectangle);
	gl.bufferData(gl.ARRAY_BUFFER, rectangleVertices, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,
							3, //3 is for X,Y,Z co-ordinate in our rectangleVertices array
							gl.FLOAT,
							false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	
	
	
	
	video_vbo_texture=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, video_vbo_texture);
	gl.bufferData(gl.ARRAY_BUFFER, textcoord, gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE,
							2, //3 is for X,Y,Z co-ordinate in our triangleVertices array
							gl.FLOAT,
							false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	
	gl.bindVertexArray(null);
	
	//Depth test will always be enable
	gl.enable(gl.DEPTH_TEST);
	
	//Load TaskBar
	TaskBar = gl.createTexture();
	TaskBar.image = new Image();
	TaskBar.image.src = "resources/webNews/TaskBar.png";
	TaskBar.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, TaskBar);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,TaskBar.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
	}
	
	
	TitleBar = gl.createTexture();
	TitleBar.image = new Image();
	TitleBar.image.src = "resources/webNews/TitleBar.png";
	TitleBar.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, TitleBar);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,TitleBar.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
	}
	
	PaperBody = gl.createTexture();
	PaperBody.image = new Image();
	PaperBody.image.src = "resources/webNews/PaperBody.png";
	PaperBody.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, PaperBody);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,PaperBody.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
	}
	
	
	
	Baground = gl.createTexture();
	Baground.image = new Image();
	Baground.image.src = "resources/webNews/Baground.png";
	Baground.image.onload = function()
	{
		gl.bindTexture(gl.TEXTURE_2D, Baground);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE,Baground.image);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,gl.LINEAR);
		gl.bindTexture(gl.TEXTURE_2D, null);
		
	}
	
	Video_texture = initVideoTexture();
	
	video = setupVideo('resources/webNews/AddVideo.mp4');
}

//
// Initialize a Video_texture.
//
function initVideoTexture() {
  const Video_texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, Video_texture);

  // Because video havs to be download over the internet
  // they might take a moment until it's ready so
  // put a single pixel in the Video_texture so we can
  // use it immediately.
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 1;
  const height = 1;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  const pixel = new Uint8Array([0, 0, 255, 255]);  // opaque blue
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                width, height, border, srcFormat, srcType,
                pixel);

  // Turn off mips and set  wrapping to clamp to edge so it
  // will work regardless of the dimensions of the video.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

  return Video_texture;
}

function setupVideo(url) {
  const video = document.createElement('video');

  var playing = false;
  var timeupdate = false;

  video.autoplay = true;
  video.muted = true;
  video.loop = false;
  copyVideo = true;

  // Waiting for these 2 events ensures
  // there is data in the video

  /*video.addEventListener('playing', function() {
     playing = true;
     checkReady();
  }, true);

  video.addEventListener('timeupdate', function() {
     timeupdate = true;
     checkReady();
  }, true);*/

  video.src = url;
  video.play();

  function checkReady() {
    if (playing && timeupdate) {
      copyVideo = true;
    }
	
	copyVideo = true;
  }
  video.pause();
  return video;
}



// copy the video Video_texture
//
function updateTexture() {
  const level = 0;
  const internalFormat = gl.RGBA;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.bindTexture(gl.TEXTURE_2D, Video_texture);
  gl.texImage2D(gl.TEXTURE_2D, level, internalFormat,
                srcFormat, srcType, video);
}

function OnLine_Paper_draw()
{
	
	//code
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	
	gl.useProgram(Video_shaderProgramObject);
	
	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	var ViewMatrix=mat4.create();
	//Draw Title Bar	
	mat4.identity(modelViewMatrix);
	mat4.identity(modelViewProjectionMatrix);
	mat4.translate(modelViewMatrix,modelViewMatrix,[paperXtranslate,1.49,paperZtranslate]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [paperXscale, paperYscale-0.31, paperZscale]);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);
	gl.uniformMatrix4fv(video_mvpUniform, false,modelViewProjectionMatrix);
	gl.bindTexture(gl.TEXTURE_2D, TitleBar);
	gl.uniform1i(video_uniform_texture0_sampler,0);
	gl.bindVertexArray(video_vao_rectangle);
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	gl.useProgram(null);
	
	
	// Draw PaperBody
	gl.useProgram(Video_shaderProgramObject);
	
	mat4.identity(modelViewMatrix);
	mat4.identity(modelViewProjectionMatrix);
	mat4.translate(modelViewMatrix,modelViewMatrix,[paperXtranslate-0.05,bodytranslate,paperZtranslate-0.1]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [1.05, 5.5, 1.0]); 
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);
	gl.uniformMatrix4fv(video_mvpUniform, false,modelViewProjectionMatrix);
	gl.bindTexture(gl.TEXTURE_2D, PaperBody);
	gl.uniform1i(video_uniform_texture0_sampler,0);
	gl.bindVertexArray(video_vao_rectangle);
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	gl.useProgram(null);
	
	
	// Draw Baground
	gl.useProgram(Video_shaderProgramObject);
	
	mat4.identity(modelViewMatrix);
	mat4.identity(modelViewProjectionMatrix);
	mat4.translate(modelViewMatrix,modelViewMatrix,[paperXtranslate-0.05,0.0,paperZtranslate-1.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [5.0, 5.0, 5.0]); 
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);
	gl.uniformMatrix4fv(video_mvpUniform, false,modelViewProjectionMatrix);
	gl.bindTexture(gl.TEXTURE_2D, Baground);
	gl.uniform1i(video_uniform_texture0_sampler,0);
	gl.bindVertexArray(video_vao_rectangle);
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	gl.useProgram(null);
	
	
	// Draw Task Bar
	gl.useProgram(Video_shaderProgramObject);
	
	mat4.identity(modelViewMatrix);
	mat4.identity(modelViewProjectionMatrix);
	
	mat4.translate(modelViewMatrix,modelViewMatrix,[paperXtranslate,paperYtranslate,paperZtranslate]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [paperXscale, paperYscale, paperZscale]); 
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);
	gl.uniformMatrix4fv(video_mvpUniform, false,modelViewProjectionMatrix);
	gl.bindTexture(gl.TEXTURE_2D, TaskBar);
	gl.uniform1i(video_uniform_texture0_sampler,0);
	gl.bindVertexArray(video_vao_rectangle);
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	gl.useProgram(null);
	
	
	
	
			
	//animation loop
	if (copyVideo) {
      updateTexture();
    }
	
	
    
	
	if (scrollstart == true)
	{
		if((lastbodytranslate > bodytranslate)&&(firstflag == false)&&(secondflag == false))
		{
			bodytranslate = bodytranslate + 0.03;
			
		}
		else if (secondflag == false)
		{
			firstflag = true;
		}
		
		
		if((firstflag == true)&&(videoscenbodytranslate < bodytranslate ))
		{
			bodytranslate = bodytranslate - 0.04;
			
		}
		else if((firstflag == true)&&(videoscenbodytranslate > bodytranslate ))
		{
			secondflag = true;
			firstflag = false;
		}
		
		
		if(secondflag == true)
		{
			if(stadybodytranslate < bodytranslate )
			{
				bodytranslate = bodytranslate - 0.001;
				
			}
			else if(stadybodytranslate > bodytranslate)
			{
				videostart = true;
				video.play();
				 video.loop = false;
			}
			
		}
	}
	
	
	if(videostart == true)
	{
		RenderVideo();
		
	}
	
	
}




function RenderVideo() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things
  
  var modelViewProjectionMatrix=mat4.create();
  // Clear the canvas before we start drawing on it.

  //gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 45 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [translatex, translatey ,paperZtranslate-0.1]);  // amount to translate
				/* if(flag == true)
				 {
					 mat4.rotate(modelViewMatrix,  // destination matrix
					modelViewMatrix,  // matrix to rotate
					angle,     // amount to rotate in radians
					[0, 1, 0]);       // axis to rotate around (Z)
					
					scalex = scalex + 0.001;
					scaley = scaley + 0.001;
					scalez = scalez + 0.001;
					angle = angle + 0.01;
				 }*/
 /* mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              cubeRotation * .7,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)*/

  //mat4.rotateZ(modelViewMatrix,modelViewMatrix,Math.PI);
  mat4.scale(modelViewMatrix,     
                 modelViewMatrix,     
                 [scalex, scaley, scalez]); 
  

  /*mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              3.14,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)*/

  
  // Tell WebGL to use our program when drawing

  gl.useProgram(Video_shaderProgramObject);

  // Set the shader uniforms

	mat4.multiply(modelViewProjectionMatrix,projectionMatrix,modelViewMatrix);
	gl.uniformMatrix4fv(video_mvpUniform, false,modelViewProjectionMatrix);
  

  // Specify the Video_texture to map onto the faces.

  // Tell WebGL we want to affect Video_texture unit 0
  gl.activeTexture(gl.TEXTURE0);

  


  gl.bindTexture(gl.TEXTURE_2D, Video_texture);
	gl.uniform1i(video_uniform_texture0_sampler,0);
	gl.bindVertexArray(video_vao_rectangle);
	
	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	
	gl.bindVertexArray(null);
  // Update the rotation for the next VideoScene_draw
  
  if(count > 1910)
  {
	  flag = true;
	  video.pause();
  }
  
  if(flag == true)
  {
	  paperZtranslate = paperZtranslate+0.01;
	  bodytranslate = bodytranslate + 0.0025;
	  translatex = translatex + 0.0017;
	  translatey = translatey + 0.0012;
	  paperXtranslate = paperXtranslate + 0.0025;
  }
  
  if(paperZtranslate > 0.0)
  {
	  paperZtranslate = 0.1;
	  finishBhushansThirdScene = true;
	  videostart = false;
	  
  }
  
  
	count++;

  //cubeRotation += deltaTime;
}


function OnLine_Paper_unintialize()
{
	//code
	if(video_vao_rectangle)
	{
		gl.deleteVertexArray(video_vao_rectangle);
		video_vao_rectangle = null;
	}
	
	if(video_vbo_rectangle)
	{
		gl.deleteBuffer(video_vbo_rectangle);
		video_vbo_rectangle=null;
	}
	
	if(video_vbo_texture)
	{
		gl.deleteBuffer(video_vbo_texture);
		video_vbo_texture=null;
	}
	
	if(Video_shaderProgramObject)
	{
		if(Video_fragmentShaderObject)
		{
			gl.detachShader(Video_shaderProgramObject, Video_fragmentShaderObject);
			gl.deleteShader(Video_fragmentShaderObject);
			Video_fragmentShaderObject=null;
		}
		if(Video_vertexShaderObject)
		{
			gl.detachShader(Video_shaderProgramObject, Video_vertexShaderObject);
			gl.deleteShader(Video_vertexShaderObject);
			Video_vertexShaderObject=null;
		}
		
		gl.deleteProgram(Video_shaderProgramObject);
		Video_shaderProgramObject = null;
	}
	
}

