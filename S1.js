//대한민국
class s1_420 {
    constructor() {
        this.code = "S1-420";

        this.x = width * 0.5;
        this.y = height * 0.92;
        this.width = width * 0.8;
        this.height = height * 0.11;

        this.next = false;
    }

    clicked() {
        if (this.next) Scene = "End";
    }

    show() {
        // 엠블럼
        push();
        imageMode(CENTER);
        image(Korea_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
        pop();

        // 당신의 국가 코드는
        push();
        fill(255);
        stroke(255);
        strokeWeight(2);
        textFont(KIMM_B);
        textSize(56);
        text("당신의 국가 코드는", width * 0.15, height * 0.54);

        textSize(76);
        noStroke();
        fill(245, 147, 27);
        text(this.code, width * 0.15, height * 0.6);
        let korea = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + korea, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + korea, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("삵처럼 높이 점프하는 국가 차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#한국 #싱크홀 #폭우 #약해진 지반", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("뛰어난 점프, 착지 수영능력으로 싱크홀과\n폭우를 견디며, 사람들과 교류하며 이동한다.",
            width * 0.15, height * 0.78);

        pop();

        //버튼
        if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y - this.height/2 && mouseY < this.y + this.height/2
            && mouseIsPressed
        ){
            this.next = true;
        }


        push();
        imageMode(CENTER);
        image(this.next == true? BTN_P: BTN, this.x, this.y, this.width,this.height);
        pop();
    }
}


//수단
class s1_729 {
    constructor() {
        this.code = "S1-729";

        this.x = width * 0.5;
        this.y = height * 0.92;
        this.width = width * 0.8;
        this.height = height * 0.11;

        this.next = false;
    }
    clicked() {
        if (this.next) Scene = "End";
    }
    show() {
        // 엠블럼
        push();
        imageMode(CENTER);
        image(Sudan_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
        pop();

        // 당신의 국가 코드는
        push();
        fill(255);
        stroke(255);
        strokeWeight(2);
        textFont(KIMM_B);
        textSize(56);
        text("당신의 국가 코드는", width * 0.15, height * 0.54);

        textSize(76);
        noStroke();
        fill(245, 147, 27);
        text(this.code, width * 0.15, height * 0.6);
        let sudan = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + sudan, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + sudan, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("사막 메뚜기처럼 높이 점프하는 국가 차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#수단 #갈라진 땅 #지진 #가시 기둥 #모래폭풍", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("더듬이로 지진을 감지하며, 점프와 비행능력으로\n모래 폭풍을 피해 가시기둥 지역을 이동한다.",
            width * 0.15, height * 0.78);

        pop();

        //버튼
        if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y - this.height/2 && mouseY < this.y + this.height/2
            && mouseIsPressed
        ){
            this.next = true;
        }


        push();
        imageMode(CENTER);
        image(this.next == true? BTN_P: BTN, this.x, this.y, this.width,this.height);
        pop();
    }
}