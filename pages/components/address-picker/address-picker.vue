<template>
	<view class="address-picker" v-if="isShowPicker">
		<view class="picker-mask" @click.stop="hide">
			<view class="picker-container" @click.stop="handleEvent">
				<view class="picker-header">
					<view class="header-btn" @click.stop="hide">
						取消
					</view>
					<view class="header-btn" @click.stop="confirm">
						确定
					</view>
				</view>
				<view class="picker-content">
					<picker-view class="picker-view" indicator-style='height: 80rpx;' :value="multiArray" @change="bindChange">
						<picker-view-column class="picker-view-column">
							<view class="item" v-for="(provice,proviceIndex) in provices" :key="proviceIndex">{{provice.name}}</view>
						</picker-view-column>
						<picker-view-column class="picker-view-column">
							<view class="item" v-for="(city,cityIndex) in cities" :key="cityIndex">{{city.name}}</view>
						</picker-view-column>
						<picker-view-column v-if="level >= 3" class="picker-view-column">
							<view class="item" v-for="(area,areaIndex) in areas" :key="areaIndex">{{area.name}}</view>
						</picker-view-column>
						<picker-view-column v-if="level >= 4" class="picker-view-column">
							<view class="item" v-for="(street,streetIndex) in streets" :key="streetIndex">{{street.name}}</view>
						</picker-view-column>
					</picker-view>

				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'address-picker',
		props: {
			places: {
				type: Array,
				default: () => []
			},
			url: {
				type: String,
				default: 'https://test.jcsl.bingqiyi.com/api/common/addresses'
			},
			level: {
				type: Number,
				default: 4
			}
		},
		data() {
			return {
				isShowPicker: false,
				multiArray: [],
				provices: [],
				cities: [],
				areas: [],
				streets: []
			}
		},
		watch: {
			places: {
				handler(value) {
					this.multiArray = new Array(this.level).fill(0);
					this.requestAddress()
				},
				immediate: true
			}

		},
		methods: {
			handleEvent() {
				return;
			},
			show() {
				this.isShowPicker = true;
			},
			hide() {
				this.isShowPicker = false;
			},
			confirm() {
				let names = ['provices','cities','areas','streets'];
				let places = [];
				this.multiArray.forEach((item,index)=>{
					if(index == 0){
						places[index] = this[names[index]][item];
					}else{
						if(item > 0){
							places[index] = this[names[index]][item];
						}
					}
				})
				this.hide();
				this.$nextTick(()=>{
					this.$emit('change',places)
				})
				
			},
			bindChange(e) {
				this.scroll = true;
				let value = e.detail.value;
				let index = this.getOneColumn(value);
				let leaveIndex = this.level - 1 - index;
				let ary = new Array(leaveIndex).fill(0);
				this.multiArray = value.slice(0, index + 1).concat(ary);
				this.flag = index + 1;
				this.$nextTick(() => {
					if (this.flag == 1) {
						let {
							_id
						} = this.provices[this.multiArray[this.flag - 1]];
						if(_id){
							this.requestAddress(_id, this.flag)
						}
					} else if (this.flag == 2) {
						let {
							_id,
							has_children
						} = this.cities[this.multiArray[this.flag - 1]];
						if (has_children) {
							if (this.flag < this.level) {
								this.requestAddress(_id, this.flag)
							}
						}else{
							this.areas = [{name: '不确定',has_children: false}]
						}
					} else if (this.flag == 3) {
						let {
							_id,
							has_children
						} = this.areas[this.multiArray[this.flag - 1]];
						if (has_children) {
							if (this.flag < this.level) {
								this.requestAddress(_id, this.flag)
							}
						}else{
							this.streets = [{name: '不确定',has_children: false}]
						}
					}
				})
			},
			getOneColumn(array) {
				for (let i = 0; i < array.length; i++) {
					if (array[i] != this.multiArray[i]) {
						return i
					}
				}
			},
			requestAddress(id, flag) {
				this.getCityList(id).then(res => {
					if (res && res.data) {
						const result = res.data;
						if (!id) {
							this.flag = 1;
							this.provices = result;
							this.$nextTick(() => {
								if(this.places.length > 0  && !this.scroll){
									this.multiArray[0] = this.provices.findIndex(province=>province.name == this.places[0])
								}
								let {
										_id
									} = this.provices[this.multiArray[0]];
									this.requestAddress(_id, this.flag);
							})
						} else {
							if (this.flag == 1) {
								result.unshift({
									name: '不确定',
									has_children: false
								});
								this.flag = 2;
								this.cities = result;
								this.$nextTick(()=>{
									if(this.places.length > 0  && !this.scroll){
										if(this.places.length >= this.flag){
											this.multiArray[1] = this.cities.findIndex(city=>city.name == this.places[1])
										}
									}else{
										this.multiArray[1] = 0;
									}
									this.$nextTick(() => {
										if (this.multiArray[1] == 0) {
											this.areas = [{
												name: '不确定',
												has_children: false
											}];
											this.streets = [{
												name: '不确定',
												has_children: false
											}];
										} else {
											
											let {
												_id,
												has_children
											} = this.cities[this.multiArray[1]];
											if (has_children) {
												if (this.flag < this.level) {
													this.requestAddress(_id, this.flag)
												}
											}
										}
									
									})
								})
								
								

							} else if (this.flag == 2) {
								result.unshift({
									name: '不确定',
									has_children: false
								});
								this.flag = 3;
								this.areas = result;
								if(this.places.length > 0  && !this.scroll){
									if(this.places.length >= this.flag){
										this.multiArray[2] = this.areas.findIndex(area=>area.name == this.places[2])
									}
								}else{
									this.multiArray[2] = 0;
								}
								
								this.$nextTick(() => {
									if (this.multiArray[2] == 0) {
										this.streets = [{
											name: '不确定',
											has_children: false
										}]
									} else {
										let {
											_id,
											has_children
										} = this.areas[this.multiArray[2]];
										if (has_children) {
											if (this.flag < this.level) {
												this.requestAddress(_id, this.flag)
											}
										}
									}

								})
							} else if (this.flag == 3) {
								result.unshift({
									name: '不确定',
									has_children: false
								});
								this.flag = 4;
								this.streets = result;
								if(this.places.length > 0 && !this.scroll){
									if(this.places.length >= this.flag){
										this.multiArray[3] = this.streets.findIndex(street=>street.name == this.places[3])
									}
								}else{
									this.multiArray[3] = 0;
								}
							}

						}
						
					}
					this.scroll = false;

				})
			},
			getCityList(id){
				return new Promise((resolve,reject)=>{
					uni.request({
						url: this.url,
						data: {
							parent_id: id ? id : ''
						},
						success(res){
							if(res.statusCode >= 200 && res.statusCode <= 304){
								if(res.data.error_code == 0){
									resolve(res.data)
								}
							}
						},
						fail(errror){
							console.log('error',JSON.stringify(error))
						}
					})
				})
			}
	
		
		},
		created() {
			this.multiArray = new Array(this.level).fill(0);
		}
	}
</script>

<style lang="scss" scoped>
	.address-picker {
		width: 100%;
		height: 100%;
        position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
		.picker-mask {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: rgba(0, 0, 0, .5);
			z-index: 100;

			.picker-container {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 600rpx;
				background-color: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.picker-header {
					height: 100rpx;
					width: 100%;
					position: relative;
					box-sizing: border-box;
					border-bottom: 2rpx solid #E9E9E9;

					.header-btn {
						width: 160rpx;
						height: 100rpx;
						line-height: 100rpx;
						position: absolute;
						top: 0;
						text-align: center;

						&:nth-child(1) {
							left: 0;
							color: #999;
						}

						&:nth-child(2) {
							right: 0;
							color: #007aff;
						}
					}

				}

				.picker-content {
					flex: 1;

					.picker-view {
						height: 100%;
						width: 100%;

						.uni-picker-view-wrapper {
							height: 100%;
							width: 100%;
							display: flex;
							justify-content: center;

							.picker-view-column {
								flex: 1;

								.item {
									text-align: center;
									height: 80rpx;
									line-height: 80rpx;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
							}
						}


					}
				}
			}
		}
	}
</style>
