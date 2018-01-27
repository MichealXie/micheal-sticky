<template>
	<div class="app-main">
		<div class="main">
			<single-note v-for="note in notes" :note="note"></single-note>
			<div class="goup"> <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-up"></use> </svg> </div>
			<div class="add"> <svg class="icon" aria-hidden="true"> <use xlink:href="#icon-plus"></use> </svg> </div>
			<div class="delete">删除成功</div>
		</div>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'
import axios from 'axios'
import singleNote from '@/components/single-note/single-note.vue'

export default Vue.extend( {
	components: {
		'single-note': singleNote
	},
	data () {
		return {
			notes: [],
		}
	},
	methods: {
		async getNotes(){
			let data = await axios.get('https://sticky-note-b6d2c.firebaseio.com/notes.json')
			this.notes = data.data
		}
	},
	created () {
		this.getNotes()
	}
})
</script>

<style lang="stylus" scoped>
  @import '../../static/css/var'
  @import '../../static/css/mixin'
	
	.app-main
		overflow scroll 
		background-color #F5F5F5
		width 100%
		height 100vh
		.main
			position relative
			width 70%
			margin 0 auto
			height 100%
			padding-top 85px
			.goup, .add, .delete
				position fixed 
				flex-center()
				shadow()
				font-size 2em
			.goup
				bottom 168px
				right 240px
				background-color white
				color $green
				height 64px
				width 64px
				border-radius 50%
			.add
				bottom 64px		
				right 240px	
				height 64px
				width 64px
				color white
				border-radius 50%
				background-color $green
			.delete
				bottom 100px		
				middleX()
				height 55px
				width 215px
				font-size 20px
				background-color white
				color $green
				border-radius: 100px

</style>
