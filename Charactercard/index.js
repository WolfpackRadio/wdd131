
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 1,
    health: 100,
    image: "snortleblat.webp",
    
    attacked() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`Oh no! ${this.name} has died!`);
            }
        } else {
            alert(`${this.name} is already down! Rest in peace.`);
        }
        renderCharacterCard();
    },
    levelUp() {
        this.level += 1;
        renderCharacterCard();
    }
};

function renderCharacterCard() {
    document.getElementById('charName').textContent = character.name;
    document.getElementById('charClass').textContent = character.class;
    document.getElementById('charLevel').textContent = character.level;
    document.getElementById('charHealth').textContent = character.health;
    document.getElementById('charImage').src = character.image;
}

document.getElementById('attackBtn').addEventListener('click', function() {
    character.attacked();
});

document.getElementById('levelUpBtn').addEventListener('click', function() {
    character.levelUp();
});

renderCharacterCard();