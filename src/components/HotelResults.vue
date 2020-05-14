<template>
    <div>
        <ul>
            <li v-for="hotel in hotelList" :key="hotel.id">
                <p>{{ hotel.name }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'hotelList'
        ])
    }
}
</script>

<style lang="scss">

</style>