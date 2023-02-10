<script setup lang="ts">
//
</script>

<template>
    <div class="card__wrapper">
        <div class="card__meta cost">
            <div class="num">31</div>
        </div>
        <div class="card__picture">
            <img src="../assets/cards/铜须/铜须.png" alt="" />
        </div>
        <div class="card__title legendary">布莱恩·铜须</div>
        <div class="card__description">
            <span>你的战吼会触发两次</span>
        </div>
        <div class="card__meta attack"><div class="num">2</div></div>
        <!--        <div class="card__type">元素</div>-->
        <div class="card__meta health"><div class="num">4</div></div>
    </div>
</template>

<style scoped lang="scss">
.card {
    &__wrapper {
        @apply relative inline-block aspect-[0.73]
        flex flex-col
        bg-white
        select-none
        w-full min-w-[250px];

        &::before {
            @apply absolute inset-0
            border-8 border-black rounded-hand-drawn-1 rotate-2
            pointer-events-none;

            content: '';
        }
    }

    &__picture {
        @apply grow-[2] relative;

        img {
            -webkit-user-drag: none;
            @apply absolute bottom-0 w-full h-[120%]
            object-cover rounded-2xl;
        }
    }

    &__title {
        text-shadow: 0 0 6px black;
        @apply border-y-4 border-black
        absolute h-[14%] top-[48%] w-full backdrop-blur-sm
        flex items-center justify-center
        text-3xl text-white;

        &.common {
            @apply bg-gray-600/20;
        }

        &.rare {
            @apply bg-blue-600/20;
        }

        &.epic {
            @apply bg-purple-600/20;
        }

        &.legendary {
            @apply bg-orange-600/20;
        }
    }

    &__description {
        @apply flex grow-[1] items-center justify-center
        pb-[1rem] bg-amber-200/20
        text-2xl text-center;
    }

    &__type {
        @apply absolute bottom-0 left-1/2 w-1/2
        transform -translate-x-1/2
        border-x-2 border-t-2 border-black
        text-center;
    }

    &__meta {
        @apply absolute z-10
        flex items-center justify-center
        w-[28%] max-w-[28%] aspect-square backdrop-blur-sm;

        .num {
            // text-shadow: 0 4px black, 0 -4px black, 4px 0 black, -4px 0 black;
            text-shadow: 0 0 8px black;
            @apply text-7xl text-white font-extrabold;
        }

        &.cost {
            @apply top-0 left-0 rounded-[36%]
            transform -translate-x-1/3 -translate-y-1/3 rotate-45
            bg-blue-600/50;

            .num {
                @apply transform -rotate-45;
            }
        }

        @mixin left-bottom($bg-color) {
            @apply bottom-0 left-0
            rounded-full overflow-hidden
            transform -translate-x-1/3 translate-y-1/3
            #{$bg-color};
        }

        &.attack {
            @include left-bottom(bg-yellow-600/50);
        }

        &.weapon-attack {
            @include left-bottom(bg-gray-600/50);
        }

        @mixin right-bottom($bg-color) {
            @apply bottom-0 right-0
            rounded-2xl overflow-hidden
            transform translate-x-1/3 translate-y-1/3
            #{$bg-color};
        }

        &.health {
            @include right-bottom(bg-red-600/50);
        }

        &.durability {
            @include right-bottom(bg-gray-600/50);
        }
    }
}
</style>
