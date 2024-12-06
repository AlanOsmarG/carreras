class Game {
    constructor(){
        
    }

    getState(){
        var game_state_ref = database.ref("gamestate");
        game_state_ref.on("value", function(data){
            game_state = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            game_state : state
        })
    }

    start(){
        var player = new Player();
        playerCount = player.getCount();
        var form = new Form();
        form.display();
        car1 = createSprite(width / 2 - 50, height - 100)
        car1.addImage("car1", car1img)
        car1.scale = 0.07
        car2 = createSprite(width / 2 + 100, height - 100)
        car2.addImage("car2", car2img)
        car2.scale = 0.07
        cars = [car1, car2]
    }

    handleElements(){
        form.hide()
        form.titleimg.position(40, 50)
        form.titleimg.class("titlegame")
    }

    play(){
        this.handleElements()
        drawsprites()
    }
}