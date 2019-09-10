<template>
    <div class="contact" v-if="is_show">
        <div class="en">
            <span v-html="info.CUE_WORDS">KEEN FOR YOUR BRANDS TO</span>
            <!-- <span class="black">MAKE A SPLASH</span> -->
        </div>
        <div class="cn">您可以通过邮箱 <span v-html="info.CONTACT_EMAIL"></span> 联系我们，也可以直接打电话，期待您的光临。</div>
        <div class="link">
            <span @click="route">点击这里</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data () {
            return {
                is_show: true
            }
        },
        props: ['info'],
        watch: {
            '$route': function () {
                if (this.$route.name == 'contact') {
                    this.is_show = false
                } else {
                    this.is_show = true
                }
            }
        },
        mounted () {
            if (this.$route.name == 'contact') {
                this.is_show = false
            } else {
                this.is_show = true
            }
        },
        methods: {
            route () {
                this.$router.push({name: 'contact'})
            }
        }
    }
</script>

<style scoped>
    .contact {
        padding: 60px 0 55px;
        text-align: center;
        background-color: rgba(0,0,0,0.5);
        color: #fff;
    }
    .black {
        /*color: #000;*/
    }
    .en {
        font-size: 28px;
        margin-bottom: 55px;
    }
    .cn {
        font-size: 18px;
        margin-bottom: 55px;
    }
    .link span {
        font-size: 14px;
        position: relative;
        display: inline-block;
        user-select: none;
        -webkit-user-select: none;
        cursor: pointer;

    }
    .link span:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        bottom: -2px;
        left: 25%;
        background-color: #fff;
    }
</style>
