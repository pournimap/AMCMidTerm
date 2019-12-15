// global variables

var vertexShaderObject;
var fragmentShaderObject;
var shaderProgramObject;

var light_ambient=[0.0,0.0,0.0];
var light_diffuse=[1.0,1.0,1.0];
var light_specular=[1.0,1.0,1.0];
var light_position=[100.0,100.0,100.0,1.0];

var material_ambient= [0.0,0.0,0.0];
var material_diffuse= [1.0,1.0,1.0];
var material_specular= [1.0,1.0,1.0];
var material_shininess= 50.0;

var sphere=null;

var modelMatrixUniform, viewMatrixUniform, projectionMatrixUniform;
var laUniform, ldUniform, lsUniform, lightPositionUniform;
var kaUniform, kdUniform, ksUniform, materialShininessUniform;
var LKeyPressedUniform;

function perFragmentInitialize()
{
	 // vertex shader
    var vertexShaderSourceCode=
    "#version 300 es"+
    "\n"+
    "in vec4 vPosition;"+
    "in vec3 vNormal;"+
	
    "uniform mat4 u_model_matrix;"+
    "uniform mat4 u_view_matrix;"+
    "uniform mat4 u_projection_matrix;"+
    "uniform mediump int u_LKeyPressed;"+
    "uniform vec4 u_light_position;"+
  
	"out vec3 transformed_normals;"+
	"out vec3 light_direction;"+
	"out vec3 viewer_vector;"+
    "void main(void)"+
    "{"+
    "if(u_LKeyPressed == 1)"+
    "{"+
    "vec4 eye_coordinates=u_view_matrix * u_model_matrix * vPosition;"+
    "transformed_normals=mat3(u_view_matrix * u_model_matrix) * vNormal;"+
    "light_direction = vec3(u_light_position) - eye_coordinates.xyz;"+
	"viewer_vector = -eye_coordinates.xyz;"+
	"}"+
    "gl_Position=u_projection_matrix * u_view_matrix * u_model_matrix * vPosition;"+
    "}";

    vertexShaderObject=gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject,vertexShaderSourceCode);
    gl.compileShader(vertexShaderObject);
    if(gl.getShaderParameter(vertexShaderObject,gl.COMPILE_STATUS)==false)
    {
        var error=gl.getShaderInfoLog(vertexShaderObject);
        if(error.length > 0)
        {
            alert(error);
            uninitialize();
        }
    }
    
    // fragment shader
    var fragmentShaderSourceCode=
    "#version 300 es"+
    "\n"+
    "precision highp float;"+
    "in vec3 transformed_normals;"+
	"in vec3 light_direction;"+
	"in vec3 viewer_vector;"+
    "out vec4 FragColor;"+
	"uniform vec3 u_La;"+
	"uniform vec3 u_Ld;"+
	"uniform vec3 u_Ls;"+
	"uniform vec3 u_Ka;"+
	"uniform vec3 u_Kd;"+
	"uniform vec3 u_Ks;"+
	"uniform float u_material_shininess;"+
	"uniform int u_LKeyPressed;"+
    "void main(void)"+
    "{"+
	"vec3 phong_ads_color;"+
	"if(u_LKeyPressed == 1)"+
	"{"+
	"vec3 normalized_transformed_normals =normalize(transformed_normals);"+
	"vec3 normalized_light_direction=normalize(light_direction);"+
	"vec3 normalized_viewer_vector = normalize(viewer_vector);"+
	"vec3 ambient = u_La * u_Ka;"+
	"float tn_dot_ld = max(dot(normalized_transformed_normals, normalized_light_direction), 0.0);"+
	"vec3 diffuse = u_Ld * u_Kd * tn_dot_ld;"+
	"vec3 reflection_vector = reflect(-normalized_light_direction, normalized_transformed_normals);"+
	"vec3 specular = u_Ls * u_Ks * pow(max(dot(reflection_vector, normalized_viewer_vector), 0.0), u_material_shininess);"+
	"phong_ads_color = ambient + diffuse + specular;"+
	"}"+
	"else"+
	"{"+
	"phong_ads_color = vec3(1.0, 1.0, 1.0);"+
	"}"+
    "FragColor = vec4(phong_ads_color, 1.0);"+
    "}";
    
    fragmentShaderObject=gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject,fragmentShaderSourceCode);
    gl.compileShader(fragmentShaderObject);
    if(gl.getShaderParameter(fragmentShaderObject,gl.COMPILE_STATUS)==false)
    {
        var error=gl.getShaderInfoLog(fragmentShaderObject);
        if(error.length > 0)
        {
            alert(error);
            uninitialize();
        }
    }
    
    // shader program
    shaderProgramObject=gl.createProgram();
    gl.attachShader(shaderProgramObject,vertexShaderObject);
    gl.attachShader(shaderProgramObject,fragmentShaderObject);
    
    // pre-link binding of shader program object with vertex shader attributes
    gl.bindAttribLocation(shaderProgramObject,WebGLMacros.AMC_ATTRIBUTE_POSITION,"vPosition");
    gl.bindAttribLocation(shaderProgramObject,WebGLMacros.AMC_ATTRIBUTE_NORMAL,"vNormal");

    // linking
    gl.linkProgram(shaderProgramObject);
    if (!gl.getProgramParameter(shaderProgramObject, gl.LINK_STATUS))
    {
        var error=gl.getProgramInfoLog(shaderProgramObject);
        if(error.length > 0)
        {
            alert(error);
            uninitialize();
        }
    }

    // get Model Matrix uniform location
    modelMatrixUniform=gl.getUniformLocation(shaderProgramObject,"u_model_matrix");
    // get View Matrix uniform location
    viewMatrixUniform=gl.getUniformLocation(shaderProgramObject,"u_view_matrix");
    // get Projection Matrix uniform location
    projectionMatrixUniform=gl.getUniformLocation(shaderProgramObject,"u_projection_matrix");
    
    // get single tap detecting uniform
    LKeyPressedUniform=gl.getUniformLocation(shaderProgramObject,"u_LKeyPressed");
    
    // ambient color intensity of light
    laUniform=gl.getUniformLocation(shaderProgramObject,"u_La");
    // diffuse color intensity of light
    ldUniform=gl.getUniformLocation(shaderProgramObject,"u_Ld");
    // specular color intensity of light
    lsUniform=gl.getUniformLocation(shaderProgramObject,"u_Ls");
    // position of light
    lightPositionUniform=gl.getUniformLocation(shaderProgramObject,"u_light_position");
    
    // ambient reflective color intensity of material
    kaUniform=gl.getUniformLocation(shaderProgramObject,"u_Ka");
    // diffuse reflective color intensity of material
    kdUniform=gl.getUniformLocation(shaderProgramObject,"u_Kd");
    // specular reflective color intensity of material
    ksUniform=gl.getUniformLocation(shaderProgramObject,"u_Ks");
    // shininess of material ( value is conventionally between 1 to 200 )
    materialShininessUniform=gl.getUniformLocation(shaderProgramObject,"u_material_shininess");
    
    // *** vertices, colors, shader attribs, vbo, vao initializations ***
    sphere=new Mesh();
    makeSphere(sphere,2.0,30,30);

	// Depth test will always be enabled
	gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    
    // depth test to do
    gl.depthFunc(gl.LEQUAL);
    
    // We will always cull back faces for better performance
    gl.enable(gl.CULL_FACE);
    
}

