<script setup lang="ts">
import FlexSpacer from '../components/FlexSpacer.vue';
import { computed } from 'vue';

const VISIT_TAG = 'VISIT-TAG';

const showTitle = computed<boolean>(() => !sessionStorage.getItem(VISIT_TAG));

setTimeout(() => {
    sessionStorage.setItem(VISIT_TAG, 'stuff');
}, 300);
</script>

<template>
    <div :class="{ 'container-move': showTitle }">
        <div v-if="showTitle" class="title">
            <div class="animate__animated animate__bounceInRight">炉石传说</div>

            <div
                class="animate__animated animate__bounceInRight animate__delay-1s"
            >
                Lite
            </div>
            <div
                class="animate__animated animate__bounceInRight animate__delay-2s"
            >
                （丐版）
            </div>
        </div>
        <div class="navs">
            <RouterLink class="nav" to="/hearthstone">传统对战</RouterLink>
            <RouterLink class="nav" to="/battlegrounds">酒馆战棋</RouterLink>
            <RouterLink class="nav" to="/mercenaries">佣兵战纪</RouterLink>
            <RouterLink class="nav" to="/modes">其他模式</RouterLink>
            <div class="flex gap-14">
                <FlexSpacer />
                <RouterLink class="nav" to="/open-packs">开包</RouterLink>
                <FlexSpacer />
                <RouterLink class="nav" to="/my-collection">
                    我的收藏
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes container-move {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-50%);
    }
}

.container-move {
    animation: container-move 1s;
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
}

@keyframes title-move {
    0%,
    46% {
        transform: translateX(4.11ch);
    }

    56%,
    80% {
        transform: translateX(1.34ch);
    }

    85%,
    100% {
        transform: translateX(0);
    }
}

.title {
    @apply text-9xl font-semibold flex items-center justify-center h-screen transition-transform;

    animation: title-move 3s ease-in-out;
}

.navs {
    @apply flex flex-col justify-center items-center gap-12 h-screen;
}

.nav {
    @apply text-7xl cursor-pointer hover:scale-125 transition-transform;
}
</style>
