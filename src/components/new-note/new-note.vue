<template>
	<div class="new-note">
		<div class="wrapper">
			<div class="main">
				<div class="title">添加新便签</div>
				<div class="close" @click="close()">
					<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-close"></use> </svg>
				</div>
				<textarea class="textarea" placeholder="输入内容" v-model="content" autofocus @keypress="post($event)"></textarea>
				<div class="rank">
					<span class="word">重要星级:</span>
					<div class="stars">
						<svg class="icon" aria-hidden="true" v-for="star in 5" @click="setRank(star)" ref="star"> <use xlink:href="#icon-star"></use> </svg>
					</div>
				</div>
				<div class="add-btn">
					<span class="btn" @click="postNote()">
						<span v-show="!isPosting" >添加</span>
						<svg v-show="isPosting"  class="icon" aria-hidden="true"> <use xlink:href="#icon-loading"></use> </svg>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { bus } from '../../main.js'

export default {
	data () {
		return {
			content: '',
			rank: 1,
			isPosting: false,
		}
	},
	methods: {
		setRank(index){
			this.rank = index
			for(let i = 0; i < 5;i++){
				this.$refs.star[i].classList.remove('star')
			}
			for(let i = 0; i < index;i++){
				this.$refs.star[i].classList.add('star')
			}
		},
		async postNote(){
			if(this.isPosting) return
			if(!this.content) return
			this.isPosting = true
			let note = {
				content: this.content,
				date: new Date().valueOf(),
				rank: this.rank,
				state: false
			}
			let data = await this.$http.post('https://sticky-note-b6d2c.firebaseio.com/notes.json',note)
			note.id = data.data.name
			// 成功后
			this.$emit('closeNewNote', true)
			// 设置新的 note
			bus.$emit('postSuccess', note)
			// 清空 note
			this.content = ''
			this.rank = 1
			this.isPosting = false
		},
		close(){
			this.$emit('closeNewNote', false)
		},
		post(e){
			if(e.key === 'Enter' && e.ctrlKey) this.postNote()
		}
	},
	mounted () {
		this.$nextTick( () => {
			this.$refs.star[0].classList.add('star')
		})
	},
}
</script>

<style lang="stylus" scoped>
  @import '../../static/css/var'
  @import '../../static/css/mixin'

	.new-note
		position fixed 
		top 0
		bottom 0
		left 0
		right 0
		flex-center()
		background-color rgba(5,43,35,0.8)
		z-index 200
		.wrapper
			position relative
			width 600px
			background-color white
			border: 1px solid #E6E6E6;
			border-radius: 4px;
			.main
				width 90%
				padding 1em 0
				margin 0 auto
				.close
					position absolute
					right 1em
					top 1em
					font-size 1.5em
					color #D8D8D8
					cursor pointer
				.title
					height 40px
					flex-center()
					font-size: 28px
					padding-bottom 1em
					color: #666666
				.textarea
					width 100%
					height 350px
					background: #F5F5F5
					border: 1px solid #E6E6E6
					border-radius: 4px
					outline none
				.rank
					display flex
					align-items center 
					padding 1em 0
					.stars
						display flex
						justify-content flex-start
						align-items center
						padding-left 30px
						color #DBDBDB
						.icon
							padding-left 10px
							cursor pointer
						.star
							color $blue
				.add-btn
					flex-center()
					color white
					.btn
						height 45px
						width 200px
						flex-center()
						background-color $green
						border-radius: 100px
						cursor pointer
						shadow()
						.icon
							font-size 2.5em
							animation spin 2s infinite linear
</style>
