<template>
    <div class="sectionFive">
        <!-- <el-row>
            <el-col :span="12" v-for="(item, index) in list" :key="index">
                <img class="img" :src="item.image">
            </el-col>
        </el-row> -->
        <div class="product-list">
            <div class="item" v-for="(item, index) in list" @click="godetail(item.id)">
                <img :src="item.image">
                <div class="text-wrapper">
                    <div class="title" v-html="item.title_en"></div>
                    <div class="subtitle" v-html="item.title_ch"></div>
                </div>
            </div>
        </div>
        <el-row type="flex">
            <el-col :span="12">
                <div class="about-us">
                    <div class="about-us-wrapper">
                        <div class="area-title">
                            <span v-html="info.wrok_title_en">Latest News</span>
                        </div>
                        <div class="cn" v-html="info.wrok_title">我们的优势</div>
                        <div class="subtitle" v-html="info.work_desc">海外精英团队、40+品牌服务经验、A+传播资源</div>
                        <div class="check">
                            <span @click="golist">查看详情</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="about-us">
                    <img class="img-content" :src="info.work_image ? info.work_image : '@/assets/anli.jpg'">
                </div>
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
        props: ['info'],
        mounted () {
            this.get_list()
        },
        methods: {
            get_list () {
                this.axios('/index.php?s=Home/Works/index&is_top=1').then(res => {
                    this.list = res.data.data
                })
            },
            godetail (id) {
                this.$router.push({name: 'detail', params: {id: id}})
            },
            golist () {
                this.$router.push({name: 'about'})
            }
        }
    }
</script>

<style scoped>
    .img {
        display: block;
        width: 100%;
    }
    .product-list {
        font-size: 0;
    }
    .product-list .item {
        display: inline-block;
        width: 50%;
        padding-bottom: 29.57%;
        position: relative;
    }
    .product-list .item img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .text-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
    }
    .text-wrapper {
        color: #fff;
        background-color: rgb(0,0,0,0.4);
        transition: all 0.3s ease;
    }
    .text-wrapper:hover {
        background-color: rgb(0,0,0,0.2);
    }
    /*.text-wrapper:hover .title,
    .text-wrapper:hover .subtitle {
        display: none;
    }*/
    .text-wrapper .title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 15px;
        letter-spacing: 2px;
    }
    .subtitle {
        font-size: 20px;
        margin-bottom: 60px;
    }
    .about-us {
        font-size: 16px;
        padding-bottom: 59.14%;
        position: relative;
    }
    .about-us img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .about-us-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #e4e4e4;
    }
    .img-content {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .area-title {
        margin-bottom: 35px;
    }
    .area-title span {
        display: inline-block;
        padding: 3px 15px; 
        background-color: #000;
        color: #fff;
        font-size: 34px;
    }
    .cn {
        font-size: 27px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    .check span {
        font-size: 14px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        user-select: none;
    }
    .check span:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        bottom: -5px;
        left: 25%;
        background-color: #000;
    }
</style>
