<template>
    <div class="loader-container">
        <div class="logo-type">
            <span>T</span>
        </div>
        <div class="logo-circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.loader-container {
    width: 250px;
    height: 250px;
    text-align: center;
    margin: 0 auto;
}

.logo-type {
    text-align: center;
    font-size: 48px;
    font-family: 'Pacifico', cursive;
    color: #48bb78;
    font-weight: 800;
}

@keyframes circle-grow {
    0% {
        transform: scale(1) translateY(0);
        background: lighten(black, 25%);
    }
    50% {
        transform:translateY(5px);
        background: #48bb78;

    }
    100% {
        transform: scale(1) translateY(0);
        background: lighten(black,25%);
    }
}

.logo-circles > span {
    width: 14px;
    height: 14px;
    background: lighten(black, 25%);
    border-radius: 24px;
    display: inline-block;
    animation: 0.8s circle-grow infinite;
    margin: 0 3px;

    &:nth-child(2) {
        animation-delay: 0.2s;
    }

    &:nth-child(3) {
        animation-delay: 0.4s;
    }

    &:nth-child(4) {
        animation-delay: 0.6s;
    }
}
</style>