<template>
	<view class="radio">
		<view class="radio-inner" @click="checkRadio">
			<view 
				  class="radio-inner-circle" 
				  :class="{'radio-checked': currentValue === label,'radio-disabled':isDisabled}"
				  :style="getCheckColor"
				  >
			</view>
		</view>
		<view class="radio-label" :class="{'radio-label-active': currentValue === label }">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'radio',
		props: {
			value: {
				type: [String, Number, Boolean],
			},
			label: {
				type: [String, Number, Boolean],
			},
			disabled: {
				type: Boolean,
				default: false,
			},
			checkColor: {
				type: Boolean,
				default: '#2ECC9E'
			}
		},
		data() {
			return {
				parent: null,
			}
		},
		computed: {
			getCheckColor(){
				if(this.currentValue === this.label){
					return `backgroundColor: ${this.checkColor}`;
				}
			},
			currentValue: {
				get() {
					return this.parent ? this.parent.value : this.value;
				},
				set(val) {
					(this.parent || this).$emit('input', val);
				},
			},
			isDisabled() {
				return this.parent ? this.parent.disabled || this.disabled : this.disabled;
			},
		},
		methods: {
			checkRadio() {
				if (this.isDisabled) return;
				this.currentValue = this.label;
			}
		},
		created() {
			let parent = this.$parent;
			while (parent) {
				if (parent.$options.name === 'radio-group') {
					this.parent = parent;
					break;
				}
				parent = parent.$parent;
			}
		}
	}
</script>

<style lang="scss" scoped>
	$jc-radio-border-color: #999999;
	$jc-radio-circle-bgcolor-checked: #2ECC9E;
	$jc-radio-font-size: 26rpx;
	$jc-radio-color-default: #999999;
	$jc-radio-color-checked: #333333;

	.radio {
		display: flex;
		font-size: $jc-radio-font-size;
		color: $jc-radio-color-default;
		width: 146rpx;

		.radio-inner {
			width: 36rpx;
			height: 36rpx;
			border: 2px solid $jc-radio-border-color;
			border-radius: 50%;
			position: relative;

			.radio-inner-circle {
				position: absolute;
				width: 20rpx;
				height: 20rpx;
				border-radius: 50%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: #fff;
				&.radio-checked {
					background-color: $jc-radio-circle-bgcolor-checked;
				}

			}

		}

		.radio-label {
			margin-left: 11rpx;
			&.radio-label-active{
				color: $jc-radio-color-checked;
			}
		}

	}
</style>
