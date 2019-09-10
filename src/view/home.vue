<template>
    <div class="home">
        <section-one :info="about_info"/>
        <section-two :info="about_info"/>
        <section-three :info="about_info"/>
        <section-four :list="list_swiper" />
        <cell-title :title="'更多案例'"/>
        <section-five :info="about_info" :list="case_list"/>
        <cell-title :title="'合作伙伴'"/>
        <section-six :list="partner"/>
    </div>
</template>

<script>
    import cellTitle from '@/components/cell_title'
    import sectionOne from '@/components/home_section_1'
    import sectionTwo from '@/components/home_section_2'
    import sectionThree from '@/components/home_section_3'
    import sectionFour from '@/components/home_section_4'
    import sectionFive from '@/components/home_section_5'
    import sectionSix from '@/components/home_section_6'
    export default {
        name: 'home',
        data () {
            return {
                list_swiper: [],
                case_list: [],
                partner: [],
                about_info: {}
            }
        },
        mounted () {
            this.get_site_info(2)
            this.get_about_info()
            this.get_partner()
        },
        methods: {
            get_site_info (type) {
                this.axios('/index.php?s=Home/Index/ads&position=' + type).then(res => {
                    if (type == 1) {
                        this.case_list = res.data.data
                    } else {
                        this.list_swiper = res.data.data
                    }
                })
            },
            get_partner () {
                this.axios('/index.php?s=Home/index/partner').then(res => {
                    this.partner = res.data.data
                })
            },
            get_about_info () {
                this.axios('/index.php?s=Home/index/home').then(res => {
                    this.about_info = res.data.data
                })
            },
        },
        components: {
            sectionOne, sectionTwo, sectionThree, sectionFour, sectionFive, sectionSix, cellTitle
        }
    }
</script>

<style scoped>

</style>
