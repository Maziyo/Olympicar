class survey04 {
    constructor() { 
        this.x = width*0.5;
        this.y1 = height*0.5;
        this.y2 = height*0.82;

        this.width = width*0.78;
        this.height = height*0.3;
    }

    clicked() {
        if(three != null){
            total = one + two + three
            print("three : " + three ,"total : " + total);
            Scene = "Result";
        }
    }

    show() {
        Background();

        //질문
        push();
        imageMode(CENTER);
        image(Q04, width * 0.5, height * 0.18, width * 0.8, height * 0.3);

        fill(255);
        noStroke();
        textFont(KIMM_B);
        textSize(64);
        text("04", width * 0.17, height * 0.09);

        textSize(60);
        textFont(esamanru_M);
        textLeading(80);
        text("갑자기 알림과 다른 위험에\n안전한 곳으로 대피했다.\n당신의 행동은?",
            width * 0.19, height * 0.18);
        pop();

        //코드 구분
        if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y1 - this.height/2 && mouseY < this.y1 + this.height/2 && mouseIsPressed
        ){
            three = 0;
        } else if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y2 - this.height/2 && mouseY < this.y2 + this.height/2 && mouseIsPressed
        ){
            three = 10;
        } 

        //답변01
        push();
        imageMode(CENTER);
        image(three == 0 ? Q4A1_P:Q4A1, this.x, this.y1, this.width, this.height);
        pop();

        //답변02
        push();
        imageMode(CENTER);
        image(three == 10 ? Q4A2_P:Q4A2, this.x, this.y2, this.width, this.height);
        pop();
    }
}