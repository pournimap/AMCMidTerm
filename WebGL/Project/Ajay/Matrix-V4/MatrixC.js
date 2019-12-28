function makeXColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeXColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX ,yX - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.120, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.132, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.144, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.156, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.168, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX, yX - 0.180, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale, yMXScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX + 0.01, yX - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale * 0.5, yMXScale * 0.5, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingA == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}
	
	var XVertices = new Float32Array([
		1.1, 1.0,
		0.65, 1.0,
		
		-0.65, -1.0,
		-1.1, -1.0,
		
		0.875, 1.0,
		-0.875, -1.0,
		
		-1.1, 1.0,
		-0.65, 1.0,
		
		0.65, -1.0,
		1.1, -1.0,
		
		-0.875, 1.0,
		0.875, -1.0
	]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, XVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, XVertices.length / 2);
	gl.bindVertexArray(null);
	
	// X1
	mat4.translate(modelViewMatrix, modelViewMatrix, [xX + 0.01, yX - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMXScale * 0.508, yMXScale * 0.508, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, XVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, XVertices.length / 2);
	gl.bindVertexArray(null);
	
	
	gl.useProgram(null);
	
	if (yX > 0.2025) {
		yX -= 0.02 * 0.1;
	}
	else {
		yX = 0.2025
		bMakeXColumnDisappear = true;
	}
}

function makeIColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeIColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI ,yI - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.120, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.132, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.144, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.156, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.168, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI, yI - 0.180, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale, yIScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xI + 0.01, yI - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xIScale * 0.508, yIScale * 0.508, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingA == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}
	
	var IVertices = new Float32Array([
		0.0, -1.0,
		0.0, 1.0,
		
		0.125, 1.0,
		-0.124, 1.0,
		
		0.125, -1.0,
		-0.124, -1.0,
	]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, IVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, IVertices.length / 2);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (yI > 0.2025) {
		yI -= 0.02 * 0.1;
	}
	else {
		yI = 0.2025
		bMakeIColumnDisappear = true;
	}
}

function makeRColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeRColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.120, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.132, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.144, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.156, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.168, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR, yR - 0.180, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale, yRScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xR + 0.01, yR - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xRScale * 0.508, yRScale * 0.508, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingA == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}
	
	var RVertices = new Float32Array([
		1.0, 1.0,
		0.0, 1.0,
		
		0.0, 1.0,
		0.0, 0.0,
		
		0.0, 0.0,
		1.0, 0.0,
		
		1.0, 0.0,
		1.0, 1.0,
		
		0.0, 1.0,
		0.0, -1.0,
		
		0.0, 0.0,
		1.0, -1.0,
		
		-0.125, -1.0,
		0.125, -1.0,
		
		0.875, -1.125,
		1.125, -0.875
	]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, RVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, RVertices.length / 2);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (yR > 0.2025) {
		yR -= 0.02 * 0.1;
	}
	else {
		yR = 0.2025
		bMakeRColumnDisappear = true;
	}
}

function makeTColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeTColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.120, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.132, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.144, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.156, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.168, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT, yT - 0.180, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale, yTScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xT + 0.01, yT - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xTScale * 0.508, yTScale * 0.508, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingA == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}
	
	var TVertices = new Float32Array([
		1.0, 1.25,
		1.0, 0.75,
		
		1.0, 1.0,
		-1.0, 1.0,
		
		-1.0, 1.25,
		-1.0, 0.75,
		
		0.0, 1.0,
		0.0, -1.0,
		
		0.125, -1.0,
		-0.125, -1.0
	]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, TVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, TVertices.length / 2);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (yT > 0.2) {
		yT -= 0.02 * 0.1;
	}
	else {
		yT = 0.2
		bMakeTColumnDisappear = true;
	}
}

function makeAColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeAColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.120, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.132, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.144, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.156, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.168, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA, yA - 0.180, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale, yAScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xA + 0.01, yA - 0.193 - 0.015, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xAScale * 0.508, yAScale * 0.508, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingA == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}
	
	var AVertices = new Float32Array([
		0.0, 1.0,
		-1.0, -1.0,
		
		0.0, 1.0,
		1.0, -1.0,
		
		-0.125, 0.75,
		0.125, 0.75,
		
		-1.125, -1.0,
		-0.75, -1.0,
		
		1.125, -1.0,
		0.75, -1.0
	]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, AVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, AVertices.length / 2);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (yA > 0.2) {
		yA -= 0.02 * 0.1;
	}
	else {
		yA = 0.2
		bMakeAColumnDisappear = true;
		bLastElementHasAppeared = true;
	}
}

