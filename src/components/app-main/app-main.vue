<template>
	<div class="app-main">
		<div class="main">
			<transition-group name="fade">
				<single-note v-for="note in notes" :note="note" :key="note.date" ref="single-note" v-on:deleteSuccess="deleteSuccess"></single-note>
			</transition-group>
		</div>
	</div>
</template>

<script>
import singleNote from '@/components/single-note/single-note.vue'
import { bus } from '../../main.js'

export default{
	components: {
		'single-note': singleNote
	},
	data () {
		return {
			notes: [],
			topArr: [85, 85, 85, 85],
			leftArr : [0,0,0,0],
		}
	},
	methods: {
		async getNotes(){
			let data = await this.$http.get('https://sticky-note-b6d2c.firebaseio.com/notes.json')
			// 添加 id 方便 delete
			for(let item in data.data){
				data.data[item].id = item
			}
			this.notes = data.data
			this.$nextTick( () => {
				this.waterfall()
			})
		},
		waterfall(){
			this.topArr = [85, 85, 85, 85]
			this.leftArr = [0,0,0,0]
			for(let note of this.$refs['single-note']){
				let minTop = Math.min(...this.topArr)
				let minTopIndex = this.topArr.indexOf(minTop)
				note.$el.style.top = this.topArr[minTopIndex] + 'px'
				this.topArr[minTopIndex] += parseInt(getComputedStyle(note.$el).height)
				note.$el.style.left = minTopIndex * parseInt(getComputedStyle(note.$el).width) + 'px'
				this.leftArr[minTopIndex] += parseInt(getComputedStyle(note.$el).width)
			}
		},
		deleteSuccess(id){
			this.$delete(this.notes, id)
			this.$emit('showDelete')
		}
	},
	created () {
		this.getNotes()
		// post 成功后本地 notes 添加一个选项!
		bus.$on('postSuccess', (note) => {
			this.$set(this.notes, note.id, note)
			this.$nextTick( () => {
				this.waterfall()
			})
		})
	}
}
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
</style>
