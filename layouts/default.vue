<template>
	<v-app>
		<v-main>
            <Header />
            <slot />
		</v-main>
	</v-app>
</template>
  

<script setup lang="ts">
// @ts-ignore
import Header from '~/components/modular/Header'// @ts-ignore
</script>