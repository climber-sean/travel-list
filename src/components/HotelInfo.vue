<template>
    <div class="hotel-info">
        <div class="hotel-info__header">
            <div class="hotel-info__header--image">
                <img :src="hotelPhotos.data.hotelImages[3].baseUrl" class="responsive-img">
            </div>
            <div class="hotel-info__header--title">
                <h4>{{ hotel.body.propertyDescription.name }}</h4>
                <span>{{ hotel.body.propertyDescription.address.fullAddress }}</span>
            </div>
        </div>
        <div class="hotel-info__info">

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    mounted() {
        this.photoUrl();
    },
    computed: {
        ...mapGetters([
            'hotel',
            'hotelPhotos'
        ])
    },
    methods: {
        photoUrl() {
            console.log(this.$store.getters.hotelPhotos);
        }
    }
}
</script>

<style lang="scss">
@import '../assets/global.scss';

.hotel-info {
    margin-top: 20px;
    &__header {
        display: flex;

        &--title {
            text-align: left;
            h4 {
                font-family: 'Montserrat', sans-serif;
                margin: 0;
            }

            span {
                font-family: 'Montserrat', sans-serif;
                font-size: 12px;
                color: rgba(0,0,0,0.5);
            }
        }
    }
}
</style>