<template>
    <transition name="tj-fade">
        <div class="tj-toast" v-if="visible">
            {{msg}}
        </div>
    </transition>
</template>
<script>
export default {
    data () {
        return {
            msg: '',
            visible: false,
            timer: null,
            duration: 2000
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.show()
            }
        }
    },
    methods: {
        show () {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.visible = false;
            }, this.duration)
        },
        hide (force) {
            if (force) {
                clearTimeout(this.timer);
                this.visible = false;
            }
        }
    }
}
</script>