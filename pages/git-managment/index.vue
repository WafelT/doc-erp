<template>
    <div class="page-doc">
        <v-container>
            <div class="page-doc__content">
                <h2>Нейминг git сущностей</h2>
                <h4>Шаблон нейминга Merge Request</h4>
                <UiStringColorSchema
                    :isDarkMode="true"
                    :isUsingSpaces="true"
                    :items="mergeRequestItems"
                />

                <UiAttention>
                    <strong>Типы хвостов:</strong> (only FrontEnd), (dependency BackEnd), (dependency Task), (dependency Managment)...
                </UiAttention>

                <hr />

                <h4>Шаблон нейминга Commit-а</h4>
                <UiStringColorSchema
                    :isDarkMode="true"
                    :isUsingSpaces="true"
                    :items="commitsItems"
                />

                <hr />

                <h2>Code review процесс в команде</h2>

                <ul>
                    <li><strong>Шаг 1.</strong> разработчик отправляет своё <strong>MR сообщение</strong> в чате <strong>code review</strong> и переводят его в состояние <strong>pinned 📌</strong></li>
                    <li><strong>Шаг 2.</strong> один или больше разработчиков ставят реакцию 👆 если берут данный <strong>MR</strong> в <strong>CR</strong></li>
                    <li><strong>Шаг 3.</strong> в случае выиснения необходимости рефакторинга разработчики пишут <strong>владельцу MR</strong>-а в <strong>thread</strong> его сообщения ( также добовляют реакцию: ⚠️ ), и дальше обсуждают по необходимости</li>
                    <li><strong>Шаг 4.</strong> когда смотрящие разработчики соглашаются с тем что код корректный они ставят реакцию ✅</li>
                    <li><strong>Шаг 5.</strong> только после этого <strong>владелец MR</strong>-а сбрасывает статус <strong>pinned 📌</strong> сообщения и ставит галочку ✔️ в <strong>excel таблице</strong> у строки своей задачи</li>
                </ul>

                <video autoplay loop muted controls>
                    <source src="~/assets/images/code-review-strategy-example.mp4" type="video/mp4">
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
import UiStringColorSchema from '~/components/ui/UiStringColorSchema' // @ts-ignore

import { ref, computed, onMounted } from 'vue';

// DATA FIELDS
const mergeRequestParts = [
    { head: '[task|1938]', body: 'add some proggress about fund requests', tail: '(only FrontEnd)' },
    { head: '[task|1940]', body: 'completed backend integration', tail: '(dependency BackEnd)' },
    { head: '[tasks|12, 19232, 19200]', body: 'updated user authentication flow', tail: '(dependency Task)' },
    { head: '[update]', body: 'optimized database queries', tail: '(dependency BackEnd)' },
    { head: '[task|321]', body: 'refactored CSS for better maintainability', tail: '(dependency Managment)' },
    { head: '[task|5423]', body: 'added new dashboard features', tail: '(only FrontEnd)' },
    { head: '[task|2543]', body: 'improved logging and monitoring', tail: '(dependency BackEnd)' },
    { head: '[task|19240]', body: 'updated API documentation', tail: '(only FrontEnd)' },
]
const mergeRequestPartIndex = ref(0)
const mergeRequestItems = computed(() => ([
    { color: '#f1948a', textPart: mergeRequestParts[mergeRequestPartIndex.value].head, explication: 'Голова' },
    { color: '#d4e6f1', textPart: mergeRequestParts[mergeRequestPartIndex.value].body, explication: 'Тело' },
    { color: '#f9e79f', textPart: mergeRequestParts[mergeRequestPartIndex.value].tail, explication: 'Хвост' },
]))

const commitsParts = [
    { head: '[task|1938]', body: 'add some proggress about fund requests' },
    { head: '[update]', body: 'optimized database queries' },
    { head: '[conflict]', body: 'solving for target branch dev' },
    { head: '[hotfix]', body: 'fix footer of page info' },
    { head: '[refactoring]', body: 'improve componet of AdvancedFilters' },
]
const commitsPartsIndex = ref(0)
const commitsItems = computed(() => ([
    { color: '#ec7063', textPart: commitsParts[commitsPartsIndex.value].head, explication: 'Голова' },
    { color: '#7fb3d5', textPart: commitsParts[commitsPartsIndex.value].body, explication: 'Тело' },
]));

// FUNCTIONS
const initDataSlider = (textParts: any[], idxCountField: Ref) => {
    setInterval(() => {
        idxCountField.value = (idxCountField.value + 1) % textParts.length
    }, 2000)
}

// LIFECYCLE
onMounted(() => {
    initDataSlider(mergeRequestParts, mergeRequestPartIndex)
    initDataSlider(commitsParts, commitsPartsIndex)
})
</script>

<style lang="scss">
@use 'index.scss';
</style>