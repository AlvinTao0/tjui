<template>
    <div :id="id">
        <transition name="tj-slideup">
            <div class="tj-dialog" v-if="visible">
                <div class="tj-dialog-title">{{title}}</div>
                <div :class="['tj-dialog-main', center ? 'tj-text-center' : '']" v-html="msg"></div>
                <div class="tj-dialog-btnwrap">
                    <div class="tj-dialog-btn" v-if="cancel.show" @click="cancelBtnClick">{{cancel.label}}</div>
                    <div class="tj-dialog-btn" v-if="confirm.show" @click="confirmBtnClick">{{confirm.label}}</div>
                </div>
            </div>
        </transition>
        <transition name="tj-fade">
            <div class="tj-mask" v-if="visible" @click="cancelBtnClick"></div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: 'tj-dialog-default-id',
            visible: false,
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
    },
    methods: {
        hide () {
            this.visible = false
        },
        cancelBtnClick () {
            this.$emit('cancel');
            if (typeof this.onCancelBtn === 'function') {
                this.onCancelBtn.call(this);
            } 
            this.hide();
        },
        confirmBtnClick () {
            this.$emit('confirm');
            if (typeof this.onConfirmBtn === 'function') {
                this.onConfirmBtn.call(this);
            } 
        }
    }
}
</script>