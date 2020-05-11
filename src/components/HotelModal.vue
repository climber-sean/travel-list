<template>
    <div>
        <div class="hotel__modal">
            <h2>Hotels</h2>
            <h3>In {{ hotelName }}</h3>
            <app-hotel-form></app-hotel-form>
        </div>
    </div>
</template>

<script>
import HotelForm from './HotelForm'
import { mapGetters } from 'vuex'

export default {
    components: {
        appHotelForm: HotelForm
    },
    computed: {
        ...mapGetters([
            'hotelName'
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