<template>
	<view class="button">
		<view class="cell">
			倒计时按钮：<jc-button type="count-down"></jc-button>
		</view>
		<view class="cell">
			图形验证码按钮：<jc-random-code-canvas :random-code-length='4' @generator='generatorCode'></jc-random-code-canvas>
		</view>
	</view>
</template>

<script>
	import jcButton from '../components/button/button.vue';
	import jcRandomCodeCanvas from '../components/RandomCodeCanvas/RandomCodeCanvas.vue';
	export default{
		components: { jcButton,jcRandomCodeCanvas },
		data() {
			return {
				title:''
			}
		},
		methods:{
			generatorCode(code){
				console.log(code)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 20rpx 0;
		.cell{
			display: flex;
			align-items: center;
		}
	}
</style>
