<template>
    <div>
        <div class="hotel__modal">
            <h2>Hotels</h2>
            <app-hotel-form></app-hotel-form>
        </div>
    </div>
</template>

<script>
import HotelForm from './HotelForm'

export default {
    components: {
        appHotelForm: HotelForm
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
        height: 300px;
        border-radius: 25px;
        background: whitesmoke;
        padding: 20px;
        box-sizing: border-box;
        text-align: center;
    }
}
</style>