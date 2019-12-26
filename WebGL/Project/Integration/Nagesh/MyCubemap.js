// JavaScript source code
var attribute_vertex_position, quad_buffer;
var vertexShaderObject_cubemap, fragmentShaderObject_cubemap, shaderProgramObject_cubemap;

var camera = {
	up : [ 0.0, 1.0, 0.0 ],
	right : [ 1.0, 0.0, 0.0 ],
	dir : [ 0.0, 0.0, -1.0 ],
	origin : [ 0.0, 0.0, 0.0 ],
	near: 2.5,
	far : 100.0
};
var uniform_camera_up, uniform_camera_right, uniform_camera_origin, viewMatrixUniform;
var uniform_camera_dir, uniform_camera_near, uniform_camera_far;
var uniform_cubemap, cubemap_texture, cubemap_image, cubemap_counter;
var last_x, last_y;
var request = 0;

function initCubeMap()
{
	var vertexShaderSourceCode=
	"#version 300 es" +
	"\n" +
	"in vec2 attribute_vertex_position;" +
	/*"uniform vec3 uniform_camera_up;" +
	"uniform vec3 uniform_camera_right;" +
	"uniform vec3 uniform_camera_dir;" +
	"uniform float uniform_camera_near;"+*/
	"uniform mat4 u_view_matrix;" +
	"out vec3 outTexcoord;" +
	/*"out vec3 varying_pixel_position;"+*/
	"void main()"+
	"{"+
	"outTexcoord = vec3(attribute_vertex_position, 1.0);" +
	"gl_Position = vec4(attribute_vertex_position, 0.0, 1.0);"+
	/*"varying_pixel_position ="+
	"attribute_vertex_position[0] * uniform_camera_right +"+
		"attribute_vertex_position[1] * uniform_camera_up +"+
		"uniform_camera_near * uniform_camera_dir;"+*/
	"}";

	vertexShaderObject_cubemap = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShaderObject_cubemap, vertexShaderSourceCode);
	gl.compileShader(vertexShaderObject_cubemap);
	if(gl.getShaderParameter(vertexShaderObject_cubemap, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(vertexShaderObject_cubemap);
		if(error.length > 0)
		{
			alert(error);
			Cubemap_Uninitialize();
		}
	}


	var fragmentShaderSourceCode=
	"#version 300 es" +
	"\n" +
	"precision highp float;" +

	"in vec3 outTexcoord;" +
	/*"in vec3 varying_pixel_position;"+*/
	"uniform samplerCube uniform_cubemap;"+
	
	"out vec4 FragColor;" +
	"void main()"+
	"{"+
	/*"vec3 dir = normalize(varying_pixel_position);"+
	"vec4 sampleout = texture(uniform_cubemap, vec3(-1.0, 1.0, 1.0) * dir);"+
	"FragColor = sampleout;"+*/
	"FragColor = texture(uniform_cubemap, outTexcoord);" +
	"}";
	
	/*"out vec4 FragColor;" +

	"void main(void)" +
	"{" +
		"vec4 temp_color;" +
		"temp_color = texture(u_texture0_sampler, out_texture0_coord);" +
		"FragColor = temp_color;"+
	"}";*/

	fragmentShaderObject_cubemap = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShaderObject_cubemap, fragmentShaderSourceCode);
	gl.compileShader(fragmentShaderObject_cubemap);
	if(gl.getShaderParameter(fragmentShaderObject_cubemap, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(fragmentShaderObject_cubemap);
		if(error.length > 0)
		{
			alert(error);
			Cubemap_Uninitialize();
		}
	}


	shaderProgramObject_cubemap = gl.createProgram();
	gl.attachShader(shaderProgramObject_cubemap, vertexShaderObject_cubemap);
	gl.attachShader(shaderProgramObject_cubemap, fragmentShaderObject_cubemap);

	gl.bindAttribLocation(shaderProgramObject_cubemap, WebGLMacros.AMC_ATTRIBUTE_POSITION, "attribute_vertex_position");
	//gl.bindAttribLocation(shaderProgramObject_cubemap, WebGLMacros.AMC_ATTRIBUTE_TEXTURE,"vTexture0_Coord");

	gl.linkProgram(shaderProgramObject_cubemap);
	if(!gl.getProgramParameter(shaderProgramObject_cubemap, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(shaderProgramObject_cubemap);
		if(error.length > 0)
		{
			alert(error);
			Cubemap_Uninitialize();
		}
	}

	//attribute_vertex_position = gl.getAttribLocation(program, "attribute_vertex_position");
	//gl.enableVertexAttribArray(attribute_vertex_position);
	uniform_camera_up = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_up");
	uniform_camera_right = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_right");
	uniform_camera_origin = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_origin");
	uniform_camera_dir = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_dir");
	uniform_camera_near = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_near");
	uniform_camera_far = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_camera_far");
	uniform_cubemap = gl.getUniformLocation(shaderProgramObject_cubemap, "uniform_cubemap");
	viewMatrixUniform = gl.getUniformLocation(shaderProgramObject_cubemap, "u_view_matrix");

	quad_buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, quad_buffer);
	var vertices = [ 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0 ];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	gl.vertexAttribPointer(WebGLMacros.AMC_ATTRIBUTE_POSITION, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(WebGLMacros.AMC_ATTRIBUTE_POSITION);



	var cubemap = [];
	
	var sides = [ "lf", "rt", "up", "dn",  "ft", "bk" ];
	for (var i = 0; i < 6; i++)
		cubemap.push("resources" + "/" + "JPG" + "/" + sides[i] + ".jpg");
		//cubemap.push("cubemap" + "/" + sides[i] + ".jpg");
	load_cubemap(cubemap);

	canvas.addEventListener("mousedown", mouse_down, false);
	document.addEventListener("mouseup", mouse_up, false);
}

function v3_normalize(v)
{
	var l = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
	return [ v[0] / l, v[1] / l, v[2] / l ];
}
function v3_cross(a, b)
{
	return [
		a[1] * b[2] - a[2] * b[1],
		a[2] * b[0] - a[0] * b[2],
		a[0] * b[1] - a[1] * b[0]
	];
}
function m4_rot(v, a)
{
	var c = Math.cos(a);
	var s = Math.sin(a);
	return [
		v[0]*v[0]*(1.0-c)+c,		v[0]*v[1]*(1.0-c)-v[2]*s,	v[0]*v[2]*(1.0-c)+v[1]*s,	0.0,
		v[1]*v[0]*(1.0-c)+v[2]*s,	v[1]*v[1]*(1.0-c)+c,		v[1]*v[2]*(1.0-c)-v[0]*s,	0.0,
		v[2]*v[0]*(1.0-c)-v[1]*s,	v[2]*v[1]*(1.0-c)+v[0]*s,	v[2]*v[2]*(1.0-c)+c,		0.0,
		0.0,				0.0,				0.0,				1.0
	];
}
function m4v3_mul(m, v)
{
	return [
		m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3],
		m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7],
		m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11],
		m[12] * v[0] + m[13] * v[1] + m[14] * v[2] + m[15]
	];
}
function m4_mul(a, b)
{
	return [
		a[0]*b[0]+a[1]*b[4]+a[2]*b[8]+a[3]*b[12], a[0]*b[1]+a[1]*b[5]+a[2]*b[9]+a[3]*b[13], a[0]*b[2]+a[1]*b[6]+a[2]*b[10]+a[3]*b[14], a[0]*b[3]+a[1]*b[7]+a[2]*b[11]+a[3]*b[15],
		a[4]*b[0]+a[5]*b[4]+a[6]*b[8]+a[7]*b[12], a[4]*b[1]+a[5]*b[5]+a[6]*b[9]+a[7]*b[13], a[4]*b[2]+a[5]*b[6]+a[6]*b[10]+a[7]*b[14], a[4]*b[3]+a[5]*b[7]+a[6]*b[11]+a[7]*b[15],
		a[8]*b[0]+a[9]*b[4]+a[10]*b[8]+a[11]*b[12], a[8]*b[1]+a[9]*b[5]+a[10]*b[9]+a[11]*b[13], a[8]*b[2]+a[9]*b[6]+a[10]*b[10]+a[11]*b[14], a[8]*b[3]+a[9]*b[7]+a[10]*b[11]+a[11]*b[15],
		a[12]*b[0]+a[13]*b[4]+a[14]*b[8]+a[15]*b[12], a[12]*b[1]+a[13]*b[5]+a[14]*b[9]+a[15]*b[13], a[12]*b[2]+a[13]*b[6]+a[14]*b[9]+a[15]*b[14], a[12]*b[3]+a[13]*b[7]+a[14]*b[11]+a[15]*b[15]
	];
}
function mouse_move(event)
{
	event.preventDefault();
	var x = event.clientX;
	var y = event.clientY;
	var x_rel = (x - last_x) / canvas.width;
	var y_rel = (last_y - y) / canvas.height;
	last_x = x;
	last_y = y;
	var rot_x = m4_rot(camera.right, Math.PI * y_rel);
	var rot_y = m4_rot(camera.up, - Math.PI * x_rel);
	var rotation = m4_mul(rot_x, rot_y);
	camera.origin = m4v3_mul(rotation, camera.origin);
	camera.up = v3_normalize(m4v3_mul(rotation, camera.up));
	camera.right = v3_normalize(m4v3_mul(rotation, camera.right));
	camera.dir = v3_cross(camera.up, camera.right);
	draw();
}
function mouse_down(event)
{
	last_x = event.clientX;
	last_y = event.clientY;
	document.addEventListener("mousemove", mouse_move, false);
}
function mouse_up(event)
{
	document.removeEventListener("mousemove", mouse_move, false);
}
function onload_cubemap()
{
	if (++cubemap_counter < 6)
		return;
	cubemap_texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_CUBE_MAP, cubemap_texture);
	// wtf? no SRGB in webgl?
	for (var i = 0; i < 6; i++)
		gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, cubemap_image[i]);
	// gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);
	// gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	// gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	// linear interpolation in srgb color space .. just great :(
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	draw();
}
function load_cubemap(src)
{
	cubemap_counter = 0;
	cubemap_image = [];
	for (var i = 0; i < 6; i++) {
		cubemap_image[i] = new Image();
		cubemap_image[i].onload = onload_cubemap;
		cubemap_image[i].src = src[i];
	}
}
function load_cubemap_files(e)
{
	/*var info = "";
	var num = e.files.length;
	if (num < 6) {
		info += "only " + num + " face" + (num == 1 ? "" : "s") + " selected. ";
		info += "please select 6 faces named: posx.*, negx.*, posy.*, negy.*, posz.* and negz.*";
		document.getElementById("output").innerHTML = info;
		return;
	}
	var cubemap = [];
	var sides = [ "posx", "negx", "posy", "negy", "posz", "negz" ];
	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 6; i++) {
			var name = e.files[i].name;
			var base = name.substr(0, name.lastIndexOf('.'));
			if (base == sides[j]) {
				cubemap.push(window.URL.createObjectURL(e.files[i]));
				info += e.files[i].name + " ";
				break;
			}
		}
	}
	num = cubemap.length;
	if (num < 6) {
		info += (6 - num) + " face" + (num == 5 ? " is" : "s are") + " missing. ";
		info += "please select 6 faces named: posx.*, negx.*, posy.*, negy.*, posz.* and negz.*";
		document.getElementById("output").innerHTML = info;
		return;
	}
	document.getElementById("output").innerHTML = info;*/
	//var cubemap = [];
	load_cubemap(e);
}

