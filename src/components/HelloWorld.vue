<template>
  <v-container v-designer.true style="border: 2px solid red;">
    <v-row class="text-center" style="border: 2px dotted blue; margin: 10px;">
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Important Links
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from '../assets/logo.svg'

export default {
  name: 'HelloWorld',
props: {
        pBoolean: {
            type: Boolean,
            default: false,
        },
        'pbkt-0': {
            type: Boolean,
            default: false,
        },
        'pbkt-1': {
            type: Boolean,
            default: false,
        },
        'pbkt-2': {
            type: Boolean,
            default: false,
        },
        pString: {
            type: String,
            default: '',
        },
        pStringKeyToggle: {
            type: String,
            default: '',
        },
        pStringKeyOptions: {
            type: String,
            default: '',
        },
        pNumberKey: {
            type: Number,
            default: 11,
        },
        pNumberStringKey: {
            type: [Number, String],
            default: 22,
        },
        pNumberKeyUnits: {
            type: [Number, String],
            default: 33,
        },
        pBooleanStringKey: {
            type: [Boolean, String],
            default: 'true',
        }
    },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    logo,
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
