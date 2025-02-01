<template>
    <section class="modules-panel">
        <!-- BTN -->
        <NuxtLink 
            class="modules-panel__item"
            v-for="item in modulesBtns" 
            :key="item.name" 
            :to="`/${item.route}`"
            :style="getStylesOfModuleBtn(item)"
        >
            <v-btn
                class="ui-attention__btn" 
                readonly icon 
                :color="item.color" 
                :size="iconSizeContainer"
                elevation="0"
            >
                <v-icon :size="iconSize" color="white">{{ item.icon }}</v-icon>
            </v-btn>
            <span class="text-h4">{{ item.name }}</span>
        </NuxtLink>
    </section>
</template>

<script lang="ts" setup>

// TYPES
interface ModuleBtn {
    name: string;
    color: string;
    route: string;
    icon: string;
}

// DATA FIELDS
const modulesBtns: ModuleBtn[] = [
    {
        name: 'Общее',
        color: '#3498db',
        route: 'main',
        icon: 'mdi-clipboard-text-outline',
    },
    {
        name: 'Архитектура',
        color: '#f1c40f',
        route: 'structure',
        icon: 'mdi-folder-multiple',
    },
    {
        name: 'Компоненты',
        color: '#27ae60',
        route: 'components',
        icon: 'mdi-cube-outline',
    },
    {
        name: 'Стили',
        color: '#7d3c98',
        route: 'styles',
        icon: 'mdi-brush',
    },
    {
        name: 'GIT Managment',
        color: '#dc7633',
        route: 'git-managment',
        icon: 'mdi-gitlab',
    },
]
const iconSize = 32
const iconSizeContainer = iconSize * 2

const getStylesOfModuleBtn = (moduleBtn: ModuleBtn) => {
    return {
        '--main-color': moduleBtn.color,
        '--main-light-color': lightenColor(moduleBtn.color, 70),
        borderColor: moduleBtn.color,
        background: `linear-gradient(-45deg, ${lightenColor(moduleBtn.color, 90)}, ${lightenColor(moduleBtn.color, 70)})`,
    }
}
const lightenColor = (hex: string, percent: number) => {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return `#${(
        0x1000000 +
        (R < 255 ? R < 0 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 0 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 0 ? 0 : B : 255)
    ).toString(16).slice(1)}`.toUpperCase();
};

</script>

<style lang="scss">
@use 'index.scss';
</style>