import Vue from 'vue'
import Router from 'vue-router'

import home from '@/view/home'
import about from '@/view/about'
import work from '@/view/work'
import strategy from '@/view/strategy'
import contact from '@/view/contact'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/work',
            name: 'work',
            component: work
        },
        {
            path: '/strategy',
            name: 'strategy',
            component: strategy
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ]
})
