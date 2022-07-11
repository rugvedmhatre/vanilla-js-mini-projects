const cards = [
    {
        "id": 1,
        "word": "Hello World",
        "meaning": "the first program for a new coder"
    },
    {
        "id": 2,
        "word": "code",
        "meaning": "program instructions"
    },
    {
        "id": 3,
        "word": "syntax",
        "meaning": "the structure of statements in a computer language"
    },
    {
        "id": 4,
        "word": "assembler",
        "meaning": "translates a program written from an assembly language to a low-level language"
    }
]

const word = document.getElementById("word");
const meaning = document.getElementById("meaning");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    generateCard();

});

function generateCard() {
    const card = cards[currentItem];
    word.textContent = card.word;
    meaning.textContent = card.meaning;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > cards.length - 1) {
        currentItem = 0;
    }
    generateCard();
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = cards.length - 1;
    }
    generateCard();
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * cards.length);
    generateCard();
});