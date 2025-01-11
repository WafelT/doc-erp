<template>
    <header class="header">
        <v-container>
            <div class="header__wrapper">
                <div class="header__wrapper-info">
                    <h1>Документация</h1>
                </div>
                <NuxtLink :to="`/`" class="header__wrapper-logo">
                    <img src="~/assets/images/ERP.svg" alt="Erp">
                </NuxtLink>
            </div>
        </v-container>
    </header>
</template>

<style lang="scss">
@use 'index.scss';
</style>