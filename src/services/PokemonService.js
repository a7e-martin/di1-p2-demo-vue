import axios from 'axios';

export default class PokemonService {
    getPokemons() {
        return new Promise((resolve, reject) => {
            // Code asynchrone
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then(response => {
                // 'resolve' déclenche le '.then()' du code qui aura appelé la promesse.

                if (response.status != 200) {
                    reject("erreur")
                }

                let pokemons = response
                    .data
                    .results
                    .map(p => {
                        // On splitte l'url sur les '/'
                        let urlFragments = p.url.split('/')
                        let id = urlFragments[urlFragments.length - 2]

                        return {
                            name: p.name,
                            id: id
                        }
                    })

                resolve(pokemons)
            })
        })
    }

    // Fonctionnement async / await.
    // Même résultat qu'en mode promesse.
    async getPokemon(id) {
        let httpResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)

        // Si le code HTTP n'est pas 200, on jette une exception
        if (httpResponse.status != 200) {
            throw 'Erreur !'
        }

        return httpResponse.data
    }
}