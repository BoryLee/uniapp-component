<template>
	<view class="cell-item">
		<view class="cell-item-wrap" :style="getStyle" @click.stop='cellClick'>
			<view class="cell-content" @touchstart='swiper.start' @touchmove='swiper.move' @touchend='swiper.end' 
			:data-index='touchIndex' 
			:data-width='width' 
			:data-btnwidth='btnWidth' 
			:data-count='count'>
				<slot></slot>
			</view>
			<view class="cell-btns">
				<view class="cell-btn" 
				v-for="(item,index) in btnOptions" 
				:key="index" 
				:style="{backgroundColor: item.backgroundColor}"
				@click="btnClick(index)"
				>
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script module='swiper' lang="renderjs">
	export default{
		methods:{
			start(e){
				let { index,width,btnwidth} = e.currentTarget.dataset;
				if(!btnwidth) return;
				[].slice.call(document.querySelectorAll('.cell-item-wrap')).forEach((node,i)=>{
					if(index !== i){
						node.style.width = width+'px';
						node.style.transform = 'translateX(0)';
						node.style.transition = 'transform 0.6s ease';
					}
				})
				let touch = e.changedTouches[0];
				this.startX = touch.pageX;
				this.startY = touch.pageY;
				this.startTime = new Date().getTime();
			},
			move(e){
				let {pageX,pageY} = e.changedTouches[0];
				if(pageX - this.startX <0){
					this.direction = 'left';
					this.offetX =  Math.abs(pageX - this.startX);
				}else{
					this.direction = 'right';
				}
				if(Math.abs(pageY - this.startY) > Math.abs(pageX - this.startX))return;
				if(Math.abs(pageX - this.startX) < 10)return;
				if(this.offetX){
					this.$ownerInstance.callMethod('renderjsResponseToJS',this.offetX)
				}
			},
			end(e){
				let { btnwidth,count } = e.currentTarget.dataset;
				if(this.offetX)
				if(this.direction === 'left'){
					if(this.offetX >= btnwidth){
						this.$ownerInstance.callMethod('renderjsResponseToJS',btnwidth * count)
					}else{
						this.$ownerInstance.callMethod('renderjsResponseToJS',0)
					}
				}else{
					this.$ownerInstance.callMethod('renderjsResponseToJS',0)
				}  
			}
		}
	}
	
</script>

<script>
	export default{
		name: 'jclifeCellItem',
		props: {
			item: {
				type: Object
			},
			btnOptions: {
				type: Array,
				default: ()=>[]
			},
			btnWidth: {
				type: Number,
			},
			touchIndex: {
				type: Number,
			},
			close: {
				type: Boolean,
				default: false
			}
		},
		watch:{
			isMove(value){
				if(!value){
					this.moveWidth = 0;
				}
			},
			close(value){
				if(value){
					this.moveWidth = 0;
				}
			}
		},
		data(){
			return {
				moveWidth: 0,
				width:0
			}
		},
		computed:{
			count(){
				return this.btnOptions.length;
			},
			getStyle(){
				let {windowWidth} = uni.getSystemInfoSync();
				let width = windowWidth + this.btnOptions.length * this.btnWidth;
				this.width = width;
				return `width: ${width}px;transform: translateX(-${this.moveWidth}px);transition: transform 0.6s ease`;
			}
		},
		methods:{
			renderjsResponseToJS(value){
				this.moveWidth = value;
			},
			btnClick(index){
				this.$emit('btnclick',index);
				this.moveWidth = 0;
			},
			cellClick(){
				this.$emit('click',this.item)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.cell-item{
		width: 100%;
		overflow: hidden;
		box-sizing: border-box;
		border-bottom: 2rpx solid #F1F1F1;
		.cell-item-wrap{
			height: 100%;
			position: relative;
			// &:active{
			// 	background-color: #F8F8F8;
			// }
			.cell-content{
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 30rpx;
				font-size: 30rpx;
			}
			.cell-btns{
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				display: flex;
				align-items: center;
				.cell-btn{
					height: 100%;
					width: 60px;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 28rpx;
				}
			}
				
		}
	
	}
</style>
