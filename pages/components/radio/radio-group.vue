<template>
	<view class="radio-group">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'radio-group',
		props: {
			value: {
				type: [String, Number, Boolean],
			},
		},
		mounted() {
		    this.$emit('input', this.value);
		 },
	}
</script>

<style lang="scss" scoped>
	.radio-group {
		display: flex;
	}
</style>
