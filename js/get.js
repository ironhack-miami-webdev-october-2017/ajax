$(document).ready(() => {

    $(".showPokemon").click(() => {
        // charizard 6
        // pikachu 25
        // jigglypuff 39

        // Feraligatr
        getPokemon(160);
    });

    $(".pokeSearch").submit(() => {
        // prevent the submission from refreshing the page
        event.preventDefault();

        const number = $("#poke-number").val();

        getPokemon(number);
    });

}); // $(document).ready()



function getPokemon (pokemonNumber) {

    $(".pokemonInfo").html(`<h2> Loading... </h2>`);

    $.ajax({
        method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`,
    })
      .then((apiResults) => {
          console.log("SUCCESS!");
          console.log(apiResults);

          const pokeDom = $(`
              <h2> ${apiResults.name} </h2>
              <p> ID: ${apiResults.id} </p>
              <img src="${apiResults.sprites.front_default}" />
          `);

          $(".pokemonInfo").html(pokeDom);
      })
      .catch((err) => {
          console.log("ERROR!");
          console.log(err);
      });

} // getPokemon()
