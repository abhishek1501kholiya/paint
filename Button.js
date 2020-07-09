class Button {
    constructor(){
        this.button = createButton('Clear');
    }
    display(){
        this.button.position(400,600);
        this.button.mousePressed(()=>{
            console.log("it is working");
            drwto = [];
            var adaRef = database.ref('drawing');
            adaRef.remove()
        })
    }
}