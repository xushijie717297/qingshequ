<template>
	<div class="detail">
		<header> <span class="fanhui" @click="fanhui()">&lt; </span>详情</header>
		<section>
			<h1>{{detail}}</h1>
		</section>

	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Detail',
		data(){
			return{
				detail:""
			}
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		},
		mounted(){
			var _this=this;
			axios({
				method:'get',
				url:'http://jx.xuzhixiang.top/ap/api/detail.php',
				params:{uid:'11475',id:_this.$route.params.id}
			}).then((data)=>{
				_this.detail=data.data.data.pdesc;
			})
		}
	}
</script>

<style>
	.detail{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	header{
		height: 50px;
		line-height: 50px;
		background: yellowgreen;
		text-align: center;
	}
	section{
		flex: 1;
	}
	.fanhui{
		  position: absolute;
   		 left: 20px;
   		 color: #fff;
   		 font-size: 25px;
	}
</style>