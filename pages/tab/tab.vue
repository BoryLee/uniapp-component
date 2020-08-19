<template>
	<view class="tab">
		<jc-tab :tabs='tabs1' :is-scroll='false' :height="height" tab-key='title' v-model='activeIndex' @change='changeTab'>
			<swiper :indicator-dots="false" :autoplay="false" :current='activeIndex' @change='swiperChange' style="height: 100%;background-color: pink;">
				<swiper-item v-for='(item,index) in tabs1' :key='index'>
					<view class="swiper-item">{{item.title}}</view>
				</swiper-item>
			</swiper>
		</jc-tab>
		<!-- <jc-cell>
			<jc-tab :tabs='tabs2' :is-scroll='true' tab-key='title' v-model='activeIndex' @change='changeTab'></jc-tab>
		</jc-cell> -->
		
	</view>
</template>

<script>
	import jcTab from '../components/tab/tab.vue';
	import jcCell from '../components/cell/cell.vue';
	export default{
		components:{ jcTab,jcCell },
		data() {
			return {
				height: '88rpx',
				tabs1: [
					{
						title: '测试1'
					},
					{
						title: '测试2'
					},
					{
						title: '测试3'
					},
					{
						title: '测试4'
					}],
				tabs2: [
					{
						title: '测试1'
					},
					{
						title: '测试2'
					},
					{
						title: '测试3'
					},
					{
						title: '测试4'
					},
					{
						title: '测试5'
					},
					{
						title: '测试6'
					},
					{
						title: '测试7'
					},
					{
						title: '测试8'
					},
					{
						title: '测试9'
					}
				],
				activeIndex: 0
			}
		},
		methods:{
			changeTab(index){
				this.activeIndex = index;
			},
			swiperChange(e){
				let { current,source } = e.detail;
				if(source === 'touch'){
					this.activeIndex = current;
				}
				
			}
		}
		
	}
</script>

<style scoped>
	.tab{
		height: 100%;
		overflow: hidden;
	}
	
</style>
