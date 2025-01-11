<template>
    <div class="page-doc">
        <v-container>
            <div class="page-doc__content">
                <h2>Стили</h2>
                <ul>
                    <li>Название <strong>CSS перемен, классов </strong> всегда пишутся kebab-case-ом <strong>( --variable-for-example, .class-for-example )</strong></li>
                    <li>Методология <strong>БЭМ</strong></li>
                    <li>Использование <strong>!important является строго нежелательным</strong>, если без него не обойтись ожидается комментарии обьясняющий причину использование</li>
                    <li>Если набор стилей повторяется часто то его стоит вывести в определённом <strong>.scss</strong> файле и импортировать по необходимости в компоненте <strong>( _templates.scss )</strong></li>
                </ul>
                <UiAttention>
                    Для того чтобы обеспечить лучшую читабильность в стилевых файлах необходимо разделять 
                    пустыми строками группы параметров в самом начале должны идти параметры влияющие на размеры элемента <strong>( width, height, padding, margin, … ) </strong> а потом остальные.
                </UiAttention>
                <img src="https://i.imgur.com/n5kKTcP.png" alt="img">
            </div>  
        </v-container>
    </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import UiAttention from '~/components/ui/UiAttencion' // @ts-ignore
import UiCode from '~/components/ui/UiCode' // @ts-ignore
import UiVideo from '~/components/ui/UiVideo' // @ts-ignore
import UiStringColorSchema from '~/components/ui/UiStringColorSchema' // @ts-ignore


</script>

<style lang="scss">
@use 'index.scss';
</style>