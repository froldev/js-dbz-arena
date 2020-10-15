// function random
function random(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

// function sleep
function sleep(delay) {
    let start = new Date().getTime();
    while(new Date().getTime() < start + delay);
    }

// class character
class Character {
    constructor(name, life) {
        this.name = name;
        this.life = life;
    }
    
    giveHugs() {
    
    }
    
    giveAKick() {
    
    }
    
    takePotion() {
    
    }
}
    