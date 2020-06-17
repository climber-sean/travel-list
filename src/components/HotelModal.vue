<template>
    <div>
        <div class="hotel__modal">
            <h2>Hotels</h2>
            <h3>In {{ hotelName }}</h3>
            <app-hotel-form v-if="hotelForm"></app-hotel-form>
            <app-loader v-show="!hotelForm && !hotelResult && !hotelInfo"></app-loader>
            <app-hotel-results v-if="hotelResult"></app-hotel-results>
            <app-hotel-info v-if="hotelInfo"></app-hotel-info>
            <app-close-button @clicked="closeModal" class="close"></app-close-button>
        </div>
    </div>
</template>

<script>
import HotelForm from './HotelForm';
import Loader from './../shared/Loader';
import HotelResults from './HotelResults';
import HotelInfo from './HotelInfo';
import { mapGetters } from 'vuex';

export default {
    components: {
        appHotelForm: HotelForm,
        appLoader: Loader,
        appHotelResults: HotelResults,
        appHotelInfo: HotelInfo
    },
    computed: {
        ...mapGetters([
            'hotelName',
            'hotelForm',
            'hotelResult',
            'hotelInfo'
        ])
    },
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

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
        @include modal;
        text-align: center;
        position: relative;

        @media handheld, only screen and (max-width: $mobile) {
            width: 290px;
        }

        .close {
            position: absolute;
            top: -10px;
            right: -10px;
        }

        h2 {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
        }

        h3 {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            font-size: 14px;
            margin-bottom: 10px;

            &:after {
                display: block;
                content: '';
                height: 2px;
                width: 150px;
                background: $primary-colour;
                position: relative;
                left: calc(50% - 75px);
                margin-top: 5px;
            }
        }
    }
}
</style>