import Vue from 'vue'
import ToastComp from './toast.vue'

const ToastConstructor = Vue.extend(ToastComp);

let instance;
let instanceArr = [];
let Toast = {};
Toast.text = function(obj) {
    let opt = {
        id: 'default',
        duration: 2000,
        msg: ''
    }
    if (typeof obj == 'string') {
        opt.msg = obj;
    } else {
        opt = Object.assign(opt, obj); 
    }
    if (opt.id && instanceArr[opt.id]) {
        instance = instanceArr[opt.id]
        instance.hide(true);
        instance = Object.assign(instance, opt)
    } else {
        instance = new ToastConstructor({
            data: opt
        })
        opt.id && (instanceArr[opt.id] = instance);
    }
    instance.$mount()
    document.body.appendChild(instance.$el)
    Vue.nextTick(() => {
        instance.visible = true;
    });
};

export default Toast