<template>
	<view class="home">
		<view class="cell" v-for="(item,index) in list" :key='item.name' @click="jumpNextPage(item.path)">
			<text>{{item.name}}</text>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'Home',
		data() {
			return {
				list: [
					{
						name: 'Input组件',
						path: '/pages/input/input'
					},
					{
						name: 'Cell组件',
						path: '/pages/cell/cell'
					},
					{
						name: 'Radio组件',
						path: '/pages/radio/radio'
					},
					{
						name: 'Checkbox组件',
						path: '/pages/checkbox/checkbox'
					},
					{
						name: 'Button组件',
						path: '/pages/button/button'
					},
					{
						name: 'Tab组件',
						path: '/pages/tab/tab'
					},
					{
						name: 'Picker组件',
						path: '/pages/picker/picker'
					},
					{
						name: 'Popup组件',
						path: '/pages/popup/popup'
					},
					{
						name: 'Address组件',
						path: '/pages/address/address'
					}
				]
			};
		},
		methods:{
			jumpNextPage(url){
				uni.navigateTo({url})
			}
		}
	}
</script>


<style lang="scss" scoped>
	.home{
		display: flex;
		height: 100%;
		flex-direction: column;
		background-color: #F8F8F8;
		.cell{
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			margin-top: 10rpx;
			font-size: 30rpx;
			box-sizing: border-box;
			padding: 0 30rpx;
		}
	}
</style>
