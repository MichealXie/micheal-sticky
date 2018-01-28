<template>
	<div class="app-header">
		<div class="header">
			<div class="info">
				<span class="creator">Micheal</span>
				<span class="product">在线便签</span>
			</div>
			<div class="menu">
				<span class="item" :class="{active: state === 'all'}" @click="changeNotes('all')">全部</span>
				<span class="item" :class="{active: state === false}" @click="changeNotes(false)">未完成</span>
				<span class="item" :class="{active: state === true}" @click="changeNotes(true)">已完成</span>
			</div>
			<div class="sort">
				<div class="title"> 星级: </div>
				<span class="item" :class="{active: rank === null}" @click="selectRank(null)">全部</span>
				<span class="item" :class="{active: rank === index}" v-for="index in 5" @click="selectRank(index)">{{index}}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { bus } from '../../main.js'

export default{
	data () {
		return {
			state: 'all',
			rank: null
		}
	},
	methods: {
		changeNotes(state){
			this.state = state
			bus.$emit('changeNotes', state)
		},
		selectRank(rank){
			this.rank = rank
			bus.$emit('selectRank', rank)
		}
	}
}
</script>

<style lang="stylus" scoped>
  @import '../../static/css/var'

	@media (max-width:1200px) 
		.header
			width 90%!important

	.app-header
		position fixed 
		top 0
		width 100%
		height 85px
		border-radius: 4px
		font-size 18px
		background-color white
		z-index 100
		.header
			display flex
			align-items center
			height 85px
			width 70%
			margin 0 auto
			.info
				color: $green
				flex 3
				.creator
					font-size: 32px
					font-weight bold
				.product
					font-size: 24px
			.menu
				flex 3
				display flex
				justify-content flex-start
				color #999999
				.item
					margin 0 15px
					padding 15px 0
					cursor pointer
					transition .3s all
					&.active
						color $green
						font-size 20px
						border-bottom 5px solid $green
			.sort
				flex 5
				display flex
				justify-content flex-start
				color #999999
				.title
				.item
					margin 0 15px
					padding 15px 0
					cursor pointer
					transition .3s all
					&.active
						color $green
						font-size 20px
						border-bottom 5px solid $green


			


</style>
