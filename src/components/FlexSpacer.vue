<script setup lang="ts">
withDefaults(
    defineProps<{ minWidth?: number | string; maxWidth?: number | string }>(),
    {
        minWidth: undefined,
        maxWidth: undefined,
    }
);
</script>

<template>
    <div
        class="grow"
        :style="{
            minWidth: minWidth ? minWidth + 'px' : undefined,
            maxWidth: maxWidth ? maxWidth + 'px' : undefined,
        }"
    ></div>
</template>
