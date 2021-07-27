class Form{
    constructor(){
        this.image = loadImage("Menu-Img.png");
        this.storyImg = loadImage("Story.png");
        this.start = createButton("START");
        //this.story = createButton("STORY");
    }

    hide(){
        this.start.hide();
        //this.image.hide();
    }

    display(){
        imageMode(CENTER);
        image(this.image, windowWidth/2, windowHeight/2, 100, 100);
        this.start.position(windowWidth/2, windowHeight-100);
        
        this.start.mousePressed(()=>{
            this.hide();
            imageMode(CENTER);
            gameState = "story";
            
        });

        // this.storyImg.hide();

        // this.story.mousePressed(()=>{
        //     window.location.href = "info.md";
        // })
    }

    // begin(){
    //     gameState = "play";
    // }
}