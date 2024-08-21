class thumbnail {
    construct() {

    }

    clicked() {
        Scene = "Intro";
    }

    show() {
        Background();
        
        imageMode(CENTER);
        image(Olympicar, width * 0.5, height * 0.32, width * 0.8, width * 0.8);

        //text//
        push();
        fill(255);
        noStroke();
        textAlign(CENTER);
        textFont(KIMM_B);
        textSize(112);
        text("OLYMPICAR", width * 0.5, height * 0.66);
        textSize(96);
        text("4S", width * 0.22, height * 0.81);
        fill(245, 147, 27);
        textSize(18);
        text("FOUR SURVIVAL", width * 0.22, height * 0.83);
        textFont(esamanru_L);
        fill(255);
        textSize(32);
        text("FASTER HIGHER STRONGER TOGETHER", width * 0.5, height * 0.7);
        pop();

        //pictogram
        image(soar, width * 0.4, height * 0.8, width * 0.12, width * 0.12);
        image(shelter, width * 0.54, height * 0.8, width * 0.12, width * 0.12);
        image(settle, width * 0.68, height * 0.8, width * 0.12, width * 0.12);
        image(splash, width * 0.82, height * 0.8, width * 0.12, width * 0.12);

        //시작 문구
        push();
        fill(255);
        noStroke();
        textFont(KIMM_B);

        textAlign(CENTER);
        textSize(48);
        textLeading(90);
        textSize(36);
        text("Touch to Start", width * 0.5, height * 0.91);
        pop();
    }
}
