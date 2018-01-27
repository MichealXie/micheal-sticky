<template>
	<div class="app-header">
		<div class="header">
			<div class="info">
				<span class="creator">Micheal</span>
				<span class="product">在线便签</span>
			</div>
			<div class="menu">
				<span class="item active all">全部</span>
				<span class="item unfinished">未完成</span>
				<span class="item finished">已完成</span>
			</div>
			<div class="login">
				<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-github"></use> </svg>
				Github 登录
			</div>
		</div>
	</div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend( {

})
</script>

<style lang="stylus" scoped>
  @import '../../static/css/var'

	.app-header
		position fixed 
		top 0
		width 100%
		height 85px
		border-radius: 4px
		font-size 18px
		background-color white
		.header
			display flex
			align-items center
			height 85px
			width 70%
			margin 0 auto
			.info
				color: $green
				flex 1.5
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
					&.active
						color $green
						font-size 20px
						border-bottom 5px solid $green
			.login
				flex 0 0 170px
				display flex
				align-items center
				height 50px
				border-radius: 100px
				background-color $green
				color white
				.icon
					padding 0 10px
					font-size 2em

			


</style>
