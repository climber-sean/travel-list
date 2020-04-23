<template>
    <div>
        <h2>Visited</h2>
        <p>Please select the date range for when you visited.</p>
        <v-date-picker
        color="green"
        mode="range"
        v-model="visitedDate"></v-date-picker>
        <button @click="logDates(destIndex)">Confirm</button>
    </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            visitedDate: ''
        }
    },
    props: {
        dest: Object,
        destIndex: Number
    },
    components: {
        Calendar,
        DatePicker
    },
    methods: {
        ...mapActions([
            'visitDestination'
        ]),
        logDates(index) {
            var startDate = this.visitedDate.start.toString().slice(4,15);
            var endDate = this.visitedDate.end.toString().slice(4,15);
            var args = [
                index,
                startDate,
                endDate
            ]
            // this.$store.dispatch(visitDestination(index, startDate, endDate));
            this.visitDestination(args);
            this.visitedDate = '';
            this.$emit('close-date-modal');
        } 
    }
}
</script>

<style lang="scss">

</style>