function makeMColumn() {
	// Code
	gl.useProgram(Matrix_ShaderProgramObject);
	
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var viewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	var color = new Float32Array(333);
	
	if (bMakeMColumnDisappear) {
		for (var i = 0; i < color.length; i++) {
			color[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < color.length; i += 3) {
			color[i] = 0.0;
			color[i + 1] = 1.0;
			color[i + 2] = 0.0;
		}
	}

	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);
	
	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.012, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);
	
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.024, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.036, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.048, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.06, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.072, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.084, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.096, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.108, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.12, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							0.0 , 1.0, 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);
	
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.124, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.136, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.148, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.16, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.172, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE, yReverseE - 0.184, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale, yMScale, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);
	
	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// M
	mat4.translate(modelViewMatrix, modelViewMatrix, [xReverseE + 0.01, yReverseE - 0.21, -5.88]);
	mat4.lookAt(viewMatrix, [lookAtX, lookAtY, lookAtZ], [centerX, centerY, centerZ], [upX, upY, upZ]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [xMScale * 0.52, yMScale  * 0.52, 0.0]);
	mat4.multiply(modelViewMatrix, viewMatrix, modelViewMatrix);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var mColor = new Float32Array(99);
	if (bStopShowingM == true) {
		for (var i = 0; i < mColor.length; i++) {
			mColor[i] = 0.0;
		}
	}
	else {
		for (var i = 0; i < mColor.length; i += 3) {
			//mColor[i] = 0.92;
			mColor[i] = 0.5;
			mColor[i + 1] = 1.0;
			mColor[i + 2] = 0.0;
		}
	}

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MVertices, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, mColor, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MVertices.length / 2);
	gl.bindVertexArray(null);
	
	gl.useProgram(null);
	
	if (yReverseE > 0.201) {
		yReverseE -= 0.02 * 0.1;
	}
	else {
		yReverseE = 0.201;
		bMakeMColumnDisappear = true;
	}
}

