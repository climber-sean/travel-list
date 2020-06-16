<template>
    <header>
        <div class="container">
            <div class="header">
                <div class="header__left">
                    <h1>TravelList</h1>
                </div>
                <div class="header__right">
                    <router-link to="/">Search</router-link>
                    <router-link to="/my-list">My List</router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
@import '../assets/global.scss';

$logofont: 'Pacifico', cursive;

    header {
        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);

        @media handheld, only screen and (max-width: $mobile) {
            position: fixed;
            width: 100%;
            background: white;
        }
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media handhled, only screen and (max-width: $mobile) {
            flex-direction: column;
        }

        &__left {
            h1 {
                text-align: center;
                font-size: 28px;
                font-family: $logofont;
                color: #48bb78;

                @media handheld, only screen and (max-width: $mobile) {
                    margin: 5px 0;
                }
            }
        }

        &__right {

            @media handheld, only screen and (max-width: $mobile) {
                padding: 10px 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            a {
                text-decoration: none;
                margin-right: 10px;
                font-family: 'Montserrat', sans-serif;
                font-size: 14px;
                color: black;
                transition: all 0.2s linear;

                @media handheld, only screen and (max-width: $mobile) {
                    margin: 0 10px;
                }

                &:hover {
                    color: #d4b483;
                }
            }
        }
    }
</style>