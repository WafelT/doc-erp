<template>
    <client-only>
        <textarea 
            class="ui-code" :rows="rowCount" 
            cols="30" disabled
            :value="content"
        >
        </textarea>
    </client-only>
</template>

<style lang="scss">
@use 'index.scss';
</style>

<script setup lang="ts">
// @ts-ignore

// DATA FIELDS
const props = defineProps<{
    content: string;
}>()
const rowCount = props.content?.split('\n').length
</script>