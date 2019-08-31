<template>
    <div class="sectionFour">
        <el-carousel arrow="never" :interval="5000" height="645px">
            <el-carousel-item v-for="(item, index) in list" :key="index">
                <img :src="item.image">
                <div class="content">
                    <div class="text">
                        <div class="large" v-html="item.title">NAVIGATING NEW WAY FOR THE BRAND</div>
                        <div class="mid" v-html="item.desc">Rebranding</div>
                        <div class="check" @click="link(item.link)">
                            <span>查看案例</span>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'sectionFour',
        data () {
            return {}
        },
        methods: {
            link (url) {
                location.href = url
            }
        },
        props: ['list']
    }
</script>

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
        font-size: 12px;
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
</style>
