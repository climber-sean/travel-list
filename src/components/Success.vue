<template>
    <div>
        <div class="success-message__modal">
            <div class="modal__text">
                <font-awesome-icon v-if="messageType" :class="{ grow: growEle }" class="success-icon success-icon--check" :icon="['fas', 'check-circle']"></font-awesome-icon>
                <font-awesome-icon v-else :class="{ grow: growEle }" class="success-icon success-icon--times" :icon="['fas', 'times-circle']"></font-awesome-icon>
                <p v-if="messageType">You have successfully added {{ destination }} to your list!</p>
                <p v-else>{{ destination }} is already in your list!</p>
                <app-close-button class="close" @clicked="closeModal"></app-close-button>
                <app-button @clicked="myList" :btn-type="'green'">My List</app-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.growEle = !this.growEle
    },
    data() {
        return {
            growEle: false
        }
    },
    props: {
        destination: String,
        messageType: Boolean,
    },
    methods: {
        closeModal() {
            this.$emit('close-modal', false);
        },
        consoleSuccess() {
            console.log('This button works');
        },
        myList() {
            this.$router.push('my-list')
        }
    },
}
</script>

<style lang="scss">
@import '../assets/global.scss';

    .success-message {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 999;
        top: 0;

        &__modal {
            width: 320px;
            height: auto;
            @include modal;
            position: relative;

            @media handheld, only screen and (max-width: $mobile) {
                width: 290px;
            }

            p {
                font-family: 'Montserrat';
                margin: 30px 0 40px 0;
            }

            .close {
                position: absolute;
                top: -10px;
                right: -10px;
            }
        }
    }

    @keyframes grow {
        0% {
            transform: scale(0)
        }
        80% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1)
        }
    }

    .success-icon {
        font-size: 48px;
        transform: scale(0);

        &--check {
            color: green;
        }

        &--times {
            color: red;
        }

        &.grow {
            animation: grow 0.4s ease-in forwards 0.2s;
        }

    }
</style>


