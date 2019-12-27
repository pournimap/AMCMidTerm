// For Shader 
var shaderProgramObject_city;
var vertexShaderObject_city;
var fragmentShaderObject_city;

var vao_city;
var vbo_city;
var vbo_color_city;
var vbo_texture_city;
var mvpUniform_city;

//Stack
var stackMatrix_city;
var sizeStrackMatrix_city=0;

var translateX_city=0.0;
var translateZ_city=-25.0;
var translateY_city=0.0;
var cameraPositionZ_city=20.0;
var cameraPositionX_city=0.0;
var cameraPositionY_city=0.0;
var cameraAngleX_city=0.0;
var cameraAngleY_city=0.0;
var cameraCentreX_city=0.0;
var cameraCentreY_city=10.0;
var cameraCentreZ_city=-85.0;


var centre;
var cameraPos;
var cameraUp;


//var normalFlow=true;


var texture_building1=0;
var texture_building2=0;
var texture_building3=0;
var texture_building4=0;
var texture_building5=0;
var texture_building6=0;
var texture_road=0;
var texture_astromedicomp=0;

var lookTowardsMainFlex=0;

var uniform_sampler2d;
var normalFlowNageshScene;

function City_Initialize()
{	
	var vertexShaderSourceCode=
	"#version 300 es"+
	"\n"+
	"in vec4 vPosition;" +
	"in vec2 inTexcoord;"+
	"out vec2 outTexcoord;"+
	"in vec3 vColor;" +
	"out vec3 outColor;"+
	"uniform mat4 u_mvp_uniform;"+
	"void main()"+
	"{"+
	"outColor=vColor;"+
	"gl_Position=u_mvp_uniform * vPosition;"+
	"outTexcoord=inTexcoord;"+
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
	"in vec2 outTexcoord;"+
	"uniform highp sampler2D u_texcoord;"+
	"void main(void)"+
	"{"+
	"fragColor=texture(u_texcoord,outTexcoord);"+
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
	gl.bindAttribLocation(shaderProgramObject_city,WebGLMacros.AMC_ATTRIBUTE_TEXTURE,"inTexcoord");


	//Linking the Program
	gl.linkProgram(shaderProgramObject_city);
	if(!gl.getProgramParameter(shaderProgramObject_city,gl.LINK_STATUS))
	{
		var error=gl.getProgramInfoLog(shaderProgramObject_city)
		if(error.length>0)
		{
			alert("Shader Program Link Error:"+error);
			City_Uninitialize();
		}
	}


	mvpUniform_city=gl.getUniformLocation(shaderProgramObject_city,"u_mvp_uniform");
	uniform_sampler2d=gl.getUniformLocation(shaderProgramObject_city,"u_texcoord");
	

	texture_building1=gl.createTexture();
	texture_building1.image=new Image();
	texture_building1.image.src="resources/City/textureBuilding1.jpg";
	texture_building1.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building1);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building1.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	texture_building2=gl.createTexture();
	texture_building2.image=new Image();
	texture_building2.image.src="resources/City/textureBuilding2.jpg";
	texture_building2.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building2);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building2.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	
	texture_building3=gl.createTexture();
	texture_building3.image=new Image();
	texture_building3.image.src="resources/City/textureBuilding3.jpg";
	texture_building3.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building3);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building3.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	texture_building4=gl.createTexture();
	texture_building4.image=new Image();
	texture_building4.image.src="resources/City/textureBuilding4.jpg";
	texture_building4.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building4);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building4.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	texture_building5=gl.createTexture();
	texture_building5.image=new Image();
	texture_building5.image.src="resources/City/textureBuilding5.jpg";
	texture_building5.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building5);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building5.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	texture_building6=gl.createTexture();
	texture_building6.image=new Image();
	texture_building6.image.src="resources/City/textureBuilding6.jpg";
	texture_building6.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_building6);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_building6.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}
	
	
	texture_road=gl.createTexture();
	texture_road.image=new Image();
	texture_road.image.src="resources/City/Roads.png";
	texture_road.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_road);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_road.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}


	texture_astromedicomp=gl.createTexture();
	texture_astromedicomp.image=new Image();
	texture_astromedicomp.image.src="resources/City/textureAstromedicomp.png";
	texture_astromedicomp.image.onload=function ()
	{
	
		gl.bindTexture(gl.TEXTURE_2D,texture_astromedicomp);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);
		gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texture_astromedicomp.image);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D,null);
	
	}



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
				
	var triangleTexture_city=new Float32Array([
					1.0,1.0,
					0.0,1.0,
					0.0,0.0
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



	vbo_texture_city=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_texture_city);
	//gl.bufferData(gl.ARRAY_BUFFER,triangleColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,triangleTexture_city,gl.DYNAMIC_DRAW,0,triangleTexture_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);

	

	gl.bindVertexArray(null);

	//cameraCentreZ_city=cameraPositionZ_city-1.0;
	cameraAngleY_city=Math.atan(((cameraCentreZ_city-cameraPositionZ_city)/(cameraCentreX_city-cameraPositionX_city) ));
	cameraAngleX_city=Math.atan(((cameraCentreZ_city-cameraPositionZ_city)/(cameraCentreY_city-cameraPositionY_city) ));



	 centre=[cameraCentreX_city,cameraCentreY_city,cameraCentreZ_city];

	 cameraUp=[0.0,1.0,0.0];
	 cameraPos=[cameraPositionX_city,cameraPositionY_city,cameraPositionZ_city];//x,y,z


	gl.clearColor(0.6017,0.4627,0.3255,1.0);

	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);

}
function City_Draw_Normal()
{
	normalFlowNageshScene=true;
	City_Draw();
}

