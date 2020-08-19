<template>
	<view>
		<jclife-cell v-for="(item,index) in list" :key='index'>
			<jclife-cell-item 
				:touchIndex='index'
				:btnOptions='btnOptions'
				:btnWidth='btnWidth'
				@btnclick='btnClick'
				@click='cellClick'
				>
				<view class="cell-content">
					{{item.title}}
				</view>
			</jclife-cell-item>
		</jclife-cell>
	</view>
</template>

<script>
	import jclifeCell from '../components/cell/cell.vue';
	import jclifeCellItem from '../components/cell/cell-item.vue';
	export default {
		components: {
			jclifeCell,
			jclifeCellItem
		},
		data() {
			return {
				btnWidth: 60,
				list: [
					{
						title: 'uni-app',
					},
					{
						title: 'vue',
					},
					{
						title: 'react',
					},
					{
						title: 'weex',
					},
					{
						title: 'react native',
					},
					{
						title: 'flutter',
					}
				],
				btnOptions: [
					{
						title: '取消',
						backgroundColor: 'green'
					},
					{
						title: '编辑',
						backgroundColor: '#C0C0C0'
					},
					{
						title: '删除',
						backgroundColor: '#f00'
					}
				]
			}
		},
		methods: {
			changeItem(e,index) {
			},
			btnClick(value){
				uni.showToast({
					icon: 'none',
					title:`点击了第${value+1}个按钮`
				})
			},
			cellClick(value){
				console.log(value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cell-content{
		padding: 20rpx 0;
	}
</style>
