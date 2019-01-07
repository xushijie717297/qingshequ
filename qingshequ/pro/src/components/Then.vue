<template>
	<div>
		<h1>then</h1>
	</div>
</template>

<script>
	export default {
		name:'Then',
		data(){
			return{
				tit:'我的'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style>
</style>
