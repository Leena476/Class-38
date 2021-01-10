class Game {

    constructor () {



    }

    getState () {

        var stateRef = database.ref("gameState");
        stateRef.on("value", function(data){

            gameState = data.val();

        })

    }

    updateState (state) {

        database.ref("/").update({
            gameState:state
        })
        
    }

    //gameState 0
    async start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();

            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
           
        }


        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1,car2,car3,car4];
    }

    //gameState 1
    play(){

        form.hide();
        
        
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            //var displayPosition = 130;

            //index of the array
            var index = 0;

            //x and y positions of the cars
            var x=0;
            var y;


            for(var plr in allPlayers){

                // if(plr  === "player"+player.index){
                //     fill("red");
                // }
                // else {
                //     fill("black");
                // }

                //textSize(17)
                
                // displayPosition += 30;
                // text(allPlayers[plr].name + " : " +  allPlayers[plr].distance   ,  130    ,  displayPosition    )

                index++;

                x = x+200;

                y= displayHeight - allPlayers[plr].distance ;

                cars[index-1].x=x;
                cars[index-1].y=y;
                
                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;

                } else {
                    cars[index-1].shapeColor = "black";
                }
            
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=20;
            player.update();
        }

        drawSprites();
        
    }

  

}