function Column_1(c_1) {
	// Code
	// Declaration of matrices
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// Line Width
	// 1
	// Initialize above matrices to identity
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.39 , 0.404 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([ 	0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							0.0 , G[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.065 + c_1, ytranslate[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							0.0 , G[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.43 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							0.0 , G[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							0.0 , G[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.47 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							0.0 , G[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							0.0 , G[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_and_h_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.47 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							0.0 , G[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.07 + c_1, ytranslate[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.46 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							0.0 , G[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, c_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.02 + c_1, ytranslate[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							0.0 , G[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.11 + c_1, ytranslate[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.42 , 0.24 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							0.0 , G[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.07 + c_1, ytranslate[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.59 , 0.47 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							0.0 , G[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							0.0 , G[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.52 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							0.0 , G[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zero_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.15 + c_1, ytranslate[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							0.0 , G[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.12 + c_1, ytranslate[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.47 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							0.0 , G[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							0.0 , G[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.09 + c_1, ytranslate[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.4 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							0.0 , G[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[17], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color_2 = new Float32Array([  0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
														0.0 , G[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color_2, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.43 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color_2 = new Float32Array([  0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							0.0 , G[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod_color_2, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	// 20
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.12 + c_1, ytranslate[19], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_color = new Float32Array([  0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							0.0 , G[19], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj.length / 2);
	gl.bindVertexArray(null);

	// 21
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Random 4
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.19 + c_1, ytranslate[20], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var arandom4_color = new Float32Array([  0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							0.0 , G[20], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, arandom4.length / 2);
	gl.bindVertexArray(null);

	// 22
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Underscores
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[21], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.42 , 0.5 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var twounderscores_color = new Float32Array([  0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							0.0 , G[21], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, twounderscores.length / 2);
	gl.bindVertexArray(null);

	// 23
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya Looking Like J
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.09 + c_1, ytranslate[22], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nyalookinglikej_color = new Float32Array([  0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							0.0 , G[22], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyalookinglikej.length / 2);
	gl.bindVertexArray(null);

	// 24
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse C And A Backslash
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.07 + c_1, ytranslate[23], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.43 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ReverseCAndABackslash_color = new Float32Array([  0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							0.0 , G[23], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReverseCAndABackslash.length / 2);
	gl.bindVertexArray(null);

	// 25
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// I
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[24], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var I_color = new Float32Array([  0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							0.0 , G[24], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, I, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, I_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, I.length / 2);
	gl.bindVertexArray(null);

	// 26
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Underscore And An A
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.14 + c_1, ytranslate[25], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var UndAndA_color = new Float32Array([  0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							0.0 , G[25], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, UndAndA.length / 2);
	gl.bindVertexArray(null);

	// 27
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[26], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							0.0 , G[26], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

	// 28
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero With A Horizontal Line In Between
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.08 + c_1, ytranslate[27], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var HorizontalLineIn0_color = new Float32Array([  0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							0.0 , G[27], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, HorizontalLineIn0, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, HorizontalLineIn0_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, HorizontalLineIn0.length / 2);
	gl.bindVertexArray(null);

	// 29
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something Like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.12 + c_1, ytranslate[28], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.47 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color = new Float32Array([  0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							0.0 , G[28], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 30
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-8.1 + c_1, ytranslate[29], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color_3 = new Float32Array([  0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							0.0 , G[29], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color_3, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

}
function Column_2(c_2) {
	// Variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse C And A Backslash
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ReverseCAndABackslash_color = new Float32Array([  0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							0.0 , G2[00], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReverseCAndABackslash.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							0.0 , G2[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something Like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color_1 = new Float32Array([  0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							0.0 , G2[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// I
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[3] + 0.02]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var I_color = new Float32Array([  0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							0.0 , G2[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, I, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, I_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, I.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Underscore And An A
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.92 + c_2, ytranslate2[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var UndAndA_color = new Float32Array([  0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							0.0 , G2[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, UndAndA.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.86 + c_2, ytranslate2[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color_2 = new Float32Array([  0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							0.0 , G2[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod_color_2, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya Looking Like J
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.86 + c_2, ytranslate2[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nyalookinglikej_color = new Float32Array([  0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							0.0 , G2[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyalookinglikej.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero With H Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.34 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zerowithhline_color = new Float32Array([  0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							0.0 , G2[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zerowithhline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zerowithhline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zerowithhline.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.88 + c_2, ytranslate2[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.33 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							0.0 , G2[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.9 + c_2, ytranslate2[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.39 , 0.46 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							0.0 , G2[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.9 + c_2, ytranslate2[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							0.0 , G2[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// *** 3 Spots Skipped ***
	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.9 + c_2, ytranslate2[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_color = new Float32Array([  0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							0.0 , G2[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.85 + c_2, ytranslate2[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							0.0 , G2[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.85 + c_2, ytranslate2[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							0.0 , G2[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_and_h_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.85 + c_2, ytranslate2[17] + 0.01]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							0.0 , G2[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.85 + c_2, ytranslate2[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.42 , 0.24 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							0.0 , G2[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.78 + c_2, ytranslate2[20] + 0.01]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.375 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							0.0 , G2[20], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[21], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							0.0 , G2[21], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[22], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							0.0 , G2[22], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, c_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 20
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[23], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							0.0 , G2[23], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 21
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[24], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							0.0 , G2[24], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 22
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Underscores
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[25], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var twounderscores_color = new Float32Array([  0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							0.0 , G2[25], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, twounderscores.length / 2);
	gl.bindVertexArray(null);

	// 23
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[26], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							0.0 , G2[26], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 24
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya Looking Like J
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[27], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nyalookinglikej_color_1 = new Float32Array([  0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							0.0 , G2[27], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nyalookinglikej_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyalookinglikej.length / 2);
	gl.bindVertexArray(null);

	// 25
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.79 + c_2, ytranslate2[28], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.41 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color = new Float32Array([  0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							0.0 , G2[28], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zero_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 26
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G 
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.81 + c_2, ytranslate2[29], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_color = new Float32Array([  0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							0.0 , G2[29], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg.length / 2);
	gl.bindVertexArray(null);

	// 27
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C Bottom H Line At Start
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.83 + c_2, ytranslate2[30], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.4 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var cbottomhlineatstart_color = new Float32Array([  0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							0.0 , G2[30], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, cbottomhlineatstart_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, cbottomhlineatstart.length / 2);
	gl.bindVertexArray(null);

	// 28
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.79 + c_2, ytranslate2[31], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.41 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color_1 = new Float32Array([  0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							0.0 , G2[31], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zero_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

}
function Column_3(c_3) {
	// variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// Code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.2 + c_3, ytranslate3[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.41 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color_1 = new Float32Array([  0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							0.0 , G3[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zero_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color = new Float32Array([  0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							0.0 , G3[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color_1 = new Float32Array([  0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							0.0 , G3[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven Prime
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var primeseven_color = new Float32Array([  0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							0.0 , G3[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, primeseven.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Right Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var rightarrowhead_color = new Float32Array([  0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							0.0 , G3[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, rightarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, rightarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, rightarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Left Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.1 + c_3, ytranslate3[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var leftarrowhead_color = new Float32Array([  0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							0.0 , G3[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, leftarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Three Horizontal lines
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var threehorizontallines_color = new Float32Array([  0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							0.0 , G3[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, threehorizontallines.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							0.0 , G3[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Plus
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.15 + c_3, ytranslate3[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var plus_color = new Float32Array([  0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							0.0 , G3[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, plus, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, plus_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, plus.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Right Side Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.28 + c_3, ytranslate3[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var rightsideline_color = new Float32Array([  0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							0.0 , G3[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, rightsideline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, rightsideline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, rightsideline.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Horizontal Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var hline_color = new Float32Array([  0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							0.0 , G3[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, hline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, hline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, hline.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Dots In Center
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var dotsincenter_color = new Float32Array([  0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							0.0 , G3[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, dotsincenter, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, dotsincenter_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, dotsincenter.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zee
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zee_color = new Float32Array([  0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							0.0 , G3[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zee, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zee_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zee.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Zee
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversezee_color = new Float32Array([  0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							0.0 , G3[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversezee, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversezee_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversezee.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var seven_color = new Float32Array([  0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							0.0 , G3[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, seven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, seven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, seven.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [-7.16 + c_3, ytranslate3[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							0.0 , G3[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

}
function Column_4(c_4) {
	// variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// One
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var one_color = new Float32Array([  0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							0.0 , G4[00], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, one, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, one_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, one.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							0.0 , G4[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Small Quad
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asmallquad_color = new Float32Array([  0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							0.0 , G4[02], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asmallquad.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Nine
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversenine_color = new Float32Array([  0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							0.0 , G4[03], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversenine.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zee
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zee_color = new Float32Array([  0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							0.0 , G4[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zee, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zee_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zee.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Three Horizontal lines
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var threehorizontallines_color = new Float32Array([  0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							0.0 , G4[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, threehorizontallines.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Random 4
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.7 + c_4, ytranslate4[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var arandom4_color = new Float32Array([  0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							0.0 , G4[06], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, arandom4.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Left Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.54 + c_4, ytranslate4[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var leftarrowhead_color = new Float32Array([  0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							0.0 , G4[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, leftarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.58 + c_4, ytranslate4[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							0.0 , G4[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.6 + c_4, ytranslate4[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							0.0 , G4[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, c_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.63 + c_4, ytranslate4[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							0.0 , G4[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.61 + c_4, ytranslate4[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.28 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							0.0 , G4[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Plus
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var plus_color = new Float32Array([  0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							0.0 , G4[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, plus, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, plus_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, plus.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.61 + c_4, ytranslate4[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.41 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zero_color_1 = new Float32Array([  0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							0.0 , G4[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zero, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zero_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zero.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.63 + c_4, ytranslate4[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.25 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							0.0 , G4[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.51 + c_4, ytranslate4[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							0.0 , G4[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.63 + c_4, ytranslate4[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color = new Float32Array([  0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							0.0 , G4[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.63 + c_4, ytranslate4[17], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							0.0 , G4[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Dots In Center
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var dotsincenter_color = new Float32Array([  0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							0.0 , G4[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, dotsincenter, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, dotsincenter_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, dotsincenter.length / 2);
	gl.bindVertexArray(null);

	// 20
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Right Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[19], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var rightarrowhead_color = new Float32Array([  0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							0.0 , G4[19], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, rightarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, rightarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, rightarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 21
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[20], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color_1 = new Float32Array([  0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							0.0 , G4[20], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color_1, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 22
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven Prime
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[21], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var primeseven_color = new Float32Array([  0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							0.0 , G4[21], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, primeseven.length / 2);
	gl.bindVertexArray(null);

	// 23
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Right Side Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.7 + c_4, ytranslate4[22], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var rightsideline_color = new Float32Array([  0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							0.0 , G4[22], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, rightsideline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, rightsideline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, rightsideline.length / 2);
	gl.bindVertexArray(null);

	// 24
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[23], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.29 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_color = new Float32Array([  0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							0.0 , G4[23], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj.length / 2);
	gl.bindVertexArray(null);

	// 25
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Eight
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.56 + c_4, ytranslate4[24], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.2 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var eight_color = new Float32Array([  0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							0.0 , G4[24], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, eight, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, eight_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, eight.length / 2);
	gl.bindVertexArray(null);

	// 26
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[25], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							0.0 , G4[25], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

	// 27
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Underscores
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[26], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var twounderscores_color = new Float32Array([  0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							0.0 , G4[26], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, twounderscores.length / 2);
	gl.bindVertexArray(null);

	// 28
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// I
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[27], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var I_color = new Float32Array([  0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							0.0 , G4[27], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, I, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, I_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, I.length / 2);
	gl.bindVertexArray(null);

	// 29
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero With A Horizontal Line In Between
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[28], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var HorizontalLineIn0_color = new Float32Array([  0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							0.0 , G4[28], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, HorizontalLineIn0, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, HorizontalLineIn0_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, HorizontalLineIn0.length / 2);
	gl.bindVertexArray(null);

	// 30
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse C And A
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.65 + c_4, ytranslate4[29], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ReverseCAndA_color = new Float32Array([  0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							0.0 , G4[29], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReverseCAndA.length / 2);
	gl.bindVertexArray(null);

	// 31
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Underscore And An A
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.68 + c_4, ytranslate4[30], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var UndAndA_color = new Float32Array([  0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							0.0 , G4[30], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, UndAndA.length / 2);
	gl.bindVertexArray(null);

	// 32
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven
	mat4.translate(modelViewMatrix, modelViewMatrix, [-6.58 + c_4, ytranslate4[31], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.30 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var seven_color = new Float32Array([  0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							0.0 , G4[31], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, seven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, seven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, seven.length / 2);
	gl.bindVertexArray(null);

}
function Column_5(c_5) {
	// variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.8 + c_5, ytranslate5[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color = new Float32Array([  0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							0.0 , G5[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Vertical Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.8 + c_5, ytranslate5[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var vline_color = new Float32Array([  0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							0.0 , G5[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, vline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, vline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, vline.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zero With H Line
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.9 + c_5, ytranslate5[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zerowithhline_color = new Float32Array([  0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							0.0 , G5[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zerowithhline, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zerowithhline_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zerowithhline.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Nine
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.83 + c_5, ytranslate5[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversenine_color = new Float32Array([  0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							0.0 , G5[03], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversenine.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Left Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.8 + c_5, ytranslate5[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var leftarrowhead_color = new Float32Array([  0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							0.0 , G5[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, leftarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something Like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.93 + c_5, ytranslate5[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color = new Float32Array([  0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							0.0 , G5[05], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.82 + c_5, ytranslate5[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							0.0 , G5[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// E With G
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.9 + c_5, ytranslate5[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.28 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ewithg_color = new Float32Array([  0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							0.0 , G5[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ewithg_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ewithg.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.91 + c_5, ytranslate5[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							0.0 , G5[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.87 + c_5, ytranslate5[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							0.0 , G5[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.87 + c_5, ytranslate5[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var c_color = new Float32Array([  0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							0.0 , G5[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, c, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, c_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, c.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.83 + c_5, ytranslate5[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							0.0 , G5[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Random 4
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.97 + c_5, ytranslate5[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var arandom4_color = new Float32Array([  0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							0.0 , G5[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, arandom4.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zee
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.83 + c_5, ytranslate5[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zee_color = new Float32Array([  0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							0.0 , G5[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zee, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zee_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zee.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// One
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.83 + c_5, ytranslate5[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var one_color = new Float32Array([  0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							0.0 , G5[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, one, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, one_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, one.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.93 + c_5, ytranslate5[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							0.0 , G5[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.93 + c_5, ytranslate5[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							0.0 , G5[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

}
function Column_6(c_6) {
	// Variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And H
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.1 + c_6, ytranslate6[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_and_h_color = new Float32Array([  0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[5], 0.0,
							0.0 , G6[0], 0.0,
							0.0 , G6[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nyaandh, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_and_h_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nyaandh.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.1 + c_6, ytranslate6[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							0.0 , G6[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.15 + c_6, ytranslate6[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.34 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_color = new Float32Array([  0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							0.0 , G6[02], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Nine
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.03 + c_6, ytranslate6[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversenine_color = new Float32Array([  0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							0.0 , G6[03], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversenine.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.04 + c_6, ytranslate6[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							0.0 , G6[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// 3 With Upper Half of 3 comparatively bigger	
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.13 + c_6, ytranslate6[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var upperhalfthreebigger_color = new Float32Array([  0.0 , G6[5], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							0.0 , G6[05], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, upperhalfthreebigger_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, upperhalfthreebigger.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Small Quad
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.05 + c_6, ytranslate6[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.25 , 0.4 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asmallquad_color = new Float32Array([  0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							0.0 , G6[06], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asmallquad.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Zee
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.05 + c_6, ytranslate6[07], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.35 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var zee_color = new Float32Array([  0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							0.0 , G6[07], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, zee, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, zee_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, zee.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.18 + c_6, ytranslate6[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.42 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							0.0 , G6[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.13 + c_6, ytranslate6[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							0.0 , G6[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Plus
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.03 + c_6, ytranslate6[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var plus_color = new Float32Array([  0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							0.0 , G6[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, plus, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, plus_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, plus.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.05 + c_6, ytranslate6[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							0.0 , G6[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.11 + c_6, ytranslate6[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var nya_color = new Float32Array([  0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							0.0 , G6[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, nya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, nya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, nya.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse C And A Backslash
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.14 + c_6, ytranslate6[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.34 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ReverseCAndABackslash_color = new Float32Array([  0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							0.0 , G6[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReverseCAndABackslash.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// One
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.05 + c_6, ytranslate6[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var one_color = new Float32Array([  0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							0.0 , G6[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, one, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, one_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, one.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like C Without the |
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.15 + c_6, ytranslate6[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.41 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var likecwithoutbar_color = new Float32Array([  0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							0.0 , G6[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, likecwithoutbar_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, likecwithoutbar.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.04 + c_6, ytranslate6[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							0.0 , G6[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Three Horizontal lines
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.06 + c_6, ytranslate6[17], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var threehorizontallines_color = new Float32Array([  0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							0.0 , G6[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, threehorizontallines.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-5.06 + c_6, ytranslate6[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color = new Float32Array([  0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							0.0 , G6[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

}
function Column_7(c_7) {
	// variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something Like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.36 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color = new Float32Array([  0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							0.0 , G7[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Underscore And An A
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.34 + c_7, ytranslate7[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var UndAndA_color = new Float32Array([  0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							0.0 , G7[1], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, UndAndA.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Left Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.15 + c_7, ytranslate7[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var leftarrowhead_color = new Float32Array([  0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							0.0 , G7[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, leftarrowhead.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse C And A Backslash
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.28 , 0.38 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ReverseCAndABackslash_color = new Float32Array([  0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							0.0 , G7[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ReverseCAndABackslash_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReverseCAndABackslash.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Underscores
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var twounderscores_color = new Float32Array([  0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							0.0 , G7[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, twounderscores.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// I
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var I_color = new Float32Array([  0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							0.0 , G7[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, I, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, I_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, I.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							0.0 , G7[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven Prime
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.23 + c_7, ytranslate7[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var primeseven_color = new Float32Array([  0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							0.0 , G7[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, primeseven.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.23 + c_7, ytranslate7[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color = new Float32Array([  0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							0.0 , G7[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.35 + c_7, ytranslate7[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							0.0 , G7[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.25 + c_7, ytranslate7[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.36 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var seven_color = new Float32Array([  0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							0.0 , G7[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, seven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, seven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, seven.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Eight
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.25 + c_7, ytranslate7[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.2 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var eight_color = new Float32Array([  0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							0.0 , G7[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, eight, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, eight_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, eight.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Nine
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.25 + c_7, ytranslate7[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversenine_color = new Float32Array([  0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							0.0 , G7[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversenine.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// One
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.22 + c_7, ytranslate7[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.34 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var one_color = new Float32Array([  0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							0.0 , G7[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, one, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, one_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, one.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Three Horizontal lines
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.25 + c_7, ytranslate7[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var threehorizontallines_color = new Float32Array([  0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							0.0 , G7[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, threehorizontallines.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Random 4
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.4 + c_7, ytranslate7[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var arandom4_color = new Float32Array([  0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							0.0 , G7[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, arandom4.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.37 + c_7, ytranslate7[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.43 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							0.0 , G7[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.37 + c_7, ytranslate7[17], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.39 , 0.404 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							0.0 , G7[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.37 + c_7, ytranslate7[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							0.0 , G7[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);

	// 20
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.44 + c_7, ytranslate7[19], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.47 , 0.4 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							0.0 , G7[19], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 21
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.39 + c_7, ytranslate7[20], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.42 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							0.0 , G7[20], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 22
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.3 + c_7, ytranslate7[21], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							0.0 , G7[21], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 23
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.34 + c_7, ytranslate7[22], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.47 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							0.0 , G7[22], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 24
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.34 + c_7, ytranslate7[23], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[32], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							0.0 , G7[23], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

	// 25
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Small Quad
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.34 + c_7, ytranslate7[24], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asmallquad_color = new Float32Array([  0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							0.0 , G7[24], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asmallquad.length / 2);
	gl.bindVertexArray(null);

	// 26
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [-4.34 + c_7, ytranslate7[25], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							0.0 , G7[25], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

}
function Column_8(c_8) {
	// variable declarations
	var modelViewMatrix = mat4.create();
	var modelViewProjectionMatrix = mat4.create();
	// code
	// 1
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Delta
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[0], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.22 , 0.22 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var delta_color = new Float32Array([  0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							0.0 , G8[0], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, delta, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, delta_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, delta.length / 2);
	gl.bindVertexArray(null);

	// 2
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Small Quad
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.00 + c_8, ytranslate8[1], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asmallquad_color = new Float32Array([  0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							0.0 , G8[01], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asmallquad_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asmallquad.length / 2);
	gl.bindVertexArray(null);

	// 3
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Double Inverted Commas
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.00 + c_8, ytranslate8[2], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.44 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var doubleinvertedcommas_color = new Float32Array([  0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							0.0 , G8[2], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, doubleinvertedcommas_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, doubleinvertedcommas.length / 2);
	gl.bindVertexArray(null);

	// 4
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Ancient Alien Man
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[3], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.5 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var ancientalienman_color = new Float32Array([  0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							0.0 , G8[3], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, ancientalienman_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ancientalienman.length / 2);
	gl.bindVertexArray(null);

	// 5
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Nya And T
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[4], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.47 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var tandnya_color = new Float32Array([  0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							0.0 , G8[4], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, tandnya_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, tandnya.length / 2);
	gl.bindVertexArray(null);

	// 6
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something like G But TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.85 + c_8, ytranslate8[5], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.42 , 0.24 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var somethinglikeg_tod_color = new Float32Array([  0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							0.0 , G8[5], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, somethinglikeg_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, somethinglikeg_tod.length / 2);
	gl.bindVertexArray(null);

	// 7
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Not equal to
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.85 + c_8, ytranslate8[6], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.47 , 0.4 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var notequalto_color = new Float32Array([  0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							0.0 , G8[6], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, notequalto_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, notequalto.length / 2);
	gl.bindVertexArray(null);

	// 8
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Jap
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[7], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var two_jap_color = new Float32Array([  0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							0.0 , G8[7], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, two_jap_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, two_jap.length / 2);
	gl.bindVertexArray(null);

	// 9
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse E
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[8], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.39 , 0.404 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var C = new Float32Array([  0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							0.0 , G8[8], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, e_reverse, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, C, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, e_reverse.length / 2);
	gl.bindVertexArray(null);

	// 10
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// StylishJ_TOD
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[9], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.34 , 0.43 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var stylishj_tod_color = new Float32Array([  0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							0.0 , G8[9], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, stylishj_tod_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, stylishj_tod.length / 2);
	gl.bindVertexArray(null);

	// 11
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// A Random 4
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.85 + c_8, ytranslate8[10], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.37 , 0.36 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var arandom4_color = new Float32Array([  0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							0.0 , G8[10], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, arandom4_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, arandom4.length / 2);
	gl.bindVertexArray(null);

	// 12
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Three Horizontal lines
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.00 + c_8, ytranslate8[11], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.3 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var threehorizontallines_color = new Float32Array([  0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							0.0 , G8[11], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, threehorizontallines_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, threehorizontallines.length / 2);
	gl.bindVertexArray(null);

	// 13
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// One
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[12], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.34 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var one_color = new Float32Array([  0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							0.0 , G8[12], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, one, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, one_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, one.length / 2);
	gl.bindVertexArray(null);

	// 14
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reverse Nine
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[13], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.40 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reversenine_color = new Float32Array([  0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							0.0 , G8[13], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reversenine_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, reversenine.length / 2);
	gl.bindVertexArray(null);

	// 15
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Eight
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.00 + c_8, ytranslate8[14], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.3 , 0.2 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var eight_color = new Float32Array([  0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							0.0 , G8[14], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, eight, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, eight_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, eight.length / 2);
	gl.bindVertexArray(null);

	// 16
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[15], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.36 , 0.33 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var seven_color = new Float32Array([  0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							0.0 , G8[15], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, seven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, seven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, seven.length / 2);
	gl.bindVertexArray(null);

	// 17
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Reflection Of F On Water
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[16], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.32 , 0.35 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var reflection_of_f_on_water_color = new Float32Array([  0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							0.0 , G8[16], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, ReflectionOfFOnWater, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, reflection_of_f_on_water_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, ReflectionOfFOnWater.length / 2);
	gl.bindVertexArray(null);

	// 18
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Asterisk
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[17], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var asterisk_color = new Float32Array([  0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							0.0 , G8[17], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, asterisk_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, asterisk.length / 2);
	gl.bindVertexArray(null);

	// 19
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Seven Prime
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[18], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var primeseven_color = new Float32Array([  0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							0.0 , G8[18], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, primeseven_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, primeseven.length / 2);
	gl.bindVertexArray(null);

	// 20
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Middle Line Extended and three
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[19], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.31 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var MiddleLineExAnd3_color = new Float32Array([  0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							0.0 , G8[19], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, MiddleLineExAnd3_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, MiddleLineExAnd3.length / 2);
	gl.bindVertexArray(null);

	// 21
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// I
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[20], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.41 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var I_color = new Float32Array([  0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							0.0 , G8[20], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, I, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, I_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, I.length / 2);
	gl.bindVertexArray(null);

	// 22
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Two Underscores
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[21], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.38 , 0.37 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var twounderscores_color = new Float32Array([  0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							0.0 , G8[21], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, twounderscores_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, twounderscores.length / 2);
	gl.bindVertexArray(null);

	// 23
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Something Like C
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.9 + c_8, ytranslate8[22], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.36 , 0.39 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var SomethingLikeC_color = new Float32Array([  0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							0.0 , G8[22], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, SomethingLikeC_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, SomethingLikeC.length / 2);
	gl.bindVertexArray(null);

	// 24
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Underscore And An A
	mat4.translate(modelViewMatrix, modelViewMatrix, [2.85 + c_8, ytranslate8[23], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.4 , 0.32 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var UndAndA_color = new Float32Array([  0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							0.0 , G8[23], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, UndAndA_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, UndAndA.length / 2);
	gl.bindVertexArray(null);

	// 25
	modelViewMatrix = mat4.create();
	modelViewProjectionMatrix = mat4.create();

	// Left Arrow Head
	mat4.translate(modelViewMatrix, modelViewMatrix, [3.0 + c_8, ytranslate8[24], -11.0]);
	mat4.scale(modelViewMatrix, modelViewMatrix, [0.45 , 0.45 , 0.0]);
	mat4.multiply(modelViewProjectionMatrix, perspectiveProjectionMatrix, modelViewMatrix);
	gl.uniformMatrix4fv(mvpUniform, false, modelViewProjectionMatrix);

	var leftarrowhead_color = new Float32Array([  0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							0.0 , G8[24], 0.0,
							]);

	gl.bindVertexArray(vao);
	gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead, gl.DYNAMIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, vbo_color);
	gl.bufferData(gl.ARRAY_BUFFER, leftarrowhead_color, gl.DYNAMIC_DRAW);

	gl.drawArrays(gl.LINES, 0, leftarrowhead.length / 2);
	gl.bindVertexArray(null);

}
