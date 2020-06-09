<template>
    <div>
        <div class="success-message__modal">
            <div class="modal__text">
                <font-awesome-icon v-if="messageType" :class="{ grow: growEle }" class="success-icon success-icon--check" :icon="['fas', 'check-circle']"></font-awesome-icon>
                <font-awesome-icon v-else :class="{ grow: growEle }" class="success-icon success-icon--times" :icon="['fas', 'times-circle']"></font-awesome-icon>
                <p v-if="messageType">You have successfully added {{ destination }} to your list!</p>
                <p v-else>{{ destination }} is already in your list!</p>
                <app-button @clicked="closeModal" :btn-type="'red'">Close</app-button>
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

            p {
                font-family: 'Montserrat';
                margin: 30px 0 40px 0;
            }

            // button, a {
            //     padding: 8px 24px;
            //     background: #3ea167;
            //     text-decoration: none;
            //     color: white;
            //     font-family: 'Montserrat';
            //     font-size: 12px;
            //     margin: 0 5px;
            //     border-radius: 3px;
            //     box-shadow: 0 6px 5px -5px rgba(0,0,0,0.4);
            //     transition: all 0.1s linear;

            //     &:hover {
            //         background: darken(#3ea167, 10%);
            //     }
            // }

            // button {
            //     background: #b02727;

            //     &:hover {
            //         background: darken(#b02727, 10%) !important;
            //     }
            // }
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


