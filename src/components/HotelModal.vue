<template>
    <div>
        <div class="hotel__modal">
            <h2>Hotels</h2>
            <h3>In {{ hotelName }}</h3>
            <app-hotel-form v-if="hotelForm"></app-hotel-form>
            <app-loader v-show="!hotelForm && !hotelResult"></app-loader>
            <app-hotel-results v-if="hotelResult"></app-hotel-results>
        </div>
    </div>
</template>

<script>
import HotelForm from './HotelForm';
import Loader from './../shared/Loader';
import HotelResults from './HotelResults';
import { mapGetters } from 'vuex';

export default {
    components: {
        appHotelForm: HotelForm,
        appLoader: Loader,
        appHotelResults: HotelResults
    },
    computed: {
        ...mapGetters([
            'hotelName',
            'hotelForm',
            'hotelResult'
        ])
    }
}
</script>

<style lang="scss">
.hotel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 999;
    top: 0;

    &__modal {
        width: 400px;
        height: auto;
        border-radius: 25px;
        background: whitesmoke;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
    }
}
</style>