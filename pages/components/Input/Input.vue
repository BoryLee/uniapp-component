<template>
	<view class="jclife-input" :style="{'align-items': align}">
		<label class='label' :class="{'dot-input': required,'prefix':prefix,'suffix': suffix }" :style="{width: labelWidth+'rpx'}"
		 v-if="label.length">{{label}}</label>
		<view class="input-wrapper">
			<textarea :class="inputClass" :disabled="disabled" :value="value" :placeholder="placeholder" :placeholderClass='placeholderClass'
			 :maxlength='maxlength' :auto-height="autoHeight" v-if="type === 'text-area'" />
			 
			<input :class="inputClass"
				   :type='type' 
				   :disabled="disabled" 
				   :value="value" 
				   :password="password"
				   :placeholder="placeholder" 
				   :placeholderClass='placeholderClass'
				   :maxlength='maxlength'
				   @input='change' 
				   v-else
				   />
			<view class="date-time" @click.stop="showDateTime" v-if="dateTimeShow"></view>	
			<view class="date-time" @click.stop="showDate" v-if="type === 'lunar-solar'"></view>
			<view class="date-time" @click.stop="showAddress" v-if="type === 'area'"></view>
		    <view class="clear iconfont icon-clear" v-if="clearShow" @click.stop="clear"></view>
		</view>
		<date-time-picker ref='date-time' :type='type' @change='dateTimeChange' :datestring="value"></date-time-picker>
		<date-picker
						ref='date-picker' 
						:level="level"
						:isLunar="isLunar"
						:currentTime="currentTime"
						@changecalendar='changeCalendar'
						@confirm='confirmCalendar'
						></date-picker>
		<address-picker ref='address-picker' @change='changeAddress' :places="places"></address-picker>			
		<view class="divide" v-if="showDivide"></view>
	</view>
</template>

<script>
	import DateTimePicker from '../bory-dateTimePicker/bory-dateTimePicker.vue';
	import DatePicker from '../bory-datePicker/index.vue';
	import AddressPicker from '../address-picker/address-picker.vue';
	import jcPicker from '../picker/picker.vue';
	import { dateToDateArray } from './utils/util.js';
	import { calendar } from './libs/calendar.js';
	export default {
		name: 'jclifeInput',
		components:{ DateTimePicker,DatePicker,AddressPicker,jcPicker},
		props: {
			align: {
				type: String,
				default: 'center'
			},
			label: {
				type: String,
				default: ''
			},
			prefix: {
				type: Boolean,
				default: false
			},
			suffix: {
				type: Boolean,
				default: false
			},
			labelWidth: {
				type: Number,
				default: 200
			},
			type: {
				type: String,
				default: 'text'
			},
			password: {
				type: Boolean,
				default: false
			},
			required: {
				type: Boolean,
				default: false
			},
			clearable: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: '请输入'
			},
			placeholderClass: {
				type: String,
				default: 'input-placeholder'
			},
			placeholderStyle: {
				type: String,
			},
			value: {
				type: [String,Array]
			},
			inputClass:{
				type: String,
				default: 'input'
			},
			autoHeight:{
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			maxlength: {
				type: Number,
				default: 140
			},
			showDivide: {
				type: Boolean,
				default: false
			},
			isLunar:{
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				level: 6
			}
		},
		computed:{
			places(){
				if(this.type === 'area'){
					return  this.value.length ? this.value.split(' ') : [];
				}
			},
			clearShow(){
				return this.clearable && this.type !== 'text-area' && this.value.length;
			},
			dateTimeShow(){
				const types = ['date','year-month','year','datetime','datetime-all','time','hour-minute'];
				return types.indexOf(this.type) > -1;
			},
			currentTime(){
				if(this.type === 'lunar-solar'){
					if(this.value.length === 0){
						let date = new Date();
						let [year,month,day,hour,minute,second] = dateToDateArray(date);
						return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
					}else{
						if(this.isLunar){
							let dateArray = this.value.split(' ');
							let { date } = calendar.lunar2solar(dateArray[0]);
							return `${date} ${dateArray[1]}`;
						}else{
							return this.value;
						}
					}	
				}
				
			}
		},
		methods: {
			change(e){
				this.$emit('input',e.detail.value)
			},
			clear(){
				this.$emit('input','');
			},
			showDateTime(){
				this.$refs['date-time'].show();
			},
			dateTimeChange(value){
				this.$emit('change',{type:this.type,value})
			},
			showDate(){
				this.$refs['date-picker'].show();
			},
			
			changeCalendar(value){
				this.$emit('changeLunarSolar',value)
			},
			confirmCalendar(value){
				this.$emit('confirm',{type:this.type,value})
			},
			showAddress(){
				this.$refs['address-picker'].show();
			},
			changeAddress(value){
			this.$emit('change',{type:this.type,value})
			}
		},
	}
