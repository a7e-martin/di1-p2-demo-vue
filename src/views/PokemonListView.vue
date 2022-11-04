<template>
    <div>
        <PokemonDetails 
            v-for="p in pokemons" 
            v-bind:key="p.id"
            v-bind:id="p.id"
        >
            
        </PokemonDetails>

    </div>
</template>

<script>
    import PokemonService from '../services/PokemonService'
    import PokemonDetails from '../components/PokemonDetails.vue'

    export default {
        name: 'PokemonListView',
        components: {
            PokemonDetails
        },
        data() {
            return {
                pokemons: [],
                pokemonService: new PokemonService()
            }
        },
        methods: {
            fetchPokemons() {
                this.pokemonService.getPokemons().then(pokemons => {
                    this.pokemons = pokemons
                })
                .catch(reason => {
                    alert(reason)
                })
            }
        },
        mounted() {
            this.fetchPokemons()
        }
    }
</script>