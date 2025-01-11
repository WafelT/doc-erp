<template>
    <a class="ui-media-link" target="_blank" :href="to">
        <img :src="imgSrc" alt="vuex-scheme">
    </a>
</template>

<script setup lang="ts">
// @ts-ignore
const props = defineProps<{
    imgSrc: string;
    to: string;
}>()
</script>

<style lang="scss">
@use 'index.scss';
</style>
