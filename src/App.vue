<template>
	<div id="app">
		<app-header></app-header>
		<app-main></app-main>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import appHeader from '@/components/app-header/app-header.vue'
import appMain from '@/components/app-main/app-main.vue'

export default Vue.extend({
	components: {
		'app-header': appHeader,
		'app-main': appMain
		
	},
	data () {
		return {

		}
	}
})
</script>

<style lang="stylus">
@import './static/css/reset.styl'

	body
		height 100vh
		#app
			height 100%
			margin 0 auto
			.icon
				width: 1em; height: 1em;
				vertical-align: -0.15em;
				fill: currentColor;
				overflow: hidden;
</style>
