class survey03 {
    constructor() { 
        this.x = width*0.5;
        this.y1 = height*0.5;
        this.y2 = height*0.82;

        this.width = width*0.78;
        this.height = height*0.3;
    }

    clicked() {
        if(two != null){
            print(two);
            Scene = "Survey04";
        }
    }

    show() {
        Background();

        //질문
        push();
        imageMode(CENTER);
        image(Q03, width * 0.5, height * 0.18, width * 0.8, height * 0.3);

        fill(255);
        noStroke();
        textFont(KIMM_B);
        textSize(64);
        text("03", width * 0.17, height * 0.09);

        textSize(60);
        textFont(esamanru_M);
        textLeading(80);
        text("안전 알림을 확인했다.\n올림피카에 가기 위해\n선택한 이동 방식은?",
            width * 0.19, height * 0.18);
        pop();

        //코드 구분
        if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y1 - this.height/2 && mouseY < this.y1 + this.height/2 && mouseIsPressed
        ){
            two = 5;
        } else if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y2 - this.height/2 && mouseY < this.y2 + this.height/2 && mouseIsPressed
        ){
            two = 10;
        } 

        //답변01
        push();
        imageMode(CENTER);
        image(two == 5 ? Q3A1_P:Q3A1, this.x, this.y1, this.width, this.height);
        pop();

        //답변02
        push();
        imageMode(CENTER);
        image(two == 10 ? Q3A2_P:Q3A2, this.x, this.y2, this.width, this.height);
        pop();
    }
}