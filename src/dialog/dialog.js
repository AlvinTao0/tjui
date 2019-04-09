import Vue from 'vue'
import dialogComp from './dialog.vue'

const DialogConstructor = Vue.extend(dialogComp);

let instance;
let Dialog = {
    emit: function(obj) {
        let opt = {
            id: 'tj-dialog-default-id',
            title: '温馨提示',
            msg: '',
            cancel: {
                label: '取消',
                show: true
            },
            confirm: {
                label: '确定',
                show: true
            },
            center: false
        }
        opt = Object.assign(opt, obj);

        instance = new DialogConstructor({
            data: opt
        });
        instance.$mount()
        let dialogDom = document.querySelector(`#${opt.id}`);
        if (instance && dialogDom) {
            dialogDom.parentNode.replaceChild(instance.$el, dialogDom)
        } else {
            document.body.appendChild(instance.$el)
        }

        Vue.nextTick(() => {
            instance.visible = true
        })
    }
}

export default Dialog;