function perFragmentDraw()
{
	 gl.useProgram(shaderProgramObject);
    
    if(bLKeyPressed==true)
    {
        gl.uniform1i(LKeyPressedUniform, 1);
        
        // setting light properties
        gl.uniform3fv(laUniform, light_ambient); // ambient intensity of light
        gl.uniform3fv(ldUniform, light_diffuse); // diffuse intensity of light
        gl.uniform3fv(lsUniform, light_specular); // specular intensity of light
        gl.uniform4fv(lightPositionUniform, light_position); // light position
        
        // setting material properties
        gl.uniform3fv(kaUniform, material_ambient); // ambient reflectivity of material
        gl.uniform3fv(kdUniform, material_diffuse); // diffuse reflectivity of material
        gl.uniform3fv(ksUniform, material_specular); // specular reflectivity of material
        gl.uniform1f(materialShininessUniform, material_shininess); // material shininess
    }
    else
    {
        gl.uniform1i(LKeyPressedUniform, 0);
    }
    
    var modelMatrix=mat4.create();
    var viewMatrix=mat4.create();

    mat4.translate(modelMatrix, modelMatrix, [0.0,0.0,-6.0]);
    
    gl.uniformMatrix4fv(modelMatrixUniform,false,modelMatrix);
    gl.uniformMatrix4fv(viewMatrixUniform,false,viewMatrix);
    gl.uniformMatrix4fv(projectionMatrixUniform,false,perspectiveProjectionMatrix);
    
    sphere.draw();
   
    gl.useProgram(null);
	
	perFragmentUpdate();
}

function perFragmentUpdate()
{

}

function perFragmentUninitialize()
{
	 // code
    if(sphere)
    {
        sphere.deallocate();
        sphere=null;
    }
    
    if(shaderProgramObject)
    {
        if(fragmentShaderObject)
        {
            gl.detachShader(shaderProgramObject,fragmentShaderObject);
            gl.deleteShader(fragmentShaderObject);
            fragmentShaderObject=null;
        }
        
        if(vertexShaderObject)
        {
            gl.detachShader(shaderProgramObject,vertexShaderObject);
            gl.deleteShader(vertexShaderObject);
            vertexShaderObject=null;
        }
        
        gl.deleteProgram(shaderProgramObject);
        shaderProgramObject=null;
    }
}