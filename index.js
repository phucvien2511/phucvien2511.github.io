//Load data from JSON to pokedex variable
import pokedex from './pokedex.json' assert { type: "json" };

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

    //By default, display all pokemon
    displayPokemon(pokedex);
}

//Create AJAX request to display pokemon info from url query 
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('pokename');
console.log(name);
document.getElementById('pokemonName').innerHTML = name;
//Get index of pokemon
const index = pokedex.findIndex((pokemon) => pokemon.name === name);
document.getElementById('pokemonImage').innerHTML = `<img src="${pokedex[index].img}" alt="${pokedex[index].name}">`;
// document.getElementById('pokemonType').innerHTML = `<img src="images/icons/Pokemon_Type_Icon_${pokedex[index].type_1}.png" alt="${pokedex[index].type_1}">`+ (pokedex[index].type_2 != "None" ? `<img src="images/icons/Pokemon_Type_Icon_${pokedex[index].type_2}.png" alt="${pokedex[index].type_2}">` : "");
//Pokemon stats
document.getElementById('pokemonHP').innerHTML = pokedex[index].hp;
document.getElementById('pokemonAttack').innerHTML = pokedex[index].attack;
document.getElementById('pokemonDefense').innerHTML = pokedex[index].defense;
document.getElementById('pokemonSpAttack').innerHTML = pokedex[index].sp_attack;
document.getElementById('pokemonSpDefense').innerHTML = pokedex[index].sp_defense;
document.getElementById('pokemonSpeed').innerHTML = pokedex[index].speed;

document.getElementById('hpbar').style.width = `${pokedex[index].hp*1.5}px`;
if (pokedex[index].hp < 50) {
    document.getElementById('hpbar').style.backgroundColor = "red";
}
else if (pokedex[index].hp < 85) {
    document.getElementById('hpbar').style.backgroundColor = "orange";
}

else if (pokedex[index].hp < 125) {
    document.getElementById('hpbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('hpbar').style.backgroundColor = "blue";
}
document.getElementById('attackbar').style.width = `${pokedex[index].attack*1.5}px`;
if (pokedex[index].attack < 50) {
    document.getElementById('attackbar').style.backgroundColor = "red";
}
else if (pokedex[index].attack < 85) {
    document.getElementById('attackbar').style.backgroundColor = "orange";
}

else if (pokedex[index].attack < 125) {
    document.getElementById('attackbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('attackbar').style.backgroundColor = "blue";
}
document.getElementById('defensebar').style.width = `${pokedex[index].defense*1.5}px`;
if (pokedex[index].defense < 50) {
    document.getElementById('defensebar').style.backgroundColor = "red";
}
else if (pokedex[index].defense < 85) {
    document.getElementById('defensebar').style.backgroundColor = "orange";
}

else if (pokedex[index].defense < 125) {
    document.getElementById('defensebar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('defensebar').style.backgroundColor = "blue";
}
document.getElementById('spattackbar').style.width = `${pokedex[index].sp_attack*1.5}px`;
if (pokedex[index].spattack < 50) {
    document.getElementById('spattackbar').style.backgroundColor = "red";
}
else if (pokedex[index].spattack < 85) {
    document.getElementById('spattackbar').style.backgroundColor = "orange";
}

else if (pokedex[index].spattack < 125) {
    document.getElementById('spattackbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('spattackbar').style.backgroundColor = "blue";
}
document.getElementById('spdefensebar').style.width = `${pokedex[index].sp_defense*1.5}px`;
if (pokedex[index].spdefense < 50) {
    document.getElementById('spdefensebar').style.backgroundColor = "red";
}
else if (pokedex[index].spdefense < 85) {
    document.getElementById('spdefensebar').style.backgroundColor = "orange";
}

else if (pokedex[index].spdefense < 125) {
    document.getElementById('spdefensebar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('spdefensebar').style.backgroundColor = "blue";
}
document.getElementById('speedbar').style.width = `${pokedex[index].speed*1.5}px`;
if (pokedex[index].speed < 50) {
    document.getElementById('speedbar').style.backgroundColor = "red";
}
else if (pokedex[index].speed < 85) {
    document.getElementById('speedbar').style.backgroundColor = "orange";
}

else if (pokedex[index].speed < 125) {
    document.getElementById('speedbar').style.backgroundColor = "greenyellow";
}
else {
    document.getElementById('speedbar').style.backgroundColor = "blue";
}


