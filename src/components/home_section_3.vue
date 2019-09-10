<template>
    <div class="sectionThree">
        <div class="section white">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_1.png">
                    <div class="text" v-html="info.icon_text_1">了解背景</div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_2.png">
                    <div class="text" v-html="info.icon_text_2">分析问题</div>
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_3.png">
                    <div class="text" v-html="info.icon_text_3">提出战略</div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_4.png">
                    <div class="text" v-html="info.icon_text_4">工艺解决方案</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sectionThree',
        data () {
            return {}
        },
        props: ['info']
    }
</script>

<style scoped>
    .sectionThree {
        display: flex;
        display: -webkit-flex;
        align-items: center;
        -webkit-align-items: center;
    }
    .section {
        flex: 1;
        -webkit-flex: 1;
    }
    .wrapper {
        padding-bottom: 80.6451%;
        position: relative;
        overflow: hidden;
    }
    .content {
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        /*display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content: center;*/
        text-align: center;
        transition: all 0.3s ease;
        transform-origin: center;
    }
    .section.white .content {
        background-color: rgba(0,0,0,0.35);
    }
    .content:hover, .section.white .content:hover {
        background-color: rgba(255,255,255,0.5);
    }
    .content:hover .text {
        color: #000;
    }
    .content img {
        width: 20%;
        margin-bottom: 7%;
        margin-top: 15%;
        /*margin-top: 50px;*/
    }
    .section.white .content img {
        margin-left: 15px;
    }
    .content .text {
        padding: 0 20%;
        font-size: 16px;
        color: #fff;
        text-align: center;
        line-height: 26px;
        /*letter-spacing: 3px;*/
    }
</style>
