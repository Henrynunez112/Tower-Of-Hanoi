let readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})
rl.question("make a move", (startIdx, endIdx) =>{
})
class Game{
    constructor(startIdx, endIdx){
        this.startIdx = startIdx;
        this.endIdx = endIdx;
        this.stackA = [];
        this.stackB = [];
        this.stackC = [];
        this.disk = 3;
    }
    validMove(startIdx, endIdx){
        if()
    }
}