<template>
    <div class="sectionFour">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in list" :key="index">
                    <img class="slide-img" :src="item.image">
                    <div class="img-mask"></div>
                    <div class="content">
                        <div class="text">
                            <div class="large" v-html="item.title">NAVIGATING NEW WAY FOR THE BRAND</div>
                            <div class="mid" v-html="item.desc">Rebranding</div>
                            <div class="check" @click="link(item.link)">
                                <span>查看案例</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        name: 'sectionFour',
        data () {
            return {}
        },
        methods: {
            link (url) {
                location.href = url.indexOf('http') > -1 ? url : 'http://' + url
            }
        },
        mounted () {
            setTimeout(() => {
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
            }, 1000)
        },
        props: ['list']
    }
</script>

<style type="text/css">
    .sectionFour .swiper-pagination-bullet-active {
        background-color: #fff!important;
    }
    .sectionFour .swiper-pagination-bullet {
        width: 25px;
        height: 3px;
        border-radius: 1px;
        opacity: 1;
        background-color: #000;
    }
    .sectionFour .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 7px;
    }
    .sectionFour .swiper-slide {
        position: relative;
    }
</style>

<style scoped>
    .content {
        position: absolute;
        width: 540px;
        height: 100%;
        right: 12.6%;
        top: 35%;
        color: #fff;
    }
    .text {
        text-align: center;
    }
    .large {
        font-size: 36px;
        letter-spacing: 2px;
    }
    .mid {
        margin: 25px 0 20px;
        font-size: 18px;
        letter-spacing: 1px;
    }
    .check span {
        font-size: 14px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
    }
    .check span:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        bottom: -2px;
        left: 25%;
        background-color: #fff;
    }
    .slide-img {
        width: 100%;
        height: auto;
        display: block;
        position: relative;
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
