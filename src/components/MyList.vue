<template>
    <div class="my-lists">
        <div :class="{ 'blur-element': showDatePicker || hotelModal }" class="container">

            <div class="my-lists__saved">
                <h2>Saved Destinations <span :class="{rotate: openSaveList}" @click="openSavedList">&#9660;</span></h2>
                <ul class="saved-list" :class="{open: openSaveList}">
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
                <h2>Visited Destinations <span :class="{rotate: openVisitList}" @click="openVisitedList">&#9660;</span></h2>
                <ul class="visited-list" :class="{open: openVisitList}">
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
        <app-hotel-modal v-if="hotelModal" @closeModal="closeModal" class="hotel"></app-hotel-modal>
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
            showHotelModal: true,
            openSaveList: false,
            openVisitList: false
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
        },
        closeModal() {
            this.$store.commit('toggleHotelModal');
        },
        openSavedList() {
            this.openSaveList = !this.openSaveList
        },
        openVisitedList() {
            this.openVisitList = !this.openVisitList
        }
    },
    components: {
        appDatePicker: VisitedDatePicker,
        appHotelModal: HotelModal
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

.my-lists {
    margin-top: 50px;
    position: relative;

    @media handheld, only screen and (max-width: $mobile) {
        padding-top: 120px;
        margin-top: 0;
    }

    .container {
        display: flex;
        justify-content: space-around;

        @media handheld, only screen and (max-width: $mobile) {
            flex-direction: column;
            width: 100%;
        }
    }
}

.my-lists__saved,
.my-lists__visited {
    width: 420px;
    text-align: center;
    padding: 15px 0;

    @media handheld, only screen and (max-width: $mobile) {
        width: auto;
    }
    
    h2 {
        margin: 0;
        font-family: 'Montserrat', sans-serif;

        @media handheld, only screen and (max-width: $mobile) {
            font-size: 22px;
        }

        span {
            display: none;
            transition: all 0.2s linear;

            &.rotate {
                transform: rotate(180deg);
            }

            @media handheld, only screen and (max-width: $mobile) {
                color: $primary-colour;
                display: inline-block;
            }
        }
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
    transition: all 0.5s linear;

    &.open {
        @media handheld, only screen and (max-width: $mobile) {
            height: auto;
            display: block;
        }
    }

    @media handheld, only screen and (max-width: $mobile) {
        height: 0px;
        overflow: hidden;
        display: none;
        padding: 0px;
    }

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

                @media handheld, only screen and (max-width: $mobile) {
                    font-size: 16px;
                }
            }

            h4 {
                font-family: 'Montserrat', sans-serif;
                font-size: 16px;
                margin: 0 0 5px 0;
                
                @media handheld, only screen and (max-width: $mobile) {
                    font-size: 14px;
                }
            }

            span {
                font-family: 'Montserrat', sans-serif;

                @media handheld, only screen and (max-width: $mobile) {
                    font-size: 12px;
                }
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