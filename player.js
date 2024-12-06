class Player {
    constructor(){
        this.name = ""
        this.positionx = 0
        this.positiony = 0
        this.index = null

    }

    getCount(){
        var player_count_ref = database.ref("playercount")
        player_count_ref.on("value", data => {
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }
}