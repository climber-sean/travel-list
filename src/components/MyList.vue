<template>
    <div class="my-lists">
        <div class="container">

            <div class="my-lists__saved">
                <ul class="saved-list">
                    <li v-for="(dest, index) in savedDestinations" :key="index" class="saved-list__item">
                        <img class="responsive-img" :src="dest.photo.images.small.url" />
                        <div class="item-info">
                            <h2>{{ dest.name }}</h2>
                            <div class="co-ords">
                                <p>Longitude: <span>{{ dest.longitude }}</span></p>
                                <p>Latitude: <span>{{ dest.latitude }}</span></p>
                            </div>
                            <button>Delete</button>
                            <button>Learn More</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="my-lists__visited">
                <ul class="visited-list">
                    <li class="visited-list__item">
                        Test
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'savedDestinations',
        ])
    }
    
}
</script>

<style lang="scss">
.saved-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 15px;
    padding: 0 15px;

        &__item {
        flex: 0 0 calc(100% / 3 - 20px);
        max-width: calc(100% / 3 - 20px);
        max-height: 500px;
        border-radius: 25px;
        background: white;
        padding: 15px;
        margin: 10px;
        display: flex;
        box-shadow: 0 0 10px 4px rgba(0,0,0,0.2);
        transition: all 0.2s ease-in;

        &:hover {
            transform: scale(1.05);
        }

        img {
            border-radius: 10px;
        }

        .item-info {

            margin: 0 0 0 10px;

            .co-ords {
                margin-bottom: 10px;
            }

            h2 {
                font-family: 'Montserrat', sans-serif;
                font-size: 20px;
                margin: 0;
            }

            p {
                font-family: 'Montserrat', sans-serif;
                font-size: 12px;
                margin: 0;

                span {
                    color: lightcoral;
                }
            }

            button {
                margin: 0;
                border: none;
                width: 100%;
                box-shadow: none;
                text-shadow: none;
                font-family: 'Montserrat', sans-serif;
                cursor: pointer;
                margin: 4px 0;
                padding: 5px 0;
            }
        }
    }
}
</style>