const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

// rl.question("make a move", () =>{
// })

class Game{
    constructor(){
        this.towers = [[3,2,1],[],[]];
        this.moveCount = 0;
    }
    prompMove(callback){
        console.clear();
        this.render();
        rl.question("enter first tower", from =>{
            rl.question("enter sencond tower", to=>{
                callback(from - 1, to - 1)
            })

        })
    }
    run(){
        this.prompMove((from, to)=>{
            if(this.makeMove(from,to)){
                console.log("Invalid Move")
            }
            if(!this.isWon()){
                this.run();
            }else{
                this.render()
                console.log(`you won in ${this.moveCount}`);
                rl.close()
            }
        })
    }
    isWon(){
        return this.towers.slice(1).some(arr => arr.length === 3);
    }
    isValidMove(from, to){
        if(from < 0||
            to < 0 ||
            from > this.towers.length - 1 || 
            to > this.towers.length - 1
            ){
            return false
        }
        let towerFrom = this.towers[from];
        let towerTo = this.towers[to];
        if(!this.towers[from].legth) return false;
        if(!this.towers[to].legth) return true;
        let fromLast = towerFrom[towerFrom.length - 1];
        let toLast = towerTo[towerTo.length - 1];
        return fromLast < toLast
        //to and from must be within a range
        //if from is empty then false
        //if to is empty then true
        //disc must be smaller
    }
    makeMove(from, to){
        if(this.isValidMove(from, to)){
            this.towers[to].push(this.towers[from].pop());
            this.makeMove++
            return true;
        }else{
            return false;
        }

    }
    render(){
        console.log(this.towers)
    }
}
let game = new Game ();
game.run();

