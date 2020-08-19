<template>
	<view class="home">
		<view class="input-container">
			<view class="cell">
				<jclife-input
							v-for="(item,index) in list" 
							:key='item.name' 
							:required='index<1' 
							:password="item.type === 'password'"
							v-model='item.value' 
							:name='item.name' 
							:label='item.label' 
							:type='item.type'
							:align='item.align'
							clearable
							showDivide
							:isLunar='isLunar'
							@change='change'
							@confirm='confirm'
							@changeLunarSolar='changeLunarSolar'
							></jclife-input>
			</view>
		</view>
	</view>
</template>

<script>
	import jclifeInput from '../components/Input/Input.vue';
	export default {
		components:{
			jclifeInput,
		},
		data() {
			return {
				isLunar: false,
				list: [
					{
						type: 'text',
						name: 'username',
						label: '文本输入框',
						placeholder: '请输入文本',
						value: '',
						align: 'center'
					},
					{
						type: 'password',
						name: 'password',
						label: '密码输入框',
						placeholder: '请输入密码',
						value: '',
						align: 'center'
					},
					{
						type: 'number',
						name: 'money',
						label: '数字输入框',
						placeholder: '请输入数字',
						value: '',
						align: 'center'
					},
					{
						type: 'idcard',
						name: 'idcard',
						label: '身份证(仅小程序有效)',
						placeholder: '请输入身份证',
						value: '',
						align: 'center'
					},
					
					{
						type: 'datetime-all',
						name: 'dateTime',
						label: '时间选择器',
						value: '',
						align: 'center'
					},
					{
						type: 'lunar-solar',
						name: 'lunarSolarTime',
						label: '阴阳历选择器',
						value: '',
						align: 'center'
					},
					{
						type: 'area',
						name: 'address',
						label: '地址选择器',
						value: '河南省 南阳市 唐河县',
						align: 'center'
					},
					{
						type: 'text-area',
						name: 'remark',
						label: '备注',
						value: '',
						align: 'flex-start'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {
			change(data){
				let { type,value } = data;
				let index = this.list.findIndex(item=>item.type === type);
				let item = this.list[index];
				if(type === 'area'){
					if(Object.prototype.toString.call(value) === '[object Array]'){
						value = value.map(item=>item.name).join(' ')
					}
				}
				item.value = value;
				this.list.splice(index,1,item)
			},
			confirm(data){
				let { type,value } = data;
				let index = this.list.findIndex(item=>item.type === type);
				let item = this.list[index];
				let {date,lunarDate,time } = value
				item.value = this.isLunar ? `${lunarDate} ${time}`:`${date} ${time}`;
				this.list.splice(index,1,item)
			},
			changeLunarSolar(value){
				this.isLunar = value;
			}

		}
	}
</script>

<style lang="scss" scoped>
	.home{
		.input-container{
			font-size: 28rpx;
			color: #333;
			.cell{
				width: 90%;
				margin: 0 auto;
				height: 80rpx;
			}
		}
	}

</style>
