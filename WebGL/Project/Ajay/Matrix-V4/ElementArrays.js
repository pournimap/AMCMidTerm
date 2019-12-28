var START = 1

var iStart = START;
var fSpeed = 0.4;
var fCSpeed = 0.0512 * 3.0;
var fCDecrement = 0.1;
var countOfReappearance = 0;

var framebufferQuadXScale = 0.75;
var framebufferQuadYScale = 0.6;

var framebufferQuadXTranslate = 0.0;

var bMakeMColumnDisappear = false;
var bMakeAColumnDisappear = false;
var bMakeTColumnDisappear = false;
var bMakeRColumnDisappear = false;
var bMakeIColumnDisappear = false;
var bMakeXColumnDisappear = false;

var bStopShowingM = false;
var bStopShowingA = false;
var bStopShowingT = false;
var bStopShowingR = false;
var bStopShowingI = false;
var bStopShowingX = false;

var bLastElementHasAppeared = false;

var IsFirstColumnReady = false;
var IsSecondColumnReady = false;
var IsThirdColumnReady = false;
var IsFourthColumnReady = false;
var IsFifthColumnReady = false;
var IsSixthColumnReady = false;
var IsSeventhColumnReady = false;
var IsEighthColumnReady = false;

var bStartMakingFirstRowDisappear = false;
var bStartMakingSecondRowDisappear = false;
var bStartMakingThirdRowDisappear = false;
var bStartMakingFourthRowDisappear = false;
var bStartMakingFifthRowDisappear = false;
var bStartMakingSixthRowDisappear = false;
var bStartMakingSeventhRowDisappear = false;
var bStartMakingEighthRowDisappear = false;
var bMatrixHasDisappeared = false;
var bStartMatrixAnimation = false;

var G = new Float32Array(33);
var G2 = new Float32Array(33);
var G3 = new Float32Array(33);
var G4 = new Float32Array(33);
var G5 = new Float32Array(18);
var G6 = new Float32Array(19);
var G7 = new Float32Array(33);
var G8 = new Float32Array(33);

var reversenine = new Float32Array([
	-0.2, 	 0.3, 
	0.2, 	 0.3, 
	0.2, 	 0.3, 
	0.2, 	 0.0, 
	-0.2, 	 0.3, 
	-0.2, 	 0.1, 
	-0.2, 	 0.0, 
	0.2, 	 0.0, 
	-0.2, 	 0.1, 
	-0.2, 	 -0.1, 
	-0.2, 	 -0.1, 
	0.0, 	 -0.3, 
]);

var asmallquad = new Float32Array([
	0.1, 	 0.3, 
	-0.1, 	 0.3, 
	-0.1, 	 -0.3, 
	0.1, 	 -0.3, 
]);

var one = new Float32Array([
	-0.2, 	 0.2, 
	0.0, 	 0.3, 
	0.0, 	 0.3, 
	0.0, 	 -0.4, 
]);

var doubleinvertedcommas = new Float32Array([
	-0.3, 	 0.2, 
	-0.1, 	 0.2, 
	-0.2, 	 0.2, 
	-0.2, 	 0.0, 
	-0.2, 	 0.0, 
	-0.3, 	 -0.1, 
	0.3, 	 0.2, 
	0.1, 	 0.2, 
	0.2, 	 0.2, 
	0.2, 	 0.0, 
	0.2, 	 0.0, 
	0.3, 	 -0.1, 
]);

var seven = new Float32Array([
	-0.25, 	 0.3, 
	0.25, 	 0.3, 
	0.25, 	 0.3, 
	0.2, 	 0.1, 
	0.2, 	 0.1, 
	0.0, 	 -0.1, 
	0.0, 	 -0.1, 
	-0.2, 	 -0.3, 
]);

var vline = new Float32Array([
	0.0, 	 0.25, 
	0.0, 	 -0.25, 
]);

var reversezee = new Float32Array([
	-0.25, 	 0.25, 
	0.25, 	 0.25, 
	-0.25, 	 0.25, 
	0.25, 	 -0.25, 
	-0.25, 	 -0.25, 
	0.25, 	 -0.25, 
]);

var zee = new Float32Array([
	-0.25, 	 0.25, 
	0.25, 	 0.25, 
	0.25, 	 0.25, 
	-0.25, 	 -0.25, 
	-0.25, 	 -0.25, 
	0.25, 	 -0.25, 
]);

var dotsincenter = new Float32Array([
	0.0, 	 0.3, 
	0.0, 	 0.2, 
	0.0, 	 -0.2, 
	0.0, 	 -0.3, 
]);

var hline = new Float32Array([
	-0.25, 	 -0.1, 
	0.25, 	 -0.1, 
]);

