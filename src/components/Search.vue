<template>
    <div class="search">
        <div class="container" :class="{ 'blur-element': added || showReviewsModal }" >
            <div class="search-bar">
                <input v-model="searchQuery" @click="clearSearch" @keydown.enter="locationSearch(searchQuery)" type="text" class="search-bar__input">
                <button @click="locationSearch(searchQuery)" class="search-bar__button">Search</button>
            </div>
        </div>
        <div :class="{ 'blur-element': added || showReviewsModal }" class="search-container">
            <transition-group class="search-results" name="growEnter" tag="ul">
                <li class="search-results__item" v-for="(dest, index) in searchResult" :key="dest.location_id">
                    <img class="responsive-img" :src="dest.photo.images.small.url" />
                    <div class="item-info">
                        <h2>{{ dest.name }}</h2>
                        <div class="co-ords">
                            <p>Longitude: <span>{{ dest.longitude }}</span></p>
                            <p>Latitude: <span>{{ dest.latitude }}</span></p>
                        </div>
                        <button @click="saveDestination(index), addSuccess(dest.name)">Add to List</button>
                        <button @click="showReviews(dest.location_id), reviewStatus(dest.name)">Reviews</button>
                    </div>
                </li>
            </transition-group>
            <em v-if="searchResult.length <= 0">{{ searchStatus }}</em>
        </div>
        <transition name="slide-fade">
        <app-success @close-modal="closeModal" v-if="added" v-bind:messageType="success" v-bind:destination="destName" class="success-message"></app-success>
        <app-reviews @close-review-modal="closeReviewModal" v-if="showReviewsModal" v-bind:destination="reviewName" class="reviews"></app-reviews>
        </transition>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    import Success from './Success.vue';
    import Reviews from './Reviews.vue';

    export default {
        data() {
            return {
                searchQuery: 'Type Destination',
                added: false,
                destName: '',
                showReviewsModal: false,
                reviewName: ''
            }
        },
        methods: {
            ...mapActions([
                'locationSearch',
                'setSearch',
                'saveDestination',
                'showReviews'
            ]),
            addSuccess(name) {
                this.destName = name;
                this.added = !this.added;
            },
            closeModal($event) {
                console.log($event);
                this.added = $event;
            },
            closeReviewModal($event) {
                console.log($event);
                this.showReviewsModal = $event
            },
            clearSearch() {
                if (this.searchQuery == 'Type Destination') {
                    this.searchQuery = '';
                }
            },
            reviewStatus(name) {
                this.showReviewsModal = true;
                this.reviewName = name
            }
        },
        computed: {
            ...mapGetters([
                'searchResult',
                'success',
                'searchStatus'
            ])
        },
        components: {
            AppSuccess: Success,
            AppReviews: Reviews
        }
    }
</script>

<style lang="scss">

    .search {
        padding: 40px 0;
    }

    .search-bar {
        text-align: center;

        &__input {
            width: 80%;
            height: 45px;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            padding-left: 15px;
            border: 1px solid whitesmoke;
            font-size: 12px;
            font-family: 'Montserrat', sans-serif;
            outline: none;
        }

        &__button {
            margin: 0;
            margin-left: -5px;
            border: none;
            height: 45px;
            box-shadow: none;
            text-shadow: none;
            color: white;
            background: #48bb78;
            padding: 0 18px;
            cursor: pointer;
            font-size: 12px;
            font-family: 'Montserrat', sans-serif;
        }
    }

    .search-container {
        margin-top: 50px;

        em {
            display: block;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
            color: lighten(black,60%);
        }
    }

    // list items enter animation

    @keyframes grow {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        70% {
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .growEnter-enter-active {
        animation: grow 0.4s ease-in;
    }

    .growEnter-leave-active {
        opacity: 0;
        transition: opacity 0.2s linear;
    }

    .search-results {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    padding: 0 15px;

        &__item {
        flex: 0 0 calc(100% / 3 - 20px);
        max-width: calc(100% / 3 - 20px);
        max-height: 500px;
        max-width: 400px;
        border-radius: 25px;
        background: white;
        padding: 15px;
        margin: 10px;
        display: flex;
        box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);
        transition: all 0.2s ease-in;

        &:hover {
            transform: scale(1.05);
        }

        img {
            border-radius: 10px;
            max-height: 150px;
            max-width: 150px;
        }

        .item-info {

            margin: 0 0 0 10px;
            width: 100%;

            .co-ords {
                margin-bottom: 10px;
            }

            h2 {
                font-family: 'Montserrat', sans-serif;
                font-size: 20px;
                margin: 0;
            }

            p {
                font-family: 'Montserrat', sans-serif;
                font-size: 12px;
                margin: 0;

                span {
                    color: lightcoral;
                }
            }

            button {
                margin: 0;
                border: none;
                width: 100%;
                box-shadow: none;
                text-shadow: none;
                font-family: 'Montserrat', sans-serif;
                cursor: pointer;
                margin: 4px 0;
                padding: 5px 0;
            }
        }
        }
    }
</style>