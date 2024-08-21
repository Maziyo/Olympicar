class s3_340{
    constructor(){
        this.code = "S3-340";

        this.x = width * 0.5;
        this.y = height * 0.92;
        this.width = width * 0.8;
        this.height = height * 0.11;

        this.next = false;
    }
    clicked(){
        if (this.next) Scene = "End";
    }
    show(){
        // 엠블럼
        push();
        imageMode(CENTER);
        image(Hondurass_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
        let honduras = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + honduras, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + honduras, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("문어처럼 재난을 견디는 국가차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#온두라스 #지능적인 허리케인 #지형변화 #차원 뒤틀림", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("뛰어난 위장술,유연하고 독립적인 움직임,\n강력한 빨판으로 지능적인 허리케인을 견딘다.",
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

//호주
class s3_036{
    constructor(){
        this.code = "S3-036";

        this.x = width * 0.5;
        this.y = height * 0.92;
        this.width = width * 0.8;
        this.height = height * 0.11;

        this.next = false;
    }
    clicked(){
        if (this.next) Scene = "End";
    }
    show(){
        // 엠블럼
        push();
        imageMode(CENTER);
        image(Australia_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
        let australia = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + australia, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + australia, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("도마뱀처럼 재난을 견디는 국가차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#호주 #화재 #유리 화염 #날카로운 화염재해", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("단단하고 내열성을 지닌 표피로 스치기만해도\n날카로운 유리 화염 재해를 견딘다.",
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


//미국
class s3_840{
    constructor(){
        this.code = "S3-840";

        this.x = width * 0.5;
        this.y = height * 0.92;
        this.width = width * 0.8;
        this.height = height * 0.11;

        this.next = false;
    }
    clicked(){
        if (this.next) Scene = "End";
    }
    show(){
        // 엠블럼
        push();
        imageMode(CENTER);
        image(America_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
        let america = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + america, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + america, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("별코 두더지처럼 재난을 견디는 국가차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#미국 #허리케인 #저승사자 #점액질 독성 괴물", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("위험을 감지하는 별코, 빠른 땅 침투력\n낮고 넓은 하부로 점액실 독성 허리케인을 견딘다.",
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