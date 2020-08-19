<template>
	<view class="cells">
		<view class="radio-cell">
			<view class="cell-title">
				分组：
			</view>
			<jc-radio-group v-model='radioValue'>
				<jc-radio v-for="(item,index) in list" :key='index' :label='item.label'>
					{{item.title}}
				</jc-radio>
			</jc-radio-group>
		</view>
		<view class="radio-cell">
			<view class="cell-title">
				单独：
			</view>
			<jc-radio v-model='major' label="电器">
				电器
			</jc-radio>
		</view>
		
	</view>
	
</template>

<script>
	import jcRadioGroup from '../components/radio/radio-group.vue';
	import jcRadio from '../components/radio/radio.vue';
	export default{
		components:{ jcRadioGroup,jcRadio },
		data(){
			return {
				list: [
					{title: '男',label:'man'},
					{title: '女',label:'woman'}
				],
				radioValue: 'man',
				major: ''
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.cells{
		display: flex;
		flex-direction: column;
		.radio-cell{
			display: flex;
			align-items: center;
			height: 80rpx;
			justify-content: flex-start;
			box-sizing: border-box;
			border-bottom: 2rpx solid #F8F8F8;
			border-top: 2rpx solid #F8F8F8;
			font-size: 30rpx;
			.cell-title{
				margin-right: 20rpx;
				margin-left: 30rpx;
			}
		}
	}
	
</style>
