<template>
    <div class="header-nav" :style="{backgroundColor: 'rgba(0,0,0,'+ opacity +')'}">
        <el-row >
            <el-col :span="5" :offset="1">
                <div class="logo-wrapper">
                    <div class="logo" @click="gohome">
                        <img src="@/assets/logo.png">
                    </div>
                    <div class="brand-text" @click="gohome">
                        <div v-html="info.WEB_SITE_DESCRIPTION || 'BRAND OF THE FUTURE'"></div>
                        <div v-html="info.WEB_SITE_TITLE || '木目品牌咨询服务'"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="17" class="links">
                <div :class="['item', current_path == item.url ? 'active' : '']" v-for="(item, index) in link" :key="index" v-html="item.title" @click="router(item.url)"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'header-nav',
        data () {
            return {
                opacity: 0.1,
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
                    self.opacity = 0.1 + document.documentElement.scrollTop / 500
                }
            });
        },
        methods: {
            highlight () {
                if (this.$route.name == 'home') {
                    this.opacity = 0.1
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
                if (this.$route.path != 'home') {
                    this.$router.push({name: 'home'})
                }
            }
        }
    }
</script>

<style scoped>
    .header-nav {
        position: fixed;
        width: 100%;
        max-width: 1920px;
        top: 0;
        padding: 25px 0 20px;
        z-index: 3;
    }
    .logo-wrapper, .links {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }
    .logo {
        padding-right: 10px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
    }
    .logo img {
        width: 70px;
        display: block;
    }
    .brand-text {
        font-size: 12px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        position: relative;
    }
    .links {
        justify-content: flex-end;
        -webkit-justify-content: flex-end;
        margin-top: 9px;
    }
    .links .item {
        font-size: 16px;
        margin-left: 65px;
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
</style>
