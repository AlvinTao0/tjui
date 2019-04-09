<template>
    <div>
        <h1>{{name}}</h1>
        <hr>
        <h2>toast</h2>
        <div class="btn" @click="showToast">提示1</div>
        <div class="btn" @click="showToast2">提示2</div>
        <hr>
        <h2>dialog</h2>
        <div class="btn" @click="showDialog1">对话框1</div>
        <div class="btn" @click="showDialog2">对话框2</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'demo'
        }
    },
    mounted () {
        
    },
    methods: {
        showToast () {
            this.$toast('123')
        },
        showToast2 () {
            this.$toast({id: 2, msg: '222'})
        },
        showDialog1 () {
            this.$dialog({
                msg: '提示',
                center: true,
                onCancelBtn: function() {
                    console.log('取消dialog')
                },
                onConfirmBtn: function() {
                    console.log('确认dialog');
                    this.hide()
                }
            })
        },
        showDialog2 () {
            this.$dialog({
                msg: '提示',
                center: true,
                confirm: {
                    show: false
                },
                onCancelBtn: function() {
                    console.log('取消dialog')
                }
            })
        }
    }
}
</script>

<style>
.btn {
    display: inline-block;
    border: 1px solid #bbb;
    background: #fff;
    padding: 5px 10px;
    margin:0 10px;
}
</style>