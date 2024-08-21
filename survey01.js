class survey01 {
    constructor() {
        this.x1 = width * 0.29;
        this.x2 = width * 0.7;
        this.y1 = height * 0.5;
        this.y2 = height * 0.82;

        this.width = width * 0.38;
        this.height = height * 0.3;
    }

    clicked() {
        if(type == "S1" || type == "S2" || type == "S3" || type == "S4"){

            print(type);
            Scene = "Survey02";
        }

    }

    show() {
        Background();

        //질문
        push();
        //rectMode(CENTER);
        //rect(width*0.5,height*0.18,width*0.85,height*0.3);
        imageMode(CENTER);
        image(Q01, width * 0.5, height * 0.18, width * 0.8, height * 0.3);

        fill(255);
        noStroke();
        textFont(KIMM_B);
        textSize(64);
        text("01", width * 0.17, height * 0.09);

        textSize(60);
        textFont(esamanru_M);
        textLeading(80);
        text("유례적인 자연재해 대비\n다음 중 하나의 기기만을\n소지해야 한다면?",
            width * 0.19, height * 0.18);
        pop();


        //유형 구분
        if (mouseX > width * 0.29 - width * 0.19 && mouseX < width * 0.29 + width * 0.19 &&
            mouseY > height * 0.5 - height * 0.15 && mouseY < height * 0.5 + height * 0.15 && mouseIsPressed
        ) {
            type = "S1";
        } else if (mouseX > this.x2 - this.width/2 && mouseX < this.x2 + this.width/2 &&
            mouseY > this.y1 - this.height/2 && mouseY < this.y1 + this.height/2 && mouseIsPressed) {
            type = "S2";
        }else if (mouseX > this.x1 - this.width/2 && mouseX < this.x1 + this.width/2 &&
            mouseY > this.y2 - this.height/2 && mouseY < this.y2 + this.height/2 && mouseIsPressed) {
            type = "S3";
        }else if (mouseX > this.x2 - this.width/2 && mouseX < this.x2 + this.width/2 &&
            mouseY > this.y2 - this.height/2 && mouseY < this.y2 + this.height/2 && mouseIsPressed) {
            type = "S4";
        }

        //답변01
        push();
        //rectMode(CENTER);
        //rect(width*0.29, height*0.5,width*0.38,height*0.3);
        imageMode(CENTER);
        image(type == "S1" ? Q1A1_P : Q1A1, this.x1, this.y1, this.width, this.height);
        pop();

        //답변02
        push();
        //rectMode(CENTER);
        //rect(width * 0.7, height * 0.5, width * 0.38, height * 0.3);
        imageMode(CENTER);
        image(type == "S2" ? Q1A2_P : Q1A2, this.x2, this.y1, this.width, this.height);
        pop();

        //답변03
        push();
        //rectMode(CENTER);
        //rect(width * 0.29, height * 0.82, width * 0.38, height * 0.3);
        imageMode(CENTER);
        image(type == "S3" ? Q1A3_P : Q1A3, this.x1, this.y2, this.width, this.height);
        pop();

        //답변04
        push();
       // rectMode(CENTER);
        //rect(width * 0.7, height * 0.82, width * 0.38, height * 0.3);
        imageMode(CENTER);
        image(type == "S4" ? Q1A4_P : Q1A4, this.x2, this.y2, this.width, this.height);
        pop();

    }
}