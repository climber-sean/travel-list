<template>
    <div class="my-lists">
        <div :class="{ 'blur-element': showDatePicker || hotelModal }" class="container">

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
                            <app-button @clicked="removeDestination(dest.name)" :btn-type="'red'">Remove</app-button>
                            <app-button @clicked="passDestination(dest, index)" :btn-type="'green'">Visited</app-button>
                            <app-button @clicked="getDestinationID(locationTrim(dest.location_string))" :btn-type="'blue'">Hotels</app-button>
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
                            <h4>Visited</h4>
                            <span>{{ dest.startDate }} - {{ dest.endDate }}</span>
                        </div>
                    </li>
                </ul>
            </div>

        </div>

        <transition name="slide-fade">
        <app-date-picker @close-date-modal="showDatePicker = !showDatePicker" :destIndex="destIndex" v-if="showDatePicker" class="date-picker"></app-date-picker>
        <app-hotel-modal v-if="hotelModal" class="hotel"></app-hotel-modal>
        </transition>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import VisitedDatePicker from './VisitedDatePicker.vue';
import HotelModal from './HotelModal';

export default {
    data () {
        return {
            destIndex: null,
            showDatePicker: false,
            showHotelModal: true
        }
    },
    computed: {
        ...mapGetters([
            'savedDestinations',
            'visitedDestinations',
            'hotelModal'
        ])
    },
    methods: {
        ...mapActions([
            'removeDestination',
            'visitDestination',
            'getDestinationID'
        ]),
        passDestination(dest, index) {
            this.destObj = dest;
            this.destIndex = index;
            this.showDatePicker = !this.showDatePicker;
        },
        locationTrim(data) {
            if (data.indexOf(',') > -1) {
                var x = data.substring(0, data.indexOf(','));
                console.log(x);
                return x;
            } else {
                console.log(data)
                return data
            }
        }
    },
    components: {
        appDatePicker: VisitedDatePicker,
        appHotelModal: HotelModal
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
        font-family: 'Montserrat', sans-serif;
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
        height: 100%;

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

            .co-ords {
                margin-bottom: 10px;
            }

            h3 {
                font-family: 'Montserrat', sans-serif;
                font-size: 20px;
                margin: 0;
            }

            h4 {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                margin: 0 0 5px 0;
            }

            span {
                font-family: 'Montserrat', sans-serif;
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
                margin: 4px 0;
                width: 100%;
            }
        }
    }
}
</style>