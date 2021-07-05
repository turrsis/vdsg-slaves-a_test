<template>
  <v-sheet v-designer.true>
    <v-card>
      <v-card-header>
        <v-card-header-text>
          <v-card-title>Общее</v-card-title>
        </v-card-header-text>
      </v-card-header>
      <v-card-text>
        В общем случае WebComponent невозможно детерминировать т.е. невозможно однозначно сопоставить исходный код с разметкой в браузере.
        Причина в том, что исходник преобразовывается в функции, которые собственно и генерируют браузерную разметку.
      </v-card-text>
      <v-card-text>
        Существует два подхода для описания компонента: декларативный в виде темплейта и императивный (jsx, React).
      </v-card-text>
      <v-card-text>
        В случае с декларативным подходом детерминирование становиться возможным.
        Разметка темплейта преобразовывается в виртуальное дерево по которому собственно и строится клиентская разметка.
        Т.к. в процессе сборки приложения темплейт "компилируется", возможно подключиться к "компилятору" и обогатить исходный темплейт информацией, 
        которая позволит однознаяно сопоставить исходный темплейт с клиентской разметкой и виртуальным деревом.
      </v-card-text>
      <v-card-text>
        Таким образом, на основании браузерной разметки, становиться возможно редактировать исходный код темплейта.
      </v-card-text>
    </v-card>
    <v-container fluid>
      <v-row class="text-left" dense>
        <v-col
          cols="12"
        >
          О верстке
        </v-col>
        <v-col
          cols="12"
        >
          Для WebBuilders одной из сложностей является CSS
        </v-col>
        <v-col
          cols="12"
        >
          С появлением MaterialDesign эта проблема не актуальна
        </v-col>
      </v-row>
      <v-row class="text-left" dense>
        <v-col cols="6">
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
        </v-col>
        <v-col cols="6">
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="less">
  .home {
    
  }
</style>
