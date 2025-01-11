<template>
    <div class="page-doc">
        <v-container>
            <!-- <UiAttention>
                <strong>Исключением</strong> являются <strong>Toast</strong> сообщение используемые для отображение неудачных ответах от сервера, которые не входят в сценарии использование функционала, в этом случае можем обратиться напрямую к объекту <strong>$toast</strong>
            </UiAttention>
            <ul>
                <li>Переменные функции, методов, данных объявляются в формате camelCase</li>
                <li>Название всех перемен пишутся на английском языке без грамматических ошибок и должны чётко отражать смысл сущности</li>
                <li>Табуляцыя: 4-х пробельная</li>
                <li>Используется БЭМ-методологий в разработки вёрстки</li>
                <li>Используется эластичная вёрстка, все значение в px должны быть сконвертированны в vw ( за это отвечает scss функция <strong> px2vw </strong> ) ( есть исключение )</li>
            </ul> -->
            <div class="page-doc__content">
                <ModulesPanel />
            </div>
        </v-container>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import UiAttention from '~/components/ui/UiAttencion' // @ts-ignore
import UiCode from '~/components/ui/UiCode' // @ts-ignore
import UiMediaLink from '~/components/ui/UiMediaLink' // @ts-ignore
import ModulesPanel from '~/components/reusable/ModulesPanel'
</script>