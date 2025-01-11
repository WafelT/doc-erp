<template>
    <div class="page-doc">
        <v-container>
            <div class="page-doc__content">
                <h2>Архитектура</h2>
                <p>
                    В <strong>модульной архитектуре</strong> приложение делится на независимые модули. 
                    Каждый модуль решает конкретную задачу или представляет отдельную функциональность.
                    Это улучшает организацию кода и его поддержку.
                </p>

                <hr />

                <h3>~/components/widgets</h3>
                <p>
                    Являются независимыми компоненты,
                    используются в файлах базовой разметки <strong>~/layouts ( Header, Footer ...)</strong>
                </p>
                <h3>~/components/modular</h3>
                <p>
                    Являются независимыми компоненты, которые решает конкретную задачу или представляют отдельную фичу,
                    используются в <strong>/pages</strong>
                </p>
                <h3>~/components/reusable</h3>
                <p>
                    Компоненты из данной директории являются не самостоятельными, их цель служить <strong>самостоятельным компонентам</strong>
                </p>
                <h3>~/components/ui</h3>
                <p>
                    Компоненты из данной директории предоставляют основу для создания интерфейса. 
                    Каждый компонент решает одну конкретную задачу, например отображение кнопки, текстового поля, списка или модального окна.
                </p>
                <h3>~/types</h3>
                <p>
                    В файлах данной директории хранятся <strong>типы</strong> использующийся глобально по всему проекту
                </p>
                <UiAttention>Если <strong>тип</strong> используется только в одной компоненте то он должен быть обьявлён в директории компоненты</UiAttention>
                <h3>~/consts</h3>
                <p>
                    В файлах данной директории хранятся <strong>неизменные данные</strong> использующийся глобально по всему проекту
                </p>
                <UiAttention>Переменные необходимо обявлять в <strong>uppercase snake format</strong>: <strong>THE_VARIABLE</strong> так они дают понять что являются константами</UiAttention>
                
                <hr />

                <h2>Нейминг</h2>
                <p>
                    <strong>Нейминг</strong> всех сущностей (перемен, компонент и.т.д.) <strong>должны отражать смысл их применение и фундаментального назначение</strong> 
                    и по возможности быть образа-вызывающими, для этого перед неймингом стоит ответить на следующие вопросы: <br><br>
                    <strong>1.</strong> Какой цели служит данная сущность?<br> 
                    ( <strong>Пример:</strong> — какой фундаментальный смысл у карточки товара? — предстовлять товар, то есть выполнять функцию агента => <strong>ProductAgent</strong> ) <br>
                    <strong>2.</strong> Какой образ она напоминает она напоминает?<br> 
                    ( <strong>Пример:</strong> например <strong>BurgerMenu</strong>, — почему бургер? — потому-что на бургер похоже )
                </p>

                <UiAttention>В нейминге сущности должна наблюдатся структура дающие понять с чем эта сущность связана</UiAttention>

                <UiCode :content="namingCodeExample"></UiCode>

                <UiStringColorSchema
                    :items="[
                        { color: '#e4c33c', textPart: 'reports', explication: 'Название модуля' },
                        { color: '#f39c12', textPart: 'TheItem', explication: 'Название обозначающий найденный обьект' },
                        { color: '#ca6f1e', textPart: 'Resource', explication: 'Название параметра resource' },
                        { color: '#ba4a00', textPart: 'Name', explication: 'Название параметра name в параметре resource' },
                    ]"
                />
                                
                <hr />

                <h2>Структура компоненты</h2>
                <p>
                    Компонента должна содержать в своей директории все сущности которые служат только ей <strong>( типы, api запросы, субкомпоненты, стили, store файлы... )</strong>
                    такое решение позволяет соблюсти принцип <strong>Инкапсуляции</strong>.
                </p>
                <UiCode :content="structureExample"></UiCode>
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

const namingCodeExample = 
`const reportsItems = ref<ReportItem[]>([]) // Массив с данными об отчётах
const reportsTheItem = computed<ReportItem | null>(() => {
    let foundedItem = null
    reportsItems.value.forEach(r => {
        const foundResource = r.items.find(rr => rr.slug === resourceSlug.value)
        if (foundResource) {foundedItem = r}
    })
    return foundedItem
})
const reportsTheItemName = computed<string | null>(() => (reportsTheItem.value?.name || null))
const reportsTheItemResource = computed<ReportResource | null>(() => (reportsTheItem.value?.items.find(rr => rr.slug === resourceSlug.value) || null))
// Название параметра resource от найденого отчёта
const reportsTheItemResourceName = computed<string | null>(() => (reportsTheItemResource.value?.name || null))`
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