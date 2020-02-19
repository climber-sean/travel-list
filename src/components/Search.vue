<template>
    <div class="search">
        <div class="container">
            <div class="search-bar">
                <input v-model="searchQuery" @click="clearSearch" type="text" class="search-bar__input">
                <button @click="locationSearch(searchQuery)" class="search-bar__button">Search</button>
            </div>
        </div>
        <div class="search-container">
            <transition-group class="search-results" name="growEnter" tag="ul">
                <li class="search-results__item" v-for="(dest, index) in searchResult" :key="index">
                    <img class="responsive-img" :src="dest.photo.images.small.url" />
                    <div class="item-info">
                        <h2>{{ dest.name }}</h2>
                        <div class="co-ords">
                            <p>Longitude: <span>{{ dest.longitude }}</span></p>
                            <p>Latitude: <span>{{ dest.latitude }}</span></p>
                        </div>
                        <button @click="saveDestination(index)">Add to List</button>
                        <button>Learn More</button>
                    </div>
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                searchQuery: 'Type Destination'
            }
        },
        methods: {
            ...mapActions([
                'locationSearch',
                'setSearch'
            ]),
            ...mapMutations([
                'saveDestination'
            ]),
            clearSearch() {
                if (this.searchQuery == 'Type Destination') {
                    this.searchQuery = '';
                }
            },
        },
        computed: {
            ...mapGetters([
                'searchResult',
            ])
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
            height: 35px;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            padding-left: 15px;
            border: 1px solid whitesmoke;
            font-size: 12px;
            font-family: 'Montserrat', sans-serif;
        }

        &__button {
            margin: 0;
            margin-left: -5px;
            border: none;
            height: 35px;
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
    }

    // list items enter animation

    @keyframes grow {
        0% {
            transform: scale(0);
        }
        70% {
            transform: scale(1.1);
        }
        100% {
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
        }

        .item-info {

            margin: 0 0 0 10px;

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