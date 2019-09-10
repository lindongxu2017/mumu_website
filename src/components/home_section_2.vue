<template>
    <div class="sectionTwo">
        <el-row>
            <el-col :span="1" :offset="1" style="padding-top: 2px; font-weight: bold;">About</el-col>
            <el-col :span="17" :offset="2">
                <div v-html="info ? info.about : ''"></div>
                <!-- <div class="cn">
                    <div>木目是一家设计及创新工作室。</div>
                    <div>为商业和文化领域的客户提供设计及咨询服务。</div>
                    <div>理解语意，定义概念，提供设计，力求准确和清晰，并建立情感和体验，</div>
                    <div>这就是我们的工作。</div>
                </div>
                <div class="en">
                    <div>MUMU is a design and innovation studio.</div>
                    <div>we deliver design and consultancy services for clients from both commercial and cultural areas.</div>
                    <div>Upderstanding context, defining concepts and delivering design concisely and clearly with sensation and</div>
                    <div>exprience is what we do</div>
                </div> -->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'sectionTwo',
        data () {
            return {}
        },
        props: ['info']
    }
</script>

<style scoped>
    .sectionTwo {
        padding: 90px 0;
        background-color: #000;
        color: #fff;
    }
    .cn {
        font-size: 14px;
        margin-bottom: 40px;
    }
    .en {
        font-size: 14px;
    }
    .cn > div,.en > div {
        margin-bottom: 3px;
    }
</style>
