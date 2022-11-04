<template>
    <div>
        <h1>Détails du pokémon : {{ id }}</h1>
        <div v-if="pokemon.sprites != undefined">
            <h3>{{ pokemon.name }}</h3>
            <img v-bind:src="pokemon.sprites.front_default">
        </div>
    </div>
</template>

<script>
import PokemonService from '../services/PokemonService'
    export default {
        name: 'PokemonDetails',
        props: {
            id: String
        },
        data() {
            return {
                pokemonService: new PokemonService,
                pokemon: {}
            }
        },
        mounted() {
            this.pokemonService.getPokemon(this.id).then(p => {
                this.pokemon = p
            })
        }
    }
</script>