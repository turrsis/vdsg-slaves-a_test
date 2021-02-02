<template>
    <v-app id="app">
        <AppLayout loading="loading" />
    </v-app>
</template>

<script>
import AppLayout from './AppLayout.vue'
export default {
    name: 'App',
    components: { AppLayout },
    data() {
        return {
            foo: true,
        }
    },
}
</script>
<style>
</style>
