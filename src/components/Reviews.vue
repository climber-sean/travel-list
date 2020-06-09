<template>
    <div>
        <div class="reviews__modal">
            <h2>{{ destination }} Reviews</h2>
            <app-loader v-if="reviewStatus"></app-loader>
            <ul v-if="!reviewStatus">
                <li v-for="(review, index) in reviewResult" :key="index">
                    <span v-for="n in parseInt(review.rating)">&#9733</span>
                    <p>{{ review.text }}</p>
                </li>
                <button class="close-btn" @click="closeModal"><font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon></button>
            </ul>
            <app-button @clicked="saveDestination(destIndex), addedInModal()" :btn-type="'green'">Add to List</app-button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import Loader from '../shared/Loader';

export default {
    props: {
        destination: String,
        destIndex: Number
    },
    computed: {
        ...mapGetters([
            'reviewResult',
            'reviewStatus'
        ])
    },
    methods: {
        ...mapActions([
            'saveDestination',
            'clearReviewsArr'
        ]),
        closeModal() {
            this.$emit('close-review-modal', false);
        },
        addedInModal() {
            this.$emit('added-in-modal', false);
        }
    },
    components: {
        appLoader: Loader
    }
}
</script>

<style lang="scss">
@import './../assets/global.scss';

    .reviews {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        height: 100vh;
        width: 100%;
        z-index: 999;
        top: 0;

        &__modal {
            width: 60%;
            position: relative;
            @include modal;

            h2 {
                font-family: 'Montserrat', sans-serif;
            }

            ul {
                overflow-y: scroll;
                height: 500px;
                list-style: none;
                margin: 0 0 20px 0;
                padding: 0;

                li {
                    border-bottom: 1px solid rgba(0,0,0,0.1);
                    margin: 15px 0;
                    padding: 0 10px;
                    text-align: left;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 16px;

                    span {
                        color: goldenrod;
                        font-size: 24px;
                    }
                }
            }

            .close-btn {
                position: absolute;
                top: -10px;
                left: -10px;
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
        }
    }
</style>