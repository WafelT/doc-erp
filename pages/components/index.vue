<template>
    <div class="page-doc">
        <v-container>
            <div class="page-doc__content">
                <h2>Компоненты</h2>
                <p>
                    Каждая компонента должна стремиться к <strong>максимальной самостоятельности</strong> и образовывать по минимум связей с глобальными сущностями. 
                    Если компонента нуждается в <strong>composables-ах, helpers, stores, других компонент, стилевых файлах ...</strong>
                    которые будут использоваться только в ней то их нужно объявлять внутри директории компоненты.
                </p>
                <UiCode :content="structureExample"></UiCode>

                <UiAttention>
                    Если компонента использует <strong>props</strong>-ы то то передаваемым параметрам необходимо определить тип <strong>( string, boolean, number ...)</strong>
                    для того чтобы облегчить подержку компоненты.
                </UiAttention>

                <UiAttention>
                    Для того чтобы разработчикам было легко ориентироватся в файлах компоненты <br>
                    необходимо их разделять на под-секции с помощью комментариев и пустых строк в формате <strong>uppercase</strong>, <br />
                    таким образом композиция файла становится более читабильной
                </UiAttention>

                <video autoplay loop muted controls>
                    <source src="~/assets/images/component-structure.mp4" type="video/mp4">
                </video>

                <UiAttention>
                    Импортированной компоненты не нужно указывать тип файла ( .vue ), она считывается и без него, <br> 
                    а с укзанным типом может выдать ошибку если компонента обьявленна через директорию
                </UiAttention>
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

const structureExample = 
`ResourceAgent/ <= Компонента
├── components/
├── composables/
├── index.scss
├── index.vue
└── types.ts`
</script>

<style lang="scss">
@use 'index.scss';
</style>