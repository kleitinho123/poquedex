const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImagen = document.querySelector(`.pokemon_image`);
const form = document.querySelector(`.form`);
const input = document.querySelector(`.input_search`);
const buttonPrev = document.querySelector(`.btn-prev`);
const buttonNext = document.querySelector(`.btn-next`);
let contadora;
//receber resposta da api

const fetchpokemon = async (pokemon) => {

    const aPIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (aPIResponse.status === 200) {
        const data = await aPIResponse.json();
        return data;
    }


};

const renderpokemon = async (pokemon) => {


    pokemonName.textContent = "carregando.."
    pokemonImagen.src = "https://blog.roberthallam.org/wp-content/uploads/2022/09/loading-win98-transparent.gif"

    const data = await fetchpokemon(pokemon);

    if (data) {
        pokemonNumber.textContent = data.id;
        pokemonName.textContent = data.name;
        pokemonImagen.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;

        input.value = ""
        contadora = data.id
        console.log(data);

    } else {
        pokemonName.textContent = "não encontrado"
        pokemonNumber.textContent = "https://media.tenor.com/11zF7ic7UxIAAAAM/innovation-cat-error.gif"
    }

};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderpokemon(input.value.toLowerCase());




});

buttonPrev.addEventListener("click", () => {
    if (contadora > 1) {
        contadora -= 1;
        renderpokemon(contadora);

    }
});

buttonNext.addEventListener("click", () => {
    
        contadora += 1;
        renderpokemon(contadora);
