class survey02 {
    constructor() { 
        this.x = width*0.5;
        this.y1 = height*0.5;
        this.y2 = height*0.82;

        this.width = width*0.78;
        this.height = height*0.3;
    }

    clicked() {
        if(one != null){
            print(one);
            Scene = "Survey03";
        }
    }

    show() {
        Background();

        //질문
        push();
        imageMode(CENTER);
        image(Q02, width * 0.5, height * 0.18, width * 0.8, height * 0.3);

        fill(255);
        noStroke();
        textFont(KIMM_B);
        textSize(64);
        text("02", width * 0.17, height * 0.09);

        textSize(60);
        textFont(esamanru_M);
        textLeading(80);
        text("삐-! 삐-!\n기기에서 알림이 울렸어요.\n당신의 행동은?",
            width * 0.19, height * 0.18);
        pop();

        //코드 구분
        if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y1 - this.height/2 && mouseY < this.y1 + this.height/2 && mouseIsPressed
        ){
            one = 0;
        } else if(mouseX > this.x - this.width/2 && mouseX < this.x + this.width/2 &&
            mouseY > this.y2 - this.height/2 && mouseY < this.y2 + this.height/2 && mouseIsPressed
        ){
            one = 10;
        } 

        //답변01
        push();
        imageMode(CENTER);
        image(one == 0 ? Q2A1_P:Q2A1, this.x, this.y1, this.width, this.height);
        pop();

        //답변02
        push();
        imageMode(CENTER);
        image(one == 10 ? Q2A2_P:Q2A2, this.x, this.y2, this.width, this.height);
        pop();
    }
}