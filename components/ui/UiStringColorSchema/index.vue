<template>
    <div class="ui-string-color-schema">
        <div :class="{ 'ui-string-color-schema__string': true, '--dark-area': isDarkMode }">
            <h3 v-for="(item, index) in items" :key="index" :style="{ color: item.color }">
                {{ item.textPart }} <template v-if="isUsingSpaces && (index + 1 !== items.length)">‎ </template>
            </h3>   
        </div>
        <div class="ui-string-color-schema__schema">
            <div v-for="(item, index) in items" :key="'exp-' + index" class="ui-string-color-schema__schema__item">
                <v-icon :size="20" :color="item.color">mdi-circle</v-icon>
                
                <p class="explication-text">
                    {{ item.explication }}
                </p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
// @ts-ignore
defineProps<{
    isDarkMode: boolean;
    isUsingSpaces: boolean;
    items: Array<{
        color: string;
        textPart: string;
        explication: string;
    }>
}>();
</script>
  
<style scoped lang="scss">
@use 'index.scss';
</style>
  