<template>
    <div>
        <label for="check-in">Check-in Date</label>
        <v-date-picker :masks="{data: ['YYYY/MM/DD']}" v-model="formSubmission.checkin"></v-date-picker>
        <label for="check-out">Check-out Date</label>
        <v-date-picker :masks="{data: ['YYYY/MM/DD']}" v-model="formSubmission.checkout"></v-date-picker>
        <button @click="testFunction">Test</button>
    </div>
</template>

<script>
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';

export default {
    data() {
        return {
            formSubmission: {
                checkin: '',
                checkout: ''
            }
        }
    },
    components: {
        Calendar,
        DatePicker
    },
    methods: {
        testFunction() {
            console.log(this.formSubmission);
        }
    }
}
</script>

<style lang="scss">

</style>