var rightsideline = new Float32Array([
	0.3, 	 0.5, 
	0.3, 	 0.3, 
	0.3, 	 0.2, 
	0.3, 	 0.0, 
]);

var plus = new Float32Array([
	-0.25, 	 0.0, 
	0.25, 	 0.0, 
	0.0, 	 -0.25, 
	0.0, 	 0.25, 
]);

var delta = new Float32Array([
	-0.09, 	 0.35, 
	-0.5, 	 -0.5, 
	-0.5, 	 -0.5, 
	0.5, 	 -0.5, 
	0.5, 	 -0.5, 
	0.0, 	 0.5, 
]);

var threehorizontallines = new Float32Array([
	-0.3, 	 0.5, 
	0.3, 	 0.6, 
	-0.3, 	 0.2, 
	0.3, 	 0.3, 
	-0.3, 	 -0.1, 
	0.3, 	 0.0, 
]);

var leftarrowhead = new Float32Array([
	-0.25, 	 0.0, 
	0.0, 	 0.25, 
	-0.25, 	 0.0, 
	0.0, 	 -0.25, 
]);

var rightarrowhead = new Float32Array([
	0.25, 	 0.0, 
	0.0, 	 0.25, 
	0.25, 	 0.0, 
	0.0, 	 -0.25, 
]);

var eight = new Float32Array([
	-0.25, 	 0.5, 
	0.25, 	 0.5, 
	-0.25, 	 0.5, 
	-0.25, 	 0.2, 
	0.25, 	 0.5, 
	0.25, 	 0.2, 
	-0.25, 	 0.2, 
	0.0, 	 0.0, 
	0.25, 	 0.2, 
	0.0, 	 0.0, 
	-0.25, 	 -0.5, 
	0.25, 	 -0.5, 
	-0.25, 	 -0.5, 
	-0.25, 	 -0.2, 
	0.25, 	 -0.5, 
	0.25, 	 -0.2, 
	-0.25, 	 -0.2, 
	0.0, 	 0.0, 
	0.25, 	 -0.2, 
	0.0, 	 0.0, 
]);

var primeseven = new Float32Array([
	-0.15, 	 0.0, 
	0.2, 	 0.0, 
	0.2, 	 0.0, 
	-0.09, 	 -0.35, 
	0.2, 	 0.15, 
	0.1, 	 0.3, 
]);

var asterisk = new Float32Array([
	-0.25, 	 0.0, 
	0.25, 	 0.0, 
	0.0, 	 -0.25, 
	0.0, 	 0.25, 
	0.2, 	 0.2, 
	-0.2, 	 -0.2, 
	-0.2, 	 0.2, 
	0.2, 	 -0.2, 
]);

var zerowithhline = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.0, 0.0,
	0.0, -0.6,
	0.5, 0.0,
	0.5, -0.6,
	0.0, -0.3,
	0.5, -0.3,
	0.0, -0.6,
	0.5, -0.6,
]);

var middlelineextendedthree = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.6,
	0.3, -0.3,
	0.7, -0.3,
	0.0, -0.6,
	0.5, -0.6,
]);

var e_reverse = new Float32Array([
	0.0, 0.0,
	0.46, 0.0,
	0.0, -0.25,
	0.46, -0.25,
	0.0, -0.5,
	0.46, -0.5,
	0.38, 0.0,
	0.38, -0.5,
]);

var two_jap = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.2,
	0.5, -0.2,
	0.0, -0.2,
	0.0, -0.2,
	0.0, -0.5,
	0.0, -0.5,
	0.5, -0.5,
]);

var nya = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.15,
	0.0, 0.0,
	0.0, -0.35,
	0.0, -0.35,
	0.15, -0.5,
]);

var nyaandh = new Float32Array([
	0.0, 0.08,
	0.0, -0.2,
	0.0, -0.1,
	0.5, -0.1,
	0.5, 0.08,
	0.5, -0.2,
	0.0, -0.2,
	0.3, -0.5,
]);

var tandnya = new Float32Array([
	0.0, 0.0,
	0.0, 0.5,
	0.2, 0.0,
	0.2, 0.4,
	0.2, 0.3,
	0.5, 0.5,
]);

var c = new Float32Array([
	0.0, 0.0,
	0.35, 0.0,
	0.0, 0.0,
	0.0, -0.5,
	0.0, -0.5,
	0.35, -0.5,
]);

var ancientalienman = new Float32Array([
	0.0, 0.1,
	0.0, -0.4,
	-0.1, 0.0,
	0.2, 0.0,
	0.0, -0.4,
	-0.15, -0.7,
	0.0, -0.4,
	0.15, -0.7,
]);

