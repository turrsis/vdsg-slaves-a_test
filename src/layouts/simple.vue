<template>
    <div
        v-designer.layout.true
        class="simpleLayout"
    >
        <p>SimpleLayout</p>
        <header>
            <router-view name="header" />
        </header>
        <article>
            <router-view />
        </article>
    </div>
</template>

<style lang="less" scoped>
.simpleLayout {
    display: flex;  
    flex-flow: row wrap;
    text-align: center;
    > * {
        padding: 10px;
        flex: 1 100%;
    }
    article {
        text-align: left;
        //background: deepskyblue;
        flex: 3 0px;
    }
    header {
        //border: 2px gray solid;
    }
}
</style>