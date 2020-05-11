<template>
<div>
    <div class="date-picker__modal">
        <h2>Visited</h2>
        <p>Please select the date range for when you visited.</p>
        <v-date-picker
        color="green"
        mode="range"
        v-model="visitedDate"></v-date-picker>
        <button @click="logDates(destIndex)">Confirm</button>
    </div>
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
            this.visitDestination(args);
            this.visitedDate = '';
            this.$emit('close-date-modal');
        } 
    }
}
</script>

<style lang="scss">
.date-picker {
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