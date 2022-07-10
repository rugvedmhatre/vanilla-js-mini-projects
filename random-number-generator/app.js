const btn = document.getElementById("btn");
const number = document.querySelector(".number");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    number.textContent = randomNumber;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}