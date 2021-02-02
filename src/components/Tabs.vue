<template>
    <div id="Tabs-path:/" xxxxxxxxxx="Tabs" v-designer.true="">
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
            isRounded: true,
            bindingText1: "==bindingText1==",
            bindingIcon1: "mdi-numeric-1-box-multiple",
            bindingText2: "==bindingText2==",
            bindingIcon2: "mdi-numeric-2-box-multiple"
        };
    },
};
</script>
<style lang="less" scoped>
.test-tab-item-active-class {
    background-color: red;
}
</style>
