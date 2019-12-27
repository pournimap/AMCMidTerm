// JavaScript source code


/*var roboto_font, roboto_bold_font,ubuntu_font;
var ubuntu_bold_font, dejavu_font, dejavu_italic_font;*/


 var all_fonts = {
        "roboto"        : roboto_font,
        "roboto_bold"   : roboto_bold_font,        
        "ubuntu"        : ubuntu_font,
        "ubuntu_bold"   : ubuntu_bold_font,
        "dejavu"        : dejavu_font,
        "dejavu_italic" : dejavu_italic_font   
    }  
	
	var fonts_select;
	var font_size_input;
	var font_hinting_input;
	var subpixel_input;
	var font_color_input;
	var bg_color_input;
	var textarea = " ";
	
var do_update = true;

function update_text() {
    do_update = true;
}

var vertex_array, vao_Text;
var vbo_text_position;

// Vertex attributes
  
 var attribs = [
        { loc: WebGLMacros.AMC_ATTRIBUTE_POSITION, name : 'vPosition', size: 2 }, // Vertex position
        { loc: WebGLMacros.AMC_ATTRIBUTE_TEXTURE, name : 'vTexcoord', size: 2 }, // Texture coordinate
        { loc: WebGLMacros.AMC_ATTRIBUTE_SDF_SIZE, name : 'sdf_size', size: 1 }  // Glyph SDF distance in screen pixels
 ];

function initFontRenderShader()
{
	/*fonts_select = document.getElementById("fonts");
    fonts_select.addEventListener('input', update_text, false);
    fonts_select.onchange = update_text;*/
	fonts_select = dejavu_italic_font;

    /*font_size_input = document.getElementById("font_size");
    font_size_input.addEventListener('input', update_text, false);
    font_size_input.onchange = update_text;*/
	font_size_input = 40;

    /*font_hinting_input = document.getElementById("font_hinting");
    font_hinting_input.addEventListener('input', update_text, false);
    font_hinting_input.onchange = update_text;*/
	font_hinting_input = 1.0;

   /* subpixel_input = document.getElementById("subpixel");
    subpixel_input.addEventListener('input', update_text, false);
    subpixel_input.onchange = update_text;*/
	subpixel_input = 1.0;

    /*font_color_input = document.getElementById("font_color");
    font_color_input.addEventListener('input', update_text, false);
    font_color_input.onchange = update_text;*/
	//font_color_input = "#e5e5e5";
	font_color_input = "#7fff00";

	/*bg_color_input = document.getElementById("background_color");
    bg_color_input.addEventListener('input', update_text, false);
    bg_color_input.onchange = update_text;*/
	bg_color_input = "#1a1a1a";

    //textarea = document.getElementById("text");
    /*textarea = `Wake Up, Neo.
                 It has started....`*/  
    /*textarea.addEventListener('input', update_text, false);
    textarea.onchange = update_text;*/


    /////////////////////////////////////////////////////////////////////////////

    	
	roboto_font.tex        = loadTexture( gl, "resources/fonts/roboto.png", gl.LUMINANCE, false );
    roboto_bold_font.tex   = loadTexture( gl, "resources/fonts/roboto-bold.png", gl.LUMINANCE, false );    
    ubuntu_font.tex        = loadTexture( gl, "resources/fonts/ubuntu.png", gl.LUMINANCE, false, true );
    ubuntu_bold_font.tex   = loadTexture( gl, "resources/fonts/ubuntu-bold.png", gl.LUMINANCE, false );
    dejavu_font.tex        = loadTexture( gl, "resources/fonts/dejavu-serif.png", gl.LUMINANCE, false );
    dejavu_italic_font.tex = loadTexture( gl, "resources/fonts/dejavu-serif-italic.png", gl.LUMINANCE, false );  
	
	initAttribs( gl, attribs );

    //shader init
    initShader();

	initMousePointer();
	vertex_array = new Float32Array( 10000 * 6 * attribs[0].stride / 4 );

	vao_Text = gl.createVertexArray();
	gl.bindVertexArray(vao_Text);
	
	
	vbo_text_position= gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_text_position);
	gl.bufferData(gl.ARRAY_BUFFER, vertex_array, gl.DYNAMIC_DRAW);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);
	gl.bindVertexArray(null);
	//gl.clearDepth(1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
}

var text_vertexShaderObject, text_fragmentShaderSourceCode, text_shaderProgramObject;
var text_modelMatrixUniform, text_viewMatrixUniform, text_projectionMatrixUniform;
var sdf_tex_sizeUniform ,font_texUniform, hint_amountUniform ;
var subpixel_amountUniform ,bg_colorUniform, font_colorUniform;

