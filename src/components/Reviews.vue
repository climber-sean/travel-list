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
                <app-close-button class="close" @clicked="closeModal"></app-close-button>
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

            @media handheld, only screen and (max-width: $mobile) {
                width: 90%;
                max-height: 480px;
            }

            h2 {
                font-family: 'Montserrat', sans-serif;

                &:after {
                    display: block;
                    content: '';
                    height: 2px;
                    width: 150px;
                    background: $primary-colour;
                    position: relative;
                    left: calc(50% - 75px);
                    margin-top: 5px;
                }
            }

            ul {
                overflow-y: scroll;
                height: 500px;
                list-style: none;
                margin: 0 0 20px 0;
                padding: 0;

                @media handheld, only screen and (max-width: $mobile) {
                    height: 280px;
                }

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

            .close {
                position: absolute;
                top: -10px;
                right: -10px;
            }
        }
    }
</style>