var currentTime = 0.0;
function drawCubemap()
{
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	gl.useProgram(shaderProgramObject_cubemap);
	gl.disable(gl.DEPTH_TEST);
	
	var viewMatrix = mat4.create();
	var t = currentTime * 0.1;
	
	//mat4.lookAt(viewMatrix, viewMatrix, [15.0 * Math.sin(t), 0.0, 15.0 * Math.cos(t)], [0.0, 0.0, 0.0], [0.0, 1.0, 0.0]);
	
	gl.uniformMatrix4fv(viewMatrixUniform, false, viewMatrix);

	gl.uniform3f(uniform_camera_up, camera.up[0], camera.up[1], camera.up[2]);
	gl.uniform3f(uniform_camera_right, camera.right[0], camera.right[1], camera.right[2]);
	gl.uniform3f(uniform_camera_origin, camera.origin[0], camera.origin[1], camera.origin[2]);
	gl.uniform3f(uniform_camera_dir, camera.dir[0], camera.dir[1], camera.dir[2]);
	gl.uniform1f(uniform_camera_near, camera.near);
	gl.uniform1f(uniform_camera_far, camera.far);
	gl.uniform1i(uniform_cubemap, 0);
	gl.bindBuffer(gl.ARRAY_BUFFER, quad_buffer);
	gl.vertexAttribPointer(attribute_vertex_position, 2, gl.FLOAT, false, 0, 0);
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	gl.enable(gl.DEPTH_TEST);
	gl.useProgram(null);	
	
	update();
}

function update() {
	// code
	currentTime += 0.01;
}


function Cubemap_Uninitialize()
{

	if(cubemap_texture)
	{
		gl.deleteTexture(cubemap_texture);
		cubemap_texture = 0;
	}
	if(quad_buffer)
	{
	gl.deleteBuffer(quad_buffer);
	quad_buffer=null;
	}
	
	if(shaderProgramObject_cubemap)
	{

		if(fragmentShaderObject_cubemap)
		{
		gl.detachShader(shaderProgramObject_cubemap,fragmentShaderObject_cubemap);
		gl.deleteShader(fragmentShaderObject_cubemap);
		fragmentShaderObject_cubemap=null;
		}

		if(vertexShaderObject_cubemap)
		{
		gl.detachShader(shaderProgramObject_cubemap,vertexShaderObject_cubemap);
		gl.deleteShader(vertexShaderObject_cubemap);
		vertexShaderObject_cubemap=null;

		}

		gl.deleteProgram(shaderProgramObject_cubemap);
		shaderProgramObject_cubemap=null;
	}
}