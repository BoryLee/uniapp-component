<template>
	<view class="checkbox-group">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		name: 'jcCheckBoxGroup',
		props: {
			value: {
				type: Array,
				default: () => []
			}
		},
	}
</script>

<style lang="scss" scoped>
</style>
