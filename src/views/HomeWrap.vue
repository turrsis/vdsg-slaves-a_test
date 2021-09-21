<template>
    <div class="HomeWrap" v-designer.true>
        <h1>
            xxxxxxxxxxxxxx
        </h1>
        <!-- <v-card>
        <h2>
        <Home />
        </h2>
        </v-card> -->
        <v-sheet>
            <h2>
                <Home/>
            </h2>
        </v-sheet>
    </div>
</template>
<script>
import Home from './Home.vue';
export default {
    name: 'HomeWrap',
    components: {
        Home
    }
};
</script>
