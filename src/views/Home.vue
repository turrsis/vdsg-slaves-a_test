<template>
    <v-sheet v-designer.true>
        <v-card>
            <v-card-header>
                <v-card-header-text>
                    <v-card-title style="width: 500px;position:relative; left: -200px;">
                        *0123456789*Общее*0123456789* BIND:
                        {{ homeStr }}
                    </v-card-title>
                </v-card-header-text>
            </v-card-header>
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
        <v-container fluid>
            <v-row class="text-left" dense>
                <v-col :cols="colsNum">
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
                <v-col cols="6">
                    xxxxxxxxxxxxxxxxxxxx
                    <!-- <v-img
                    :aspect-ratio="16/9"
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    ></v-img> -->
                </v-col>
                <v-col cols="6">
                    yyyyyyyyyyyyyyyyyyyyyy
                    <!-- <v-img
                    :aspect-ratio="16/9"
                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    ></v-img> -->
                </v-col>
            </v-row>
        </v-container>
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
        colsNum: '12',
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
