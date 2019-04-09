import Vue from 'vue'
import Dialog from './dialog.js'
import './dialog.scss'

Dialog.install = function(Vue) {
    Vue.prototype['$dialog'] = Dialog.emit
}

export default Dialog