<template>
    <div class="work">
        <el-row>
            <el-col :span="6" v-for="(item, index) in tab" :key="index" :class="['tab', index == active ? 'active' : '']" :style="{backgroundColor: item.color}" v-html="item.name" @click.native="switchTab(index)"></el-col>
        </el-row>
        <div class="intro">
            <div class="title">我们的产品组</div>
            <el-row>
                <el-col :span="22" :offset="1" class="text">
                    在这里,我们介绍了一些最好的工作。一些人有更多细节,被标记为“案例研究”。它们代表了四步Bubble fsh Ladder<br/>
                    TM工艺的证据。标有“展示案例”的其他人仅仅是我们精心设计的解决方案的缩略图。虽然案例研究提供了对我们工作深<br/>
                    度的深刻见解,但展示了我们参与的广度。我们为他们所有人感到自豪。
                </el-col>
            </el-row>
        </div>
        <el-row class="product-list">
            <div class="item" v-for="(item, index) in list">
                <img :src="item.image">
                <!-- <div class="text-wrapper">
                    <div class="title" v-html="item.title"></div>
                    <div class="subtitle" v-html="item.subtitle"></div>
                </div> -->
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'work',
        data () {
            return {
                tab: [],
                list: [],
                active: 0
            }
        },
        mounted () {
            this.get_cate()
        },
        methods: {
            switchTab (index) {
                this.active = index
                this.get_list()
            },
            get_cate () {
                this.axios('/index.php?s=Home/Works/category').then(res => {
                    this.tab = res.data.data
                    this.tab.unshift({
                        // desc: "在这里,我们介绍了一些最好的工作。一些人有更多细节,被标记为“案例研究”。它们代表了四步Bubble fsh LadderTM工艺的证据。标有“展示案例”的其他人仅仅是我们精心设计的解决方案的缩略图。虽然案例研究提供了对我们工作深度的深刻见解,但展示了我们参与的广度。我们为他们所有人感到自豪。"
                        id: 0,
                        name: "全部案例",
                        title: "我们的产品组",
                        color: '#FAFAFA'
                    })
                    console.log(this.tab[this.active].id)
                    this.get_list()
                })
            },
            get_list () {
                this.axios('/index.php?s=Home/Works/index&category_id=' + this.tab[this.active].id).then(res => {
                    this.list = res.data.data
                })
            },
        }
    }
</script>

<style scoped>
    .work {
        padding-top: 75px;
    }
    .tab {
        line-height: 50px;
        text-align: center;
        font-size: 15px;
        color: #555;
        letter-spacing: 2px;
    }
    .tab:hover {
        cursor: pointer;
        background-color: #fff!important;
        color: #000;
    }
    .tab.active {
        background-color: #fff!important;
        color: #000;
    }
    .intro {
        padding: 50px 0;
        text-align: center;
        background-color: #fff;
    }
    .intro .title {
        font-size: 24px;
        color: #999;
        letter-spacing: 3px;
        margin-bottom: 20px;
    }
    .intro .text {
        font-size: 18px;
        color: #999;
        line-height: 32px;
        letter-spacing: 2px;
    }
    .product-list {
        font-size: 0;
    }
    .product-list .item {
        display: inline-block;
        width: 50%;
        padding-bottom: 29.57%;
        position: relative;
    }
    .product-list .item img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .text-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: center;
        -webkit-justify-content: center;
        align-items: center;
        -webkit-align-items: center;
    }
    .text-wrapper {
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background-color: rgb(0,0,0,0.3);
    }
    .text-wrapper:hover {
        background-color: transparent;
    }
    .text-wrapper:hover .title,
    .text-wrapper:hover .subtitle {
        display: none;
    }
    .text-wrapper .title {
        margin-bottom: 10px;
        letter-spacing: 2px;
    }
</style>