function City_Draw_Reverse()
{
	
	normalFlowNageshScene=false;
	City_Draw();
}


function City_Draw()
{
	// Set Clear Color
	//gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);

	gl.useProgram(shaderProgramObject_city);
	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	/*translateY+=2.0;
	if(translateY>=0.0)
		translateY=-20.0;*/
	translateY_city=-2.0;
	var normalFlowSlowSteps=1.0;
	if(cameraPositionZ_city<=-30.0)
	normalFlowSlowSteps=(40.0+cameraPositionZ_city)/10.0;
	
	var viewMatrix=mat4.create();
	
	if(normalFlowNageshScene==true)
	{
		if(cameraPositionZ_city>=-39.9)
		{
			cameraPositionZ_city-=(normalFlowSlowSteps)*0.1;
			
		}
		else if(lookTowardsMainFlex<100)
		{
			lookTowardsMainFlex++;
		}
		else if(cameraPositionZ_city>=-59)
		{
			cameraPositionZ_city-=0.1;
			cameraPositionY_city+=(0.1)*(8.0/20.0);
			
		}
		else
		{
			normalFlowNageshScene=false;
		}
		
	}	
	else
	{
		var multFactor=5.0;
		if(cameraPositionZ_city<=-40.0)
		{
			
			cameraPositionZ_city+=0.1;
			cameraPositionY_city-=(0.1)*(8.0/20.0);
		}
		else if(cameraPositionZ_city<=20.0)
		{
			cameraPositionZ_city+=multFactor*(0.1);
		}
		else
		{
			normalFlowNageshScene=true;
		}
		
	}
		  centre=[cameraCentreX_city,cameraCentreY_city,cameraCentreZ_city];
	 cameraPos=[cameraPositionX_city,cameraPositionY_city,cameraPositionZ_city];//x,y,z


	mat4.lookAt(viewMatrix,cameraPos,centre,cameraUp);

	//viewMatrix=mat4.create();
	//mat4.translate(viewMatrix,viewMatrix,[0.0,0.0,translateZ-0.1]);
	var modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);


	

	road();
	
	
	 gl.bindTexture(gl.TEXTURE_2D,texture_building1);
	 gl.uniform1i(uniform_sampler2d,0);

	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[2.0,0.0,translateZ_city]);

	//Adjustment

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);


	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	//building(2.0,3.0,1.0,1);



	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-2.0,0.0,translateZ_city]);
	
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	//building(2.0,3.0,1.0,2);


	//Building Behind the Flex



	
	
	
	excessiveBuildings(viewMatrix);

	gl.useProgram(null);

}

 


