<template>
	<view class="button">
		<button :disabled="disabled" @click="handleClick">
			{{title}}
		</button>
	</view>
</template>

<script>
	export default{
		name: 'jcButton',
		props:{
			type: {
				type: String,
				default: 'default'
			},
		},
		data() {
			return {
				title: '',
				disabled: false,
			}
		},
		methods:{
			handleClick(){
				this.count = 60;
				this.countDown();
			},
			countDown(){
				if(this.count === 0){
					clearTimeout();
					this.title = '重新获取验证码';
					this.disabled = false;
					this.count = 60;
					return;
				}else{
					this.title = `${this.count}后重新获取`;
					--this.count;
					this.disabled = true;
				}
				setTimeout(this.countDown,1000);
			}
		},
		mounted() {
			if(this.type == 'count-down'){
				this.title  = '获取验证码';
			}
		}
	}
</script>

<style lang="scss" scoped> 
.button{
	height: 88rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	font-size: 28rpx;
	
}
</style>
