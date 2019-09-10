<template>
    <div class="strategy">
        <div class="swiper-container" :style="{height: clientHeight + 'px'}">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in img" :key="index">
                    <div class="banner">
                        <img :src="item.image || '@/assets/timg.jpg'">
                        <div class="img-mask"></div>
                        <div class="title" v-html="item.title">ACROSS&nbsp&nbspTODAY'S&nbsp&nbspVISION&nbsp&nbspAND&nbsp&nbspVISION&nbsp&nbspOF&nbsp&nbspTHE&nbsp&nbspCENTURY.</div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

        <div class="list">
            <div class="items" v-for="(item, index) in list" :key="index">
                <div class="content">
                    <el-row type="flex" class="content-wrapper">
                        <el-col :span="12" v-if="index%2 == 1">
                            <img class="bg-img" :src="item.image">
                        </el-col>
                        <el-col :span="12" class="text">
                            <div class="subtitle" v-html="item.desc_1"></div>
                            <div class="title" v-html="item.title"></div>
                            <div class="intro" v-html="item.desc_2"></div>
                            <div class="link" v-if="item.link" @click="gorouter(item.link)">了解更多</div>
                        </el-col>
                        <el-col :span="12" v-if="index%2 == 0">
                            <img class="bg-img" :src="item.image">
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'strategy',
        data () {
            return {
                // type 1文字 2图片
                img: '',
                list: [],
                clientHeight: 862
            }
        },
        mounted () {
            this.clientHeight = window.innerHeight - 75
            this.get_banner()
            this.get_list()
        },
        methods: {
            get_banner () {
                this.axios('/index.php?s=Home/Index/ads&position=1').then(res => {
                    this.img = res.data.data || []
                    this.$nextTick(() => {
                        var mySwiper = new Swiper ('.swiper-container', {
                            autoHeight: true, //高度随内容变化
                            autoplay:true,//等同于以下设置
                            // 如果需要分页器
                            pagination: {
                                el: '.swiper-pagination',
                            },
                        })
                    })
                })
            },
            get_list () {
                this.axios('/index.php?s=Home/Strategy/index').then(res => {
                    this.list = res.data.data || []
                })
            },
            gorouter (url) {
                location.href = url.indexOf('http') > -1 ? url : 'http://' + url
            }
        }
    }
</script>

<style type="text/css">
    .strategy .swiper-pagination-bullet-active {
        background-color: #fff!important;
    }
    .strategy .swiper-pagination-bullet {
        width: 25px;
        height: 3px;
        border-radius: 1px;
        opacity: 1;
        background-color: #000;
    }
    .strategy .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 7px;
    }
    .strategy .swiper-slide {
        position: relative;
    }
</style>

<style scoped>
    .strategy {
        padding-top: 75px;
    }
    .banner {
        position: relative;
    }
    .banner img {
        width: 100%;
        display: block;
    }
    .banner .title {
        position: absolute;
        width: 80%;
        left: 10%;
        top: 40%;
        font-size: 64px;
        color: #fff;
        /*letter-spacing: 2px;*/
        text-align: center;
    }
    .list {
        font-size: 0;
    }
    .list .items {
        padding-bottom: 22.2222%;
        box-sizing: border-box;
        position: relative;
    }
    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #fff;
    }
    .content-wrapper {
        height: 100%;
    }
    .text {
        height: 100%;
        padding: 5%;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        -webkit-justify-content: center;
    }
    .bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .subtitle {
        font-size: 16px;
        margin-bottom: 20px;
    }
    .title {
        font-size: 24px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .intro {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 20px;
    }
    .link {
        font-size: 12px;
        color: #666;
        user-select: none;
        cursor: pointer;
        width: 70px;
    }
    .img-mask {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
    }
</style>
