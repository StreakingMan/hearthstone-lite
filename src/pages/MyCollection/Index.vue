<script setup lang="ts">
import Card from '../../components/Card.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();

const active = ref(0);
</script>
<template>
    <div class="collection__container">
        <div class="collection__cards">
            <div class="collection__cards__header">
                <div
                    v-for="i of 10"
                    :key="i"
                    class="class-option"
                    :class="{ active: active === i }"
                    @click="active = i"
                ></div>
            </div>
            <div class="collection__cards__content">
                <p class="class-label">恶魔猎手</p>
                <div class="card-list">
                    <div class="card-item">
                        <Card />
                        <div class="num">x2</div>
                    </div>
                    <div class="card-item">
                        <Card />
                    </div>
                    <div class="card-item">
                        <Card />
                    </div>
                    <div class="card-item">
                        <Card />
                    </div>
                    <div class="card-item">
                        <Card />
                    </div>
                </div>
            </div>
            <div class="collection__cards__searcher"></div>
        </div>
        <div class="collection__decks">
            <div class="collection__decks__header">我的套牌</div>
            <div class="collection__decks__list">
                <div class="collection__decks__item"></div>
                <div class="collection__decks__item"></div>
                <div class="collection__decks__item"></div>
                <button
                    class="border-dashed border-8"
                    @click="$router.push('/hero-select')"
                >
                    新建套牌
                </button>
            </div>

            <button class="text-3xl" @click="$router.push('/')">返回</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.collection {
    &__container {
        @apply grid grid-cols-5 items-stretch justify-center h-screen;
    }

    &__cards {
        @apply col-span-4 flex flex-col p-4;

        &__header {
            @apply flex h-[72px] gap-1;

            .class-option {
                @apply h-full aspect-[1.2] relative
                transition-transform origin-bottom
                cursor-pointer;

                &::before {
                    @apply absolute inset-0 transition-all
                    border-x-4 border-y-2 border-black rounded-hand-drawn-1 rotate-2
                    pointer-events-none;

                    content: '';
                }

                &.active {
                    @apply transform scale-110;

                    &::before {
                        @apply border-4 rounded-hand-drawn-0 rotate-0;
                    }
                }
            }
        }

        &__content {
            @apply flex-grow flex flex-col justify-around
            relative;

            &::before {
                @apply absolute w-full h-full
                border-8 rounded-hand-drawn-3 border-black rotate-1
                pointer-events-none;

                content: '';
            }

            .class-label {
                @apply text-5xl text-center py-6;
            }

            .card-list {
                @apply grid grid-cols-4 grid-rows-2 gap-8
                w-full aspect-[1.6];
            }

            .card-item {
                @apply flex flex-col items-center justify-start p-8;

                .num {
                    @apply text-5xl text-center font-extrabold;
                }
            }
        }

        &__searcher {
            @apply h-[72px];
        }
    }

    &__decks {
        @apply col-span-1 flex flex-col p-4;

        &__header {
            @apply text-5xl text-center py-6;
        }

        &__list {
            @apply flex-grow flex flex-col gap-2;
        }

        &__item {
            @apply relative aspect-[3] transition-all hover:scale-105;

            &::before {
                @apply absolute inset-0
                border-8 rounded-hand-drawn-0 border-black transition-all
                pointer-events-none;

                content: '';
            }

            &:hover::before {
                @apply rounded-hand-drawn-2 scale-105 rotate-1;
            }
        }
    }
}
</style>
