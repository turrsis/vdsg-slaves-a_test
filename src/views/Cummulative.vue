<template>
    <div id="Cummulative-path:/" v-designer.true="" xxxxxxxxxx="Cummulative">
        <v-toolbar>
            <v-toolbar-title>Title</v-toolbar-title>
            <div class="flex-grow-1" />
            <v-toolbar-items>
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on">Link 0</v-btn>
                    </template>
                    <span>Desktop</span>
                </v-tooltip>
                <v-btn>Link 1</v-btn>
                <v-btn text="">Link 2</v-btn>
                <v-btn text="">Link 3</v-btn>
            </v-toolbar-items>
            <template>
                <v-btn icon="">
                    <v-icon>mdi-export-variant</v-icon>
                </v-btn>
                <v-btn icon="">
                    <v-icon>mdi-delete-circle</v-icon>
                </v-btn>
                <v-btn icon="">
                    <v-icon>mdi-plus-circle</v-icon>
                </v-btn>
            </template>
        </v-toolbar>
        <v-sheet v-designer.true elevation="5">
            <v-row>
                <v-col cols="12" sm="12" md="3" lg="5" xl="5">
                    <v-row justify="space-between" style="height:100%">
                        <v-col cols="2" sm="4" md="12" lg="12" xl="12">
                            text1
                        </v-col>
                        <v-col cols="5" sm="4" md="12" lg="12" xl="12">
                            <v-icon>mdi-clock-outline</v-icon>
                        </v-col>
                        <v-col cols="5" sm="4" md="12" lg="12" xl="12">
                            <v-icon color="blue">mdi-gender-male</v-icon>
                            <v-icon color="purple">mdi-gender-female</v-icon>
                            (<v-icon>mdi-gender-male-female</v-icon>)
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="9" lg="7" xl="7">
                    <span>t<b>ex</b>t2</span>
                </v-col>
            </v-row>
        </v-sheet>
        <v-card flat>
            <v-card-text>
                <p>v-card-text1.</p>
                <p>v-card-text2.</p>
                <p class="mb-0">v-card-text3.</p>
            </v-card-text>
            <v-card-text>
                <p>T1</p>
                <div>T2</div>
                <span><div>T3</div></span>
                <p>T4</p>
            </v-card-text>
            <v-card-text>
                <p>T1<span>T2</span></p>
                <p class="mb-0">T4</p>
            </v-card-text>
        </v-card>
        <v-card flat>
            <p>v-card-text1.</p>
            <p>v-card-text2.</p>
            <p class="mb-0">v-card-text3.</p>
        </v-card>
        <v-card max-width="375" class="mx-auto">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark="">
                <v-row class="fill-height">
                    <v-card-title>
                        <v-btn dark icon>
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-spacer />
                        <v-btn dark icon class="mr-4">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn dark icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-spacer />
                    <v-card-title class="white--text pl-12 pt-12">
                        <div class="display-1 pl-12 pt-12">Ali Conners</div>
                    </v-card-title>
                </v-row>
            </v-img>
            <v-list two-line>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-phone</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>(650) 555-1234</v-list-item-title>
                        <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action />
                    <v-list-item-content>
                        <v-list-item-title>(323) 555-6789</v-list-item-title>
                        <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                </v-list-item>
                <v-divider inset />
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-email</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>aliconnors@example.com</v-list-item-title>
                        <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action />
                    <v-list-item-content>
                        <v-list-item-title>ali_connors@example.com</v-list-item-title>
                        <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset />
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>1400 Main Street</v-list-item-title>
                        <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
        <v-expansion-panels>
            <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
            >
                <v-expansion-panel-header>Item</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-simple-table dark>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Name</th>
                        <th class="text-left">Calories</th>
                        <th class="text-left">qqq</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td />
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-bottom-navigation v-model="bottomNav">
            <v-btn value="recent">
                <span>Recent</span>
                <v-icon>mdi-history</v-icon>
            </v-btn>
            <v-btn value="favorites">
                <span>Favorites</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn value="nearby">
                <span>Nearby</span>
                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
            <v-menu top offset-y>
                <template v-slot:activator="{ on: menu }">
                    <v-tooltip right>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-btn
                                id="qwerty0"
                                style="background-color:lightgray"
                                icon
                                v-on="{ ...menu, ...tooltip }"
                            >
                                <v-icon>mdi-palette</v-icon>
                            </v-btn>
                        </template>
                        <span>highlighter color</span>
                    </v-tooltip>
                </template>

                <v-btn-toggle
                    group
                    mandatory
                    style="background-color:lightgray"
                >
                    <v-btn icon value="white" class="mx-0">
                        <v-icon color="white">mdi-palette</v-icon>
                    </v-btn>
                    <v-btn icon value="blue" class="mx-0">
                        <v-icon color="#1A237E">mdi-palette</v-icon>
                    </v-btn>
                    <v-btn icon value="red" class="mx-0">
                        <v-icon color="#D50000">mdi-palette</v-icon>
                    </v-btn>
                    <v-btn icon value="black" class="mx-0">
                        <v-icon color="black">mdi-palette</v-icon>
                    </v-btn>
                </v-btn-toggle>
            </v-menu>
        </v-bottom-navigation>
        <v-footer>
            <v-tooltip left>
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Left</v-btn>
                </template>
                <span>Left tooltip</span>
            </v-tooltip>

            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Top</v-btn>
                </template>
                <span>Top tooltip</span>
            </v-tooltip>

            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on">Bottom</v-btn>
                </template>
                <span>Bottom tooltip</span>
            </v-tooltip>

            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <v-btn id="qwerty1" color="primary" dark v-on="on">Right</v-btn>
                </template>
                <span>Right tooltip</span>
            </v-tooltip>
        </v-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bottomNav: 'recent',
            desserts: [{
                name: 'Frozen Yogurt',
                calories: 159
            }, {
                name: 'Ice cream sandwich',
                calories: 237
            }, {
                name: 'Eclair',
                calories: 262
            }, {
                name: 'KitKat4',
                calories: 518
            }]
        }
    }

}
</script>

<style lang="less" scoped>

</style>
