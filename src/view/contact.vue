<template>
    <div class="contact">
        <div class="intro">
            <div class="title">联系我们</div>
            <el-row>
                <el-col :span="22" :offset="1" class="text" v-html="">
                    MUMU 是知名的品牌建设机构。我们为在竞争激烈的市场中运营的老牌企业创造世界级品牌。填写下面的表格<br/>
                    与我们联系。您也可以在WEIBO 或 LINKEDIN上进行联系。
                </el-col>
            </el-row>
        </div>
        <el-row type="flex">
            <el-col :span="12">
                <div class="contact-info">
                    <div class="up">
                        <div class="cell">
                            <div class="cell-title">地址</div>
                            <div class="cell-value company" v-html="info_1.company_name">深圳市木目映象有限公司</div>
                            <div class="cell-value" v-html="info_1.ADDRESS">深圳市 福田区 深南大道 6031 号</div>
                            <div class="cell-value" v-html="info_1.LETTER_ADDRESS">杭钢富春商务大厦 1109-1101 号</div>
                        </div>
                        <div class="cell">
                            <div class="cell-title">电话</div>
                            <div class="cell-value" v-html="info_1.tel">88888888</div>
                        </div>
                        <div class="cell">
                            <div class="cell-title">二维码</div>
                            <img class="qr-code" :src="info_1.qrcode">
                        </div>
                        <div class="cell">
                            <span @click="links">查看地图</span>
                        </div>
                    </div>
                    <div class="down">
                        <div class="cell">
                            <div class="cell-title" style="margin-bottom: 20px;">邮箱</div>
                            <div class="cell-value" v-html="info_1.CONTACT_EMAIL">brands@mumustudio.com</div>
                        </div>
                        <div class="cell-logos">
                            <img class="icon" :src="item.image" v-for="(item, index) in list" :key="index" @click="links(item.link)">
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12" class="form">
                <div class="form-title">联系我们</div>
                <div class="form-control">
                    <input type="text" v-model="form.name" placeholder="Name*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.title" placeholder="Title*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.role" placeholder="Role*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.email" placeholder="Email*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.phone" placeholder="Phone No.*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.company_name" placeholder="Company Name*">
                </div>
                <div class="form-control">
                    <input type="text" v-model="form.website" placeholder="Website*">
                </div>
                <div class="form-control">
                    <select v-model="form.contact_reason">
                        <option style="color: #fff;" value="" disabled>您与我们联系的主要原因是什么？*</option>
                        <option :value="item.id" v-for="(item, index) in question.contact_reason" :key="index" v-html="item.name"></option>
                    </select>
                    <img src="@/assets/down.png" class="select-icon">
                </div>
                <div class="form-control">
                    <select v-model="form.complete_project_time">
                        <option style="color: #fff;" value="" disabled>您希望多久完成项目？*</option>
                        <option :value="item.id" v-for="(item, index) in question.complete_project_time" :key="index" v-html="item.name"></option>
                    </select>
                    <img src="@/assets/down.png" class="select-icon">
                </div>
                <div class="form-control">
                    <select v-model="form.is_reserved_budget">
                        <option style="color: #fff;" value="" disabled>您是否为项目预留了预算？*</option>
                        <option value="1">有预算</option>
                        <option value="2">没有</option>
                    </select>
                    <img src="@/assets/down.png" class="select-icon">
                </div>
                <div class="form-control">
                    <select v-model="form.partners_select">
                        <option style="color: #fff;" value="" disabled>您将如何决定合作伙伴？基于？*</option>
                        <option :value="item.id" v-for="(item, index) in question.partners_select" :key="index" v-html="item.name"></option>
                    </select>
                    <img src="@/assets/down.png" class="select-icon">
                </div>
                <div class="form-control">
                    <select v-model="form.where_about_us">
                        <option style="color: #fff;" value="" disabled>您是从哪儿得知我们的？*</option>
                        <option :value="item.id" v-for="(item, index) in question.where_about_us" :key="index" v-html="item.name"></option>
                    </select>
                    <img src="@/assets/down.png" class="select-icon">
                </div>
                <div class="form-control">
                    <textarea v-model="form.message" placeholder="Message"></textarea>
                </div>
                <div class="tips"><i>必填项目 *</i></div>
                <div class="submit">
                    <span @click="submit_form">发送</span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data () {
            return {
                form: {
                    name: '',
                    title: '',
                    role: '',
                    email: '',
                    phone: '',
                    company_name: '',
                    website: '',

                    contact_reason: '',
                    complete_project_time: '',
                    is_reserved_budget: '',
                    partners_select: '',
                    where_about_us: '',

                    message: ''
                },
                info_1: {},
                list: [],
                question: []
            }
        },
        mounted () {
            this.get_info_1()
            this.get_info_2()
            this.get_question()
        },
        methods: {
            get_info_1 () {
                this.axios('/index.php?s=Home/Contact/index').then(res => {
                    this.info_1 = res.data.data || {}
                })
            },
            get_info_2 () {
                this.axios('/index.php?s=Home/Contact/method').then(res => {
                    this.list = res.data.data || []
                })
            },
            get_question () {
                this.axios('/index.php?s=Home/Contact/message_list').then(res => {
                    this.question = res.data.data || []
                })
            },
            links (url) {
                location.href = url || this.info_1.map_url
            },
            submit_form () {
                this.axios.post('/index.php?s=Home/Contact/message_submit', this.form).then(res => {
                    if (res.data.status != 1) {
                        this.$message({
                          message: res.data.info,
                          type: 'warning'
                        });
                        return
                    }
                    this.form = {
                        name: '',
                        title: '',
                        role: '',
                        email: '',
                        phone: '',
                        company_name: '',
                        website: '',

                        contact_reason: '',
                        complete_project_time: '',
                        is_reserved_budget: '',
                        partners_select: '',
                        where_about_us: '',

                        message: ''
                    }
                    this.$message({
                      message: '提交成功',
                      type: 'success'
                    });
                })
            }
        }
    }
