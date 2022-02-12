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
console.log(pokemonDiv);

//create a variable called i that finds a random number between 1-151 (the length of the pokemon array)

i = Math.floor(Math.random() * pokemon.length);

//adds pokemon[i].name.english to inner HTML of the div
// pokemon[i] is whatever pokemon from the array is at that random number
//.name.english gets the specifc name value as there are several in the objects

pokemonDiv.innerHTML += pokemon[i].name.english;
