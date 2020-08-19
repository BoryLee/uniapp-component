<template>
	<view>
		<button type="default" @click="show('left')">left</button>
		<button type="default" @click="show('right')">right</button>
		<button type="default" @click="show('top')">top</button>
		<button type="default" @click="show('bottom')">bottom</button>
		<button type="default" @click="show('center')">center</button>
		<jc-popup :position="position" ref='test' @click='footerEvent'></jc-popup>
	</view>
</template>

<script>
	import jcPopup from '../components/popup/popup.vue';
	export default{
		components: { jcPopup },
		data() {
			return {
				position: ""
			}
		},
		methods:{
			show(value){
				this.position = value;
				this.$refs['test'].show()
			},
			footerEvent(value){
				console.log(value)
			}
			
		}
	}
</script>

<style lang="scss" scoped>

</style>