</script>

<style scoped>
    .contact {
        padding-top: 75px;
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
    .form {
        background-color: #333;
        padding: 70px 200px 50px 100px;
    }
    .form-title {
        font-size: 16px;
        color: #fff;
        margin-bottom: 35px;
    }
    .form-control {
        margin-bottom: 20px;
        border: 1px solid #BEBEBE;
        box-shadow: 0px 0px 2px rgba(255,255,255,0.5) inset;
        position: relative;
    }
    .form-control input, .form-control textarea {
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        box-shadow: none;
        border: 0;
        background: none;
        width: 100%;
        line-height: 30px;
        text-indent: 5px;
        color: #BEBEBE;
        font-size: 14px;
    }
    .form-control select {
        outline: none;
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        border: 0;
        line-height: 30px;
        background-color: #4D4D4D;
        color: #aaa;
        text-indent: 5px;
    }
    .form-control textarea {
        height: 180px;
        width: 100%;
        display: block;
        box-sizing: border-box;
        color: #BEBEBE;
        font-size: 14px;
    }
    .form-control .select-icon {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 15px;
    }
    .form .tips {
        font-size: 12px;
        color: #999;
    }
    .form .submit {
        text-align: right;
        margin-top: 20px;
    }
    .form .submit span {
        font-size: 12px;
        color: #fff;
        border-bottom: 1px solid #fff;
        padding-bottom: 2px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
    }
    .contact-info {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
    }
    .contact-info > div {
        padding: 60px 8.33334%;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        justify-content: space-around;
        -webkit-justify-content: space-around;
        box-sizing: border-box;
    }
    .contact-info .up {
        flex: 4;
        background-color: #F7F7F7;
    }
    .contact-info .down {
        flex: 3;
        justify-content: flex-start;
        -webkit-justify-content: flex-start;
    }
    .cell-title {
        font-size: 16px;
        color: #000;
        font-weight: bold;
        margin-bottom: 7px;
    }
    .cell-value {
        font-size: 14px;
        color: #777;
        letter-spacing: 1px;
    }
    .company {
        font-weight: bold;
        margin-bottom: 3px;
    }
    .qr-code {
        width: 100px;
    }
    .up .cell span {
        font-size: 14px;
        color: #777;
        position: relative;
        display: inline-block;
    }
    .up .cell span:before {
        content: "";
        position: absolute;
        width: 50%;
        height: 1px;
        bottom: -2px;
        left: 25%;
        background-color: #777;
    }
    .cell-logos {
        font-size: 0;
        margin-top: 30px;
    }
    .cell-logos .icon {
        width: 20px;
        margin-right: 10px;
        vertical-align: middle;
        display: inline-block;
    }
</style>
