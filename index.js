const axios = require("axios");
const apiUrl = "https://pokeapi.co/api/v2";
/* Instructions
Today we'll be working with the Pokemon api. You can find the full docs here: https://pokeapi.co/

We'll be implimenting various functions described below. Each has instructions in the body. After each function is a call to that function that has been commented out followed by the expected output. 

Uncomment the function call when you're ready to test that function. The first has been uncommented for you.

Note that if you have multiple function calls uncommented they may log in a different order than top to bottom. That's because promises operate asynchronously and can complete in any order. Just focus on one at a time.
*/

function getPokemonIdByName(name){
  /* Use the /pokemon endpoint to get the data for a given pokemon. 
  Return a promise containing that pokemon's id.
  */
  const url = `${apiUrl}/pokemon/${name}`;
}
// getPokemonIdByName("ditto").then(console.log);
// should log 132

function getPokemonTypesByName(name){
  /* Use the same /pokemon endpoint but we'll be making a more complex query.
  Return a promise containing an array of the types of the given pokemon. For example kirlia has the types of "psychic" and "fairy". 
  You'll need to use map or other JavaScript features to get the names out of their parent objects.
  */
}
// getPokemonTypesByName("kirlia").then(console.log) 
// should log the array [ 'psychic', 'fairy' ]

function canPokemonLearnAbility(name, ability) {
  /* Return a promise containing a boolean value, true or false, indicating whether or not the given pokemon can learn the given ability.
  */
}

// reminder to uncomment one function call at a time while testing
//canPokemonLearnAbility("charizard", "cut").then(console.log) // true
//canPokemonLearnAbility("charizard", "thunderbolt").then(console.log) // false

async function getPokemonAtLocation(locationName){
  /* Use the /location-area endpoint to get the data for a given location.
  Return a promise containing an array of all the pokemon that can be encountered there.
  Like the last function you'll need to map through the fields of that object to get the required data.
  I made this an async function, I'd encourage you to use the await keyword.
  */
}
// getPokemonAtLocation("canalave-city-area").then(console.log);
/* should log the array:
  ['tentacool', 'tentacruel',
  'staryu',    'magikarp',
  'gyarados',  'wingull',
  'pelipper',  'shellos',
  'gastrodon', 'finneon',
  'lumineon']
*/

async function getPokemonAtLocations(locationNames){
  /* Finally given an array of locations you'll need to aggregate the names of all the pokemon that can be found at those locations.
  For each location add all of the pokemon at that location to a master list. If a pokemon can be encountered at multiple locations it should still only appear once in the master list.
  Return this list in a promise.
  Feel free to use the above function as a helper.
  */
}
//getPokemonAtLocations(["canalave-city-area","ravaged-path-area"]).then(console.log);
/* Should log the following array:
[
  'tentacool', 'tentacruel',
  'staryu',    'magikarp',
  'gyarados',  'wingull',
  'pelipper',  'shellos',
  'gastrodon', 'finneon',
  'lumineon',  'zubat',
  'golbat',    'psyduck',
  'golduck',   'geodude',
  'barboach',  'whiscash'
]
*/