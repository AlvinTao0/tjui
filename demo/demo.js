import Vue from 'vue'
import Demo from './demo.vue'

const root = document.createElement('div');
document.body.appendChild(root)

// toast
import toast from '../src/toast'
Vue.use(toast)

// dialog
import dialog from '../src/dialog'
Vue.use(dialog)

new Vue({
    render: (h) => h(Demo)
}).$mount(root)