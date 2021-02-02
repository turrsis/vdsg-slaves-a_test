<template>
    <nav>
        <div class="navBlock">
            <span></span>
            <div>
                <router-link to="/">Home</router-link>
                <router-link to="/cummulative">Cummulative</router-link>
            </div>
        </div>
        <div class="navBlock">
            <span>components</span>
            <div>
                <router-link to="/components/Btn"> VBtn </router-link> |
                <router-link to="/components/Grid"> VGrid </router-link> |
                <router-link to="/components/Tabs"> VTabs </router-link> |
                <router-link to="/components/Carousel"> VCarousel </router-link> |
                <router-link to="/components/AppBar"> VAppBar </router-link> |
                <router-link to="/components/Card"> VCard </router-link> |
                <router-link to="/components/SimpleTable"> VSimpleTable </router-link>
            </div>
        </div>
    </nav>
</template>


<style lang="less" scoped>
.navBlock {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    span {
        display: inline-block;
        white-space: nowrap;
        text-align: right;
        padding-right: 20px;
        width: 100px;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 10px;
    }
}
</style>