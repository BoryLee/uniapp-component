<template>
	<view class="checkbox" @click.stop='changeCheckBox'>
		<view class="checkbox-input" :style='checkBoxStyle' :class="{'checkbox-disable': disabled}">
			<text class="iconfont icon-check"></text>
		</view>
		<view class="checkbox-label">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'jc-checkbox',
		props: {
			name: {
				type: String,
				default: ''
			},
			value: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: '#fff'
			},
			bgColor: {
				type: String,
				default: 'green'
			},
			disabled: {
				type: Boolean,
				default: false
			}

		},
		computed: {
			checked: {
				get() {
					if (this.parent) {
						return this.parent.value.indexOf(this.name) !== -1;
					}
					return this.value;
				},
				set(val) {
					if (this.parent) {
						this.setParentValue(val);
					} else {
						this.$emit('input', val);
					}
				}
			},
			checkBoxStyle() {
				if (this.checked) {
					if (this.disabled) {
						return `color: #c8c9cc`;
					} else {
						return `color: ${this.color};backgroundColor: ${this.bgColor}`;
					}
				} else {
					return `color: #fff`;
				}
			},
		},
		data() {
			return {
				parent: null
			}
		},
		methods: {
			changeCheckBox() {
				if (this.disabled) return;
				if (this.parent) {
					this.setParentValue(!this.checked);
				} else {
					this.checked = !this.value;
				}
			},
			setParentValue(val) {
				const value = this.parent.value.slice();
				const index = value.indexOf(this.name);
				if (index > -1) {
					if (!val) {
						value.splice(index, 1);
					}
				} else {
					value.push(this.name)
				}
				this.parent.$emit('input', value)
			},
		},
		created() {
			let parent = this.$parent;
			while (parent) {
				if (parent.$options.name === 'jcCheckBoxGroup') {
					this.parent = parent;
					break;
				}
				parent = parent.$parent;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.checkbox {
		display: inline-flex;
		align-items: center;
		padding: 10rpx 0;

		.checkbox-input {
			width: 40rpx;
			height: 40rpx;
			border: 2rpx solid #C8C7CC;
			border-radius: 50%;
			margin-right: 20rpx;
			box-sizing: border-box;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;

			&.checkbox-disable {
				cursor: not-allowed;
				background-color: #ebedf0;
			}

			.icon-check {
				font-size: 20rpx;
				text-align: center;
				// color: inherit;
			}
		}
	}

	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1945190_rh9zxx0lil8.eot?t=1596695532718');
		/* IE9 */
		src: url('//at.alicdn.com/t/font_1945190_rh9zxx0lil8.eot?t=1596695532718#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAAsAAAAAB0wAAALaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqCCIF6ATYCJAMQCwoABCAFhG0HRRtpBsiemjypEKUNI3AbERDcwBAPH/t9O1dWNUkSjX82rk8nkVRLoJKgBTopePK8Q3z/u6YpwgBVnh+QAqK7yaOf9FZOM1KEiuB5QNvnJztHIKewAzL26sXs/1xOb5QlMD9QLnOM50e9ozjeGtDe2KZECyRBb9BdxKSoi6cJTNtSwHDd2j2M7BqYFIg3OpWRvRLQOkhPCuMdK1t8MGYy32UKIe/59+MfKgs7aayAmbeetWio/qf352nNDm/doQjhdjYE6ygcQ5p40el4xCQTx0yms/5mJ5BJk5KtOuDrdBgcExfmw788SgpiHCidBSMnWfz0YoFWgq2TtvLUFt3ASQ0mMY4ryEuAtuFdKVT3Mu6NuDDJiQjq+vlxDiV7RxcnWbA7m6ntUPfDw8jTk/j4KNzfqyPi/kabdniE0HfWs4Vh+t5cjihw7ey6xv3FJVHEs4teJXlUlGVUN+0Zua/WwB77eRmbBzMjh/mHbo9VNMyYkjcnLWn5VaaktuXZAfGJrN8sKlBKPtFwohjnrLrJf8gfxv8MqfpYFT/gN053jRf3fdVPuhp8Hrj95r4h1aYp0VsUTha+buHEis7FwNidSrCgmNcOmEBiGpp5yRmWfW6hWbuTVJi0piFN2IQyaRtt6jGMmTGCcZPOYNqRtvUzVjAm0VM4tGRBWHQDad4nKIvu0KZ+wJh1PzBuMUww7XZk7DhjN3RnEwOZg4aVaayr0QhBZu4U5YNAx0MyM8WcLgBL6GFcWlRST7dBBNgWcxITtIxzggmLhnGrdR6EQlEcY9ExUHlRgPNYZXEx6XpRkRoNI6crDJBxQIMppmE6VVQEobU5Z+PzgwA1LkTGBggzTgFgEvTusVJFSiagbYrIJMKrXJIwgSrDcQRGMFFhWKtlAyGYiMJi3cPGABVXJLAgFlOp2CEjUxVFx6vCT7gOpoGndGRUdIwZexwANeiSGYtOFjKdBrhFDYHMEAIAAA==') format('woff2'),
			url('//at.alicdn.com/t/font_1945190_rh9zxx0lil8.woff?t=1596695532718') format('woff'),
			url('//at.alicdn.com/t/font_1945190_rh9zxx0lil8.ttf?t=1596695532718') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_1945190_rh9zxx0lil8.svg?t=1596695532718#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont";
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-check:before {
		content: "\e6a8";
	}
</style>