function initShader()
{
    var vertexShaderSourceCode = 
			"#version 300 es" +
			"\n" +
			"in vec2 vPosition;" +
			"in vec2 vTexcoord;" +
            // Signed distance field size in screen pixels
			"in float sdf_size;" +

            "uniform mat3 u_model_matrix;" +
			/*"uniform mat4 u_view_matrix;" +
			"uniform mat4 u_projection_matrix;"+*/
			
			// Size of font texture. Assuming square image
			"uniform float sdf_tex_size;"+
			
			"out vec2 out_texcoords;" +
			"out float doffset;" +
			"out float sdf_texel;" +
			
			"void main(void)" +
			"{"+
            
			"out_texcoords = vTexcoord;" +
			//distance field data for one
			"doffset = 1.0 / sdf_size;" +
			"sdf_texel = 1.0 / sdf_tex_size;" +
			
			"vec3 screen_pos = u_model_matrix * vec3(vPosition , 1.0);" +
			"gl_Position = vec4(screen_pos.xy , 0.0, 1.0);"+
			"}";


    text_vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
	
	gl.shaderSource(text_vertexShaderObject, vertexShaderSourceCode);
	
	gl.compileShader(text_vertexShaderObject);
	if(gl.getShaderParameter(text_vertexShaderObject, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(text_vertexShaderObject);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}


	
	var fragmentShaderSourceCode = 
			"#version 300 es" +
			"\n" +
		"precision highp float;"+
		"in vec2 out_texcoords;" +
		"in float doffset;" +
		"in float sdf_texel;" +
       
         "out vec4 FragColor;"+
      	 
		 "uniform highp sampler2D font_tex;" +
		 "uniform float hint_amount;" +
		 "uniform float subpixel_amount;" +
		 
		 "uniform vec3 bg_color;" +
		 "uniform vec3 font_color;" +
		 
	"vec3 subpixel(float v, float a)" +
	"{" +
	"float vt = 0.6 * v;" + //1.0 will make your eyes bleed
	"vec3 rgb_max = vec3(-vt, 0.0, vt);" +
	"float top = abs(vt);" +
	"float bottom = -top - 1.0;" +
	"float cfloor = mix(top, bottom, a);" +
	"vec3 res = clamp(rgb_max - vec3(cfloor), 0.0, 1.0);" +
	"return res;" +
	"}" +
	
         "void main(void)"+
         "{"+
       
		 
		 //sampling the texture, L Pattern
			"float sdf = texture(font_tex, out_texcoords).r;" +
			"float sdf_north = texture(font_tex, out_texcoords + vec2(0.0, sdf_texel)).r;" +
			"float sdf_east = texture(font_tex, out_texcoords + vec2(sdf_texel, 0.0)).r;"+
			
			//estimating stroke direction by distance field gradient vector
			"vec2 sgrad = vec2(sdf_east - sdf, sdf_north - sdf);" +
			"float sgrad_len = max(length(sgrad), 1.0 / 128.0);" +
			"vec2 grad = sgrad / vec2(sgrad_len);" +
			"float vgrad = abs( grad.y);" + //0.0 - vertical stroke, 1.0 - horizontal one
			
			"float horz_scale = 1.1;" + //blurring vertical strokes along X axis a bit
			"float vert_scale = 0.6;" + //while adding some contrast to the horizontal strokes
			"float hdoffset = mix(doffset * horz_scale, doffset * vert_scale, vgrad);" +
			"float res_doffset = mix(doffset, hdoffset, hint_amount);" +
			
			"float alpha = smoothstep(0.5 - res_doffset, 0.5 + res_doffset, sdf);" +
			
			//additional contrast
			"alpha = pow(alpha, 1.0 + 0.2 * vgrad * hint_amount);" +
			
			// Unfortunately there is no support for ARB_blend_func_extended in WebGL.
			// Fortunately the background is filled with a solid color so we can do
			// the blending inside the shader.
			
			// Discarding pixels beyond a threshold to minimise possible artifacts.
			"if(alpha < (20.0 / 256.0)) discard;"+
			
			"vec3 channels = subpixel(grad.x * 0.5 * subpixel_amount, alpha);" +
			
			// For subpixel rendering we have to blend each color channel separately
			"vec3 res = mix(bg_color, font_color, channels);" +
			
			"FragColor = vec4(res, 1.0);" +
			
			
         "}";

		
		text_fragmentShaderSourceCode = gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(text_fragmentShaderSourceCode, fragmentShaderSourceCode);
	
	gl.compileShader(text_fragmentShaderSourceCode);
	if(gl.getShaderParameter(text_fragmentShaderSourceCode, gl.COMPILE_STATUS) == false)
	{
		var error = gl.getShaderInfoLog(text_fragmentShaderSourceCode);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}
	
	text_shaderProgramObject = gl.createProgram();
	gl.attachShader(text_shaderProgramObject, text_vertexShaderObject);
	gl.attachShader(text_shaderProgramObject, text_fragmentShaderSourceCode);

	//a = attribs[i]
	gl.bindAttribLocation(text_shaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_POSITION, "vPosition");
	//gl.bindAttribLocation(shaderProgramObject, WebGLMacros.MPD_ATTRIBUTE_NORMAL, "vNormal");
	gl.bindAttribLocation(text_shaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_TEXTURE, "vTexcoord");
	gl.bindAttribLocation(text_shaderProgramObject, WebGLMacros.AMC_ATTRIBUTE_SDF_SIZE, "sdf_size");
	
	
	gl.linkProgram(text_shaderProgramObject);
	if(!gl.getProgramParameter(text_shaderProgramObject, gl.LINK_STATUS))
	{
		var error = gl.getProgramInfoLog(text_shaderProgramObject);
		if(error.length > 0)
		{
			alert(error);
			uninitialize();
		}
	}
	
	text_modelMatrixUniform = gl.getUniformLocation(text_shaderProgramObject, "u_model_matrix");
	//viewMatrixUniform = gl.getUniformLocation(shaderProgramObject, "u_view_matrix");
	//projectionMatrixUniform = gl.getUniformLocation(shaderProgramObject, "u_projection_matrix");
	
	sdf_tex_sizeUniform = gl.getUniformLocation(text_shaderProgramObject, "sdf_tex_size");
	
	font_texUniform = gl.getUniformLocation(text_shaderProgramObject, "font_tex");
	hint_amountUniform = gl.getUniformLocation(text_shaderProgramObject, "hint_amount");
	subpixel_amountUniform = gl.getUniformLocation(text_shaderProgramObject, "subpixel_amount");
		 
	bg_colorUniform = gl.getUniformLocation(text_shaderProgramObject, "bg_color");
	font_colorUniform = gl.getUniformLocation(text_shaderProgramObject, "font_color");
	
}

var font_color = [0.1, 0.1, 0.1];
var bg_color = [0.9, 0.9, 0.9];
var str_res;     // Result of a writeString function.
                     // Contains text bounding rectangle.
var vcount = 0;  // Text string vertex count

var bDone = 1;
var boolDone = 0;
var boolDone1 = 0;
var i = 0;
var nextScene = false;


function drawFontRender()
{
	
	//else*/
	var textareaNew1=`https://www.hindustantimes.com/`
	
	
	/*if(mouseSceneDone == true)
	{
		var textareaNew1= `Loading......`
	}*/
	textRender(textareaNew1);
	
	if(boolDone == 1)
	{
		mouseSceneDone = drawMousePointer();
	}
	
	if(mouseSceneDone == true)
	uninitialize_FontRender();
}

var temp = 0;
function textRender(textareaNew1)
{
	font_color = colorFromString(font_color_input, [ 0.1, 0.1, 0.1 ]);
	bg_color   = colorFromString( bg_color_input,   [ 0.9, 0.9, 0.9 ] );
	
	//var font = dejavu_font;
	var font = ubuntu_bold_font;
	tex = font.tex;
	
	var font_size = font_size_input;	
	var fmetrics = fontMetrics( font, font_size, font_size * 0.2 );
	
	var textareaNew;
	//if(boolDone == 0)
	textareaNew=`Wake Up, Neo.\n           It has started....`

	if((bDone % 20 == 0)  && (i < textareaNew.length))	
	{
		textarea += textareaNew[i];
		i = i + 1;
	}
	if(i >= textareaNew.length)
	{
		temp += 0.1;
		if(temp >= 16.0)
		{
		boolDone = 1;
		textarea = textareaNew1;
		//font_color = colorFromString("#0000ff", [ 0.1, 0.1, 0.1 ]);
		}
		else if(temp >= 12.0)
		{
			textarea = "";
		}
	}
	
	bDone = bDone + 1;
	
	// Laying out the text
	str_res = writeString( textarea, font, fmetrics, [0,0], vertex_array );
		
	vcount = str_res.array_pos / ( attribs[0].stride / 4 /*size of float*/ );
	
	gl.bindVertexArray(vao_Text);
	gl.bindBuffer( gl.ARRAY_BUFFER, vbo_text_position );
    gl.bufferSubData( gl.ARRAY_BUFFER, 0, vertex_array );
    gl.bindBuffer( gl.ARRAY_BUFFER, null );	
	
	//font_hinting = font_hinting_input.checked ? 1.0 : 0.0;
	font_hinting = font_hinting_input;
           // subpixel = subpixel_input.checked ? 1.0 : 0.0;
	subpixel = subpixel_input;
	
	// Transformation matrix. 3x3 ortho.
        // Canvas size, [0,0] is at the text rect's top left corner, Y goes up.
        
        var cw = canvas.clientWidth;
        var ch = canvas.clientHeight;

        // Centering the text rectangle
        
        var dx = Math.round(-0.5 * str_res.rect[2] );
        var dy = Math.round(  0.5 * str_res.rect[3] );
		//var dx = -10;
		//var dy = -10;

        var ws = 1.0 / cw ;
        var hs = 1.0 / ch;
		/*var ws = -2.0 ;
		var hs = -2.0 ;
        */
        var screen_mat = new Float32Array([
            ws ,     0,       0,
            0,      hs,      0,
           0,  0,   0
        ]);
		//console.log("dx = "+ dx + " dy = " + dy + " ws= " + ws + " hs = " + hs );
	
	 gl.clearColor( bg_color[0], bg_color[1], bg_color[2], 0.0 );
	 
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.viewport( -canvas.width/ 3 , canvas.height / 3, canvas.width, canvas.height );
	
	gl.disable(gl.DEPTH_TEST);
	gl.useProgram(text_shaderProgramObject);
	
	gl.uniform1i(font_texUniform, 0);
	gl.uniform1f(sdf_tex_sizeUniform, 1024.0);
	gl.uniform1f(hint_amountUniform, font_hinting);
	gl.uniform1f(subpixel_amountUniform, subpixel);
	
	//mat4 modelMatrix = mat4.create();
	//mat4.translate(modelMatrix, modelMatrix, [-2.0, 0.0, 0.0]);
	
	//mat4.multiply(screen_mat,screen_mat,modelMatrix);
	gl.uniformMatrix3fv(text_modelMatrixUniform, false, screen_mat);
	
	gl.uniform3fv(bg_colorUniform, bg_color);
	gl.uniform3fv(font_colorUniform, font_color);
	
	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, tex.id);
	
	gl.bindVertexArray(vao_Text);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_text_position);
	
	bindAttribs( gl, attribs );

	gl.drawArrays(gl.TRIANGLES, 0, vcount);
	
	gl.bindVertexArray(null);
	gl.useProgram(null);
	gl.enable(gl.DEPTH_TEST);
}
function loadTexture( gl, filename, format = gl.RGBA, generate_mipmap = true ) {
    var tex = gl.createTexture();
    var image = new Image();
    image.onload = function() { setTexImage( gl, image, tex, format, generate_mipmap ); };
    image.src = filename;
    var res = { id: tex, image: image };
    return res;
}

