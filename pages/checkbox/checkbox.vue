<template>
	<view>
		<jc-cell>
			<jc-cell-item>
				<jc-check-box v-model='checked'>1111</jc-check-box>
			</jc-cell-item>
		</jc-cell>
		<jc-cell>
			<jc-cell-item>
				<jc-check-box-group v-model='result'>
					<jc-check-box name='a'>test 1</jc-check-box>
					<jc-check-box name='b'>test 2</jc-check-box>
					<jc-check-box name='c'>test 3</jc-check-box>
					<jc-check-box name='d'>test 4</jc-check-box>
				</jc-check-box-group>
			</jc-cell-item>
		</jc-cell>
		
	</view>
</template>

<script>
	import jcCheckBox from '../components/checkbox/checkbox.vue';
	import jcCheckBoxGroup from'../components/checkbox/checkbox-group.vue';
	import jcCell from '../components/cell/cell.vue';
	import jcCellItem from '../components/cell/cell-item.vue';
	export default{
		components: { jcCheckBox,jcCell,jcCellItem,jcCheckBoxGroup },
		data() {
			return {
				checked: false,
				result: ['a','b','c']
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.checkbox{
		display: flex;
		
	}
	

</style>
