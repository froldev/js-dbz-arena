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
    
    giveAKick(target, damage, index) {
        target.life -= damage;
        // delete fighter
        if(target.life <= 0) {
            console.log(`xxx -- RIP ${target.name} -- xxx`);
            characters.splice(index,1);
        } else {
            console.log(`${this.name} give kicks (+${damage}) to ${target.name}. ${target.life} life points remain.`);
        }
    }
    
    takePotion(nbrPointsLife) {
        this.life += nbrPointsLife
        console.log(`${this.name} take potion life (${nbrPointsLife}). ${this.life} life points remain.`)
    }
}

// variables
const characterNames = [
        'Son Goku', 
        'Vegeta', 
        'Krilin', 
        'Tortue Géniale', 
        'Freezer', 
        'Cell', 
        'Super Buu', 
        'Cooler'
    ];
const maxHug = 5;
const maxKick = 90;
const maxPotion = 20;
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

    // winner is ?
    if(characters.length <= 1) {
        console.log(`${characters[0].name} IS WINNER !!!`);
        return false;
    }

    // list of actions
    // hugs
    if (action === 0) {
        characters[emitterAction].giveHugs(characters[receiverAction], random(maxHug));
    // kick
    } else if (action === 1) {
        characters[emitterAction].giveAKick(characters[receiverAction], random(maxKick), receiverAction);
    // potion
    } else if (action === 2) {
        characters[emitterAction].takePotion(random(maxPotion));
    }

    // delay
    sleep(500);
}
