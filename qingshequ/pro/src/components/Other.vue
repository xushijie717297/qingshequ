<template>
	<div>
		
	</div>
</template>

<script>
	export default {
		name:'Other',
		data(){
			return{
				tit:'社区'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style>
</style>