<template>
	<div>
		<h1>about</h1>
		
		<mt-swipe :auto="4000" style="height:200px">
		  <mt-swipe-item style="background: red;">1</mt-swipe-item>
		  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
		  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
		</mt-swipe>
		
		
	</div>
</template>

<script>
	export default{
		name:'About',
		data(){
			return{
				tit:'关于'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		}
	}
</script>

<style scoped="">
</style>