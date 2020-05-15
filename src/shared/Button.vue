<template>
    <button @click="onClick" class="btn" :class="'btn--' + btnType">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        onClick: {
            type: Function,
            required: true
        },
        btnType: String
    },
}
</script>

<style lang="scss">
@import './../assets/global.scss';

    .btn {
        padding: 8px 24px;
        background: $button-green;
        text-decoration: none;
        color: white;
        font-family: 'Montserrat';
        font-size: 12px;
        margin: 0 5px;
        border-radius: 3px;
        box-shadow: 0 6px 5px -5px rgba(0,0,0,0.4);
        transition: all 0.1s linear;

        &:hover {
            background: darken($button-green, 10%);
        }

        &--red {
            background: $button-red;

            &:hover {
                background: darken($button-red, 10%);
            }
        }

        &--blue {
            background: $button-blue;

            &:hover {
                background: darken($button-blue, 10%)
            }
        }
    }
</style>