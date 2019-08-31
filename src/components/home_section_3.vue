<template>
    <div class="sectionThree">
        <div class="section white">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_1.png">
                    <div class="text">了解背景</div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_2.png">
                    <div class="text">分析问题</div>
                </div>
            </div>
        </div>
        <div class="section white">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_3.png">
                    <div class="text">提出战略</div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="content">
                    <img src="@/assets/icon_4.png">
                    <div class="text">工艺解决方案</div>
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
        }
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
        background-color: rgba(0,0,0,0.5);
    }
    .section.white {
        background-color: rgba(0,0,0,0.35);
    }
    .wrapper {
        padding-bottom: 89%;
        position: relative;
        overflow: hidden;
    }
    .content {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        align-items: center;
        -webkit-align-items: center;
        justify-content: center;
        -webkit-justify-content: center;
    }
    .content:hover {
        transform: scale(1.2);
        transition: all 0.2s ease;
        transform-origin: center;
    }
    .content img {
        width: 12%;
        margin-bottom: 15px;
        margin-top: 50px;
    }
    .section.white .content img {
        margin-left: 15px;
    }
    .content .text {
        font-size: 16px;
        color: #fff;
        letter-spacing: 3px;
    }
</style>
