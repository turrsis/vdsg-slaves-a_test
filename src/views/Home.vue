<template>
    <v-sheet v-designer.true>
        <v-container :fluid="true">
            <v-row :dense="true">
                <v-col cols="12" :order="2" :sm="12" md="6" :order-sm="2" order-md="1">
                    <v-row :no-gutters="true" style="min-height:100%">
                        <v-col :cols="12">
                            <v-list density="compact">
                                <VListSubheader>
                                    three in one
                                </VListSubheader>
                                <VListItem class="text-left" prepend-icon="mdi mdi-check">
                                    No Code - no design or coding skills
                                </VListItem>
                                <v-list-item class="text-left" prepend-icon="mdi mdi-check">
                                    Low Code - for power users 
                                </v-list-item>
                                <v-list-item class="text-left" prepend-icon="mdi mdi-check">
                                    Full Code - for programmers
                                </v-list-item>
                            </v-list>
                        </v-col>
                        <v-col :cols="12">
                            <v-btn class="rounded-xl bg-blue-grey-lighten-3" size="small">
                                Create a website
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" :order="1" :sm="12" md="6" :order-sm="1" order-md="2">
                    <VImg src="shortDemo2.gif"></VImg>
                </v-col>
            </v-row>
        </v-container>
        <v-sheet rounded="lg" class="mb-2" :elevation="4">
            <VContainer :fluid="true">
                <VRow>
                    <VCol :cols="4">
                        <VImg src="home_page/pic_01.png"></VImg>
                    </VCol>
                    <VCol class="text-right pa-0 rounded-t-lg rounded-b-lg" :cols="8">
                        <v-list class="text-left pa-0 ma-0" :lines="false" variant="flat" density="compact">
                            <v-list-item prepend-icon="mdi mdi-check">
                                Create cool websites without design or programming skills
                            </v-list-item>
                            <v-list-item prepend-icon="mdi mdi-check">
                                Hand over your site to a professional programmer for fine-tuning
                            </v-list-item>
                            <v-list-item prepend-icon="mdi mdi-check">
                                No Vendor Lock - download site source codes to run on your own server
                            </v-list-item>
                        </v-list>
                    </VCol>
                </VRow>
                <VRow>
                    <VCol class="text-left pa-0" :cols="9">
                        <v-list class="text-left pa-0 ma-0" :lines="false" variant="flat" density="compact">
                            <v-list-item prepend-icon="mdi mdi-check">
                                use an IDE to develop a website 
                            </v-list-item>
                            <v-list-item prepend-icon="mdi mdi-check">
                                full control over the generated code, which allows you to make changes at any time and quickly fix errors if necessary
                            </v-list-item>
                        </v-list>
                    </VCol>
                    <VCol :cols="3">
                        <VImg src="home_page/pic_IDE.png"></VImg>
                    </VCol>
                </VRow>
                <VRow>
                    <VCol :cols="3">
                        <VImg aspect-ratio="1.77" src="home_page/pic_adaptive_design.png"></VImg>
                    </VCol>
                    <VCol class="text-left pa-0" :cols="9">
                        <v-list class="text-left pa-0 ma-0" :lines="false" variant="flat" density="compact">
                            <v-list-item prepend-icon="mdi mdi-check">
                                responsive website design
                            </v-list-item>
                            <v-list-item prepend-icon="mdi mdi-check">
                                powered by VueJs
                            </v-list-item>
                            <v-list-item prepend-icon="mdi mdi-check">
                                using the popular Vuetify library
                            </v-list-item>
                        </v-list>
                    </VCol>
                </VRow>
            </VContainer>
        </v-sheet>
        <v-sheet rounded="lg" class="mb-1 mt-2" :elevation="4">
            <v-container :fluid="true">
                <v-row :dense="true">
                    <v-col :cols="12">
                        Pricing
                    </v-col>
                </v-row>
                <v-row :dense="true">
                    <v-col :cols="4">
                        Free
                    </v-col>
                    <v-col :cols="4">
                        Programmers
                    </v-col>
                    <v-col :cols="4">
                        Unlimited
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-sheet>
</template>
<script>
export default {
    name: 'Home',
    components: {},
    data: () => ({}),
    methods: {
        onClick() {
            alert('Hello !');
        }

    }
};
</script>
<style lang="scss">
.redText {
    color: red;
}
</style>
