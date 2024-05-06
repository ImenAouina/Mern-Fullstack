const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//list of pokémon that have names that start with the letter "B"
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);
//array of just the ids
const pkmnIds = pokémon.map( p => p.id );
console.log(pkmnIds);
//an array of pokémon objects where the id is evenly divisible by 3
const pkmnIdsDivisibleBy3 = pokémon.filter(p => p.id % 3 === 0);
console.log(pkmnIdsDivisibleBy3);
//an array of pokémon objects that are "fire" type
//const pkmnTypeFire = pokémon.filter(p => p.types.includes("fire"));
const pkmnTypeFire = pokémon.filter(p => p.types=="fire");
console.log(pkmnTypeFire);
//an array of pokémon objects that have more than one type
const pkmnTypes = pokémon.filter(p => p.types.length >=2);
console.log(pkmnTypes);
//an array with just the names of the pokémon
const pkmnNames = pokémon.map (p => p.name);
console.log(pkmnNames);
//an array with just the names of pokémon with an id greater than 99
const pkmnName = pokémon.filter(p => p.id > 99).map(p => p.name);
console.log(pkmnName);
//an array with just the names of the pokémon whose only type is poison

const pkmnName2 = pokémon.filter(p => p.types == "poison" ).map(pk => pk.name);
//const pkmnName2 = pokémon.filter(p => p.types.length == 1 && p.types == "poison" ).map(pk => pk.name);
//const pkmnName2 = pokémon.filter(p => p.types.length == 1 && p.types.includes("poison") ).map(pk => pk.name);
console.log(pkmnName2);

//an array containing just the first type of all the pokémon whose second type is "flying"
const pkmnFirstType = pokémon.filter(p => p.types[1] == "flying" ).map(p => p.types[0]);
console.log(pkmnFirstType);

//a count of the number of pokémon that are "normal" type
const pkmns = pokémon.filter(p => p.types == "normal");

console.log('the number of pokémon that are "normal" type is: '+pkmns.length); 

/*other solution*/
let count = 0;
for(const pkmn of pkmns ){
    count++;
}
console.log('the number of pokémon that are "normal" type is: '+ count);



