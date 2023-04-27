<template>
    <v-row v-designer.true :dense="true">
        <v-col cols="1"/>
        <v-col cols="10">
            <v-app :full-height="true">
                <v-app-bar absolute flat dark :border="true" shrink-on-scroll src="https://picsum.photos/1920/1080?random" scroll-target="#scrolling-techniques-2">
                    <template v-slot:img="{ props }">
                        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
                    </template>
                    <v-app-bar-nav-icon icon="mdi mdi-dots-vertical"></v-app-bar-nav-icon>
                    <v-app-bar-title>
                        Site Creator
                    </v-app-bar-title>
                    <v-spacer></v-spacer>
                    <v-btn class="rounded-pill" variant="outlined">
                        About as..
                    </v-btn>
                    <v-btn class="rounded-pill" variant="outlined">
                        Contacts
                    </v-btn>
                </v-app-bar>
                <v-main>
                    <router-view class="mt-2"/>
                </v-main>
                <v-footer :elevation="2">
                    <v-col class="text-center" cols="12">
                        {{ new Date().getFullYear() }}
                        —
                        <strong>
                            Turrsis
                        </strong>
                    </v-col>
                </v-footer>
            </v-app>
        </v-col>
        <v-col cols="1"/>
    </v-row>
</template>
<script>
export default {
    name: 'App',
    data: () => ({
        appStr: '***app***',
        appNum: 222,
        appBool: true,
        appObj: {
            'ao_Str-1': 'v-aa1',
            'ao_Num': 333,
            'ao_Bool': true
        },
        appArr: ['aa-1', 'aa-2']
    }),
    methods: {
        method_1() {
            console.log('method_1');
        },

        method_2(p1, p2) {
            console.log('method_2', p1, p2);
        },

        method_3(e) {
            console.log('method_3', e);
        }

    }
};
</script>
<customBlock77>
    XXXXXXXXXXXX
</customBlock77>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //padding: 50px;
}

#nav {
  //padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<customBlock88>
    ZZZZZZZZZZZZ
</customBlock88>
