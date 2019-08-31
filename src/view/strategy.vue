<template>
    <div class="strategy">
        <div class="banner">
            <img :src="img.image || '@/assets/timg.jpg'">
            <!-- <div class="title">ACROSS&nbsp&nbspTODAY'S&nbsp&nbspVISION&nbsp&nbspAND&nbsp&nbspVISION&nbsp&nbspOF&nbsp&nbspTHE&nbsp&nbspCENTURY.</div> -->
        </div>
        <div class="list">
            <div class="items" v-for="(item, index) in list" :key="index">
                <div class="content text" :style="{'backgroundImage': 'url('+item.image+')'}" >
                    <div class="subtitle" v-html="item.desc_1"></div>
                    <div class="title" v-html="item.title"></div>
                    <div class="intro" v-html="item.desc_2"></div>
                    <!-- <div class="link">点击链接</div> -->
                </div>
                <!-- <div class="content">
                    <img :src="item.image">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    var intro = '我们认为构思新事物需要大量的经验，因此我们将来自不同文化，方法，专业概况和背景的观点聚集在一起。在2019年期间，EOL 将开发其面向未来的会谈，趋势和见解的知识视频点播平台'
    export default {
        name: 'strategy',
        data () {
            return {
                // type 1文字 2图片
                img: '',
                list: []
            }
        },
        mounted () {
            this.get_banner()
            this.get_list()
        },
        methods: {
            get_banner () {
                this.axios('/index.php?s=Home/Index/ads&position=1').then(res => {
                    this.img = res.data.data[0] || {}
                })
            },
            get_list () {
                this.axios('/index.php?s=Home/Strategy/index').then(res => {
                    this.list = res.data.data || []
                })
            },
        }
    }
</script>

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
        left: 50%;
        top: 40%;
        font-size: 32px;
        color: #fff;
        margin-left: -526.61px;
        letter-spacing: 2px;
    }
    .list {
        font-size: 0;
    }
    .list .items {
        width: 50%;
        padding-bottom: 22.2222%;
        display: inline-block;
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
    .content img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .content.text {
        padding: 65px;
        box-sizing: border-box;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        -webkit-justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .subtitle {
        font-size: 14px;
        margin-bottom: 20px;
    }
    .title {
        font-size: 22px;
        margin-bottom: 20px;
    }
    .intro {
        font-size: 12px;
        line-height: 24px;
        margin-bottom: 20px;
    }
    .link {
        font-size: 12px;
    }
</style>
