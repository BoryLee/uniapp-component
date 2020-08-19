<template>
	<view class="popup" v-if="visible">
		<view class="popup-mask" v-if="showMask" @click.stop="maskEvent"></view>
		<view class="popup-content" :class="contentClass" @click.stop="handleEvent">
			<view :class="`popup-content-${position}`">
				<view class="popup-header">
					<text>{{title}}</text>
				</view>
				<view class="popup-body">
					<slot></slot>
				</view>
				<view class="popup-footer">
					<view 
						  v-for="(item,index) in footerBtns" :key='index' 
						  class="btn" 
						  :style="{color: item.color,backgroundColor:item.backgroundColor}"
						  @click.stop="footerBtn(item)">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name: 'jcPopup',
		props: {
			showMask: {
				type: Boolean,
				default: true
			},
			position: {
				type: String,
				default: 'bottom'
			},
			title: {
				type: String,
				default: 'test'
			},
			
			
			footerBtns: {
				type: Array,
				default: ()=>[
					{
						title: '取消',
						color: '#333',
						backgroundColor: '#fff',
						fn:()=>{}
					},
					{
						title: '确定',
						color: '#fff',
						backgroundColor: '#f00',
						fn:()=>{}
					}
				]
			}
		},
		computed:{
			contentClass(){
				//position ：left right up down center
				return `popup-${this.position}`;
			}
		},
		data() {
			return {
				visible: false
			}
		},
		methods:{
			maskEvent(){
				this.hide();
			},
			handleEvent(){
				return;
			},
			show(){
				this.visible = true;
			},
			hide() {
				this.visible = false;
			},
			footerBtn(item){
				let p = item.fn();
				this.$emit('click',p)
			}
		},
		mounted() {
			console.log(this.$slots.default)
		}
	}
</script>

<style lang="scss" scoped>
	.popup{
		.popup-mask{
			position: fixed;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-color: rgba(0,0,0,.5);
			z-index: 1000;
		}
		.popup-content{
			position: fixed;
			z-index: 2020;
			background-color: #fff;
			z-index: 1001;
			&.popup-center{
				top: 50%;
				width: 90%;
				left: 5%;
				// height: 100rpx;
				transform: translateY(-50%);
				border-radius: 10rpx;
				.popup-content-center{
					display: flex;
					flex-direction: column;
					.popup-header{
						display: flex;
						justify-content: center;
						align-items: center;
						height: 80rpx;
					}
					.popup-footer{
						display: flex;
						align-items: center;
						position: relative;
						&:after{
							position: absolute;
							background-color: #ebedf0;
							width: 100%;
							top: 0;
							left: 0;
							height: 2rpx;
							content: '';
							box-sizing: border-box;
							
						}
						.btn{
							flex: 1;
							height: 100rpx;
							line-height: 100rpx;
							text-align: center;
						}
					}
					
				}
			}
			&.popup-left{
				width: 30%;
				top: 0;
				bottom: 0;
				left: 0;
				transition: width 0.3s ease;
			}
			&.popup-right{
				width: 30%;
				top: 0;
				bottom: 0;
				right: 0;
				transition: width 0.3s ease;
			}
			&.popup-top{
				top: 0;
				left:0;
				right: 0;
				height: 30%;
				transition: height 0.3s ease;
				
			}
			&.popup-bottom{
				left:0;
				right: 0;
				bottom: 0;
				height: 30%;
				transition: height 0.3s ease-in-out;
			}
		}
		
	}
	
	
</style>
