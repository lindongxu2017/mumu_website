<template>
    <div class="detail">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="banner">
                    <img :src="info.image">
                </div>
                <div class="content" v-html="info.content"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data () {
            return {
                info: {}
            }
        },
        mounted () {
            this.get_about_info()
        },
        methods: {
            get_about_info () {
                this.axios('/index.php?s=Home/Works/detail&id=' + this.$route.params.id).then(res => {
                    this.info = res.data.data
                })
            },
        }
    }
</script>

<style scoped>
    .banner img {
        display: block;
        width: 100%;
    }
    .detail {
        background-color: #fff;
    }
    .content {
        overflow: hidden;
    }
</style>
