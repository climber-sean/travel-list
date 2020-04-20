<template>
    <div>
        <div class="reviews__modal">
            <h2>{{ destination }} Reviews</h2>
            <ul>
                <li v-for="(review, index) in reviewResult" :key="index">
                    <span v-for="n in parseInt(review.rating)">&#9733</span>
                    <p>{{ review.text }}</p>
                </li>
                <button @click="closeModal">Close</button>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: {
        destination: String
    },
    computed: {
        ...mapGetters([
            'reviewResult'
        ])
    },
    methods: {
        closeModal() {
            this.$emit('close-review-modal', false);
        }
    }
}
</script>

<style lang="scss">
    .reviews {
        background: rgba(0,0,0,0.5);
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
            height: 80%;
            border-radius: 25px;
            background: whitesmoke;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            position: relative;
            overflow: hidden;

            ul {
                overflow-y: scroll;
                height: 100%;
                list-style: none;

                li {
                    border: 1px solid rgba(0,0,0,0.1);
                    margin: 15px 0;
                    border-radius: 10px;
                    padding: 0 10px;
                    text-align: left;
                }
            }

            button {
                position: absolute;
                top: 10px;
                left: 10px;
            }
        }
    }
</style>