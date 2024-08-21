//시베리아 

class s4_643{
    constructor(){
        this.code = "S4-643";

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
         image(Siberia_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
         let siberia = textWidth(this.code);
 
         textSize(56);
         stroke(255);
         strokeWeight(2);
         fill(255);
         text("입니다", width * 0.17 + siberia, height * 0.6);
 
 
         // 하단 선(line)
         stroke(0, 215, 194);
         strokeWeight(8);
         line(width * 0.15, height * 0.62, width * 0.15 + siberia, height * 0.62);
         pop();
 
         //설명
         push();
         fill(255);
         noStroke();
 
         textFont(esamanru_B);
         textSize(40);
         text("물범처럼 수중 이동에 유리한 국가차량", width * 0.15, height * 0.68);
 
         textFont(esamanru_L);
         textSize(28);
         text("#시베리아 #침수 #해수면 상승 #쓰레기 종유석", width * 0.15, height * 0.72);
 
         textFont(esamanru_M);
         textSize(32);
         textLeading(60);
         text("수륙양용의 탈 것으로 기체 바람을 활용하여\n이동하며, 외부 충격을 흡수할 수 있다.",
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

//파키스탄
class s4_586{
    constructor(){
        this.code = "S4-586";

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
        image(Pakistan_M, width * 0.5, height * 0.25, width * 0.75, width * 0.75);
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
        let pakistan = textWidth(this.code);

        textSize(56);
        stroke(255);
        strokeWeight(2);
        fill(255);
        text("입니다", width * 0.17 + pakistan, height * 0.6);


        // 하단 선(line)
        stroke(0, 215, 194);
        strokeWeight(8);
        line(width * 0.15, height * 0.62, width * 0.15 + pakistan, height * 0.62);
        pop();

        //설명
        push();
        fill(255);
        noStroke();

        textFont(esamanru_B);
        textSize(40);
        text("지렁이처럼 수중 이동에 유리한 국가차량", width * 0.15, height * 0.68);

        textFont(esamanru_L);
        textSize(28);
        text("#파키스탄 #집중호우 #침수 #슬라임화 #땅의 늪화", width * 0.15, height * 0.72);

        textFont(esamanru_M);
        textSize(32);
        textLeading(60);
        text("땅 속 지하 통로를 개척하여 이동하며, 감각 세포로\n진동과 냄새를 통해 주변 물체를 감지할 수 있다.",
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
