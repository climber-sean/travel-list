<template>
<div>
    <div class="date-picker__modal">
        <h2>Visited</h2>
        <p>Please select the date range for when you visited.</p>
        <p class="warning" v-if="dateNotPresent">No date range entered</p>
        <v-date-picker
        color="green"
        mode="range"
        v-model="visitedDate"
        class="d-pick"></v-date-picker>
        <app-close-button @clicked="closeModal" class="close"></app-close-button>
        <app-button @clicked="logDates(destIndex)" :btn-type="'green'">Confirm</app-button>
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
            visitedDate: '',
            dateNotPresent: false
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
            if (this.visitedDate) {
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
            } else {
                this.dateNotPresent = true;
            }
        },
        closeModal() {
            this.$emit('close-date-modal');
        }
    },
    computed: {
        datePresent() {
            if (this.visitedDate) {
                return true;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/global.scss';

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
        position: relative;
        @include modal;

        @media handheld, only screen and (max-width: $mobile) {
            width: 290px;
        }

        .close {
            position: absolute;
            top: -10px;
            right: -10px;
        }

        h2, p {
            font-family: 'Montserrat', sans-serif;
        }

        .warning {
            color: red;
            font-size: 12px;
        }

        .d-pick {
            display: block;
            margin-bottom: 20px;
        }
    }
}
</style>