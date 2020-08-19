<template>
	<view class="tab" id="tab">
		<scroll-view :scroll-x="isScroll" :scroll-left="isScroll ? scrollLeft : 0" :scroll-with-animation="isScroll">
			<view class="tab-items" :style="tabItemsStyleObj">
				<view class="tab-item" id="tab-item" :style="tabItemStyleObj(index)" v-for='(item,index) in tabs' :key='index'
				 @click="changeTab(index)">
					{{tabKey.length ? item[tabKey] : item}}
				</view>
				<view class="tab-line" :style="tabLineStyleObj"></view>
			</view>
		</scroll-view>
		<view class="tab-content">
			<slot></slot>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'jcTab',
		props: {
			value: {
				type: Number,
				default: 0
			},
			tabs: {
				type: Array,
				default: () => []
			},
			color: {
				type: String,
				default: '#333'
			},
			activeColor: {
				type: String,
				default: 'red'
			},
			isScroll: {
				type: Boolean,
				default: true
			},
			tabKey: {
				type: String,
				default: ''
			},
			height: {
				type: String,
				default: '60rpx'
			},
			lineHeight: {
				type: String,
				default: '6rpx'
			},
			lineBgColor: {
				type: String,
				default: 'red'
			},
			lineScale: {
			    type: Number,
			    default: 0.5
			},
		},
		watch:{
			value(val){
				this.currentIndex = val;
				this.$nextTick(() => {
					this.getTabItemPosition();
				})
			}
		},
		computed: {
			tabItemsStyleObj() {
				if (this.isScroll) {
					return `display: inline-flex;whiteSpace: nowrap;height:${this.height}`;
				} else {
					return `display: flex;white-space: normal;height:${this.height}`;
				}
			},
			tabLineStyleObj() {
				return `width: ${this.lineWidth}px;left: ${this.lineLeft}px;height: ${this.lineHeight};backgroundColor: ${this.lineBgColor}; transform:translateX(-${this.lineWidth / 2}px)`;
			},
		},
		data() {
			return {
				currentIndex: 0,
				lineWidth: 40,
				currentWidth: 0,
				lineLeft: 0,
				scrollLeft: 0,
				tabContainerWidth: 0
			}
		},
		methods: {
			tabItemStyleObj(index) {
				let textAlign = '';
				if(!this.isScroll){
					textAlign = 'center'
				}
				if (this.currentIndex === index) {
					return `color: ${this.activeColor};textAlign:${textAlign}`;
				} else {
					return `color: ${this.color};textAlign:${textAlign}`;
				}
			},
			changeTab(index) {
				this.currentIndex = index;
				this.$emit('input',index)
				this.$nextTick(() => {
					this.getTabItemPosition();
				})
			},
			getTabItemPosition() {
				const query = uni.createSelectorQuery().in(this);
				query.select('#tab').boundingClientRect(rect => {
					if (!this.tabContainerWidth) {
						this.tabContainerWidth = rect.width;
					}
				}).exec();
				query.selectAll('#tab-item').boundingClientRect(data => {
					let lineLeft = 0;
					let currentWidth = 0;
					data.forEach((rect, i) => {
						if (i < this.currentIndex) {
							lineLeft += rect.width;
						} else if (i === this.currentIndex) {
							currentWidth = rect.width;
						}
					})
					 this.currentWidth = currentWidth;
					 this.lineWidth = currentWidth * this.lineScale * 1;
					this.lineLeft = lineLeft + currentWidth / 2;
					if (this.isScroll) {
						this.scrollLeft = this.lineLeft - this.tabContainerWidth / 2
					}
				}).exec();
				
			}
		},
		mounted() {
			this.currentIndex = this.value;
			this.$nextTick(() => {
				this.getTabItemPosition();
			})
		}
	}
</script>

<style lang="scss" scoped>
	.tab {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		.tab-items {
			position: relative;
			display: inline-flex;
			align-items: center;
			white-space: nowrap;
			overflow: hidden;

			.tab-item {
				padding: 0 11rpx;
				font-size: 30rpx;
				flex: 1;
				transition: all 0.3s;
				white-space: nowrap;
			}

			.tab-line {
				position: absolute;
				bottom: 0;
				transition: all .3s linear;
			}
		}
		.tab-content{
			flex: 1;
		}

	}

	/deep/ ::-webkit-scrollbar {
		display: none;
	}
</style>
