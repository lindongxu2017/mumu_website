<template>
    <div class="sectionSix">
        <img :src="item.logo" v-for="(item, index) in list" :key="index">
    </div>
</template>

<script>
    export default {
        name: 'sectionSix',
        data () {
            return {}
        },
        props: ['list']
    }
</script>

<style scoped>
    .sectionSix {
        background-color: #1A1A1C;
        padding: 70px 100px;
    }
    .sectionSix img {
        width: 100%;
        display: block;
    }
</style>