</script>

<style lang="scss" scoped>
	$jclife-input-sont-size: 28rpx;
	.jclife-input {
		display: flex;
		height:100%;
		padding: 10rpx;
		position: relative;
		.divide{
			position: absolute;
			bottom: 2rpx;
			left: 0rpx;
			right: 0rpx;
			height: 2rpx;
			background-color: #ebedf0;
		}
		.label {
			margin-right: 24rpx;
			&.dot-input {
				&.suffix{
					&::after {
						content: '*';
						color: $jclife-dot-color;
						font-size: $jclife-font-size-dot;
					}
				}
				&.prefix{
					&::before {
						content: '*';
						color: $jclife-dot-color;
						font-size: $jclife-font-size-dot;
					}
				}
				
			}
		}
		.input-wrapper{
			flex: 1;
			position: relative;
			height: 100%;
			.input{
				width: 100%;
				height: 100%;
				.input-placeholder{
					font-size: $jclife-input-sont-size;
				}
			}
			.date-time{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				opacity: 0;
				z-index:2;
			}
			.clear{
				position: absolute;
				top: 0;
				right: 0;
				transform: translateY(50%);
				z-index: 10;
				color: #d9d9d9;
				font-size: 36rpx;
			}
		}
	}
	@font-face {font-family: "iconfont";
	  src: url('//at.alicdn.com/t/font_1945190_22avllhri6m.eot?t=1596433190886'); /* IE9 */
	  src: url('//at.alicdn.com/t/font_1945190_22avllhri6m.eot?t=1596433190886#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK4AAsAAAAABnwAAAJsAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBCIEfATYCJAMICwYABCAFhG0HLxvEBciemjwJrJccER8AEpBQhAiitax6Z0IAKhrQJk/ogPXrvCRWhh0LCeRZn977X2tz5qHO6+fxkhiWTuPq/BWfHSyRCM1KJCVChNAAmnF/lwQSCExoA4B0vUCDy+x/Lqd3VwEFMv/zXi5zTJrUO4rjQApwrEWRFUnkDWM3ETzA4wTqDesrbG/vjlCXgXGBuOo5BtQLPll2krVCdcPSLO6rUlvcKIZ7/Pvxn6UwhaoElO0/v7Fh/qsZpqW98pymCD/BWF2FhEUgE4cbY7tKwiGX1MfKxsGxioNfzWVJDeKoWuH8daCwEQzqvGfiY8GjMhcg0505YG3SdaRoHLzQ/vxHvn499uXL0U+fzhy5fN56std5PBHK45vd5yPl6fWey5ldV1bus1Sl8loXJ7sllVn6vIHotfzHEegF/IfK78AcoGx6nlRAMHxn8EXrLVdMBj93Pk5zT9lsmAPUnsMe/Cv+wKYcC4G+yCG/MVWYU7qHinr1KDFd7X6nqrpuLBVqdd2eo8ZQBkmtSTSTFv1VGlylkGq11nSot2C3ukEHVhK5DvNeNQitvqDQ7A0krb7RTPqBKt3+oFprCOodjY4tG0zHNLeYDCEbzWf0rCRWyChNUbwn5z40OC/klDNx7gVxMhyXkzuKiZeYkT84UxGFipMIt9ppFIYJppz4ZMnQFUlno5FqetPQSiJo2sKIQRAbMj1DHksipmh70ax8fo847oUM3NEwYj0jLOf1jiaGxgPQnSwe1PAor+QeOKaEUJDCEhG01QaRUCiB0uZBPmIRQ+6ESGpmBPHUUNlwe0X0dzugHlAXAfskVWdCMhgA') format('woff2'),
	  url('//at.alicdn.com/t/font_1945190_22avllhri6m.woff?t=1596433190886') format('woff'),
	  url('//at.alicdn.com/t/font_1945190_22avllhri6m.ttf?t=1596433190886') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('//at.alicdn.com/t/font_1945190_22avllhri6m.svg?t=1596433190886#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-clear:before {
	  content: "\e60e";
	}

</style>
