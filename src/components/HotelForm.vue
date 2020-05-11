<template>
    <div>
        <label for="Adults">No. of Adults</label>
        <input type="text" v-model="formSubmission.adults">
        <label for="check-in">Check-in Date</label>
        <v-date-picker v-model="formData.checkin"></v-date-picker>
        <label for="check-out">Check-out Date</label>
        <v-date-picker v-model="formData.checkout"></v-date-picker>
        <button @click="getHotels(formSubmission)">Test</button>
    </div>
</template>

<script>
import Vue from 'vue';
import moment from 'moment';
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';

Vue.prototype.moment = moment

import { mapActions } from 'vuex';

export default {
    data() {
        return {
            formData: {
                checkin: '',
                checkout: ''
            },
            formSubmission: {
                checkin: '',
                checkout: '',
                adults: ''
            }
        }
    },
    components: {
        Calendar,
        DatePicker
    },
    methods: {
        ...mapActions([
            'getHotels'
        ]),
        testFunction() {
            this.formSubmission.checkin = this.formatCheckIn;
            this.formSubmission.checkout = this.formatCheckOut;
            console.log(this.formSubmission);
        }
    },
    computed: {
        formatCheckIn() {
            return Vue.prototype.moment(this.formData.checkin).format('YYYY-MM-DD');
        },
        formatCheckOut() {
            return Vue.prototype.moment(this.formData.checkout).format('YYYY-MM-DD');
        }
    },
}
</script>

<style lang="scss">
    label,
    input {
        display: block;
        width: 100%;
    }
    input {
        height: 40px;
        outline: none;
        margin: 5px 0 5px 0;
        text-align: center;
    }
</style>