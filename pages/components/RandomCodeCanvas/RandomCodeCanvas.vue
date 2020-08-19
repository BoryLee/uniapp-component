<template>
	<view class="random-code" @click="changeRandomCode">
		<canvas canvas-id="random-code" style="width: 100px;height: 30px;"></canvas>
	</view>
</template>

<script>
	import {
		drawGraphCode,
		generatorRandomCode,
	} from '../../util/graphCode.js';
	export default {
		name: 'RandomCodeCanvas',
		props: {
			randomCodeLength: {
				type: Number,
				default: 4
			}
		},
		data() {
			return {
				randomCode: ''
			}
		},
		methods:{
			changeRandomCode(){
				this.draw();
			},
			draw(){
				//获取随机数
				this.randomCode = generatorRandomCode(this.randomCodeLength);
				//绘制
				drawGraphCode(this.ctx, this.randomCode);
				//绘制完成传递数据
				this.$emit('generator',this.randomCode)
			}
		},
		mounted() {
			const ctx = uni.createCanvasContext('random-code');
			this.ctx = ctx;
			this.draw();
		}
	}
</script>

<style lang="scss" scoped>
	.random-code {
		border: 2rpx solid #000;
		display: inline-block;

	}
</style>
