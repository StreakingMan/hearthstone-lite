<script setup lang="ts">
import Hero from '../../components/Hero.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
    <div class="container">
        <Hero />
        <button @click="router.back()">返回</button>
    </div>
</template>

<style scoped lang="scss">
.container {
    @apply flex items-center justify-center h-screen;
}
</style>
