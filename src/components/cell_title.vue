<template>
    <div class="cell-title">
        <span class="text" v-html="title"></span>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {}
        },
        props: ['title']
    }
</script>

<style scoped>
    .cell-title {
        text-align: center;
        padding: 20px 0;
        background-color: #000;
    }
    .text {
        font-size: 16px;
        color: #fff;
        letter-spacing: 2px;
        font-weight: bold;
    }
</style>
