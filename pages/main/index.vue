<template>
    <div class="page-doc">
        <v-container>
            <div class="page-doc__content">
                <h2>Общие правила разработки</h2>
                <ul>
                    <li>Название перемен пишутся на английском языке без грамматических ошибок и должны чётко отражать смысл сущности</li>
                    <li>Табуляцыя файлов: <strong>4-х пробельная</strong></li>
                    <li>Нейминг стиливых классов должен соответствовать <strong>БЭМ</strong>-методологий</li>
                    <li>Разработка на <strong>typescript</strong></li>
                    <li>Архитектура приложения: <strong>модульная</strong></li>
                </ul>

                <hr />

                <h2>Вёрстка</h2>
                <p>
                    Использование <strong>vuetify</strong> классов для вёрстки (d-flex, pa-4, ...) является эффективным но это создаёт много проблем когда дело доходит до
                    адаптации, на моб., таблет устройствах эти классы могут не понадобится но избавится от них не получается поскольку они используют <strong>!important</strong>
                </p>
                <UiAttention>
                    По этому <strong>vuetify</strong> классы нужно принименять когда есть полная уверености в том что на любом <strong>viewport</strong>-е 
                    их стили не окажутся лишними, в остальных случиях вёрстка по <strong>БЭМ</strong>-у
                </UiAttention>

                <hr />

                <h2>Typescript</h2>
                <p>
                    Код приложения должен разрабатыватся на <strong>typescript</strong>-и в том числе и в компонентах, 
                    модели обьектах необходимо определять в типе <strong>(type, interface)</strong>
                </p> 
                <UiAttention>
                    В случае если не получается определить тип для поле указывается <strong>any</strong>, но его использование является нежелательным,
                    в данном случае стоит добавить комментарии описывающий причину использование
                </UiAttention>
                <UiCode :content="typescriptExample" />

                <hr />

                <h2>🛠️ Техничиский долг</h2>
                <p>
                    Большая часть проекта разработна по без-архитектурному принцепу, такая реализация усложняет поддержку проекта, ведёт к возникновению <strong>side effects</strong>.
                </p>
                <p>
                    Для того чтобы исключить описанные выше проблемы необходимо выполнять <strong>Технический долг</strong>, 
                    его можно указать в виде отдельного пункта чеклиста на этапе оценке задачи в случае если та затрагивает уже существующею фичу нуждающеюся в рефакторинге.
                </p>
                <UiAttention>
                    <strong>Метка для пункта чеклиста:</strong> 🛠️ Техничиский долг
                </UiAttention>
                <UiAttention>
                    Разработчик может выполнить данный пункт только после одобрение <strong>менеджемента</strong>
                </UiAttention>
                <video autoplay loop muted controls>
                    <source src="~/assets/images/tehnical-debt-task-example.mp4" type="video/mp4">
                </video>
            </div>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import UiAttention from '~/components/ui/UiAttencion' // @ts-ignore
import UiCode from '~/components/ui/UiCode' // @ts-ignore
import UiVideo from '~/components/ui/UiVideo' // @ts-ignore

// DATA FIELDS 
const typescriptExample = 
`<script setup lang="ts">
    import { TableColumn } from './types' // Тип можно обьявить из файла types, если тип нужен глобально то обьявляется уже в файле в директории ~/types/...

    // TYPES | Если компонента маленькая и типов мало то удобнее обьявить в данной секции
    export interface TableRow {
        id: number;
        name: string;
        is_data_numbers: boolean;
        is_data_positive: boolean; 
        is_data_negative: boolean;
        data: { [key: string]: number | string };
        childrens: TableRow[];
    }

    const props = defineProps<{
        columns: TableColumn[],
        rows: TableRow[],
    }>()
<script>`
</script>

<style lang="scss">
@use 'index.scss';
</style>