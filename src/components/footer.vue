<template>
    <div class="footer-nav">
        <el-row >
            <el-col :span="10" :offset="1">
                <el-row type="flex" justify="space-between">
                    <el-col :span="4" class="logo">
                        <img src="@/assets/logo.png" @click="gohome">
                    </el-col>
                    <el-col :span="20" class="links">
                        <div :class="['item', current_path == item.url ? 'active' : '']" v-for="(item, index) in link" :key="index" v-html="item.title" @click="router(item.url)"></div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8" :offset="3" class="info">
                <div class="cell">
                    <div class="cell-title">
                        <div class="border-b weight">Shenzhen</div>
                    </div>
                    <div class="content-text" v-html="info.ADDRESS">深圳市 福田区 深南大道 6031号 杭钢富春商务大厦 1109-1011 号</div>
                    <div class="content-text">信件地址： 深圳市 福田区 深南大道 6031号 杭钢富春商务大厦 1109-1011 号</div>
                </div>
                <div class="cell">
                    <div class="cell-title weight">联系我们</div>
                    <div class="content-text" v-html="info.CONTACT_EMAIL">brand@mumu.com</div>
                </div>
                <div class="cell">
                    <div class="map" @click="goRoute(info.MAP_LINK)">查看地图</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'footer-nav',
        data () {
            return {
                current_path: ''
            }
        },
        props: ['link', 'info'],
        watch: {
            '$route': function () {
                this.highlight()
            }
        },
        mounted () {
            this.highlight()
        },
        methods: {
            highlight () {
                this.current_path = this.$route.path
            },
            router (_path) {
                if (this.$route.path != _path) {
                    this.$router.push({path: _path})
                }
            },
            gohome () {
                if (this.$route.name != 'home') {
                    this.$router.push({name: 'home'})
                }
            },
            goRoute (url) {
                console.log(url)
                location.href = url.indexOf('http') > -1 ? url : 'http://' + url
            }
        }
    }
</script>

<style scoped>
    .footer-nav {
        background-color: #000;
        padding: 50px 0 40px;
        color: #fff;
    }
    .logo img {
        width: 70px;
        cursor: pointer;
    }
    .links {
        display: flex;
        display: -webkit-flex;
        justify-content: flex-end;
        -webkit-justify-content: flex-end;
    }
    .links .item {
        margin-top: 7px;
        font-size: 18px;
        /*font-weight: 700;*/
        margin-left: 40px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
    }
    .links .item:hover:before {
        width: 100%;
    }
    .links .item.active:before, .links .item:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #fff;
        left: 0;
        bottom: -2px;
        transition: all 0.2s ease;
    }
    .links .item.active:before {
        width: 100%;
    }
    .cell {
        margin-bottom: 20px;
        line-height: 23px;
    }
    .info .cell:last-child {
        margin-bottom: 0;
    }
    .cell-title {
        font-size: 14px;
        margin-bottom: 5px;
    }
    .cell-title .border-b {
        border-bottom: 1px solid #fff;
        display: inline-block;
    }
    .content-text {
        font-size: 14px;
        transform-origin: left;
    }
    .map {
        font-size: 14px;
        position: relative;
        display: inline-block;
    }
    .map:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        bottom: -2px;
        left: 25%;
        background-color: #fff;
    }
    .weight {
        font-size: 16px;
        font-weight: 700;
    }
</style>
