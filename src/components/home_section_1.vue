<template>
    <div class="sectionOne" :style="{height: clientHeight + 'px'}">
        <div class="logo-wrapper">
            <img src="@/assets/logo.png">
            <div class="info">
                <div class="cn" v-html="info.top_title_china">一站式品牌服务，助力品牌成就</div>
                <div class="en" v-html="info.top_title_englist">One-step brand service to help achievements</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sectionOne',
        data () {
            return {
                clientHeight: 937
            }
        },
        props: ['info'],
        created () {
            this.clientHeight = window.innerHeight
        },
        mounted () {
            
        }
    }
</script>

<style scoped>
    .sectionOne {
        height: 100%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
        background-color: rgba(0,0,0,0.5);
    }
    .logo-wrapper {
        display: flex;
        display: -webkit-flex;
        align-items: stretch;
        -webkit-align-items: stretch;
        color: #fff;
    }
    .logo-wrapper img {
        width: 200px;
        height: 77.77px;
        margin-right: 25px;
    }
    .info {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: flex-end;
        -webkit-justify-content: flex-end;
    }
    .cn {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        letter-spacing: 2px;
    }
    .en {
        font-size: 18px;
    }
</style>