var somethinglikeg_tod = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.1, 0.4,
	0.3, -0.4,
	0.3, -0.4,
	0.3, -0.35,
	0.3, -0.4,
	0.5, -0.55,
]);

var somethinglikeg = new Float32Array([
	0.0, 0.0,
	0.3, 0.0,
	0.0, 0.0,
	0.0, -0.4,
	0.0, -0.4,
	0.2, -0.4,
	0.2, -0.4,
	0.2, -0.3,
	0.2, -0.4,
	0.3, -0.5,
]);

var upperhalfthreebigger = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.3,
	0.5, -0.3,
	0.3, -0.3,
	0.3, -0.3,
	0.5, -0.5,
	0.5, -0.5,
	0.0, -0.5,
]);

var zero = new Float32Array([
	0.0, 0.0,
	0.3, 0.0,
	0.0, 0.0,
	0.0, -0.5,
	0.3, 0.0,
	0.0, -0.5,
	0.3, 0.0,
	0.3, -0.5,
	0.0, -0.5,
	0.3, -0.5,
]);

var notequalto = new Float32Array([
	0.2, 0.0,
	0.4, -0.6,
	0.1, -0.2,
	0.5, -0.2,
	0.1, -0.4,
	0.5, -0.4,
]);

var likecwithoutbar = new Float32Array([
	0.1, 0.0,
	0.5, 0.0,
	0.0, -0.5,
	0.5, -0.5,
]);

var ewithg = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.0, 0.0,
	0.0, -0.6,
	0.0, -0.3,
	0.35, -0.3,
	0.0, -0.6,
	0.5, -0.6,
	0.5, -0.6,
	0.5, -0.40,
	0.5, -0.6,
	0.65, -0.75,
]);

var cbottomhlineatstart = new Float32Array([
	0.1, 0.0,
	0.5, 0.0,
	0.0, -0.25,
	0.5, -0.25,
	0.0, -0.25,
	0.0, -0.45,
	0.0, -0.45,
	0.5, -0.65,
]);

var stylishj = new Float32Array([
	0.2, -0.1,
	0.5, -0.1,
	0.2, -0.1,
	0.2, -0.25,
	0.5, 0.05,
	0.5, -0.6,
	0.5, -0.6,
	0.1, -0.6,
]);

var arandom4 = new Float32Array([
	0.5, -0.75,
	0.5, 0.0,
	0.5, -0.4,
	0.2, -0.4,
	0.5, 0.0,
	0.2, -0.4,
]);

var twounderscores = new Float32Array([
	0.0, -0.5,
	0.2, -0.5,
	0.3, -0.5,
	0.5, -0.5,
]);

var nyalookinglikej = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.0, -0.15,
	0.5, -0.15,
	0.25, -0.15,
	0.25, -0.38,
	0.25, -0.38,
	0.5, -0.6,
]);

var stylishj_tod = new Float32Array([
	0.0, -0.1,
	0.3, -0.1,
	0.5, 0.0,
	0.5, -0.5,
	0.5, -0.5,
	0.0, -0.5,
]);

var UndAndA = new Float32Array([
	0.5, 0.05,
	0.5, -0.6,
	0.5, -0.3,
	0.15, -0.3,
	0.5, 0.0,
	0.15, -0.3,
	0.5, -0.6,
	0.13, -0.6,
]);

var ReverseCAndABackslash = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.5,
	0.5, -0.5,
	0.0, -0.5,
	0.0, 0.0,
	0.2, -0.2,
]);

var ReflectionOfFOnWater = new Float32Array([
	0.5, 0.0,
	0.5, -0.6,
	0.5, -0.3,
	0.2, -0.3,
	0.5, -0.6,
	0.0, -0.6,
]);

var SomethingLikeC = new Float32Array([
	0.1, 0.0,
	0.5, 0.0,
	0.0, -0.5,
	0.5, -0.5,
]);

var HorizontalLineIn0 = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.0, 0.0,
	0.0, -0.6,
	0.5, 0.0,
	0.5, -0.6,
	0.0, -0.3,
	0.5, -0.3,
	0.0, -0.6,
	0.5, -0.6,
]);

var MiddleLineExAnd3 = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.6,
	0.3, -0.3,
	0.7, -0.3,
	0.0, -0.6,
	0.5, -0.6,
]);

var ReverseCAndA = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.5, 0.0,
	0.5, -0.5,
	0.5, -0.5,
	0.0, -0.5,
	0.0, 0.0,
	0.2, -0.2,
]);

var I = new Float32Array([
	0.0, 0.0,
	0.5, 0.0,
	0.25, 0.0,
	0.25, -0.5,
	0.0, -0.5,
	0.5, -0.5,
]);

