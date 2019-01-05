<template>
	<div id="">
		<h1>home</h1>
		<ul>
			<li v-for="item in list"><router-link :to="'/detail/'+item.pid">{{item.pname}}</router-link></li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name:"Home",
		data(){
			return{
				str:'hello world vuejiashoujia',
				tit:'首页',
				list:[]
			}
		},
		methods:{
			
		},
		mounted(){
			this.$emit('toparent',this.tit)
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/productlist.php',
				params:{uid:'11475'}
			}).then((data)=>{
				_this.list=data.data.data
			})
			
			
		}
	}
	
	
</script>

<style scoped="">
	h1{
		color: yellow;
	}
	li{
		height: 50px;
		border-bottom: 1px solid red;
	}
	
</style>