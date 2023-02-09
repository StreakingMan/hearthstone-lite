<script setup lang="ts">
//
</script>

<template>
    <div class="hero__wrapper">
        <img src="../assets/cards/铜须/铜须.png" alt="" />
        <div class="hero__name">德鲁伊</div>
        <div class="hero__skill"></div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    &__wrapper {
        width: 200px;
        @apply relative aspect-[0.9] select-none
        border-8 rounded-tl-full rounded-tr-full border-black;

        img {
            -webkit-user-drag: none;
            @apply w-full h-full object-cover;
        }
    }

    &__skill {
        @apply absolute bottom-0 left-0 w-[40%] aspect-square
        transform -translate-x-1/2 translate-y-1/3
        rounded-full border-4 border-black
        bg-white;
    }

    &__name {
        @apply absolute bottom-0 left-0 w-full
        bg-gray-600/30 backdrop-blur
        text-2xl text-white
        py-1 pl-[22%];
    }
}
</style>
