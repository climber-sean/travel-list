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
                <button class="close-btn" @click="closeModal">Close</button>
                <app-button @clicked="saveDestination(destIndex), addedInModal()" :btn-type="'green'">Add to List</app-button>
            </ul>
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
            height: 500px;
            border-radius: 25px;
            background: white;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);

            h2 {
                font-family: 'Montserrat', sans-serif;
            }

            ul {
                overflow-y: scroll;
                height: calc(100% - 70px);
                list-style: none;
                margin: 0;

                li {
                    border: 1px solid rgba(0,0,0,0.1);
                    margin: 15px 0;
                    border-radius: 10px;
                    padding: 0 10px;
                    text-align: left;
                }
            }

            .close-btn {
                position: absolute;
                top: 10px;
                left: 10px;
            }
        }
    }
</style>