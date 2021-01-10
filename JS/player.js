class Player {

    constructor () {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    update(){
        
        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })

    }

    updateCount(count){

        database.ref("/").update({
            playerCount:count
        })
        
    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",  (data)=> {
            playerCount = data.val();
        })

    }

    static getPlayerInfo (){

        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })

    }

}