async function sortearPokemon() {
    // Gera um ID aleatorio de 1 até 1025
    const idAleatorio = Math.floor(Math.random() * 1025) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

    try {
        // Requisição para a API
        const response = await fetch(url);
        
        if (!response.ok) throw new Error("Pokémon não encontrado");

        const pokemon = await response.json();

        // ATT dos elementos da tela
        document.getElementById('poke-name').innerText = pokemon.name.toUpperCase();
        
        // Pega a imagem oficial
        document.getElementById('poke-img').src = pokemon.sprites.other['official-artwork'].front_default;

        // Pega a tipagem do pokemon
        const tipos = pokemon.types.map(info => info.type.name).join(' / ');
        document.getElementById('poke-type').innerText = "Tipo: " + tipos;

    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        alert("Ops! Ocorreu um erro ao buscar o Pokémon.");
    }
}