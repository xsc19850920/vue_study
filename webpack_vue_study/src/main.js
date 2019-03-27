
import Vue from 'vue'

import App from './compents/App.vue'
//抽离路由
import router from './js/router.js'

var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    methods:{

    },
    render:c=>c(App),
    
    router
})
