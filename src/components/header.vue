<template>
    <div :class="['header-nav', current_path != '/' ? 'reverse' : '']" :style="{backgroundColor: 'rgba(0,0,0,'+ opacity +')'}">
        <el-row >
            <el-col :span="6">
                <div class="logo-wrapper">
                    <div class="logo" @click="gohome">
                        <img v-if="current_path == '/'" src="@/assets/logo.png">
                        <img v-else src="@/assets/logo_revise.jpg">
                    </div>
                    <div :class="['brand-text', current_path != '/' ? 'reverse' : '']" @click="gohome">
                        <div v-html="info.WEB_SITE_DESCRIPTION || 'BRAND OF THE FUTURE'"></div>
                        <div v-html="info.WEB_SITE_TITLE || '木目品牌咨询服务'"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="18" class="links">
                <div :class="['item', current_path != '/' ? 'reverse' : '', current_path == item.url ? 'active' : '']" v-for="(item, index) in link" :key="index" v-html="item.title" @click="router(item.url)"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'header-nav',
        data () {
            return {
                opacity: 0,
                current_path: ''
            }
        },
        props: ['info', 'link'],
        watch: {
            '$route': function () {
                window.scrollTo(0, 0)
                this.highlight()
            }
        },
        mounted () {
            var self = this
            this.highlight()
            window.addEventListener("scroll", function (e) {
                if (self.$route.name == 'home') {
                    self.opacity = 0 + document.documentElement.scrollTop / 500
                }
            });
        },
        methods: {
            highlight () {
                if (this.$route.name == 'home') {
                    this.opacity = 0
                } else {
                    this.opacity = 1
                }
                this.current_path = this.$route.path
            },
            router (_path) {
                if (this.$route.path != _path) {
                    this.$router.push({path: _path})
                }
            },
            gohome () {
                if (this.$route.path != '/') {
                    this.$router.push({name: 'home'})
                } else {
                    location.reload()
                }
            }
        }
    }
</script>

<style scoped>
    .header-nav {
        position: fixed;
        width: 100%;
        /*max-width: 1920px;*/
        top: 0;
        padding: 25px 4.16667% 20px;
        z-index: 3;
        box-sizing: border-box;
    }
    @media screen and (min-width: 1920px) {
        .header-nav {
            padding: 25px 80px 20px;
        }
    }
    .logo-wrapper, .links {
        display: flex;
        display: -webkit-flex;
        align-items: stretch;
        -webkit-align-items: stretch;
    }
    .logo {
        padding-right: 10px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
    }
    .logo img {
        width: 85px;
        display: block;
    }
    .brand-text {
        font-size: 14px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .links {
        justify-content: flex-end;
        -webkit-justify-content: flex-end;
        margin-top: 9px;
    }
    .links .item {
        font-size: 18px;
        margin-left: 65px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
        font-weight: bold;
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
    .links .item.reverse.active:before, .links .item.reverse:before {
        background-color: #000;
    }
    .links .item.active:before {
        width: 100%;
    }
    .reverse {
        background-color: #fff!important;
        color: #000!important;
    }
</style>
