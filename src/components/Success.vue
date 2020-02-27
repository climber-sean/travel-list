<template>
    <div>
        <div class="success-message__modal">
            <div class="modal__text">
                You have successfully added {{ destination }} to your list!
                <button @click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        destination: String,
    },
    methods: {
        closeModal() {
            this.$emit('close-modal', false);
        }
    }
}
</script>

<style lang="scss">
    .success-message {
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100vh;
        width: 100%;
        z-index: 999;
        top: 0;

        &__modal {
            width: 400px;
            height: 300px;
            border-radius: 25px;
            background: whitesmoke;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
        }
    }
</style>


