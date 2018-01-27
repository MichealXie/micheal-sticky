<template>
	<div class="single-note">
		<div class="wrapper">
			<div class="top">
				<div class="time">{{date}}</div>
				<div class="close">
					<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-close"></use> </svg>
				</div>
			</div>
			<div class="content">
				{{note.content}}
			</div>
			<div class="rank">
				<svg class="icon star" aria-hidden="true" v-for="(star, index) in note.rank" :key="index"> <use xlink:href="#icon-star"></use> </svg>
				<svg class="icon" aria-hidden="true" v-for="(star, index) in (5 - note.rank)" :key="index"> <use xlink:href="#icon-star"></use> </svg>
			</div>
			<div class="state">
				<div class="not-done" v-show="!note.state"><svg class="icon" aria-hidden="true"> <use xlink:href="#icon-correct"></use> </svg></div>
				<div class="done" v-show="note.state"> 已完成</div>
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend( {
	props: {
		note: Object,
	},
	computed: {
		date(): string{
			let time = new Date(this.note.date)
			let year: number|string = time.getFullYear()
			let month: number|string = time.getMonth() + 1
			let day: number|string = time.getDate()
			if(month < 10) month = '0' + month
			if(day < 10) day = '0' + day			
			return `${year}年${month}月${day}日`
		}
	}
})
</script>

<style lang="stylus" scoped>
  @import '../../static/css/var'
  @import '../../static/css/mixin'

	.single-note
		position absolute
		background: #FFFFFF
		border: 1px solid #E6E6E6
		border-radius: 4px
		width 25%
		box-sizing border-box
		margin 1em
		padding-bottom 1em
		.wrapper
			width 80%
			margin 0 auto
			.top
				display flex
				align-items center 
				justify-content space-between
				height 36px
				border-1px()
				.time
					font-size: 14px
					color: #808080
				.close
					color: #D8D8D8
					font-size 14px
			.content
				font-size: 16px
				color: #4D4D4D
				padding 14px 0
				line-height 1.5
				border-1px()
			.rank
				color #DBDBDB
				.icon
					padding 16px 4px
				.star
					color $blue
			.state
				border-radius 100px
				overflow hidden
				flex-center()
				height 24px
				width 58px
				color white
				.done
					height 100%
					width 100%
					font-size 12px
					background-color $blue
				.not-done
					height 100%
					width 100%
					flex-center()
					background-color $green

</style>
