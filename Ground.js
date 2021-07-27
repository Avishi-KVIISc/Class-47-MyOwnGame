class Ground {
    constructor(x, y, width, height){
        this.sprite = createSprite(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("groundImg.png");
    }

    display(){
        this.sprite.addImage(this.image);
        this.sprite.scale = 2.5;
        groundGroup.add(this.sprite);
        drawSprites();
    }
}