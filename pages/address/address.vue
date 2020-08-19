<template>
	<view class="address">
		<view class="input-wrapper" @click="showAddress">
			<input type="text"  placeholder="请选择地址" v-model='address' disabled/>
		</view>
		<address-picker :places='places' @change='changeAddressPicker' ref='address-picker'></address-picker>
	</view>
</template>

<script>
	import addressPicker from '../components/address-picker/address-picker.vue';
	export default{
		components: { addressPicker },
		data() {
			return {
				places: [],
				address: ''
			}
		},
		methods:{
			changeAddressPicker(value){
				this.places = value.map(item=>item.name);
				this.address = value.map(item=>item.name).join(' ');
			},
			showAddress(){
				this.$refs['address-picker'].show();
			}
		}
	} 
</script>

<style lang="scss" scoped>
	.address{
		display: flex;
		align-items: center;
		.input-wrapper{
			width: 100%;
		}
	}
</style>
