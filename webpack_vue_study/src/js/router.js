
import Vue from 'vue'
import VueRouter from 'vue-router'

import Account from '../compents/Account.vue'
import Goods from '../compents/Goods.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {path:'/account',component:Account},
        {path:'/goods',component:Goods},

    ]
})

export default router