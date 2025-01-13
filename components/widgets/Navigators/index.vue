<template>
    <div class="navigators">
        <div class="navigators__container">
            <button @click="scrollToTop" data-navigator-btn="up" class="navigators__item navigators__item--up">
                <v-icon>mdi-arrow-up</v-icon>
            </button>
            <button @click="scrollToBottom" data-navigator-btn="down" class="navigators__item">
                <v-icon>mdi-arrow-down</v-icon>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
</script>

<style lang="scss">
@use 'index.scss';
</style>