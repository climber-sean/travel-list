<template>
    <div class="my-lists">
        <div :class="{ 'blur-element': showDatePicker }" class="container">

            <div class="my-lists__saved">
                <h2>Saved Destinations</h2>
                <ul class="saved-list">
                    <li v-for="(dest, index) in savedDestinations" :key="dest.location_id" class="saved-list__item">
                        <img class="responsive-img" :src="dest.photo.images.small.url" />
                        <div class="item-info">
                            <h3>{{ dest.name }}</h3>
                            <div class="co-ords">
                                <p>Longitude: <span>{{ dest.longitude }}</span></p>
                                <p>Latitude: <span>{{ dest.latitude }}</span></p>
                            </div>
                            <button @click="removeDestination(dest.name)">Delete</button>
                            <button @click="passDestination(dest, index)">Visited</button>
                            <button>More</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="my-lists__visited">
                <h2>Visited Destinations</h2>
                <ul class="visited-list">
                    <li v-for="(dest, index) in visitedDestinations" :key="dest.location_id" class="saved-list__item">
                        <img :src="dest.photo.images.small.url" class="responsive-img">
                        <div class="item-info">
                            <h3>{{ dest.name }}</h3>
                            <div class="co-ords">
                                <p>Longitude: <span>{{ dest.longitude }}</span></p>
                                <p>Latitude: <span>{{ dest.latitude }}</span></p>
                            </div>
                            <span>{{ dest.startDate }} - {{ dest.endDate }}</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <app-date-picker @close-date-modal="showDatePicker = !showDatePicker" :destIndex="destIndex" v-if="showDatePicker" class="date-picker"></app-date-picker>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import VisitedDatePicker from './VisitedDatePicker.vue';

export default {
    data () {
        return {
            destIndex: null,
            showDatePicker: false
        }
    },
    computed: {
        ...mapGetters([
            'savedDestinations',
            'visitedDestinations'
        ])
    },
    methods: {
        ...mapActions([
            'removeDestination',
            'visitDestination'
        ]),
        passDestination(dest, index) {
            this.destObj = dest;
            this.destIndex = index;
            this.showDatePicker = !this.showDatePicker;
        }
    },
    components: {
        appDatePicker: VisitedDatePicker
    }
}
</script>

<style lang="scss">

.my-lists {
    margin-top: 50px;
    position: relative;

    .container {
        display: flex;
        justify-content: space-around;
    }
}

.my-lists__saved,
.my-lists__visited {
    width: 420px;
    text-align: center;
    padding: 15px 0;
    
    h2 {
        margin: 0;
    }
}

.saved-list,
.visited-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    padding: 15px;

        &__item {
        flex: 1 1 calc(100% / 3 - 20px);
        // max-height: 500px;
        border-radius: 25px;
        max-width: 400px;
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

            h3 {
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
                background: lighten(black,30%);
                color: white;
            }
        }
    }
}
</style>