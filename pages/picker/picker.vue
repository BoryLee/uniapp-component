<template>
	<view class="picker">
		<jc-picker label='单选' :labelWidth='120' :required='true' :suffix='true'  :data='array' :placeholder='placeholder' :disabled='false' v-model='selectIndex'></jc-picker>
	</view>
</template>

<script>
	import jcPicker from '../components/picker/picker.vue'
	export default{
		components:{ jcPicker },
		data() {
			return {
				selectIndex: 0,
				placeholder: '请选择',
				array: ['uniapp','Javascript','Vue','React','Flutter','Weex'],
				list: [
					{
						title: 'uniapp'
					},
					{
						title: 'Javascript'
					},
					{
						title: 'Vue'
					},
					{
						title: 'React'
					},
					{
						title: 'Flutter'
					},
					{
						title: 'Weex'
					}
				]
			}
		}
	}
</script>

<style scoped>
</style>
