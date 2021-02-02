<template>
    <div
        v-designer.layout.true
        class="defaultLayout"
    >
        <p>DefaultLayout</p>
        <header>
            <router-view name="header" />
        </header>
        <aside>
            <router-view name="left" />
        </aside>
        <article>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </article>
        <footer>
            <router-view name="footer" />
        </footer>
    </div>
</template>

<style lang="less" scoped>
.defaultLayout {
    display: flex;  
    flex-flow: row wrap;
    text-align: center;
    > * {
        padding: 10px;
        flex: 1 100%;
    }
    aside {
        flex: 1 auto;
        //background: gold;
    }
    article {
        text-align: left;
        //background: deepskyblue;
        flex: 3 0px;
    }
    header {
        border: 2px gray solid;
    }
    footer {
        //background: lightgreen;
    }
}
</style>