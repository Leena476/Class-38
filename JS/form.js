class Form {

    constructor(){
        this.title = createElement("h2");
        this.input = createInput("NAME");
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){

        this.title.html("CAR RACING GAME");
        this.title.position(displayWidth/2 -100,0);
        this.title.style("color","blue");

        this.input.position(displayWidth/2 -50,displayHeight/2-100);
        this.button.position(displayWidth/2 -5,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(displayWidth/2-50,displayHeight/2-100);

        })

    }

}