<template>
    <div class="work">
        <el-row>
            <!-- <el-col :span="6" v-for="(item, index) in tab" :key="index" :class="['tab', index == active ? 'active' : '']" :style="{backgroundColor: item.color}" v-html="item.name" @click.native="switchTab(index)"></el-col> -->
            <el-col :span="6" v-for="(item, index) in tab" :key="index" :class="['tab', index == active ? 'active' : '']" v-html="item.name" @click.native="switchTab(index)"></el-col>
        </el-row>
        <div class="intro">
            <el-row>
                <el-col :span="22" :offset="1" class="title" v-html="intro.default_category_title">
                    我们的产品组
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="22" :offset="1" class="text" v-html="intro.default_category_desc">
                    在这里,我们介绍了一些最好的工作。一些人有更多细节,被标记为“案例研究”。它们代表了四步Bubble fsh Ladder<br/>
                    TM工艺的证据。标有“展示案例”的其他人仅仅是我们精心设计的解决方案的缩略图。虽然案例研究提供了对我们工作深<br/>
                    度的深刻见解,但展示了我们参与的广度。我们为他们所有人感到自豪。
                </el-col>
            </el-row>
        </div>
        <el-row class="product-list">
            <div class="item" v-for="(item, index) in list" @click="godetail(item.id)">
                <img :src="item.image">
                <div class="text-wrapper">
                    <div class="title" v-html="item.title_en"></div>
                    <div class="subtitle" v-html="item.title_ch"></div>
                </div>
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
                active: 0,
                intro: {}
            }
        },
        mounted () {
            this.get_cate()
            this.get_intro()
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
                        id: 0,
                        name: "全部案例",
                        title: "我们的产品组",
                        color: '#FAFAFA'
                    })
                    this.get_list()
                })
            },
            get_intro () {
                this.axios('/index.php?s=Home/Works/setting').then(res => {
                    this.intro = res.data.data
                })
            },
            get_list () {
                this.axios('/index.php?s=Home/Works/index&category_id=' + this.tab[this.active].id).then(res => {
                    this.list = res.data.data
                })
            },
            godetail (id) {
                this.$router.push({name: 'detail', params: {id: id}})
            }
        }
    }
</script>

<style scoped>
    .work {
        padding-top: 80px;
    }
    .tab {
        line-height: 50px;
        text-align: center;
        font-size: 15px;
        color: #fff;
        letter-spacing: 2px;
        background-color: rgba(0,0,0,1);
    }
    .tab:hover {
        cursor: pointer;
        background-color: #E6E6E6!important;
        color: #000;
        font-weight: bold;
    }
    .tab.active {
        background-color: #E6E6E6!important;
        color: #000;
        font-weight: bold;
    }
    .intro {
        padding: 50px 0;
        background-color: #fff;
    }
    .intro .title {
        font-size: 24px;
        color: #000;
        letter-spacing: 3px;
        margin-bottom: 20px;
    }
    .intro .text {
        font-size: 16px;
        color: #909399;
        line-height: 31px;
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
        background-color: rgb(0,0,0,0.4);
        transition: all 0.3s ease;
    }
    .text-wrapper:hover {
        background-color: rgb(0,0,0,0.2);
    }
    .text-wrapper:hover .title,
    .text-wrapper:hover .subtitle {
        /*display: none;*/
    }
    .text-wrapper .title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 15px;
        letter-spacing: 2px;
    }
    .subtitle {
        font-size: 20px;
    }
</style>
