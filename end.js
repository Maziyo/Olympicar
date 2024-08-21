class end{
    constructor(){
        this.text01 = "여러분의\n국가차량으로\n올림피카 경기에\n참여해보세요!";
        this.text02 = "2090 OLYMPICAR FIGHTING!";
    }

    clicked(){
        type = null;
        one = null;
        two = null;
        three =null;
        Scene = "Thumbnail";
    }

    show(){
        Background();
        //그래픽
        push();
        fill(10,10,22);
        stroke(0,215,194);
        rectMode(CENTER);
        rect(width*0.5,height*0.5,
            width*0.8,height*0.7);
        
        rect(width*0.1,height*0.15,36,36);
        rect(width*0.9,height*0.15,36,36);
        rect(width*0.1,height*0.85,36,36);
        rect(width*0.9,height*0.85,36,36);
        pop();

        //텍스트
        push();
        fill(255);
        noStroke();
        textFont(KIMM_B);
        textSize(64);
        textLeading(90);
        text(this.text01, width*0.2,height*0.25);
        
        textSize(32);
        textLeading(32);
        textAlign(CENTER);
        text(this.text02, width*0.5,height*0.8);
        pop();

        //이미지
        imageMode(CENTER);
        image(Logo, width*0.5,height*0.6,width*0.6,height*0.25);

    }
}