var MVertices = new Float32Array([
		1.0, 1.0, 
		0.5, 1.0,
		
		0.5, 1.0,
		0.0, 0.0,
		
		0.75, 1.0,
		0.75, -1.0,
		
		0.625, -1.0,
		0.875, -1.0,
		
		-1.0, 1.0, 
		-0.5, 1.0,
		
		-0.5, 1.0,
		-0.0, 0.0,
		
		-0.75, 1.0,
		-0.75, -1.0,
		
		-0.625, -1.0,
		-0.875, -1.0,
	]);

/*var ytranslate = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0  ]);*/
						
var ytranslate = new Float32Array([ 4.5 , 4.2 , 3.92 , 3.64 ,
						3.29 , 2.95 , 2.42 , 2.34 ,
						1.99 , 1.53 , 1.29 , 0.97 ,
						0.67 , 0.37 , 0.04 , -0.28 ,
						-0.585 , -0.9 , -1.2 , -1.5 ,
						-1.8 , -2.0 , -2.66 , -3.26 ,
						-3.56 , -3.86 , -4.16 , -4.46 ,
						-86.0 , -89.0 , -92.0  ]);

/*var ytranslate2 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);*/
						
var ytranslate2 = new Float32Array([ 4.5 , 4.2 , 3.9 , 3.6 ,
						3.3 , 3.02 , 2.72 , 2.42 ,
						2.12 , 1.85 , 1.54 , -35.0 ,
						-38.0 , -41.0 , 0.34 , 0.04 ,
						-0.26 , -0.56 , -0.9 , -1.17 ,
						-1.5 , -1.8 , -2.3 , -2.4 ,
						-2.7 , -3.0 , -3.3 , -3.6 ,
						-3.9 , -4.2 , -4.5 , -95.0  ]);

/*var ytranslate3 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);*/

var ytranslate3 = new Float32Array([ 4.5 , 4.15 , 3.9 , 3.6 ,
						3.3 , 3.0 , 2.7 , 2.35 ,
						2.15 , 1.85 , 1.45 , 1.3 ,
						1.0 , 0.7 , 0.4 , 0.1 ,
						-0.2 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);

/*var ytranslate4 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);*/
						
var ytranslate4 = new Float32Array([ 4.4 , 4.1 , 3.85 , 3.5 ,
						3.2 , 2.85 , 2.75 , 2.3 ,
						1.95 , 1.87 , 1.58 , 1.3 ,
						0.97 , 0.76 , 0.4 , 0.08 ,
						-0.17 , -0.4 , -0.8 , -1.1 ,
						-1.4 , -1.7 , -2.15 , -2.23 ,
						-2.63 , -2.83 , -3.1 , -3.4 ,
						-3.65 , -3.93 , -4.18 , -4.58  ]);

/*var ytranslate5 = new Float32Array([ -0.17 , -0.47 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0  ]);*/
						
var ytranslate5 = new Float32Array([ -0.17 , -0.47 , -0.63 , -1.05 ,
						-1.3 , -1.5 , -1.85 , -2.05 ,
						-2.37 , -2.73 , -2.8 , -3.15 ,
						-3.23 , -3.66 , -3.96 , -4.16 ,
						-4.42  ]);						

/*var ytranslate6 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0  ]);*/

var ytranslate6 = new Float32Array([ 2.7 , 2.43 , 2.16 , 1.75 ,
						1.56 , 1.23 , 0.86 , 0.58 ,
						0.43 , 0.13 , -0.23 , -0.52 ,
						-0.67 , -0.97 , -1.32 , -1.24 ,
						-1.9 , -2.29 , -2.48  ]);

/*var ytranslate7 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);*/
						
var ytranslate7 = new Float32Array([ 4.5 , 4.22 , 3.82 , 3.6 ,
						3.45 , 3.18 , 2.88 , 2.5 ,
						2.2 , 2.04 , 1.64 , 1.35 ,
						1.06 , 0.76 , 0.4 , 0.29 ,
						0.0 , -0.3 , -0.6 , -0.87 ,
						-1.24 , -1.45 , -1.95 , -2.15 ,
						-2.4 , -2.65 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);						

var ytranslate8 = new Float32Array([ 4.45 , 4.15 , 3.9 , 3.8 ,
						3.23 , 3.1 , 2.93 , 2.6 ,
						2.3 , 2.05 , 1.8 , 1.3 ,
						1.1 , 0.8 , 0.5 , 0.2 ,
						0.1 , -0.25 , -0.5 , -0.75 ,
						-1.05 , -1.25 , -1.55 , -1.84 ,
						-2.23 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0  ]);

