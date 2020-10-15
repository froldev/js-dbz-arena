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

// variables
const characterNames = [
        'Son Goku', 
        'Vegeta', 
        'Piccolo', 
        'Krilin', 
        'Tortue Géniale', 
        'Freezer', 
        'Cell Imparfait', 
        'King Piccolo', 
        'Super Buu', 
        'Cooler'
    ];
const maxHug = 10;
const maxPotion = 30;
const startLife = 100;
const characters = [];
    