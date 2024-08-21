class s2_764{
    constructor(){
        this.code = "S2-764";

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
         image(Thailand_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
         let thailand = textWidth(this.code);
 
         textSize(56);
         stroke(255);
         strokeWeight(2);
         fill(255);
         text("입니다", width * 0.17 + thailand, height * 0.6);
 
 
         // 하단 선(line)
         stroke(0, 215, 194);
         strokeWeight(8);
         line(width * 0.15, height * 0.62, width * 0.15 + thailand, height * 0.62);
         pop();
 
         //설명
         push();
         fill(255);
         noStroke();
 
         textFont(esamanru_B);
         textSize(40);
         text("코끼리처럼 재난을 이용하는 국가차량", width * 0.15, height * 0.68);
 
         textFont(esamanru_L);
         textSize(28);
         text("#태국 #가뭄 #폭우 #위협적인 더위", width * 0.15, height * 0.72);
 
         textFont(esamanru_M);
         textSize(32);
         textLeading(60);
         text("큰 몸에 비를 저장하고 코를 통해 갈라진 땅에\n물을 뿌리며, 큰 귀는 더위의 가림막이 된다.",
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

class s2_004{
    constructor(){
        this.code = "S2-004";

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
        image(Afghanistan_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
        let afghanistan = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + afghanistan, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + afghanistan, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("거미처럼 재난을 이용하는 국가차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#아프가니스탄 #가뭄 #홍수 #집중호우 #페인 땅", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("떨어지는 빗물을 잡아 페어 있는 땅을 메꾸며\n땅의 물 공급 조절로 피해를 줄인다.",
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