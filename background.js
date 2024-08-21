function Background() {
    background(10, 10, 22);

    stroke(255, 50);
    strokeWeight(2);

    //세로선
    for (let i = 0; i < width; i += 80) {

        line(i, 0, i, height);
    }

    //가로선
    for (let i = 0; i < height; i += 80) {
        line(0, i, width, i);
    }
}