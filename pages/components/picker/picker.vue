<template>
	<view class="picker-wrapper" :style="{'align-items': align}">
		<label class='label' :class="{'dot-input': required,'prefix':prefix,'suffix': suffix }" :style="{width: labelWidth+'rpx'}"
		 v-if="label.length">{{label}}</label>
		<view class="picker-container">
			<picker class="picker" mode='selector' :range="data" :range-key="dataKey" :value='value' @change="pickerChange"
			 :disabled='disabled'>
				<input type="text" :placeholder="placeholder" :value='selectVal' disabled />
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'jcPicker',
		props: {
			required: {
				type: Boolean,
				default: false
			},
			prefix: {
				type: Boolean,
				default: false
			},
			suffix: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: ''
			},
			labelWidth: {
				type: Number,
				default: 0
			},
			align: {
				type: String,
				default: 'center'
			},
			value: {
				type: Number,
				default: 0
			},
			data: {
				type: Array,
				default: () => []
			},
			dataKey: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				selectVal: ''
			}
		},
		methods: {
			pickerChange(e) {
				let {
					value
				} = e.detail;
				this.selectVal = this.dataKey.length ? this.data[value][dataKey] : this.data[value];
				this.$emit('input', value);

			}
		},
		mounted() {
			if (this.disabled) {
				this.selectVal = this.dataKey.length ? this.data[this.value][this.dataKey] : this.data[this.value];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.picker-wrapper {
		width: 100%;
		display: flex;

		.label {
			margin-right: 24rpx;

			&.dot-input {
				&.suffix {
					&::after {
						content: '*';
						color: $jclife-dot-color;
						font-size: $jclife-font-size-dot;
					}
				}

				&.prefix {
					&::before {
						content: '*';
						color: $jclife-dot-color;
						font-size: $jclife-font-size-dot;
					}
				}

			}
		}

		.picker-container {
			flex: 1;
			position: relative;

			.item {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
			}
		}

	}
</style>
