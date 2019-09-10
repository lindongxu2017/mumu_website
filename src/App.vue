<template>
    <div id="app">
        <header-nav :info="info" :link="link" />
        <keep-alive>
            <router-view />
        </keep-alive>
        <contact :info="info"/>
        <footer-nav :info="info" :link="link" />
        <video webkit-playsinline playsinline x5-playsinline="" x-webkit-airplay="allow" muted autoplay loop poster="@/static/bg.jpg" :src="video.video" class="bgvid" id="bgvid"></video>
    </div>
</template>
<script>
    import headerNav from '@/components/header'
    import contact from '@/components/contact'
    import footerNav from '@/components/footer'
    export default {
        name: 'App',
        data () {
            return {
                video: {},
                info: {},
                link: [
                    {title: 'About', url: '/about'},
                    {title: 'Work', url: '/work'},
                    {title: 'Strategy', url: '/strategy'},
                    {title: 'Contact', url: '/contact'}
                ]
            }
        },
        mounted () {
            this.get_nav()
            this.get_video()
            this.get_site_info()
        },
        methods: {
            get_site_info () {
                this.axios('/index.php?s=Home/index/site').then(res => {
                    this.info = res.data.data
                })
            },
            get_video () {
                this.axios('/index.php?s=Home/index/home').then(res => {
                    this.video = res.data.data
                })
            },
            get_nav () {
                this.axios('/index.php?s=Home/index/channel').then(res => {
                    this.link = res.data.data
                })
            }
        },
        components: {
            headerNav, contact, footerNav
        }
    }
</script>
<style>
/*html, body {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
}*/

* {
    margin: 0;
    padding: 0;
}

body{
    background-color:gray;
    background:url(./static/bg_video.mp4) no-repeat center 0px;
}

video#bgvid  {
    position: fixed;
    top: 0;
    bottom:0;
    min-height:100%;
    /*max-width: 1920px;
    min-width: 1920px;*/
    width: 100%;
    height: auto;
    z-index:-100;
    background-size: cover;
    background-position: center;
}

#app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1200px;
}

.el-carousel__button {
    height: 4px;
    border-radius: 1px;
    opacity: 1;
}

.el-carousel__indicator.is-active button {
    background-color: #165155;
}

.el-carousel__indicator--horizontal {
    padding: 20px 15px;
}


</style>