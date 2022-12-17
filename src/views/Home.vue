<template>
    <v-sheet v-designer.true>
        <v-card>
            <v-card-title style="width: 500px;position:relative; left: -200px;">
                *0123456789*Общее*0123456789* BIND:
                {{ homeStr }}
            </v-card-title>
            <v-card-text>
                <p>
                    В общем случае WebComponent невозможно детерминировать т.е. невозможно однозначно сопоставить исходный код с разметкой в браузере.
                    Причина в том, что исходник преобразовывается в функции, которые собственно и генерируют браузерную разметку.
                </p>
            </v-card-text>
            <v-card-text class="redText">
                Существует два подхода для описания компонента: декларативный в виде темплейта и императивный (jsx, React).
            </v-card-text>
            <v-card-text>
                В случае с декларативным подходом детерминирование становиться возможным.
                Разметка темплейта преобразовывается в виртуальное дерево по которому собственно и строится клиентская разметка.
                Т.к. в процессе сборки приложения темплейт "компилируется", возможно подключиться к "компилятору" и обогатить
                исходный темплейт информацией, которая позволит однознаяно сопоставить исходный темплейт с клиентской разметкой
                и виртуальным деревом.
            </v-card-text>
            <v-card-text>
                Таким образом, на основании браузерной разметки, становиться возможно редактировать исходный код темплейта.
            </v-card-text>
        </v-card>
        <v-card>
            <v-card-title>
                F.A.Q.
            </v-card-title>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel title="Поддерживается ли Серверный рендеринг?" text="Да, поддерживается"></v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        xxx
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        ZZZ
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
        <v-sheet>
            <v-container fluid>
                <v-row class="text-left" dense>
                    <v-col>
                        О верстке
                    </v-col>
                    <v-col cols="12">
                        Для WebBuilders одной из сложностей является CSS
                    </v-col>
                    <v-col cols="12">
                        С появлением MaterialDesign эта проблема не актуальна
                    </v-col>
                </v-row>
                <v-row class="text-left" dense>
                    <v-col :cols="4">
                        <v-img :aspect-ratio="16/9" src="dogs/dog_1.png"></v-img>
                    </v-col>
                    <v-col :cols="4">
                        <v-img :aspect-ratio="16/9" src="dogs/dog_2.bmp"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        <v-carousel :continuous="false" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-square" height="300">
            <v-carousel-item src="dogs/dog_0.png" cover></v-carousel-item>
            <v-carousel-item src="dogs/dog_1.png" cover>
                <div class="d-flex fill-height justify-start align-start">
                    Second Slide in Div
                </div>
            </v-carousel-item>
            <v-carousel-item>
                <v-sheet color="green" height="100%" tile>
                    <div class="d-flex fill-height justify-center align-center text-h2">
                        Third Slide in v-sheet
                    </div>
                </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
                <v-card color="blue" height="100%" tile>
                    <div class="d-flex fill-height justify-center align-center text-h2">
                        Fourth Slide in v-card
                    </div>
                </v-card>
            </v-carousel-item>
        </v-carousel>
        <v-img :aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/>
        <FContainer/>
    </v-sheet>
</template>
<script>
import FContainer from '@/components/FContainer.vue';
export default {
    name: 'Home',
    components: {
        FContainer
    },
    data: () => ({
        colsNum_01: 1,
        colsNum_02: '2',
        colsNum_03: '3',
        colsNum_04: '4',
        colsNum_05: '5',
        colsNum_06: '6',
        colsNum_07: '7',
        colsNum_08: '8',
        colsNum_09: '9',
        colsNum_10: '10',
        colsNum_11: '11',
        colsNum_12: '12',
        homeStr: '***home***',
        homeNum: 777,
        homeBool: true,
        homeObj: {
            'ho-str': '--ho-str--',
            'ho-bool': true,
            'ho-num': 888,
            'ho-arr': ['a', 'b', 'c']
        },
        homeArr: ['ha-1', true, 321, {
            'ha-ho-str': '--ha-ho-str--',
            'ha-ho-bool': true,
            'ha-ho-num': 999
        }]
    })
};
</script>
<style lang="scss">
.redText {
    color: red;
}
</style>
<customBlock>
    XXXXXXXXXXXX
</customBlock>
<customBlock2>
    ZZZZZZZZZZZ
</customBlock2>