function setTexImage( gl, image, tex, format, generate_mipmap, nearest_filtering ) {
    gl.bindTexture( gl.TEXTURE_2D, tex );
    gl.texImage2D( gl.TEXTURE_2D, 0, format, format, gl.UNSIGNED_BYTE, image );

    if ( !nearest_filtering ) {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    } else {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    }

    if ( generate_mipmap ) {
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR );
        gl.generateMipmap( gl.TEXTURE_2D );
    } else {
        if ( !nearest_filtering ) {
            gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );
        } else {
            gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
        }
    }
    gl.bindTexture( gl.TEXTURE_2D, null );
}

function colorFromString( string, fallback_value = [0,0,0] ) {
    var val = parseInt( string.replace( "#","" ), 16 );
    if ( val == NaN ) return fallback_value;
    var b = ( val & 0xff ) / 255.0;
    var g = ( ( val >> 8 ) & 0xff ) / 255.0;
    var r = ( ( val >> 16 ) & 0xff ) / 255.0;
    return [ r, g, b ];
}

function uninitialize_FontRender()
{
	// code
	if (vbo_text_position) {
		gl.deleteBuffer(vbo_text_position);
		vbo_text_position = null;
	}
	
	if (text_shaderProgramObject) {
		if (text_fragmentShaderSourceCode) {
			gl.detachShader(text_shaderProgramObject, text_fragmentShaderSourceCode);
			gl.deleteShader(text_fragmentShaderSourceCode);
			text_fragmentShaderSourceCode = null;
		}
		
		if (text_vertexShaderObject) {
			gl.detachShader(text_shaderProgramObject, text_vertexShaderObject);
			gl.deleteShader(text_vertexShaderObject);
			text_vertexShaderObject = null;
		}
		
		gl.deleteProgram(text_shaderProgramObject);
		text_shaderProgramObject = null;
	}
	gl.viewport( 0 , 0, canvas.width, canvas.height );
	gl.enable(gl.DEPTH_TEST);
}

