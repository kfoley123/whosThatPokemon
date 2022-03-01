//display a pokemon image
//fix issue with form submit on enter
//skip goes to next pokemon

// resets kept track of pokemon

// creates a var that stores the HTML object that has the class of pokemon-image
let pokemonDiv = document.querySelector(".pokemon-image");

let score = 0;

let currentPokemon = shufflePokemon(pokemon);

const scoreDisplay = document.querySelector(".score");

const submitButton = document.getElementById("submit");

const skipButton = document.getElementById("skip");

const resetButton = document.getElementById("reset");

const hintButton = document.getElementById("hintbutton");

const submitAnswer = document.getElementById("answer");

displayScore(score);
displayPokemon(currentPokemon);

let pokemonImage = document.getElementById("pokemonImage");
console.log(pokemonImage);

skipButton.addEventListener("click", (e) => {
    currentPokemon = nextPokemon(pokemon, currentPokemon);
});

resetButton.addEventListener("click", (e) => {
    currentPokemon = nextPokemon(pokemon, currentPokemon);
    score = 0;
    displayScore(score);
});

hintButton.addEventListener("click", (e) => {
    var hintText = document.getElementById("hint");
    hintText.classList.toggle("show");
    hintText.innerHTML = currentPokemon.type.join(", ");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (
            submitAnswer.value.toLowerCase() ===
            currentPokemon.name.english.toLowerCase()
        ) {
            pokemonImage.classList.toggle("correctGuess");
            score++;
            displayScore(score);
            setTimeout(() => {
                currentPokemon = nextPokemon(pokemon, currentPokemon);
            }, 1500);
        } else {
            pokemonImage.classList.toggle("correctGuess");
            score--;
            displayScore(score);
            setTimeout(() => {
                currentPokemon = nextPokemon(pokemon, currentPokemon);
            }, 1500);
        }
    }
});

submitButton.addEventListener("click", (e) => {
    if (
        submitAnswer.value.toLowerCase() ===
        currentPokemon.name.english.toLowerCase()
    ) {
        pokemonImage.classList.toggle("correctGuess");
        score++;
        displayScore(score);
        setTimeout(() => {
            currentPokemon = nextPokemon(pokemon, currentPokemon);
        }, 1500);
    } else {
        pokemonImage.classList.toggle("correctGuess");
        score--;
        displayScore(score);
        setTimeout(() => {
            currentPokemon = nextPokemon(pokemon, currentPokemon);
        }, 1500);
    }
});

function displayScore(score) {
    scoreDisplay.innerHTML = "score:" + score;
}

function shufflePokemon(pokemonArray) {
    i = Math.floor(Math.random() * pokemonArray.length);
    return pokemonArray[i];
}

function displayPokemon(nextPokemon) {
    pokemonDiv.innerHTML = `<img src="${nextPokemon.image}" width="300" height="300" id="pokemonImage">`;
}

function nextPokemon(pokemonArray, currentPokemon) {
    currentPokemon = shufflePokemon(pokemonArray);
    displayPokemon(currentPokemon);
    submitAnswer.value = "";
    return currentPokemon;
}

function revealPokemon() {}
