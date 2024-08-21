class intro{
    constructor(){
        this.introText = "유례없는 자연재해가 \n 전세계적으로 발생하여\n 대혼란의 시기를 보냈다.\n\n조금씩 안정기에 들어선\n 2090년.\n\n 이를 축하하고자 4년만에 \n OLYMPICAR가 개최된다."
    }

    clicked(){
        Scene = "Survey01";
    }

    show(){
        Background();

        //그래픽
        push();
        fill(10,10,22);
        stroke(0,215,194);
        rectMode(CENTER);
        rect(width*0.5,height*0.45,
            width*0.8,height*0.7);
        
        rect(width*0.1,height*0.1,36,36);
        rect(width*0.9,height*0.1,36,36);
        rect(width*0.1,height*0.8,36,36);
        rect(width*0.9,height*0.8,36,36);
        pop();

        //텍스트
        push();
        fill(255);
        noStroke();
        textFont(KIMM_B);
        
        textAlign(CENTER);
        textSize(48);
        textLeading(90);
        text(this.introText, width*0.5, height*0.24);
        textSize(36);
        text("Touch to Next", width*0.5, height*0.91);
        pop();
    }
}