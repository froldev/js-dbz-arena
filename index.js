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
    
    giveHugs(target, amelioration) {
        target.life += amelioration;
        console.log(`${this.name} give hugs (+${amelioration}) to ${target.name}. ${target.life} life points remain.`);
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

// table of fighters
for(let i = 0; i < characterNames.length; i++) {
    characters.push(new Character(characterNames[i], startLife));
}
    
// fight
while(true) {
    let action = random(3);
    let emitterAction = random(characters.length);
    let receiverAction = random(characters.length);
    
    // same emitter and receiver
    while (emitterAction === receiverAction) {
        receiverAction = random(characters.length);
    }

    // hugs
    if (action === 0) {
        characters[emitterAction].giveHugs(characters[receiverAction], random(maxHug));
    // kick
    } else if (action === 1) {
        console.log('kick');
    // potion
    } else if (action === 2) {
        console.log('potion');
    }

    // delay
    sleep(500);
}
