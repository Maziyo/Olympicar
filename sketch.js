//Scene string 변수
let Scene;

//class불러오기 변수
let THUMBNAIL, INTRO, SURVEY01, SURVEY02, SURVEY03, SURVEY04,RESULT ,END;
let S1_420, S1_729, S2_764, S2_004, S3_340, S3_036, S3_840, S4_643, S4_586;

//FONT 변수
let KIMM_B, KIMM_L, esamanru_B, esamanru_M, esamanru_L;

//Image 변수
let Olympicar, Logo, Q01, Q1A1, Q1A2, Q1A3, Q1A4, Q1A1_P, Q1A2_P, Q1A3_P, Q1A4_P;
let soar, shelter, settle, splash;
let Q02, Q2A1, Q2A2, Q2A1_P, Q2A2_P;
let Q03, Q3A1, Q3A2, Q3A1_P, Q3A2_P;
let Q04, Q4A1, Q4A2, Q4A1_P, Q4A2_P;
let Korea_M,Sudan_M,Thailand_M,Afghanistan_M, Hondurass_M, Australia_M, America_M, Siberia_M,Pakistan_M;
let BTN, BTN_P;

//국가코드 결과 변수
let type;
let total, one, two, three;


function preload() {
    //폰트 파일 불러오기
    KIMM_B = loadFont("assets/font/KIMM_bold.ttf");
    KIMM_L = loadFont("assets/font/KIMM_Light.ttf");
    esamanru_B = loadFont("assets/font/esamanru Bold.ttf");
    esamanru_M = loadFont("assets/font/esamanru Medium.ttf");
    esamanru_L = loadFont("assets/font/esamanru Light.ttf");

    //이미지 파일 불러오기
    Olympicar = loadImage("assets/Image/olympicar.png");
    Logo = loadImage("assets/Image/Logo.png");
    soar = loadImage("assets/Image/soar.png");
    shelter = loadImage("assets/Image/shelter.png");
    settle = loadImage("assets/Image/settle.png");
    splash = loadImage("assets/Image/splash.png");
    Q01 = loadImage("assets/Image/Q01.png");
    Q1A1 = loadImage("assets/Image/Q1A1.png");
    Q1A2 = loadImage("assets/Image/Q1A2.png");
    Q1A3 = loadImage("assets/Image/Q1A3.png");
    Q1A4 = loadImage("assets/Image/Q1A4.png");
    Q1A1_P = loadImage("assets/Image/Q1A1_P.png");
    Q1A2_P = loadImage("assets/Image/Q1A2_P.png");
    Q1A3_P = loadImage("assets/Image/Q1A3_P.png");
    Q1A4_P = loadImage("assets/Image/Q1A4_P.png");

    Q02 = loadImage("assets/Image/Q02.png");
    Q2A1 = loadImage("assets/Image/Q2A1.png");
    Q2A2 = loadImage("assets/Image/Q2A2.png");
    Q2A1_P = loadImage("assets/Image/Q2A1_P.png");
    Q2A2_P = loadImage("assets/Image/Q2A2_P.png");

    Q03 = loadImage("assets/Image/Q03.png");
    Q3A1 = loadImage("assets/Image/Q3A1.png");
    Q3A2 = loadImage("assets/Image/Q3A2.png");
    Q3A1_P = loadImage("assets/Image/Q3A1_P.png");
    Q3A2_P = loadImage("assets/Image/Q3A2_P.png");

    Q04 = loadImage("assets/Image/Q04.png");
    Q4A1 = loadImage("assets/Image/Q4A1.png");
    Q4A2 = loadImage("assets/Image/Q4A2.png");
    Q4A1_P = loadImage("assets/Image/Q4A1_P.png");
    Q4A2_P = loadImage("assets/Image/Q4A2_P.png");

    Korea_M = loadImage("assets/Image/korea_M.png");
    Sudan_M = loadImage("assets/Image/sudan_M.png");
    Thailand_M = loadImage("assets/Image/thailand_M.png");
    Afghanistan_M = loadImage("assets/Image/afghanistan_M.png");
    Hondurass_M = loadImage("assets/Image/honduras_M.png");
    Australia_M = loadImage("assets/Image/australia_M.png");
    America_M = loadImage("assets/Image/america_M.png");
    Siberia_M = loadImage("assets/Image/siberia_M.png");
    Pakistan_M = loadImage("assets/Image/pakistan_M.png");

    BTN = loadImage("assets/Image/BTN.png");
    BTN_P = loadImage("assets/Image/BTN_P.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //Class 불러오기
    THUMBNAIL = new thumbnail();
    INTRO = new intro();
    SURVEY01 = new survey01();
    SURVEY02 = new survey02();
    SURVEY03 = new survey03();
    SURVEY04 = new survey04();
    S1_420 = new s1_420();
    S1_729 = new s1_729();
    S2_764 = new s2_764();
    S2_004 = new s2_004();
    S3_340 = new s3_340();
    S3_036 = new s3_036();
    S3_840 = new s3_840();
    S4_643 = new s4_643();
    S4_586 = new s4_586();
    RESULT = new result();
    END = new end();


    Background();
    // type = "S3";
    // total = 5;
    Scene = "Thumbnail";
}

function mouseReleased() {
    if (Scene == "Thumbnail") THUMBNAIL.clicked();
    else if (Scene == "Intro") INTRO.clicked();
    else if (Scene == "Survey01") SURVEY01.clicked();
    else if (Scene == "Survey02") SURVEY02.clicked();
    else if (Scene == "Survey03") SURVEY03.clicked();
    else if (Scene == "Survey04") SURVEY04.clicked();
    else if (Scene == "Result") RESULT.clicked();
    else if (Scene == "End") END.clicked();

}

function draw() {

    if (Scene == "Thumbnail") THUMBNAIL.show();
    else if (Scene == "Intro") INTRO.show();
    else if (Scene == "Survey01") SURVEY01.show();
    else if (Scene == "Survey02") SURVEY02.show();
    else if (Scene == "Survey03") SURVEY03.show();
    else if (Scene == "Survey04") SURVEY04.show();
    else if (Scene == "Result") RESULT.show();
    else if (Scene == "End") END.show();
}

class result {
    constructor() {

    }

    clicked() {
        if (type == "S1" && total >= 0 && total < 16) S1_420.clicked();
        if (type == "S1" && total >= 16 && total <= 30) S1_729.clicked();
        if (type == "S2" && total >= 0 && total < 16) S2_764.clicked();
        if (type == "S2" && total >= 16 && total <= 30) S2_004.clicked(); 
        if (type == "S3" && total >= 0 && total < 11) S3_840.clicked(); 
        if (type == "S3" && total >= 11 && total < 21) S3_036.clicked();
        if (type == "S3" && total >= 21 && total <= 30) S3_340.clicked(); 
        if (type == "S4" && total >= 0 && total < 16) S4_643.clicked(); 
        if (type == "S4" && total >= 16 && total <= 30) S4_586.clicked(); 

    }

    show() {
        Background();


        if (type == "S1" && total >= 0 && total < 16) S1_420.show();
        if (type == "S1" && total >= 16 && total <= 30) S1_729.show();
        if (type == "S2" && total >= 0 && total < 16) S2_764.show();
        if (type == "S2" && total >= 16 && total <= 30) S2_004.show(); 
        if (type == "S3" && total >= 0 && total < 11) S3_840.show(); 
        if (type == "S3" && total >= 11 && total < 21) S3_036.show();
        if (type == "S3" && total >= 21 && total <= 30) S3_340.show(); 
        if (type == "S4" && total >= 0 && total < 16) S4_643.show(); 
        if (type == "S4" && total >= 16 && total <= 30) S4_586.show(); 
    }
}
