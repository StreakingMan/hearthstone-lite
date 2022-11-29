<template>
    <div
        class="flex-spacer"
        :style="{
            minWidth: minWidth ? minWidth + 'px' : undefined,
            maxWidth: maxWidth ? maxWidth + 'px' : undefined,
        }"
    ></div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{ minWidth?: number | string; maxWidth?: number | string }>(),
    {
        minWidth: undefined,
        maxWidth: undefined,
    }
);
</script>
