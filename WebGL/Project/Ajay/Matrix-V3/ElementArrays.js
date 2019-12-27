var START = 1

var iStart = START;
var fSpeed = 0.4;
var fCSpeed = 0.0512;
var fCDecrement = 0.1;
var countOfReappearance = 0;

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

var ytranslate = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0  ]);

var ytranslate2 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);

var ytranslate3 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);

var ytranslate4 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);

var ytranslate5 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0  ]);

var ytranslate6 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0  ]);

var ytranslate7 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0 , -95.0  ]);

var ytranslate8 = new Float32Array([ -1.5 , -4.85 , -7.5 , -11.0 ,
						-14.0 , -17.0 , -20.0 , -23.0 ,
						-26.0 , -29.0 , -32.0 , -35.0 ,
						-38.0 , -41.0 , -44.0 , -47.0 ,
						-50.0 , -53.0 , -56.0 , -59.0 ,
						-62.0 , -65.0 , -68.0 , -71.0 ,
						-74.0 , -77.0 , -80.0 , -83.0 ,
						-86.0 , -89.0 , -92.0  ]);

