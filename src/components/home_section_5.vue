<template>
    <div class="sectionFive">
        <el-row>
            <el-col :span="12" v-for="(item, index) in list" :key="index">
                <img class="img" :src="item.image">
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'sectionFive',
        data () {
            return {
                list: []
            }
        },
        mounted () {
            this.get_list()
        },
        methods: {
            get_list () {
                this.axios('/index.php?s=Home/Works/index&is_top=1').then(res => {
                    this.list = res.data.data
                })
            },
        }
    }
</script>

<style scoped>
    .img {
        display: block;
        width: 100%;
    }
</style>
