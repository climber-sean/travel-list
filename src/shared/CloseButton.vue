<template>
    <button class="close-btn" @click="clicked"><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon></button>
</template>

<script>
export default {
    methods: {
        clicked() {
            this.$emit('clicked');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

    .close-btn {
        color: white;
        width: 32px;
        height: 32px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $button-red;
        border-radius: 16px;
    }
</style>