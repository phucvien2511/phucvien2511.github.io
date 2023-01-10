//Load data from JSON to pokedex and moves variable
import pokedex from './pokedex.json' assert { type: "json" };
import moves from './moves.json' assert { type: "json" };
for (let i = 0; i < pokedex.length; i++) {
    pokedex[i].img = pokedex[i].img.toJSON().default;
}
//Function to display pokedex
window.onload = function () {
    const displayPokemon = (pokemon) => {
        const pokemonHTML = pokemon.map((pokemon) => {
            return `
            <div class="col">
                <div class="card">
                    <div class="card-img"><img src="${pokemon.img}" class="card-img-top" alt="${pokemon.name}"></div>
                        <div class="card-body">
                        <a href="viewpokemon.html?pokename=${pokemon.name}"><h5 class="card-title">${pokemon.name}</h5></a>
                            <div class="card-type"><img src="images/icons/Pokemon_Type_Icon_${pokemon.type_1}.png" alt="${pokemon.type_1}">`+ (pokemon.type_2 != "None" ? `<img src="images/icons/Pokemon_Type_Icon_${pokemon.type_2}.png" alt="${pokemon.type_2}">` : "") +`</div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }).join('');
        document.getElementById('pokedex').innerHTML = pokemonHTML;
        //Switch pokemon img url to GIF version when hover
        const pokemonImg = document.getElementsByClassName('card-img-top');
        for (let i = 0; i < pokemonImg.length; i++) {
            pokemonImg[i].addEventListener('mouseover', () => {
                //Remove al; non alphabet letters from name
                pokemonImg[i].src = `https://play.pokemonshowdown.com/sprites/ani/${pokemon[i].name.replace(/[^a-zA-Z]/g, "").toLowerCase()}.gif`;
            });
            pokemonImg[i].addEventListener('mouseout', () => {
                pokemonImg[i].src = pokemon[i].img;
            });
        }
    };
    //Search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();
        const filteredPokemon = pokedex.filter((pokemon) => {
            return (
                // pokemon.type_1.toLowerCase().includes(searchString) ||
                // pokemon.type_2.toLowerCase().includes(searchString)
                pokemon.name.toLowerCase().includes(searchString)
            );
        });
        displayPokemon(filteredPokemon);
    });

    //By default, display all pokemon by pokedex.json index
    //displayPokemon(pokedex);
    //By default, display all pokemon by alphabetical order
    displayPokemon(pokedex.sort((a, b) => (a.name > b.name) ? 1 : -1));
}

//Display pokemon info from url query 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('pokename');
console.log(name);
document.getElementById('pokemonName').innerHTML = name;
//Get index of pokemon
const pokeIndex = pokedex.findIndex((pokemon) => pokemon.name === name);
document.getElementById('pokemonImage').innerHTML = `<img src="${pokedex[pokeIndex].img}" alt="${pokedex[pokeIndex].name}">`;
// document.getElementById('pokemonType').innerHTML = `<img src="images/icons/Pokemon_Type_Icon_${pokedex[pokeIndex].type_1}.png" alt="${pokedex[pokeIndex].type_1}">`+ (pokedex[pokeIndex].type_2 != "None" ? `<img src="images/icons/Pokemon_Type_Icon_${pokedex[pokeIndex].type_2}.png" alt="${pokedex[pokeIndex].type_2}">` : "");
//Pokemon stats
document.getElementById('pokemonHP').innerHTML = pokedex[pokeIndex].hp;
document.getElementById('pokemonAttack').innerHTML = pokedex[pokeIndex].attack;
document.getElementById('pokemonDefense').innerHTML = pokedex[pokeIndex].defense;
document.getElementById('pokemonSpAttack').innerHTML = pokedex[pokeIndex].sp_attack;
document.getElementById('pokemonSpDefense').innerHTML = pokedex[pokeIndex].sp_defense;
document.getElementById('pokemonSpeed').innerHTML = pokedex[pokeIndex].speed;

document.getElementById('hpbar').style.width = `${pokedex[pokeIndex].hp*1.5}px`;
if (pokedex[pokeIndex].hp < 50) {
    document.getElementById('hpbar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].hp < 85) {
    document.getElementById('hpbar').style.backgroundColor = "orange";
}

else if (pokedex[pokeIndex].hp < 125) {
    document.getElementById('hpbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('hpbar').style.backgroundColor = "blue";
}
document.getElementById('attackbar').style.width = `${pokedex[pokeIndex].attack*1.5}px`;
if (pokedex[pokeIndex].attack < 50) {
    document.getElementById('attackbar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].attack < 85) {
    document.getElementById('attackbar').style.backgroundColor = "orange";
}

else if (pokedex[pokeIndex].attack < 125) {
    document.getElementById('attackbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('attackbar').style.backgroundColor = "blue";
}
document.getElementById('defensebar').style.width = `${pokedex[pokeIndex].defense*1.5}px`;
if (pokedex[pokeIndex].defense < 50) {
    document.getElementById('defensebar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].defense < 85) {
    document.getElementById('defensebar').style.backgroundColor = "orange";
}

else if (pokedex[pokeIndex].defense < 125) {
    document.getElementById('defensebar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('defensebar').style.backgroundColor = "blue";
}
document.getElementById('spattackbar').style.width = `${pokedex[pokeIndex].sp_attack*1.5}px`;
if (pokedex[pokeIndex].sp_attack < 50) {
    document.getElementById('spattackbar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].sp_attack < 85) {
    document.getElementById('spattackbar').style.backgroundColor = "orange";
}

else if (pokedex[pokeIndex].sp_attack < 125) {
    document.getElementById('spattackbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('spattackbar').style.backgroundColor = "blue";
}
document.getElementById('spdefensebar').style.width = `${pokedex[pokeIndex].sp_defense*1.5}px`;
if (pokedex[pokeIndex].sp_defense < 50) {
    document.getElementById('spdefensebar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].sp_defense < 85) {
    document.getElementById('spdefensebar').style.backgroundColor = "orange";
}

else if (pokedex[pokeIndex].sp_defense < 125) {
    document.getElementById('spdefensebar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('spdefensebar').style.backgroundColor = "blue";
}
document.getElementById('speedbar').style.width = `${pokedex[pokeIndex].speed*1.5}px`;
if (pokedex[pokeIndex].speed < 40) {
    document.getElementById('speedbar').style.backgroundColor = "red";
}
else if (pokedex[pokeIndex].speed < 85) {
    document.getElementById('speedbar').style.backgroundColor = "orange";
}
else if (pokedex[pokeIndex].speed < 125) {
    document.getElementById('speedbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('speedbar').style.backgroundColor = "blue";
}

//Search for type of each move
for (let i = 0; i < 4; i++) {
    var moveIndex = moves.findIndex((move) => move.name === pokedex[pokeIndex].moveset[i]);
    var className = "move_" + (i+1) + "-name";
    var className2 = "move_" + (i+1) + "-type";
    document.getElementById(className).innerHTML = pokedex[pokeIndex].moveset[i];
    document.getElementById(className2).innerHTML = `<img src="images/icons/Pokemon_Type_Icon_${moves[moveIndex].type}.png" alt="${moves[moveIndex].type}">`;
}






