<template>
	<div id="">
		<header>
			<ul>
				
			 <RouterLink to="/ghtea" tag="span"><li>早午茶</li></RouterLink>
			 <RouterLink to="/wdyy" tag="span"><li>我的订阅</li></RouterLink>
			 <RouterLink to="/cnxh" tag="span"><li>猜你喜欢</li></RouterLink>
			 <RouterLink to="/move" tag="span"><li>视频</li></RouterLink>
			 <RouterLink to="/music" tag="span"><li>音乐</li></RouterLink>
			
		</ul>
		</header>
		<section>
			<div class="aaa">
				<RouterView></RouterView>
			</div>
		</section>
		
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	export default {
		name:"Home",
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted(){
		}
	}
	
	
</script>
<!-- 	$(function () {  
    alert(123);  
 }); -->
<style scoped="">
	html,body{height:100%}
	body{display: flex;flex-direction: column;}
	.router-link-active{
		color: red;
	}
	
	li{list-style: none;}
	header{
		height:50px;
		display: flex;
		justify-content: center;
		flex-shrink: 0;
		background: #cecece;
	}
	ul{
		width:100%;
		height:50px;
		display: flex;
		justify-content: space-around;
	}
	li{
		
		height: 50px;
		width:100%;		
		line-height: 50px;
		
	}
	span:hover{
		border-bottom: 2px solid #999999;
	}
	
	section{
		flex: 1;
		height:84vh;
		/* flex-shrink: 1; */
		overflow: auto;
	}
	footer{
		height:50px;
		flex-shrink: 0;
	}
	.aaa{
		height:100%;
	}
</style>