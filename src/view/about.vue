<template>
    <div class="about">
        <div class="banner">
            <img :src="info.top_image">
            <div class="title" v-html="info.top_text">ACROSS&nbsp&nbspTODAY'S&nbsp&nbspVISION&nbsp&nbspAND&nbsp&nbspVISION&nbsp&nbspOF&nbsp&nbspTHE&nbsp&nbspCENTURY.</div>
        </div>
        <div class="white-bg">
            <div class="title" v-html="info.things_title">THINGS&nbsp&nbspTHAT&nbsp&nbspYOU&nbsp&nbspMAY&nbsp&nbspWANT&nbsp&nbspTO&nbsp&nbspKONW&nbsp&nbspABOUT&nbsp&nbspUS</div>
            <div class="content" v-html="info.things_content">
                <!-- MUMU是一家设计及创新工作室<br/>
                为商业和文化领域的客户提供设计及咨询服务。<br/>
                我们重视正统和专业的设计服务。市场充斥着实力不相上下的对手,成功的关键则在于设计。要与众不同,则要创新,设计
                不再被认为是过程的叠加,而是制胜的环节;我们同时也关注人与文化、社会、世界之间的变革。我们正面临新旧时代的更替,
                新的视野将带领我们发现人们新的需求与问题。把握这一变化的有识之士将获成功,他们是高瞻远瞩、充满激情、行事果断,
                采取疯狂想法并将之变为现实的人。我们希望能与之建立合作,一同推动事物的前进,创造“梦想成真”的机会;<br/>
                我们正不留余力的与各领域具有才华的专业人士一同,将品牌、艺术指导、故事、摄影、空间、产品、体验、出版等都纳<br/>
                入视野。理解语境,定义概念,提供设计,力求准确和清晰,并建立情感和体验,这就是我们的工作。<br/>
                最让我们感兴趣的是人。不同的项目都是不同的人来策划、组织和审视的,这些项目又反过来服务、引导、感染不同的人<br/>
                小的项目与一个圈子的人互动,大的项目则与众人组成的社会互动。离开人本身,所有的项目都是虚空的。 -->
            </div>
        </div>
        <div class="white-bg black">
            <div class="title" v-html="info.compatible_title">COMPATIBLE&nbsp&nbspCLIENTELE</div>
            <div class="content" v-html="info.compatible_content">
                <!-- <div class="cell">我们与重视战略品牌的客户最相容。</div>
                <div class="cell">许多企业是在竞争激烈的市场空间中运营的，通过改变游戏规则的品牌建设，寻求积极、盈利和可持续的拓张。</div>
                <div class="cell">这些企业愿意进行战略投资，承担经过计算的风险，但不愿打破道德界限，就像我们一样。</div> -->
            </div>
        </div>
        <div class="brand-list">
            <div class="title" v-html="info.broad_title">BROAD&nbsp&nbspSPECTRUM&nbsp&nbspCAPABILITIES</div>
            <el-row>
                <el-col :span="5" :offset="1" v-for="(item, index) in brand_list" :key="index">
                    <div class="item-title" v-html="item.title"></div>
                    <div class="item-list">
                        <div class="item" v-for="(obj, order) in item.list" v-html="obj"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="large-cell-title">MEET THE TEAM</div>
        <div class="team-list">
            <el-row>
                <el-col :span="22" :offset="1">
                    <div class="item-list">
                        <div class="item" v-for="(item, index) in team_list" :key="index">
                            <div class="avatar">
                                <img :src="item.image">
                            </div>
                            <div class="username" v-html="item.title"></div>
                            <div class="user-intro" v-html="item.desc"></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
        data () {
            return {
                info: {},
                brand_list: [],
                team_list: []
            }
        },
        mounted () {
            this.get_about_info()
            this.get_brand_list()
            this.get_team_list()
        },
        methods: {
            get_about_info () {
                this.axios('/index.php?s=Home/About/index').then(res => {
                    this.info = res.data.data
                })
            },
            get_brand_list () {
                this.axios('/index.php?s=Home/About/broad').then(res => {
                    this.brand_list = res.data.data
                })
            },
            get_team_list () {
                this.axios('/index.php?s=Home/About/meet_team').then(res => {
                    this.team_list = res.data.data
                })
            },
        }
    }
</script>

<style scoped>
    .about {
        padding-top: 80px;
    }
    .banner {
        position: relative;
    }
    .banner img {
        width: 100%;
        display: block;
    }
    .banner .title {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: #fff;
        /*left: 50%;
        top: 40%;
        margin-left: -526.61px;
        letter-spacing: 2px;*/
    }
    .white-bg {
        text-align: center;
        padding: 100px 8%;
        background-color: #fff;
    }
    .white-bg .title {
        font-size: 34px;
        margin-bottom: 20px;
    }
    .content {
        font-size: 14px;
        color: #666;
        line-height: 28px;
    }
    .white-bg.black {
        background-color: #333;
        color: #fff;
    }
    .white-bg.black .content {
        color: #fff;
    }
    .cell {
        margin-bottom: 40px;
    }
    .content .cell:last-child {
        margin-bottom: 0;
    }
    .brand-list {
        padding: 80px 0;
        background-color: #fff;
    }
    .brand-list .title {
        font-size: 34px;
        color: #000;
        text-align: center;
        margin-bottom: 50px;
    }
    .brand-list .item-title {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .brand-list .item-list .item {
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
        position: relative;
        padding-left: 15px;
    }
    .brand-list .item-list .item:before {
        content: "";
        position: absolute;
        left: 0;
        top: 7px;
        width: 5px;
        height: 5px;
        background-color: #000;
    }
    .large-cell-title {
        padding: 100px 0;
        background-color: #333;
        color: #fff;
        text-align: center;
        font-size: 34px;
    }
    .team-list {
        padding: 100px 0 70px;
        background-color: #fff;
    }
    .team-list .item-list {
        font-size: 0;
    }
    .team-list .item-list .item {
        width: calc(25% - 20px);
        padding: 0 10px;
        margin-bottom: 30px;
        display: inline-block;
    }
    .team-list .item-list .item .avatar {
        padding-bottom: 52.38%;
        position: relative;
        margin-bottom: 15px;
    }
    .team-list .item-list .item .avatar img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        -webkit-object-fit: cover;
    }
    .item .username {
        font-size: 16px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 5px;
    }
    .item .user-intro {
        font-size: 12px;
        color: #666;
        line-height: 1;
    }
</style>
