<template>
    <div
        class="flex-spacer"
        :style="{
            minWidth: minWidth ? minWidth + 'px' : null,
            maxWidth: maxWidth ? maxWidth + 'px' : null,
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
