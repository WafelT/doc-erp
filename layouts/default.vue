<template>
	<v-app>
		<v-main>
            <Header />
            <slot />
			<Navigators />
		</v-main>
	</v-app>
</template>
  

<script setup lang="ts">
// @ts-ignore
import Header from '~/components/modular/Header'// @ts-ignore
import Navigators from '~/components/widgets/Navigators'// @ts-ignore
</script>