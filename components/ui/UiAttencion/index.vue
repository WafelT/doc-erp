<template>
    <div class="ui-attention">
        <v-btn
            class="ui-attention__btn" 
            readonly color="primary" 
            icon size="24"
        >
            <v-icon size="16" color="white">mdi-exclamation-thick</v-icon>
        </v-btn>
        <p><slot /></p>
    </div>
</template>

<style lang="scss">
@use 'index.scss';
</style>

<script setup lang="ts">
// @ts-ignore
</script>