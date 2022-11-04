<template>
    <h1>Demo !</h1>
    <input type="text" v-model="firstName">
    Bonjour {{ firstName }}

    <button 
        v-if="firstName.length > 3"
        @click="login"
    >
        Valider
    </button>
</template>

<script>

export default {
    name: 'DemoView',
    data() {
        return {
            firstName: ''
        }
    },
    // Hook de cycle de vie, sera déclenché lorsque le composant
    // est 'injecté' / 'monté' sur l'HTML / DOM
    mounted() {
        this.test = "Hello"
    },
    methods: {
        login() {
            alert('Bonjour ' + this.firstName)
        }
    }
}

</script>