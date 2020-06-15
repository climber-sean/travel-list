<template>
    <div>
        <ul>
            <li v-for="hotel in hotelList" :key="hotel.id">
                <div class="hotel-result">
                    <div class="hotel-result__image">
                        <img class="responsive-img" :src="hotel.thumbnailUrl" :alt="hotel.name">
                    </div>
                    <div class="hotel-result__info">
                        <h2 class="info-title">{{ hotel.name }}</h2>
                        <span class="info-address">{{ hotel.address.streetAddress }}</span>
                        <span class="star-rating" v-for="n in parseInt(hotel.starRating)">&#9733</span>
                        <app-button @clicked="moreInfo(hotel.id)" :btn-type="'blue'">More info</app-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'hotelList',
            'hotelBookingLink'
        ]),
    },
    methods: {
        ...mapActions([
            'getHotelInfo'
        ]),
        moreInfo(hotelID) {
            const url = 'https://hotels.com/dl/hotel/details.html?hotelId=' + hotelID + '&q-check-in=' + this.hotelBookingLink[1] + '&q-check-out=' + this.hotelBookingLink[2] + '&q-room-0-adults=' + this.hotelBookingLink[3]
            window.open(url, '_blank');
        }
    }
}
</script>

<style lang="scss">
@import '../assets/global.scss';

ul {
    height: 400px;
    overflow-y: scroll;
    padding: 0;
    margin: 0;

    li {
        margin: 15px 0;
    }
}

.hotel-result {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    &__image {
        width: 50%;

        img {
            max-height: 80px;
        }
    }

    &__info {
        width: 50%;
        text-align: left;

        .info-title {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            margin: 0;
        }

        .info-address {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            display: block;
        }

        .star-rating {
            color: goldenrod;
            display: inline-block;
        }

        button {
            display: block;
            margin: 5px 0 0 0;
        }
    }
}

</style>