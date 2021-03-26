<template>
    <div id="Page1-path:/" xxxxxxxxxx="Page1" style="padding-top:0px" v-designer.true="">
        <v-app-bar color="#43a047" dark="" shrink-on-scroll="" prominent="" src="https://picsum.photos/1920/1080?random">
            <template v-slot:img="{ props }">
                <v-img gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)" v-bind="props">
                </v-img>
            </template>
            <v-app-bar-nav-icon>
            </v-app-bar-nav-icon>
            <v-app-bar-title>
                Title
            </v-app-bar-title>
            <v-spacer>
            </v-spacer>
            <v-btn icon="">
                <v-icon>
                    mdi-magnify
                </v-icon>
            </v-btn>
            <v-btn icon="">
                <v-icon>
                    mdi-heart
                </v-icon>
            </v-btn>
            <v-btn icon="">
                <v-icon>
                    mdi-dots-vertical
                </v-icon>
            </v-btn>
        </v-app-bar>
        <v-sheet id="scrolling-techniques-5" class="overflow-y-auto" >
            <v-container class="grey lighten-5">
                <v-row dense="">
                    <v-col cols="8">
                        <v-carousel hide-delimiter-background="">
                            <v-carousel-item src="/dogs/img_01.png">
                                XXXXXXXXXXX
                            </v-carousel-item>
                            <v-carousel-item src="/dogs/img_02.png">
                            </v-carousel-item>
                            <v-carousel-item src="/dogs/img_03.png">
                            </v-carousel-item>
                        </v-carousel>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="pa-2" outlined="" tile="">
                            <v-card-text>
                                Слева мы видим карусель с собачкми !!!
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-card class="pa-2" outlined="" tile="">
                <v-card-title>
                    Title text
                </v-card-title>
                <v-card-subtitle>
                    SubTitle text
                </v-card-subtitle>
                <v-card-text>
                    Text Text Text Text Text Text Text Text Text Text
                </v-card-text>
                <v-card-actions>
                    <v-btn>
                        Action one
                    </v-btn>
                    <v-btn>
                        Action two
                    </v-btn>
                    <v-btn>
                        Action three
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-sheet>
        <v-tabs>
            <v-tab>
                <v-icon left="">
                    mdi-account
                </v-icon>
                Opt 1
            </v-tab>
            <v-tab>
                <v-icon left="">
                    mdi-lock
                </v-icon>
                <span>Opt 2</span>
            </v-tab>
            <v-tab>
                <v-icon left="">
                    mdi-access-point
                </v-icon>
                <div>
                    Opt 3
                </div>
            </v-tab>
            <v-tab-item>
                <v-sheet min-height="100px">
                    Opt 1
                </v-sheet>
            </v-tab-item>
            <v-tab-item>
                <p>
                    Opt 2
                </p>
            </v-tab-item>
            <v-tab-item>
                <p>
                    Opt 3
                </p>
            </v-tab-item>
        </v-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isAbsolute: false
        };
    }

};
</script>
