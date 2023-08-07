<template>
    <v-container v-designer.true :fluid="true" class="pa-0">
        <v-row :dense="true">
            <v-col class="bg-grey-lighten-5" md="2" :cols="1" :sm="2" :lg="2" :xl="3"/>
            <v-col md="8" :cols="10" :sm="8" :lg="8" :xl="6">
                <v-app :full-height="true">
                    <v-app-bar flat dark shrink-on-scroll :elevation="4" rounded="lg" :absolute="true">
                        <v-app-bar-title>
                            Site Builder for any skills
                        </v-app-bar-title>
                        <v-btn class="rounded-pill" variant="elevated" density="comfortable" @click="onContactsClick">
                            Contacts
                        </v-btn>
                        <v-btn class="rounded-pill" variant="elevated" density="comfortable" to="/about">
                            About as..
                        </v-btn>
                    </v-app-bar>
                    <v-main>
                        <router-view class="mt-2"/>
                    </v-main>
                    <v-footer :elevation="0">
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
            <v-col class="bg-grey-lighten-5" md="2" :cols="1" :sm="2" :lg="2" :xl="3"/>
        </v-row>
    </v-container>
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
        onContactsClick() {
            console.log('Contacts button clicking !!!');
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
