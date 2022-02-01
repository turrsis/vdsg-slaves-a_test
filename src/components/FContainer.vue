<template>
    <v-container style="border: 2px solid red;">
        <v-row class="text-center" style="border: 1px dotted blue; margin: 2px;" justify="space-around">
            <v-col cols="4">
                {{ text1 }}
            </v-col>
            <v-col cols="4">
                {{ text2 }}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'FContainer',
    props: {
        text1: {
            type: String,
            default: 'column 1'
        },
        text2: {
            type: String,
            default: 'column 2'
        }
    }
};
</script>