function excessiveBuildings(viewMatrix)
{

	var modelMatrix=mat4.create();
	var modelViewMatrix=mat4.create();
	var modelViewProjectionMatrix=mat4.create();
	
	
	
	
	//In Between Origin And Initial Camera Position
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+5.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,1);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+2.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,2);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+5.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,3);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+4.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,4);
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+5.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,5);
		
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+10.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,20.0,2.2,6);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+18.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,1);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+18.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,2);
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+15.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,3);
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city+20.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,4);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+15.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,5);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+12.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,6);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city+22.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,1);
	
	
	//Origin and Further
	modelMatrix=mat4.create();

	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city-5.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,2);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-2.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,8.0,2.2,3);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-2.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-3.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,8.0,2.2,5);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city-10.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(3.5,8.0,2.2,6);
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[7.5,0.0,translateZ_city-4.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,25.0,2.2,1);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-10.5,0.0,translateZ_city-1.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,2.2,2);
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-14.5,0.0,translateZ_city-4.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,5.2,3);
	
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[10.5,0.0,translateZ_city-4.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,2.2,4);
	
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-17,0.0,translateZ_city-8.0])
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,2.2,5);
	
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-10.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,2.2,6);
	
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-10.5,0.0,translateZ_city-1.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,15.0,2.2,1);
	
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[5.5,0.0,translateZ_city-20.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,2);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-20.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,3);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-13.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,5);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city-13.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,13.0,2.2,2);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,translateZ_city-17.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,3);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,translateZ_city-17.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,3);
	
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-23.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[5.5,0.0,translateZ_city-23.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-28.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,2);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[5.5,0.0,translateZ_city-28.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,6);
	
	
	//Buildings Parallel To the Y Junstion
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-33.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	modelMatrix=mat4.create()
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-36.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	
	modelMatrix=mat4.create()
	mat4.translate(modelMatrix,modelMatrix,[5.5,0.0,translateZ_city-33.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	
	modelMatrix=mat4.create()
	mat4.translate(modelMatrix,modelMatrix,[5.5,0.0,translateZ_city-36.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,10.0,2.2,4);
	
	
	
	
	modelMatrix=mat4.create()
	mat4.translate(modelMatrix,modelMatrix,[-5.5,0.0,translateZ_city-43.0]);
	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);
	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(4.5,40.0,2.2,4);
	
	
	
	//Buildings Behind Flex 
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[-3.5,0.0,-25.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,15.0,2.0,5);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[-2.5,0.0,-15.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(2.0,10.0,1.0,1);
	
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[-4.5,0.0,-8.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,10.0,2.0,2);
	
	
	
	//Right Side
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,-4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[3.5,0.0,-35.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,15.0,2.0,3);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,-4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[3.5,0.0,-27.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,12.0,2.0,6);
	
	
	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,-4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[2.5,0.0,-20.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);

	building(2.0,8.0,2.0,5);


	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,-4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[3.5,0.0,-17.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,8.0,2.0,1);



	modelMatrix=mat4.create();
	mat4.translate(modelMatrix,modelMatrix,[0.0,0.0,translateZ_city-30.0]);
	mat4.rotateY(modelMatrix,modelMatrix,-4.0/30.0);
	mat4.translate(modelMatrix,modelMatrix,[4.5,0.0,-8.0]);

	mat4.multiply(modelViewMatrix,viewMatrix,modelMatrix);

	mat4.multiply(modelViewProjectionMatrix,perspectiveProjectionMatrix,modelViewMatrix);

	gl.uniformMatrix4fv(mvpUniform_city,false,modelViewProjectionMatrix);
	
	building(3.0,10.0,2.0,2);
	
	
}



function road()
{

	 gl.bindTexture(gl.TEXTURE_2D,texture_road);
	 gl.uniform1i(uniform_sampler2d,0);

	var roadLineCoordinates_city=new Float32Array([

					-1.0,-1.0,40.0, //Appex
					-1.0,-1.0,-30.0, //Left-Bottom
					1.0,-1.0,-30.0,
					1.0,-1.0,40.0


					]);

	var roadLineColor_city=new Float32Array([
					1.0,0.0,0.0,
					0.0,1.0,0.0, 
					0.0,0.0,1.0,	
					1.0,1.0,1.0
					]);

	// Junction Point Y Point
	
	var slopeRoad=4.0/30;
	var roadWidth=3.0;
	var distance=10.0;
	
	var roadLineYJunction_city=new Float32Array([

					// -1.0,-1.0,-30.0, 
					// -5.0,-1.0,-60.0,
					// -2.0,-1.0,-60.0,
					// 0.0,-1.0,-30.0,
					// 1.0,-1.0,-30.0,
					// 5.0,-1.0,-60.0,
					// 2.0,-1.0,-60.0,
					// 0.0,-1.0,-30.0
					
					-1.0,-1.0,-30.0, 
					-7.0,-1.0,-80.0,
					-3.0,-1.0,-80.0,
					0.0,-1.0,-30.0,
					1.0,-1.0,-30.0,
					7.0,-1.0,-80.0,
					3.0,-1.0,-80.0,
					0.0,-1.0,-30.0

					]);
	var roadLineYJunctionColor_city=new Float32Array([
					1.0,1.0,0.0,
					0.0,1.0,1.0,
					1.0,0.0,1.0,
					0.0,0.0,1.0,
					1.0,1.0,0.0,
					0.0,1.0,1.0,
					1.0,0.0,1.0,
					0.0,0.0,1.0
					]);



	//vao=gl.createVertexArray();
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates_city,gl.DYNAMIC_DRAW,0,roadLineCoordinates_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineColor_city,gl.DYNAMIC_DRAW,0,roadLineColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);




	//Y Junction Left Drawing
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineYJunction_city,gl.DYNAMIC_DRAW,0,roadLineYJunction_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,roadLineYJunctionColor_city,gl.DYNAMIC_DRAW,0,roadLineYJunctionColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.drawArrays(gl.TRIANGLE_FAN,4,4);

	gl.bindVertexArray(null);
	
	
	//YJunction Building
		 	//console.log("this");

	 gl.bindTexture(gl.TEXTURE_2D,texture_building6);

	 gl.uniform1i(uniform_sampler2d,0);
	
	var YJunctionBuilding=new Float32Array([
			
			0.0,8.0,-35.0,
			0.0,-1.0,-35.0,
			1.5,-1.0,-55.0,
			1.0,8.0,-55.0,
			
			0.0,8.0,-35.0,
			0.0,-1.0,-35.0,
			-1.5,-1.0,-55.0,
			-1.0,8.0,-55.0
			
					]);
					
	var YJunctionBuildingColor=new Float32Array([
			
			1.0,0.0,0.0,
			1.0,1.0,0.0,
			0.0,1.0,1.0,
			1.0,1.0,1.0,
			
			
			1.0,0.0,0.0,
			1.0,1.0,0.0,
			0.0,1.0,1.0,
			1.0,1.0,1.0
			
					]);
	
	
	
	
	//Y Junction Left Drawing
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,YJunctionBuilding,gl.DYNAMIC_DRAW,0,YJunctionBuilding.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,YJunctionBuildingColor,gl.DYNAMIC_DRAW,0,YJunctionBuildingColor.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,8);
	gl.bindVertexArray(null);
	
	
	//Flex
	
	 gl.bindTexture(gl.TEXTURE_2D,texture_astromedicomp);

	 gl.uniform1i(uniform_sampler2d,0);
	
	var Flex=new Float32Array([
			
			3.0,10.0,-35.0,
			-3.0,10.0,-35.0,
			-3.0,5.0,-35.0,
			3.0,5.0,-35.0

					]);
					
	var FlexColor=new Float32Array([
			
			1.0,1.0,1.0,
			1.0,1.0,1.0,
			1.0,1.0,1.0,
			1.0,1.0,1.0
					]);
					
					
					
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,Flex,gl.DYNAMIC_DRAW,0,Flex.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FlexColor,gl.DYNAMIC_DRAW,0,FlexColor.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	
	
	
	
	//Front Flex
	var FrontFlexZ=25.0
	var FrontFlexLeftX=-12.0;
	var FrontFlexBottomY=3.0;
	var FrontFlexWidth=10.0;
	var FrontFlexHeight=10.0;
	
	var FrontFlexVertices=new Float32Array([

			FrontFlexLeftX+FrontFlexWidth,FrontFlexBottomY+FrontFlexHeight,FrontFlexZ,
			FrontFlexLeftX,FrontFlexBottomY+FrontFlexHeight,FrontFlexZ,
			FrontFlexLeftX,FrontFlexBottomY,FrontFlexZ,
			FrontFlexLeftX+FrontFlexWidth,FrontFlexBottomY,FrontFlexZ
					]);
	var FrontFlexColor=new Float32Array([
			1.0,1.0,1.0,
			1.0,1.0,1.0,
			1.0,1.0,1.0,
			1.0,1.0,1.0
	
				]);
	
			
		
			
					
					
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexVertices,gl.DYNAMIC_DRAW,0,FrontFlexVertices.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexColor,gl.DYNAMIC_DRAW,0,FrontFlexColor.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	
	
	
	
	//Poles
	
	var FrontFlexLeftPole=new Float32Array([
			FrontFlexLeftX+2.0,-2.0,FrontFlexZ,
			FrontFlexLeftX+2.2,-2.0,FrontFlexZ,
			FrontFlexLeftX+2.2,FrontFlexBottomY,FrontFlexZ,
			FrontFlexLeftX+2.0,FrontFlexBottomY,FrontFlexZ
			]);
			
	var FrontFlexPoleColor=new Float32Array([
			0.0,0.0,0.0,
			0.0,0.0,0.0,
			0.0,0.0,0.0,
			0.0,0.0,0.0
	
				]);	
	var FrontFlexRightPole=new Float32Array([
			FrontFlexLeftX+FrontFlexWidth-2.0,-2.0,FrontFlexZ,
			FrontFlexLeftX+FrontFlexWidth-1.8,-2.0,FrontFlexZ,
			FrontFlexLeftX+FrontFlexWidth-1.8,FrontFlexBottomY,FrontFlexZ,
			FrontFlexLeftX+FrontFlexWidth-2.0,FrontFlexBottomY,FrontFlexZ
			]);
	
	
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexLeftPole,gl.DYNAMIC_DRAW,0,FrontFlexLeftPole.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexPoleColor,gl.DYNAMIC_DRAW,0,FrontFlexPoleColor.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	
	//Right Pole
	
	gl.bindVertexArray(vao_city);

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineCoordinates,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexRightPole,gl.DYNAMIC_DRAW,0,FrontFlexRightPole.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	//gl.bufferData(gl.ARRAY_BUFFER,roadLineColor,gl.DYNAMIC_DRAW);
	gl.bufferData(gl.ARRAY_BUFFER,FrontFlexPoleColor,gl.DYNAMIC_DRAW,0,FrontFlexPoleColor.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);


	gl.drawArrays(gl.TRIANGLE_FAN,0,4);
	gl.bindVertexArray(null);
	
	
	
	
	
	
	
	
	
}

