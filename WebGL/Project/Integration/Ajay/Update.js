function Matrix_Update() {
	// variable declarations
	var position = -1.5;

	// code
	//IsFirstColumnReady = true;
	//IsSecondColumnReady = true;
	//IsThirdColumnReady = true;

	if (iStart != START)
		return;

	if (IsFirstColumnReady) {
		if (bStartMakingFirstRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingFirstRowDisappear == true && (G[29] <= 0.0)) {
			for (var a = 0; a < G.length; a++) {
				ytranslate[a] = position;
				position -= 3.0;
			}
			
			bStartMakingFirstRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
			
			countOfReappearance++;
		}
		
		if (ytranslate[0] <= 4.5) 
			ytranslate[0] = ytranslate[0] + fSpeed;
		else {
			if ( G[0]  < 1.0)
				G[0] = G[0] + fCSpeed;
			if (			ytranslate[0]  !=  4.5)
				ytranslate[0] = 4.5;
		}

		if (ytranslate[1] <= 4.2) 
			ytranslate[1] = ytranslate[1] + fSpeed;
		else {
			if ( G[1]  < 1.0)
				G[1] = G[1] + fCSpeed;
			if (			ytranslate[1]  !=  4.2)
				ytranslate[1] = 4.2;
		}

		if (ytranslate[2] <= 3.92) 
			ytranslate[2] = ytranslate[2] + fSpeed;
		else {
			if ( G[2]  < 1.0)
				G[2] = G[2] + fCSpeed;
			if (			ytranslate[2]  !=  3.92)
				ytranslate[2] = 3.92;
		}

		if (ytranslate[3] <= 3.64) 
			ytranslate[3] = ytranslate[3] + fSpeed;
		else {
			if ( G[3]  < 1.0)
				G[3] = G[3] + fCSpeed;
			if (			ytranslate[3]  !=  3.64)
				ytranslate[3] = 3.64;
		}

		if (ytranslate[4] <= 3.29) 
			ytranslate[4] = ytranslate[4] + fSpeed;
		else {
			if ( G[4]  < 1.0)
				G[4] = G[4] + fCSpeed;
			if (			ytranslate[4]  !=  3.29)
				ytranslate[4] = 3.29;

			// Start Fourth Column
			IsFourthColumnReady = true;
		}

		if (ytranslate[5] <= 2.95) 
			ytranslate[5] = ytranslate[5] + fSpeed;
		else {
			if ( G[5]  < 1.0)
				G[5] = G[5] + fCSpeed;
			if (			ytranslate[5]  !=  2.95)
				ytranslate[5] = 2.95;
		}

		if (ytranslate[6] <= 2.42) 
			ytranslate[6] = ytranslate[6] + fSpeed;
		else {
			if ( G[6]  < 1.0)
				G[6] = G[6] + fCSpeed;
			if (			ytranslate[6]  !=  2.42)
				ytranslate[6] = 2.42;
		}

		if (ytranslate[7] <= 2.34) 
			ytranslate[7] = ytranslate[7] + fSpeed;
		else {
			if ( G[7]  < 1.0)
				G[7] = G[7] + fCSpeed;
			if (			ytranslate[7]  !=  2.34)
				ytranslate[7] = 2.34;
		}

		if (ytranslate[8] <= 1.99) 
			ytranslate[8] = ytranslate[8] + fSpeed;
		else {
			if ( G[8]  < 1.0)
				G[8] = G[8] + fCSpeed;
			if (			ytranslate[8]  !=  1.99)
				ytranslate[8] = 1.99;
		}

		if (ytranslate[9] <= 1.53) 
			ytranslate[9] = ytranslate[9] + fSpeed;
		else {
			if ( G[9]  < 1.0)
				G[9] = G[9] + fCSpeed;
			if (			ytranslate[9]  !=  1.53)
				ytranslate[9] = 1.53;
		}

		if (ytranslate[10] <= 1.29) 
			ytranslate[10] = ytranslate[10] + fSpeed;
		else {
			if ( G[10]  < 1.0)
				G[10] = G[10] + fCSpeed;
			if (			ytranslate[10]  !=  1.29)
				ytranslate[10] = 1.29;
		}

		if (ytranslate[11] <= 0.97) 
			ytranslate[11] = ytranslate[11] + fSpeed;
		else {
			if ( G[11]  < 1.0)
				G[11] = G[11] + fCSpeed;
			if (			ytranslate[11]  !=  0.97)
				ytranslate[11] = 0.97;
		}

		if (ytranslate[12] <= 0.67) 
			ytranslate[12] = ytranslate[12] + fSpeed;
		else {
			if ( G[12]  < 1.0)
				G[12] = G[12] + fCSpeed;
			if (			ytranslate[12]  !=  0.67)
				ytranslate[12] = 0.67;
		}

		if (ytranslate[13] <= 0.37) 
			ytranslate[13] = ytranslate[13] + fSpeed;
		else {
			if ( G[13]  < 1.0)
				G[13] = G[13] + fCSpeed;
			if (			ytranslate[13]  !=  0.37)
				ytranslate[13] = 0.37;
		}

		if (ytranslate[14] <= 0.04) 
			ytranslate[14] = ytranslate[14] + fSpeed;
		else {
			if ( G[14]  < 1.0)
				G[14] = G[14] + fCSpeed;
			if (			ytranslate[14]  !=  0.04)
				ytranslate[14] = 0.04;
		}

		if (ytranslate[15] <= -0.28) 
			ytranslate[15] = ytranslate[15] + fSpeed;
		else {
			if ( G[15]  < 1.0)
				G[15] = G[15] + fCSpeed;
			if (			ytranslate[15]  !=  -0.28)
				ytranslate[15] = -0.28;
		}

		if (ytranslate[16] <= -0.585) 
			ytranslate[16] = ytranslate[16] + fSpeed;
		else {
			if ( G[16]  < 1.0)
				G[16] = G[16] + fCSpeed;
			if (			ytranslate[16]  !=  -0.585)
				ytranslate[16] = -0.585;
		}

		if (ytranslate[17] <= -0.9) 
			ytranslate[17] = ytranslate[17] + fSpeed;
		else {
			if ( G[17]  < 1.0)
				G[17] = G[17] + fCSpeed;
			if (			ytranslate[17]  !=  -0.9)
				ytranslate[17] = -0.9;
		}

		if (ytranslate[18] <= -1.2) 
			ytranslate[18] = ytranslate[18] + fSpeed;
		else {
			if ( G[18]  < 1.0)
				G[18] = G[18] + fCSpeed;
			if (			ytranslate[18]  !=  -1.2)
				ytranslate[18] = -1.2;
		}

		if (ytranslate[19] <= -1.5) 
			ytranslate[19] = ytranslate[19] + fSpeed;
		else {
			if ( G[19]  < 1.0)
				G[19] = G[19] + fCSpeed;
			if (			ytranslate[19]  !=  -1.5)
				ytranslate[19] = -1.5;
		}

		if (ytranslate[20] <= -1.8) 
			ytranslate[20] = ytranslate[20] + fSpeed;
		else {
			if ( G[20]  < 1.0)
				G[20] = G[20] + fCSpeed;
			if (			ytranslate[20]  !=  -1.8)
				ytranslate[20] = -1.8;
		}

		if (ytranslate[21] <= -2.0) 
			ytranslate[21] = ytranslate[21] + fSpeed;
		else {
			if ( G[21]  < 1.0)
				G[21] = G[21] + fCSpeed;
			if (			ytranslate[21]  !=  -2.0)
				ytranslate[21] = -2.0;
		}

		if (ytranslate[22] <= -2.35) 
			ytranslate[22] = ytranslate[22] + fSpeed;
		else {
			if ( G[22]  < 1.0)
				G[22] = G[22] + fCSpeed;
			if (			ytranslate[22]  !=  -2.35)
				ytranslate[22] = -2.35;
		}

		if (ytranslate[23] <= -2.66) 
			ytranslate[23] = ytranslate[23] + fSpeed;
		else {
			if ( G[23]  < 1.0)
				G[23] = G[23] + fCSpeed;
			if (			ytranslate[23]  !=  -2.66)
				ytranslate[23] = -2.66;
		}

		if (ytranslate[24] <= -2.96) 
			ytranslate[24] = ytranslate[24] + fSpeed;
		else {
			if ( G[24]  < 1.0)
				G[24] = G[24] + fCSpeed;
			if (			ytranslate[24]  !=  -2.96)
				ytranslate[24] = -2.96;
		}

		if (ytranslate[25] <= -3.26) 
			ytranslate[25] = ytranslate[25] + fSpeed;
		else {
			if ( G[25]  < 1.0)
				G[25] = G[25] + fCSpeed;
			if (			ytranslate[25]  !=  -3.26)
				ytranslate[25] = -3.26;
		}

		if (ytranslate[26] <= -3.56) 
			ytranslate[26] = ytranslate[26] + fSpeed;
		else {
			if ( G[26]  < 1.0)
				G[26] = G[26] + fCSpeed;
			if (			ytranslate[26]  !=  -3.56)
				ytranslate[26] = -3.56;
		}

		if (ytranslate[27] <= -3.86) 
			ytranslate[27] = ytranslate[27] + fSpeed;
		else {
			if ( G[27]  < 1.0)
				G[27] = G[27] + fCSpeed;
			if (			ytranslate[27]  !=  -3.86)
				ytranslate[27] = -3.86;
		}

		if (ytranslate[28] <= -4.16) 
			ytranslate[28] = ytranslate[28] + fSpeed;
		else {
			if ( G[28]  < 1.0)
				G[28] = G[28] + fCSpeed;
			if (			ytranslate[28]  !=  -4.16)
				ytranslate[28] = -4.16;
		}

		if (ytranslate[29] <= -4.46) 
			ytranslate[29] = ytranslate[29] + fSpeed;
		else {
			if ( G[29]  < 1.0)
				G[29] = G[29] + fCSpeed;
			if (			ytranslate[29]  !=  -4.46)
				ytranslate[29] = -4.46;
		}

		if (G[29] >= 1.0) {
			bStartMakingFirstRowDisappear = true;
			//fCSpeed = 0.0f;
		}

		if (bStartMakingFirstRowDisappear == true) {
			fCSpeed = 0.0512;
			fSpeed = 0.4;
			
			for (var p = 0; p < G.length; p++) {
				if (p == 0) {
					G[0] = G[0] - fCDecrement;
					continue;
				}
				
				if (G[p] >= 0.0 && G[p - 1] <= 0.0) {
					G[p] = G[p] - fCDecrement;
				}
			}
		}
	}

	if (IsSecondColumnReady) {
		if (bStartMakingSecondRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingSecondRowDisappear == true && (G2[31] <= 0.0)) {
			for (var a = 0; a < G2.length; a++) {
				ytranslate2[a] = position;
				position -= 3.0;
			}
			
			bStartMakingSecondRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate2[0] <= 4.5) 
			ytranslate2[0] = ytranslate2[0] + fSpeed;
		else {
			if ( G2[0]  < 1.0)
				G2[0] = G2[0] + fCSpeed;
			if (			ytranslate2[0]  !=  4.5)
				ytranslate2[0] = 4.5;
		}

		if (ytranslate2[1] <= 4.2) 
			ytranslate2[1] = ytranslate2[1] + fSpeed;
		else {
			if ( G2[1]  < 1.0)
				G2[1] = G2[1] + fCSpeed;
			if (			ytranslate2[1]  !=  4.2)
				ytranslate2[1] = 4.2;
		}

		if (ytranslate2[2] <= 3.9) 
			ytranslate2[2] = ytranslate2[2] + fSpeed;
		else {
			if ( G2[2]  < 1.0)
				G2[2] = G2[2] + fCSpeed;
			if (			ytranslate2[2]  !=  3.9)
				ytranslate2[2] = 3.9;
		}

		if (ytranslate2[3] <= 3.6) 
			ytranslate2[3] = ytranslate2[3] + fSpeed;
		else {
			if ( G2[3]  < 1.0)
				G2[3] = G2[3] + fCSpeed;
			if (			ytranslate2[3]  !=  3.6)
				ytranslate2[3] = 3.6;
		}

		// Start Seventh Column

		if (ytranslate2[4] <= 3.3) 
			ytranslate2[4] = ytranslate2[4] + fSpeed;
		else {
			if ( G2[4]  < 1.0)
				G2[4] = G2[4] + fCSpeed;
			if (			ytranslate2[4]  !=  3.3)
				ytranslate2[4] = 3.3;

			IsSeventhColumnReady = true;
		}

		if (ytranslate2[5] <= 3.02) 
			ytranslate2[5] = ytranslate2[5] + fSpeed;
		else {
			if ( G2[5]  < 1.0)
				G2[5] = G2[5] + fCSpeed;
			if (			ytranslate2[5]  !=  3.02)
				ytranslate2[5] = 3.02;
		}

		if (ytranslate2[6] <= 2.72) 
			ytranslate2[6] = ytranslate2[6] + fSpeed;
		else {
			if ( G2[6]  < 1.0)
				G2[6] = G2[6] + fCSpeed;
			if (			ytranslate2[6]  !=  2.72)
				ytranslate2[6] = 2.72;
		}

		if (ytranslate2[7] <= 2.42) 
			ytranslate2[7] = ytranslate2[7] + fSpeed;
		else {
			if ( G2[7]  < 1.0)
				G2[7] = G2[7] + fCSpeed;
			if (			ytranslate2[7]  !=  2.42)
				ytranslate2[7] = 2.42;
		}

		if (ytranslate2[8] <= 2.12) 
			ytranslate2[8] = ytranslate2[8] + fSpeed;
		else {
			if ( G2[8]  < 1.0)
				G2[8] = G2[8] + fCSpeed;
			if (			ytranslate2[8]  !=  2.12)
				ytranslate2[8] = 2.12;
		}

		if (ytranslate2[9] <= 1.85) 
			ytranslate2[9] = ytranslate2[9] + fSpeed;
		else {
			if ( G2[9]  < 1.0)
				G2[9] = G2[9] + fCSpeed;
			if (			ytranslate2[9]  !=  1.85)
				ytranslate2[9] = 1.85;
		}

		if (ytranslate2[10] <= 1.54) 
			ytranslate2[10] = ytranslate2[10] + fSpeed;
		else {
			if ( G2[10]  < 1.0)
				G2[10] = G2[10] + fCSpeed;
			if (			ytranslate2[10]  !=  1.54)
				ytranslate2[10] = 1.54;
		}

		// *** 3 Spots Skipped -> ytranslate2[14] *** 

		if (ytranslate2[14] <= 0.34) 
			ytranslate2[14] = ytranslate2[14] + fSpeed;
		else {
			if ( G2[14]  < 1.0)
				G2[14] = G2[14] + fCSpeed;
			if (			ytranslate2[14]  !=  0.34)
				ytranslate2[14] = 0.34;
		}

		if (ytranslate2[15] <= 0.04) 
			ytranslate2[15] = ytranslate2[15] + fSpeed;
		else {
			if ( G2[15]  < 1.0)
				G2[15] = G2[15] + fCSpeed;
			if (			ytranslate2[15]  !=  0.04)
				ytranslate2[15] = 0.04;
		}

		if (ytranslate2[16] <= -0.26) 
			ytranslate2[16] = ytranslate2[16] + fSpeed;
		else {
			if ( G2[16]  < 1.0)
				G2[16] = G2[16] + fCSpeed;
			if (			ytranslate2[16]  !=  -0.26)
				ytranslate2[16] = -0.26;
		}

		if (ytranslate2[17] <= -0.56) 
			ytranslate2[17] = ytranslate2[17] + fSpeed;
		else {
			if ( G2[17]  < 1.0)
				G2[17] = G2[17] + fCSpeed;
			if (			ytranslate2[17]  !=  -0.56)
				ytranslate2[17] = -0.56;
		}

		if (ytranslate2[18] <= -0.9) 
			ytranslate2[18] = ytranslate2[18] + fSpeed;
		else {
			if ( G2[18]  < 1.0)
				G2[18] = G2[18] + fCSpeed;
			if (			ytranslate2[18]  !=  -0.9)
				ytranslate2[18] = -0.9;
		}

		if (ytranslate2[20] <= -1.17) 
			ytranslate2[20] = ytranslate2[20] + fSpeed;
		else {
			if ( G2[20]  < 1.0)
				G2[20] = G2[20] + fCSpeed;
			if (			ytranslate2[20]  !=  -1.17)
				ytranslate2[20] = -1.17;
		}

		if (ytranslate2[21] <= -1.5) 
			ytranslate2[21] = ytranslate2[21] + fSpeed;
		else {
			if ( G2[21]  < 1.0)
				G2[21] = G2[21] + fCSpeed;
			if (			ytranslate2[21]  !=  -1.5)
				ytranslate2[21] = -1.5;
		}

		if (ytranslate2[22] <= -1.8) 
			ytranslate2[22] = ytranslate2[22] + fSpeed;
		else {
			if ( G2[22]  < 1.0)
				G2[22] = G2[22] + fCSpeed;
			if (			ytranslate2[22]  !=  -1.8)
				ytranslate2[22] = -1.8;
		}

		if (ytranslate2[23] <= -2.3) 
			ytranslate2[23] = ytranslate2[23] + fSpeed;
		else {
			if ( G2[23]  < 1.0)
				G2[23] = G2[23] + fCSpeed;
			if (			ytranslate2[23]  !=  -2.3)
				ytranslate2[23] = -2.3;
		}

		if (ytranslate2[24] <= -2.4) 
			ytranslate2[24] = ytranslate2[24] + fSpeed;
		else {
			if ( G2[24]  < 1.0)
				G2[24] = G2[24] + fCSpeed;
			if (			ytranslate2[24]  !=  -2.4)
				ytranslate2[24] = -2.4;
		}

		if (ytranslate2[25] <= -2.7) 
			ytranslate2[25] = ytranslate2[25] + fSpeed;
		else {
			if ( G2[25]  < 1.0)
				G2[25] = G2[25] + fCSpeed;
			if (			ytranslate2[25]  !=  -2.7)
				ytranslate2[25] = -2.7;
		}

		if (ytranslate2[26] <= -3.0) 
			ytranslate2[26] = ytranslate2[26] + fSpeed;
		else {
			if ( G2[26]  < 1.0)
				G2[26] = G2[26] + fCSpeed;
			if (			ytranslate2[26]  !=  -3.0)
				ytranslate2[26] = -3.0;
		}

		if (ytranslate2[27] <= -3.3) 
			ytranslate2[27] = ytranslate2[27] + fSpeed;
		else {
			if ( G2[27]  < 1.0)
				G2[27] = G2[27] + fCSpeed;
			if (			ytranslate2[27]  !=  -3.3)
				ytranslate2[27] = -3.3;
		}

		if (ytranslate2[28] <= -3.6) 
			ytranslate2[28] = ytranslate2[28] + fSpeed;
		else {
			if ( G2[28]  < 1.0)
				G2[28] = G2[28] + fCSpeed;
			if (			ytranslate2[28]  !=  -3.6)
				ytranslate2[28] = -3.6;
		}

		if (ytranslate2[29] <= -3.9) 
			ytranslate2[29] = ytranslate2[29] + fSpeed;
		else {
			if ( G2[29]  < 1.0)
				G2[29] = G2[29] + fCSpeed;
			if (			ytranslate2[29]  !=  -3.9)
				ytranslate2[29] = -3.9;
		}

		if (ytranslate2[30] <= -4.2) 
			ytranslate2[30] = ytranslate2[30] + fSpeed;
		else {
			if ( G2[30]  < 1.0)
				G2[30] = G2[30] + fCSpeed;
			if (			ytranslate2[30]  !=  -4.2)
				ytranslate2[30] = -4.2;
		}

		if (ytranslate2[31] <= -4.5) 
			ytranslate2[31] = ytranslate2[31] + fSpeed;
		else {
			if ( G2[31]  < 1.0)
				G2[31] = G2[31] + fCSpeed;
			if (			ytranslate2[31]  !=  -4.5)
				ytranslate2[31] = -4.5;
		}
		
		if (G2[31] >= 0.9) {
			bStartMakingSecondRowDisappear = true;
			fCSpeed = 0.0512;
			fSpeed = 0.4;
		}
		
		if (bStartMakingSecondRowDisappear == true) {
			for (var b2 = 0; b2 < G2.length; b2++) {
				if (b2 == 0) {
					G2[b2] = G2[b2] - fCDecrement;
					continue;
				}
				if (G2[b2] >= 0.0 && G2[b2 - 1] <= 0.0)
					G2[b2] = G2[b2] - fCDecrement;
			}
			
			fCSpeed = 0.0512;
			fSpeed = 0.4;
		}
	}

	// *** 3RD COLUMN ***
	if (IsThirdColumnReady) {
		if (bStartMakingThirdRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingThirdRowDisappear == true && G3[16] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G3.length; p++) {
				ytranslate3[p] = position;
				position -= 3.0;
			}
			
			bStartMakingThirdRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate3[0] <= 4.5) 
			ytranslate3[0] = ytranslate3[0] + fSpeed;
		else {
			if ( G3[0]  < 1.0)
				G3[0] = G3[0] + fCSpeed;
			if (			ytranslate3[0]  !=  4.5)
				ytranslate3[0] = 4.5;
		}

		if (ytranslate3[1] <= 4.15) 
			ytranslate3[1] = ytranslate3[1] + fSpeed;
		else {
			if ( G3[1]  < 1.0)
				G3[1] = G3[1] + fCSpeed;
			if (			ytranslate3[1]  !=  4.15)
				ytranslate3[1] = 4.15;
		}

		if (ytranslate3[2] <= 3.9) 
			ytranslate3[2] = ytranslate3[2] + fSpeed;
		else {
			if ( G3[2]  < 1.0)
				G3[2] = G3[2] + fCSpeed;
			if (			ytranslate3[2]  !=  3.9)
				ytranslate3[2] = 3.9;
		}

		if (ytranslate3[3] <= 3.6) 
			ytranslate3[3] = ytranslate3[3] + fSpeed;
		else {
			if ( G3[3]  < 1.0)
				G3[3] = G3[3] + fCSpeed;
			if (			ytranslate3[3]  !=  3.6)
				ytranslate3[3] = 3.6;
		}

		if (ytranslate3[4] <= 3.3) 
			ytranslate3[4] = ytranslate3[4] + fSpeed;
		else {
			if ( G3[4]  < 1.0)
				G3[4] = G3[4] + fCSpeed;
			if (			ytranslate3[4]  !=  3.3)
				ytranslate3[4] = 3.3;
		}

		if (ytranslate3[5] <= 3.0) 
			ytranslate3[5] = ytranslate3[5] + fSpeed;
		else {
			if ( G3[5]  < 1.0)
				G3[5] = G3[5] + fCSpeed;
			if (			ytranslate3[5]  !=  3.0)
				ytranslate3[5] = 3.0;
		}

		if (ytranslate3[6] <= 2.7) 
			ytranslate3[6] = ytranslate3[6] + fSpeed;
		else {
			if ( G3[6]  < 1.0)
				G3[6] = G3[6] + fCSpeed;
			if (			ytranslate3[6]  !=  2.7)
				ytranslate3[6] = 2.7;
		}

		if (ytranslate3[7] <= 2.35) 
			ytranslate3[7] = ytranslate3[7] + fSpeed;
		else {
			if ( G3[7]  < 1.0)
				G3[7] = G3[7] + fCSpeed;
			if (			ytranslate3[7]  !=  2.35)
				ytranslate3[7] = 2.35;
		}

		if (ytranslate3[8] <= 2.15) 
			ytranslate3[8] = ytranslate3[8] + fSpeed;
		else {
			if ( G3[8]  < 1.0)
				G3[8] = G3[8] + fCSpeed;
			if (			ytranslate3[8]  !=  2.15)
				ytranslate3[8] = 2.15;
		}

		if (ytranslate3[9] <= 1.85) 
			ytranslate3[9] = ytranslate3[9] + fSpeed;
		else {
			if ( G3[9]  < 1.0)
				G3[9] = G3[9] + fCSpeed;
			if (			ytranslate3[9]  !=  1.85)
				ytranslate3[9] = 1.85;
		}

		if (ytranslate3[10] <= 1.45) 
			ytranslate3[10] = ytranslate3[10] + fSpeed;
		else {
			if ( G3[10]  < 1.0)
				G3[10] = G3[10] + fCSpeed;
			if (			ytranslate3[10]  !=  1.45)
				ytranslate3[10] = 1.45;
		}

		if (ytranslate3[11] <= 1.3) 
			ytranslate3[11] = ytranslate3[11] + fSpeed;
		else {
			if ( G3[11]  < 1.0)
				G3[11] = G3[11] + fCSpeed;
			if (			ytranslate3[11]  !=  1.3)
				ytranslate3[11] = 1.3;
		}

		if (ytranslate3[12] <= 1.0) 
			ytranslate3[12] = ytranslate3[12] + fSpeed;
		else {
			if ( G3[12]  < 1.0)
				G3[12] = G3[12] + fCSpeed;
			if (			ytranslate3[12]  !=  1.0)
				ytranslate3[12] = 1.0;
		}

		if (ytranslate3[13] <= 0.7) 
			ytranslate3[13] = ytranslate3[13] + fSpeed;
		else {
			if ( G3[13]  < 1.0)
				G3[13] = G3[13] + fCSpeed;
			if (			ytranslate3[13]  !=  0.7)
				ytranslate3[13] = 0.7;
		}

		// Start Fifth Column

		if (ytranslate3[14] <= 0.4) 
			ytranslate3[14] = ytranslate3[14] + fSpeed;
		else {
			if ( G3[14]  < 1.0)
				G3[14] = G3[14] + fCSpeed;
			if (			ytranslate3[14]  !=  0.4)
				ytranslate3[14] = 0.4;

			IsFifthColumnReady = true;
		}

		if (ytranslate3[15] <= 0.1) 
			ytranslate3[15] = ytranslate3[15] + fSpeed;
		else {
			if ( G3[15]  < 1.0)
				G3[15] = G3[15] + fCSpeed;
			if (			ytranslate3[15]  !=  0.1)
				ytranslate3[15] = 0.1;
		}

		if (ytranslate3[16] <= -0.2) 
			ytranslate3[16] = ytranslate3[16] + fSpeed;
		else {
			if ( G3[16]  < 1.0)
				G3[16] = G3[16] + fCSpeed;
			if (			ytranslate3[16]  !=  -0.2)
				ytranslate3[16] = -0.2;
		}
		
		if (G3[16] >= 0.9) {
			bStartMakingThirdRowDisappear = true;
		}
		
		if (bStartMakingThirdRowDisappear == true) {
			for (var b2 = 0; b2 < G3.length; b2++) {
				if (b2 == 0) {
					G3[b2] = G3[b2] - fCDecrement;
					continue;
				}
				if (G3[b2] >= 0.0 && G3[b2 - 1] <= 0.0)
					G3[b2] = G3[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

	// *** 4TH COLUMN ***
	if (IsFourthColumnReady) {
		if (bStartMakingFourthRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingFourthRowDisappear == true && G4[31] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G4.length; p++) {
				ytranslate4[p] = position;
				position -= 3.0;
			}
			
			bStartMakingFourthRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate4[0] <= 4.4) 
			ytranslate4[0] = ytranslate4[0] + fSpeed;
		else {
			if ( G4[0]  < 1.0)
				G4[0] = G4[0] + fCSpeed;
			if (			ytranslate4[0]  !=  4.4)
				ytranslate4[0] = 4.4;
		}

		if (ytranslate4[1] <= 4.1) 
			ytranslate4[1] = ytranslate4[1] + fSpeed;
		else {
			if ( G4[1]  < 1.0)
				G4[1] = G4[1] + fCSpeed;
			if (			ytranslate4[1]  !=  4.1)
				ytranslate4[1] = 4.1;
		}

		if (ytranslate4[2] <= 3.85) 
			ytranslate4[2] = ytranslate4[2] + fSpeed;
		else {
			if ( G4[2]  < 1.0)
				G4[2] = G4[2] + fCSpeed;
			if (			ytranslate4[2]  !=  3.85)
				ytranslate4[2] = 3.85;
		}

		if (ytranslate4[3] <= 3.5) 
			ytranslate4[3] = ytranslate4[3] + fSpeed;
		else {
			if ( G4[3]  < 1.0)
				G4[3] = G4[3] + fCSpeed;
			if (			ytranslate4[3]  !=  3.5)
				ytranslate4[3] = 3.5;
		}

		if (ytranslate4[4] <= 3.2) 
			ytranslate4[4] = ytranslate4[4] + fSpeed;
		else {
			if ( G4[4]  < 1.0)
				G4[4] = G4[4] + fCSpeed;
			if (			ytranslate4[4]  !=  3.2)
				ytranslate4[4] = 3.2;
		}

		// Start Eighth Column

		if (ytranslate4[5] <= 2.85) 
			ytranslate4[5] = ytranslate4[5] + fSpeed;
		else {
			if ( G4[5]  < 1.0)
				G4[5] = G4[5] + fCSpeed;
			if (			ytranslate4[5]  !=  2.85)
				ytranslate4[5] = 2.85;

			IsEighthColumnReady = true;
		}

		if (ytranslate4[6] <= 2.75) 
			ytranslate4[6] = ytranslate4[6] + fSpeed;
		else {
			if ( G4[6]  < 1.0)
				G4[6] = G4[6] + fCSpeed;
			if (			ytranslate4[6]  !=  2.75)
				ytranslate4[6] = 2.75;
		}

		if (ytranslate4[7] <= 2.3) 
			ytranslate4[7] = ytranslate4[7] + fSpeed;
		else {
			if ( G4[7]  < 1.0)
				G4[7] = G4[7] + fCSpeed;
			if (			ytranslate4[7]  !=  2.3)
				ytranslate4[7] = 2.3;
		}

		if (ytranslate4[8] <= 1.95) 
			ytranslate4[8] = ytranslate4[8] + fSpeed;
		else {
			if ( G4[8]  < 1.0)
				G4[8] = G4[8] + fCSpeed;
			if (			ytranslate4[8]  !=  1.95)
				ytranslate4[8] = 1.95;
		}

		if (ytranslate4[9] <= 1.87) 
			ytranslate4[9] = ytranslate4[9] + fSpeed;
		else {
			if ( G4[9]  < 1.0)
				G4[9] = G4[9] + fCSpeed;
			if (			ytranslate4[9]  !=  1.87)
				ytranslate4[9] = 1.87;
		}

		if (ytranslate4[10] <= 1.58) 
			ytranslate4[10] = ytranslate4[10] + fSpeed;
		else {
			if ( G4[10]  < 1.0)
				G4[10] = G4[10] + fCSpeed;
			if (			ytranslate4[10]  !=  1.58)
				ytranslate4[10] = 1.58;
		}

		if (ytranslate4[11] <= 1.3) 
			ytranslate4[11] = ytranslate4[11] + fSpeed;
		else {
			if ( G4[11]  < 1.0)
				G4[11] = G4[11] + fCSpeed;
			if (			ytranslate4[11]  !=  1.3)
				ytranslate4[11] = 1.3;
		}

		if (ytranslate4[12] <= 0.97) 
			ytranslate4[12] = ytranslate4[12] + fSpeed;
		else {
			if ( G4[12]  < 1.0)
				G4[12] = G4[12] + fCSpeed;
			if (			ytranslate4[12]  !=  0.97)
				ytranslate4[12] = 0.97;
		}

		if (ytranslate4[13] <= 0.76) 
			ytranslate4[13] = ytranslate4[13] + fSpeed;
		else {
			if ( G4[13]  < 1.0)
				G4[13] = G4[13] + fCSpeed;
			if (			ytranslate4[13]  !=  0.76)
				ytranslate4[13] = 0.76;
		}

		if (ytranslate4[14] <= 0.4) 
			ytranslate4[14] = ytranslate4[14] + fSpeed;
		else {
			if ( G4[14]  < 1.0)
				G4[14] = G4[14] + fCSpeed;
			if (			ytranslate4[14]  !=  0.4)
				ytranslate4[14] = 0.4;
		}

		if (ytranslate4[15] <= 0.08) 
			ytranslate4[15] = ytranslate4[15] + fSpeed;
		else {
			if ( G4[15]  < 1.0)
				G4[15] = G4[15] + fCSpeed;
			if (			ytranslate4[15]  !=  0.08)
				ytranslate4[15] = 0.08;
		}

		if (ytranslate4[16] <= -0.17) 
			ytranslate4[16] = ytranslate4[16] + fSpeed;
		else {
			if ( G4[16]  < 1.0)
				G4[16] = G4[16] + fCSpeed;
			if (			ytranslate4[16]  !=  -0.17)
				ytranslate4[16] = -0.17;
		}

		if (ytranslate4[17] <= -0.4) 
			ytranslate4[17] = ytranslate4[17] + fSpeed;
		else {
			if ( G4[17]  < 1.0)
				G4[17] = G4[17] + fCSpeed;
			if (			ytranslate4[17]  !=  -0.4)
				ytranslate4[17] = -0.4;
		}

		if (ytranslate4[18] <= -0.8) 
			ytranslate4[18] = ytranslate4[18] + fSpeed;
		else {
			if ( G4[18]  < 1.0)
				G4[18] = G4[18] + fCSpeed;
			if (			ytranslate4[18]  !=  -0.8)
				ytranslate4[18] = -0.8;
		}

		if (ytranslate4[19] <= -1.1) 
			ytranslate4[19] = ytranslate4[19] + fSpeed;
		else {
			if ( G4[19]  < 1.0)
				G4[19] = G4[19] + fCSpeed;
			if (			ytranslate4[19]  !=  -1.1)
				ytranslate4[19] = -1.1;
		}

		if (ytranslate4[20] <= -1.4) 
			ytranslate4[20] = ytranslate4[20] + fSpeed;
		else {
			if ( G4[20]  < 1.0)
				G4[20] = G4[20] + fCSpeed;
			if (			ytranslate4[20]  !=  -1.4)
				ytranslate4[20] = -1.4;
		}

		if (ytranslate4[21] <= -1.7) 
			ytranslate4[21] = ytranslate4[21] + fSpeed;
		else {
			if ( G4[21]  < 1.0)
				G4[21] = G4[21] + fCSpeed;
			if (			ytranslate4[21]  !=  -1.7)
				ytranslate4[21] = -1.7;
		}

		if (ytranslate4[22] <= -2.15) 
			ytranslate4[22] = ytranslate4[22] + fSpeed;
		else {
			if ( G4[22]  < 1.0)
				G4[22] = G4[22] + fCSpeed;
			if (			ytranslate4[22]  !=  -2.15)
				ytranslate4[22] = -2.15;
		}

		if (ytranslate4[23] <= -2.23) 
			ytranslate4[23] = ytranslate4[23] + fSpeed;
		else {
			if ( G4[23]  < 1.0)
				G4[23] = G4[23] + fCSpeed;
			if (			ytranslate4[23]  !=  -2.23)
				ytranslate4[23] = -2.23;
		}

		if (ytranslate4[24] <= -2.63) 
			ytranslate4[24] = ytranslate4[24] + fSpeed;
		else {
			if ( G4[24]  < 1.0)
				G4[24] = G4[24] + fCSpeed;
			if (			ytranslate4[24]  !=  -2.63)
				ytranslate4[24] = -2.63;
		}

		if (ytranslate4[25] <= -2.83) 
			ytranslate4[25] = ytranslate4[25] + fSpeed;
		else {
			if ( G4[25]  < 1.0)
				G4[25] = G4[25] + fCSpeed;
			if (			ytranslate4[25]  !=  -2.83)
				ytranslate4[25] = -2.83;
		}

		if (ytranslate4[26] <= -3.1) 
			ytranslate4[26] = ytranslate4[26] + fSpeed;
		else {
			if ( G4[26]  < 1.0)
				G4[26] = G4[26] + fCSpeed;
			if (			ytranslate4[26]  !=  -3.1)
				ytranslate4[26] = -3.1;
		}

		if (ytranslate4[27] <= -3.4) 
			ytranslate4[27] = ytranslate4[27] + fSpeed;
		else {
			if ( G4[27]  < 1.0)
				G4[27] = G4[27] + fCSpeed;
			if (			ytranslate4[27]  !=  -3.4)
				ytranslate4[27] = -3.4;
		}

		if (ytranslate4[28] <= -3.65) 
			ytranslate4[28] = ytranslate4[28] + fSpeed;
		else {
			if ( G4[28]  < 1.0)
				G4[28] = G4[28] + fCSpeed;
			if (			ytranslate4[28]  !=  -3.65)
				ytranslate4[28] = -3.65;
		}

		if (ytranslate4[29] <= -3.93) 
			ytranslate4[29] = ytranslate4[29] + fSpeed;
		else {
			if ( G4[29]  < 1.0)
				G4[29] = G4[29] + fCSpeed;
			if (			ytranslate4[29]  !=  -3.93)
				ytranslate4[29] = -3.93;
		}

		if (ytranslate4[30] <= -4.18) 
			ytranslate4[30] = ytranslate4[30] + fSpeed;
		else {
			if ( G4[30]  < 1.0)
				G4[30] = G4[30] + fCSpeed;
			if (			ytranslate4[30]  !=  -4.18)
				ytranslate4[30] = -4.18;
		}

		if (ytranslate4[31] <= -4.58) 
			ytranslate4[31] = ytranslate4[31] + fSpeed;
		else {
			if ( G4[31]  < 1.0)
				G4[31] = G4[31] + fCSpeed;
			if (			ytranslate4[31]  !=  -4.58)
				ytranslate4[31] = -4.58;
		}
		
		if (G4[31] >= 0.9) {
			bStartMakingFourthRowDisappear = true;
		}
		
		if (bStartMakingFourthRowDisappear == true) {
			for (var b2 = 0; b2 < G4.length; b2++) {
				if (b2 == 0) {
					G4[b2] = G4[b2] - fCDecrement;
					continue;
				}
				if (G4[b2] >= 0.0 && G4[b2 - 1] <= 0.0)
					G4[b2] = G4[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

	// *** 5TH COLUMN ***
	if (IsFifthColumnReady) {
		if (bStartMakingFifthRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingFifthRowDisappear == true && G5[16] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G5.length; p++) {
				ytranslate5[p] = position;
				position -= 3.0;
			}
			
			bStartMakingFifthRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate5[0] <= -0.17) 
			ytranslate5[0] = ytranslate5[0] + fSpeed;
		else {
			if ( G5[0]  < 1.0)
				G5[0] = G5[0] + fCSpeed;
			if (			ytranslate5[0]  !=  -0.17)
				ytranslate5[0] = -0.17;
		}

		if (ytranslate5[1] <= -0.47) 
			ytranslate5[1] = ytranslate5[1] + fSpeed;
		else {
			if ( G5[1]  < 1.0)
				G5[1] = G5[1] + fCSpeed;
			if (			ytranslate5[1]  !=  -0.47)
				ytranslate5[1] = -0.47;
		}

		if (ytranslate5[2] <= -0.63) 
			ytranslate5[2] = ytranslate5[2] + fSpeed;
		else {
			if ( G5[2]  < 1.0)
				G5[2] = G5[2] + fCSpeed;
			if (			ytranslate5[2]  !=  -0.63)
				ytranslate5[2] = -0.63;
		}

		if (ytranslate5[3] <= -1.05) 
			ytranslate5[3] = ytranslate5[3] + fSpeed;
		else {
			if ( G5[3]  < 1.0)
				G5[3] = G5[3] + fCSpeed;
			if (			ytranslate5[3]  !=  -1.05)
				ytranslate5[3] = -1.05;
		}

		if (ytranslate5[4] <= -1.3) 
			ytranslate5[4] = ytranslate5[4] + fSpeed;
		else {
			if ( G5[4]  < 1.0)
				G5[4] = G5[4] + fCSpeed;
			if (			ytranslate5[4]  !=  -1.3)
				ytranslate5[4] = -1.3;
		}

		if (ytranslate5[5] <= -1.5) 
			ytranslate5[5] = ytranslate5[5] + fSpeed;
		else {
			if ( G5[5]  < 1.0)
				G5[5] = G5[5] + fCSpeed;
			if (			ytranslate5[5]  !=  -1.5)
				ytranslate5[5] = -1.5;
		}

		if (ytranslate5[6] <= -1.85) 
			ytranslate5[6] = ytranslate5[6] + fSpeed;
		else {
			if ( G5[6]  < 1.0)
				G5[6] = G5[6] + fCSpeed;
			if (			ytranslate5[6]  !=  -1.85)
				ytranslate5[6] = -1.85;
		}

		if (ytranslate5[7] <= -2.05) 
			ytranslate5[7] = ytranslate5[7] + fSpeed;
		else {
			if ( G5[7]  < 1.0)
				G5[7] = G5[7] + fCSpeed;
			if (			ytranslate5[7]  !=  -2.05)
				ytranslate5[7] = -2.05;
		}

		if (ytranslate5[8] <= -2.37) 
			ytranslate5[8] = ytranslate5[8] + fSpeed;
		else {
			if ( G5[8]  < 1.0)
				G5[8] = G5[8] + fCSpeed;
			if (			ytranslate5[8]  !=  -2.37)
				ytranslate5[8] = -2.37;
		}

		if (ytranslate5[9] <= -2.73) 
			ytranslate5[9] = ytranslate5[9] + fSpeed;
		else {
			if ( G5[9]  < 1.0)
				G5[9] = G5[9] + fCSpeed;
			if (			ytranslate5[9]  !=  -2.73)
				ytranslate5[9] = -2.73;
		}

		// Start Sixth Column

		if (ytranslate5[10] <= -2.8) 
			ytranslate5[10] = ytranslate5[10] + fSpeed;
		else {
			if ( G5[10]  < 1.0)
				G5[10] = G5[10] + fCSpeed;
			if (			ytranslate5[10]  !=  -2.8)
				ytranslate5[10] = -2.8;

			IsSixthColumnReady = true;
		}

		if (ytranslate5[11] <= -3.15) 
			ytranslate5[11] = ytranslate5[11] + fSpeed;
		else {
			if ( G5[11]  < 1.0)
				G5[11] = G5[11] + fCSpeed;
			if (			ytranslate5[11]  !=  -3.15)
				ytranslate5[11] = -3.15;
		}

		if (ytranslate5[12] <= -3.23) 
			ytranslate5[12] = ytranslate5[12] + fSpeed;
		else {
			if ( G5[12]  < 1.0)
				G5[12] = G5[12] + fCSpeed;
			if (			ytranslate5[12]  !=  -3.23)
				ytranslate5[12] = -3.23;
		}

		if (ytranslate5[13] <= -3.66) 
			ytranslate5[13] = ytranslate5[13] + fSpeed;
		else {
			if ( G5[13]  < 1.0)
				G5[13] = G5[13] + fCSpeed;
			if (			ytranslate5[13]  !=  -3.66)
				ytranslate5[13] = -3.66;
		}

		if (ytranslate5[14] <= -3.96) 
			ytranslate5[14] = ytranslate5[14] + fSpeed;
		else {
			if ( G5[14]  < 1.0)
				G5[14] = G5[14] + fCSpeed;
			if (			ytranslate5[14]  !=  -3.96)
				ytranslate5[14] = -3.96;
		}

		if (ytranslate5[15] <= -4.16) 
			ytranslate5[15] = ytranslate5[15] + fSpeed;
		else {
			if ( G5[15]  < 1.0)
				G5[15] = G5[15] + fCSpeed;
			if (			ytranslate5[15]  !=  -4.16)
				ytranslate5[15] = -4.16;
		}

		if (ytranslate5[16] <= -4.42) 
			ytranslate5[16] = ytranslate5[16] + fSpeed;
		else {
			if ( G5[16]  < 1.0)
				G5[16] = G5[16] + fCSpeed;
			if (			ytranslate5[16]  !=  -4.42)
				ytranslate5[16] = -4.42;
		}
		
		if (G5[16] >= 0.9) {
			bStartMakingFifthRowDisappear = true;
		}
		
		if (bStartMakingFifthRowDisappear == true) {
			for (var b2 = 0; b2 < G5.length; b2++) {
				if (b2 == 0) {
					G5[b2] = G5[b2] - fCDecrement;
					continue;
				}
				if (G5[b2] >= 0.0 && G5[b2 - 1] <= 0.0)
					G5[b2] = G5[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

	// *** 6TH COLUMN ***

	if (IsSixthColumnReady) {
		if (bStartMakingSixthRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingSixthRowDisappear == true && G6[18] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G6.length; p++) {
				ytranslate6[p] = position;
				position -= 3.0;
			}
			
			bStartMakingSixthRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate6[0] <= 2.7) 
			ytranslate6[0] = ytranslate6[0] + fSpeed;
		else {
			if ( G6[0]  < 1.0)
				G6[0] = G6[0] + fCSpeed;
			if (			ytranslate6[0]  !=  2.7)
				ytranslate6[0] = 2.7;
		}

		if (ytranslate6[1] <= 2.43) 
			ytranslate6[1] = ytranslate6[1] + fSpeed;
		else {
			if ( G6[1]  < 1.0)
				G6[1] = G6[1] + fCSpeed;
			if (			ytranslate6[1]  !=  2.43)
				ytranslate6[1] = 2.43;
		}

		if (ytranslate6[2] <= 2.16) 
			ytranslate6[2] = ytranslate6[2] + fSpeed;
		else {
			if ( G6[2]  < 1.0)
				G6[2] = G6[2] + fCSpeed;
			if (			ytranslate6[2]  !=  2.16)
				ytranslate6[2] = 2.16;
		}

		if (ytranslate6[3] <= 1.75) 
			ytranslate6[3] = ytranslate6[3] + fSpeed;
		else {
			if ( G6[3]  < 1.0)
				G6[3] = G6[3] + fCSpeed;
			if (			ytranslate6[3]  !=  1.75)
				ytranslate6[3] = 1.75;
		}

		// Start First Column

		if (ytranslate6[4] <= 1.56) 
			ytranslate6[4] = ytranslate6[4] + fSpeed;
		else {
			if ( G6[4]  < 1.0)
				G6[4] = G6[4] + fCSpeed;
			if (			ytranslate6[4]  !=  1.56)
				ytranslate6[4] = 1.56;

			IsFirstColumnReady = true;
		}

		if (ytranslate6[5] <= 1.23) 
			ytranslate6[5] = ytranslate6[5] + fSpeed;
		else {
			if ( G6[5]  < 1.0)
				G6[5] = G6[5] + fCSpeed;
			if (			ytranslate6[5]  !=  1.23)
				ytranslate6[5] = 1.23;
		}

		if (ytranslate6[6] <= 0.86) 
			ytranslate6[6] = ytranslate6[6] + fSpeed;
		else {
			if ( G6[6]  < 1.0)
				G6[6] = G6[6] + fCSpeed;
			if (			ytranslate6[6]  !=  0.86)
				ytranslate6[6] = 0.86;
		}

		if (ytranslate6[7] <= 0.58) 
			ytranslate6[7] = ytranslate6[7] + fSpeed;
		else {
			if ( G6[7]  < 1.0)
				G6[7] = G6[7] + fCSpeed;
			if (			ytranslate6[7]  !=  0.58)
				ytranslate6[7] = 0.58;
		}

		if (ytranslate6[8] <= 0.43) 
			ytranslate6[8] = ytranslate6[8] + fSpeed;
		else {
			if ( G6[8]  < 1.0)
				G6[8] = G6[8] + fCSpeed;
			if (			ytranslate6[8]  !=  0.43)
				ytranslate6[8] = 0.43;
		}

		if (ytranslate6[9] <= 0.13) 
			ytranslate6[9] = ytranslate6[9] + fSpeed;
		else {
			if ( G6[9]  < 1.0)
				G6[9] = G6[9] + fCSpeed;
			if (			ytranslate6[9]  !=  0.13)
				ytranslate6[9] = 0.13;
		}

		if (ytranslate6[10] <= -0.23) 
			ytranslate6[10] = ytranslate6[10] + fSpeed;
		else {
			if ( G6[10]  < 1.0)
				G6[10] = G6[10] + fCSpeed;
			if (			ytranslate6[10]  !=  -0.23)
				ytranslate6[10] = -0.23;
		}

		if (ytranslate6[11] <= -0.52) 
			ytranslate6[11] = ytranslate6[11] + fSpeed;
		else {
			if ( G6[11]  < 1.0)
				G6[11] = G6[11] + fCSpeed;
			if (			ytranslate6[11]  !=  -0.52)
				ytranslate6[11] = -0.52;
		}

		if (ytranslate6[12] <= -0.67) 
			ytranslate6[12] = ytranslate6[12] + fSpeed;
		else {
			if ( G6[12]  < 1.0)
				G6[12] = G6[12] + fCSpeed;
			if (			ytranslate6[12]  !=  -0.67)
				ytranslate6[12] = -0.67;
		}

		if (ytranslate6[13] <= -0.97) 
			ytranslate6[13] = ytranslate6[13] + fSpeed;
		else {
			if ( G6[13]  < 1.0)
				G6[13] = G6[13] + fCSpeed;
			if (			ytranslate6[13]  !=  -0.97)
				ytranslate6[13] = -0.97;
		}

		if (ytranslate6[14] <= -1.32) 
			ytranslate6[14] = ytranslate6[14] + fSpeed;
		else {
			if ( G6[14]  < 1.0)
				G6[14] = G6[14] + fCSpeed;
			if (			ytranslate6[14]  !=  -1.32)
				ytranslate6[14] = -1.32;
		}

		if (ytranslate6[15] <= -1.54) 
			ytranslate6[15] = ytranslate6[15] + fSpeed;
		else {
			if ( G6[15]  < 1.0)
				G6[15] = G6[15] + fCSpeed;
			if (			ytranslate6[15]  !=  -1.54)
				ytranslate6[15] = -1.54;
		}

		if (ytranslate6[16] <= -1.9) 
			ytranslate6[16] = ytranslate6[16] + fSpeed;
		else {
			if ( G6[16]  < 1.0)
				G6[16] = G6[16] + fCSpeed;
			if (			ytranslate6[16]  !=  -1.9)
				ytranslate6[16] = -1.9;
		}

		if (ytranslate6[17] <= -2.29) 
			ytranslate6[17] = ytranslate6[17] + fSpeed;
		else {
			if ( G6[17]  < 1.0)
				G6[17] = G6[17] + fCSpeed;
			if (			ytranslate6[17]  !=  -2.29)
				ytranslate6[17] = -2.29;
		}

		if (ytranslate6[18] <= -2.48) 
			ytranslate6[18] = ytranslate6[18] + fSpeed;
		else {
			if ( G6[18]  < 1.0)
				G6[18] = G6[18] + fCSpeed;
			if (			ytranslate6[18]  !=  -2.48)
				ytranslate6[18] = -2.48;
		}
		
		if (G6[18] >= 0.9) {
			bStartMakingSixthRowDisappear = true;
		}
		
		if (bStartMakingSixthRowDisappear == true) {
			for (var b2 = 0; b2 < G6.length; b2++) {
				if (b2 == 0) {
					G6[b2] = G6[b2] - fCDecrement;
					continue;
				}
				if (G6[b2] >= 0.0 && G6[b2 - 1] <= 0.0)
					G6[b2] = G6[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

	// *** 7TH COLUMN ***

	if (IsSeventhColumnReady) {
		if (bStartMakingSeventhRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingSeventhRowDisappear == true && G7[25] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G7.length; p++) {
				ytranslate7[p] = position;
				position -= 3.0;
			}
			
			bStartMakingSeventhRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		if (ytranslate7[0] <= 4.5) 
			ytranslate7[0] = ytranslate7[0] + fSpeed;
		else {
			if ( G7[0]  < 1.0)
				G7[0] = G7[0] + fCSpeed;
			if (			ytranslate7[0]  !=  4.5)
				ytranslate7[0] = 4.5;
		}

		if (ytranslate7[1] <= 4.22) 
			ytranslate7[1] = ytranslate7[1] + fSpeed;
		else {
			if ( G7[1]  < 1.0)
				G7[1] = G7[1] + fCSpeed;
			if (			ytranslate7[1]  !=  4.22)
				ytranslate7[1] = 4.22;
		}

		// Start Eighth Column

		if (ytranslate7[2] <= 3.82) 
			ytranslate7[2] = ytranslate7[2] + fSpeed;
		else {
			if ( G7[2]  < 1.0)
				G7[2] = G7[2] + fCSpeed;
			if (			ytranslate7[2]  !=  3.82)
				ytranslate7[2] = 3.82;

			//IsEighthColumnReady = true;
		}

		if (ytranslate7[3] <= 3.6) 
			ytranslate7[3] = ytranslate7[3] + fSpeed;
		else {
			if ( G7[3]  < 1.0)
				G7[3] = G7[3] + fCSpeed;
			if (			ytranslate7[3]  !=  3.6)
				ytranslate7[3] = 3.6;
		}

		if (ytranslate7[4] <= 3.45) 
			ytranslate7[4] = ytranslate7[4] + fSpeed;
		else {
			if ( G7[4]  < 1.0)
				G7[4] = G7[4] + fCSpeed;
			if (			ytranslate7[4]  !=  3.45)
				ytranslate7[4] = 3.45;
		}

		if (ytranslate7[5] <= 3.18) 
			ytranslate7[5] = ytranslate7[5] + fSpeed;
		else {
			if ( G7[5]  < 1.0)
				G7[5] = G7[5] + fCSpeed;
			if (			ytranslate7[5]  !=  3.18)
				ytranslate7[5] = 3.18;
		}

		if (ytranslate7[6] <= 2.88) 
			ytranslate7[6] = ytranslate7[6] + fSpeed;
		else {
			if ( G7[6]  < 1.0)
				G7[6] = G7[6] + fCSpeed;
			if (			ytranslate7[6]  !=  2.88)
				ytranslate7[6] = 2.88;
		}

		if (ytranslate7[7] <= 2.5) 
			ytranslate7[7] = ytranslate7[7] + fSpeed;
		else {
			if ( G7[7]  < 1.0)
				G7[7] = G7[7] + fCSpeed;
			if (			ytranslate7[7]  !=  2.5)
				ytranslate7[7] = 2.5;
		}

		if (ytranslate7[8] <= 2.2) 
			ytranslate7[8] = ytranslate7[8] + fSpeed;
		else {
			if ( G7[8]  < 1.0)
				G7[8] = G7[8] + fCSpeed;
			if (			ytranslate7[8]  !=  2.2)
				ytranslate7[8] = 2.2;
		}

		if (ytranslate7[9] <= 2.04) 
			ytranslate7[9] = ytranslate7[9] + fSpeed;
		else {
			if ( G7[9]  < 1.0)
				G7[9] = G7[9] + fCSpeed;
			if (			ytranslate7[9]  !=  2.04)
				ytranslate7[9] = 2.04;
		}

		if (ytranslate7[10] <= 1.64) 
			ytranslate7[10] = ytranslate7[10] + fSpeed;
		else {
			if ( G7[10]  < 1.0)
				G7[10] = G7[10] + fCSpeed;
			if (			ytranslate7[10]  !=  1.64)
				ytranslate7[10] = 1.64;
		}

		if (ytranslate7[11] <= 1.35) 
			ytranslate7[11] = ytranslate7[11] + fSpeed;
		else {
			if ( G7[11]  < 1.0)
				G7[11] = G7[11] + fCSpeed;
			if (			ytranslate7[11]  !=  1.35)
				ytranslate7[11] = 1.35;
		}

		if (ytranslate7[12] <= 1.06) 
			ytranslate7[12] = ytranslate7[12] + fSpeed;
		else {
			if ( G7[12]  < 1.0)
				G7[12] = G7[12] + fCSpeed;
			if (			ytranslate7[12]  !=  1.06)
				ytranslate7[12] = 1.06;
		}

		if (ytranslate7[13] <= 0.76) 
			ytranslate7[13] = ytranslate7[13] + fSpeed;
		else {
			if ( G7[13]  < 1.0)
				G7[13] = G7[13] + fCSpeed;
			if (			ytranslate7[13]  !=  0.76)
				ytranslate7[13] = 0.76;
		}

		if (ytranslate7[14] <= 0.4) 
			ytranslate7[14] = ytranslate7[14] + fSpeed;
		else {
			if ( G7[14]  < 1.0)
				G7[14] = G7[14] + fCSpeed;
			if (			ytranslate7[14]  !=  0.4)
				ytranslate7[14] = 0.4;
		}

		if (ytranslate7[15] <= 0.29) 
			ytranslate7[15] = ytranslate7[15] + fSpeed;
		else {
			if ( G7[15]  < 1.0)
				G7[15] = G7[15] + fCSpeed;
			if (			ytranslate7[15]  !=  0.29)
				ytranslate7[15] = 0.29;
		}

		if (ytranslate7[16] <= 0.0) 
			ytranslate7[16] = ytranslate7[16] + fSpeed;
		else {
			if ( G7[16]  < 1.0)
				G7[16] = G7[16] + fCSpeed;
			if (			ytranslate7[16]  !=  0.0)
				ytranslate7[16] = 0.0;
		}

		if (ytranslate7[17] <= -0.3) 
			ytranslate7[17] = ytranslate7[17] + fSpeed;
		else {
			if ( G7[17]  < 1.0)
				G7[17] = G7[17] + fCSpeed;
			if (			ytranslate7[17]  !=  -0.3)
				ytranslate7[17] = -0.3;
		}

		if (ytranslate7[18] <= -0.6) 
			ytranslate7[18] = ytranslate7[18] + fSpeed;
		else {
			if ( G7[18]  < 1.0)
				G7[18] = G7[18] + fCSpeed;
			if (			ytranslate7[18]  !=  -0.6)
				ytranslate7[18] = -0.6;
		}

		if (ytranslate7[19] <= -0.87) 
			ytranslate7[19] = ytranslate7[19] + fSpeed;
		else {
			if ( G7[19]  < 1.0)
				G7[19] = G7[19] + fCSpeed;
			if (			ytranslate7[19]  !=  -0.87)
				ytranslate7[19] = -0.87;
		}

		if (ytranslate7[20] <= -1.24) 
			ytranslate7[20] = ytranslate7[20] + fSpeed;
		else {
			if ( G7[20]  < 1.0)
				G7[20] = G7[20] + fCSpeed;
			if (			ytranslate7[20]  !=  -1.24)
				ytranslate7[20] = -1.24;
		}

		if (ytranslate7[21] <= -1.45) 
			ytranslate7[21] = ytranslate7[21] + fSpeed;
		else {
			if ( G7[21]  < 1.0)
				G7[21] = G7[21] + fCSpeed;
			if (			ytranslate7[21]  !=  -1.45)
				ytranslate7[21] = -1.45;
		}

		if (ytranslate7[22] <= -1.95) 
			ytranslate7[22] = ytranslate7[22] + fSpeed;
		else {
			if ( G7[22]  < 1.0)
				G7[22] = G7[22] + fCSpeed;
			if (			ytranslate7[22]  !=  -1.95)
				ytranslate7[22] = -1.95;
		}

		if (ytranslate7[23] <= -2.15) 
			ytranslate7[23] = ytranslate7[23] + fSpeed;
		else {
			if ( G7[23]  < 1.0)
				G7[23] = G7[23] + fCSpeed;
			if (			ytranslate7[23]  !=  -2.15)
				ytranslate7[23] = -2.15;
		}

		if (ytranslate7[24] <= -2.4) 
			ytranslate7[24] = ytranslate7[24] + fSpeed;
		else {
			if ( G7[24]  < 1.0)
				G7[24] = G7[24] + fCSpeed;
			if (			ytranslate7[24]  !=  -2.4)
				ytranslate7[24] = -2.4;
		}

		if (ytranslate7[25] <= -2.65) 
			ytranslate7[25] = ytranslate7[25] + fSpeed;
		else {
			if ( G7[25]  < 1.0)
				G7[25] = G7[25] + fCSpeed;
			if (			ytranslate7[25]  !=  -2.65)
				ytranslate7[25] = -2.65;
		}
		
		if (G7[25] >= 0.9) {
			bStartMakingSeventhRowDisappear = true;
		}
		
		if (bStartMakingSeventhRowDisappear == true) {
			for (var b2 = 0; b2 < G7.length; b2++) {
				if (b2 == 0) {
					G7[b2] = G7[b2] - fCDecrement;
					continue;
				}
				if (G7[b2] >= 0.0 && G7[b2 - 1] <= 0.0)
					G7[b2] = G7[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

	// *** 8TH COLUMN ***

	if (IsEighthColumnReady) {
		if (bStartMakingEighthRowDisappear == true) {
			fCSpeed = 0.0;
			fSpeed = 0.0;
		}
		
		if (bStartMakingEighthRowDisappear == true && G8[24] <= 0.0) {
			position = -1.5;
			
			for (var p = 0; p < G8.length; p++) {
				ytranslate8[p] = position;
				position -= 3.0;
			}
			
			bStartMakingEighthRowDisappear = false;
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
		
		// Start Second Column
		IsSecondColumnReady = true;

		translate(ytranslate8, G8, 0, 4.45);
		translate(ytranslate8, G8, 1, 4.15);
		translate(ytranslate8, G8, 2, 3.9);
		translate(ytranslate8, G8, 3, 3.8);
		translate(ytranslate8, G8, 4, 3.23);
		translate(ytranslate8, G8, 5, 3.1);
		translate(ytranslate8, G8, 6, 2.93);
		translate(ytranslate8, G8, 7, 2.6);
		translate(ytranslate8, G8, 8, 2.3);
		translate(ytranslate8, G8, 9, 2.05);
		translate(ytranslate8, G8, 10, 1.8);
		translate(ytranslate8, G8, 11, 1.3);
		translate(ytranslate8, G8, 12, 1.1);
		translate(ytranslate8, G8, 13, 0.8);
		translate(ytranslate8, G8, 14, 0.5);
		translate(ytranslate8, G8, 15, 0.2);
		translate(ytranslate8, G8, 16, 0.1);
		translate(ytranslate8, G8, 17, -0.25);
		translate(ytranslate8, G8, 18, -0.5);
		translate(ytranslate8, G8, 19, -0.75);
		translate(ytranslate8, G8, 20, -1.05);
		translate(ytranslate8, G8, 21, -1.25);
		translate(ytranslate8, G8, 22, -1.55);
		translate(ytranslate8, G8, 23, -1.84);
		translate(ytranslate8, G8, 24, -2.23);
		
		if (G8[24] >= 0.9) {
			bStartMakingEighthRowDisappear = true;
		}
		
		if (bStartMakingEighthRowDisappear == true) {
			for (var b2 = 0; b2 < G8.length; b2++) {
				if (b2 == 0) {
					G8[b2] = G8[b2] - fCDecrement;
					continue;
				}
				if (G8[b2] >= 0.0 && G8[b2 - 1] <= 0.0)
					G8[b2] = G8[b2] - fCDecrement;
			}
			
			fSpeed = 0.4;
			fCSpeed = 0.0512;
			fCDecrement = 0.1;
		}
	}

}
function translate(ytranslate, G, arrayIndex, position) {
	// code
	if (ytranslate[arrayIndex] < position)
		ytranslate[arrayIndex] = ytranslate[arrayIndex] + fSpeed;
	else {
		if (G[arrayIndex] <= 1.0)	
			G[arrayIndex] = G[arrayIndex] + fCSpeed;
		ytranslate[arrayIndex] = position;
	}
}

function makeItBlack(currentElementColor, previousElementColor) {
	// code
	if (previousElementColor <= 0.0) {
		if  (currentElementColor >= 0.0) {
			if (currentElementColor == G[0]) {
				console.log("Here for G[0]\n" + G[0]);
			}
			
			currentElementColor = currentElementColor - fCDecrement;
		}
	}
}

function makePositionInitial(element_p, yPosition) {
	// code
	element_p = yPosition;
}

function makeGreenOneAgain() {
	// code
	for (var k = 0; k < G.length; k++) {
		if  (G[k] > 1.0) {
			G[k] = 1.0;
		}
	}
}

