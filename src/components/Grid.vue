<template>
    <div id="Grid-path:/" xxxxxxxxxx="Grid" v-designer.true="">
        <v-container class="grey lighten-5">
            <v-row dense="">
                <v-col cols="12" sm="3">
                    <v-card class="pa-2" outlined="" tile="">
                        One of three columns
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2" outlined="" tile="">
                        Two of three columns
                    </v-card>
                </v-col>
                <v-col cols="12" sm="3">
                    <v-card class="pa-2" outlined="" tile="">
                        Three of three columns
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <hr>
        <v-container class="grey lighten-5">
            <v-row dense="">
                <v-card class="pa-2" outlined="" tile="">
                    Card 1 direct in v-row
                </v-card>
                <v-card class="pa-2" outlined="" tile="">
                    Card 2 direct in v-row
                </v-card>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }

};
</script>