function pushMatrix( newMartix)
{


	
}

function building(length,height,width,textureOption)
{
	length=length/2.0;
	height=height;
	width=width/2.0;
	
	switch(textureOption)
	{
		
		case 1:
		
		 gl.bindTexture(gl.TEXTURE_2D,texture_building1);
		 gl.uniform1i(uniform_sampler2d,0);
		break;
		case 2:
		
		 gl.bindTexture(gl.TEXTURE_2D,texture_building2);
		 gl.uniform1i(uniform_sampler2d,0);
		
		break;
		
		case 3:
		
		 gl.bindTexture(gl.TEXTURE_2D,texture_building3);
		 gl.uniform1i(uniform_sampler2d,0);
		
		break;
		case 4:
		
		 gl.bindTexture(gl.TEXTURE_2D,texture_building4);
		 gl.uniform1i(uniform_sampler2d,0);
		
		break;
		case 5:
	
		 gl.bindTexture(gl.TEXTURE_2D,texture_building5);
		 gl.uniform1i(uniform_sampler2d,0);
		
		break;
		case 6:
	
		 gl.bindTexture(gl.TEXTURE_2D,texture_building6);
		 gl.uniform1i(uniform_sampler2d,0);
		
		break;
		
	}
	

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
					
					
	var buildingTextureCity=new Float32Array([
					1.0,1.0,
					0.0,1.0,
					0.0,0.0,
					1.0,0.0,
					
					1.0,1.0,
					0.0,1.0,
					0.0,0.0,
					1.0,0.0,
					
					1.0,1.0,
					0.0,1.0,
					0.0,0.0,
					1.0,0.0,
					
					1.0,1.0,
					0.0,1.0,
					0.0,0.0,
					1.0,0.0
					]);


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

	//vbo=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_city);
	gl.bufferData(gl.ARRAY_BUFFER,buildingVertices_city,gl.DYNAMIC_DRAW,0,buildingVertices_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	//vbo_color=gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_color_city);
	gl.bufferData(gl.ARRAY_BUFFER,buildingColor_city,gl.DYNAMIC_DRAW,0,buildingColor_city.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_COLOR,3,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_COLOR);
	gl.bindBuffer(gl.ARRAY_BUFFER,null);



	gl.bindBuffer(gl.ARRAY_BUFFER,vbo_texture_city);
	gl.bufferData(gl.ARRAY_BUFFER,buildingTextureCity,gl.DYNAMIC_DRAW,0,buildingTextureCity.length);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_TEXTURE,2,gl.FLOAT,false,0,0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_TEXTURE);
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

		gl.deleteProgram(shaderProgramObjcet_city);
		shaderProgramObject_city=null;
	}
}