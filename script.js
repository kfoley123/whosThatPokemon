//display a pokemon image
//take the users input
//save it and then compare it against the correct answer
//if its right, score goes up and shows you the pokemon & name, adds to "correct array"
//if wrong score goes down and it shows you poekmon & name removes from remaining pokemon array
//skip goes to next pokemon
//hint display a hint to the name of the pokemon
//reset resets score, resets kept track of pokemon

console.log(pokemon[0].name);

// creates a var that stores the HTML onject that has the class of pokemon-image
let pokemonDiv = document.querySelector(".pokemon-image");

let score = 0;

let currentPokemon = shufflePokemon(pokemon);

const scoreDisplay = document.querySelector(".score");

const submitButton = document.querySelector("#submit");

const submitAnswer = document.querySelector("#answer");

updateScore(score);

submitButton.addEventListener("click", (e) => {
    if (
        submitAnswer.value.toLowerCase() ===
        currentPokemon.name.english.toLowerCase()
    ) {
        score++;
        updateScore(score);
        currentPokemon = shufflePokemon(pokemon);
        displayPokemon(currentPokemon);

        //adds 1 to your score
        //after a few secs moves on to next pokemon
    } else {
    }
});

//adds pokemon[i].name.english to inner HTML of the div
// pokemon[i] is whatever pokemon from the array is at that random number
//.name.english gets the specifc name value as there are several in the objects

displayPokemon(currentPokemon);

//store what is put in the form and compare it against the correct answer
//don't refresh page right away
//clear text box after each correct/incorrect item

function updateScore(score) {
    scoreDisplay.innerHTML = "score:" + score;
}

function shufflePokemon(pokemonArray) {
    i = Math.floor(Math.random() * pokemonArray.length);
    return pokemonArray[i];
}

function displayPokemon(nextPokemon) {
    pokemonDiv.innerHTML = nextPokemon.name.english;
}
