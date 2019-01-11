<template>
	<div>
		<header>
			<div>
		<router-link to="/sousuo" tag="span"><input type="text"  placeholder="　　搜索内容.主题.站" id="ss"></router-link>
		<span class="fanhui" @click="fanhui()">返回 </span>
		</div>
		
		<ul class="list">
			 <RouterLink to="/yuedu" tag="span"><li>阅读</li></RouterLink>
			 <RouterLink to="/yingshi" tag="span"><li>影视</li></RouterLink>
			 <RouterLink to="/yinyue" tag="span"><li>音乐</li></RouterLink>
			 <RouterLink to="/yishu" tag="span"><li>艺术</li></RouterLink>
			 <RouterLink to="/sheji" tag="span"><li>设计</li></RouterLink>
			 <RouterLink to="/quwei" tag="span"><li>趣味</li></RouterLink>
			 <RouterLink to="/shenghuo" tag="span"><li>生活</li></RouterLink>			 
		</ul>
		</header>
		<RouterView>
			<section></section>
		</RouterView>
	</div>
</template>

<script>
	export default {
		name:'Sousuo',
		data() {
			return {
				
			};
		},
		methods:{
			fanhui(){
				this.$router.push("./about")
			}
		}

	}
</script>

<style>
	.router-link-active{
		color: red;
	}
	header{
		flex-shrink: 0;
		height:85px;
		background: #cecece;
	}
	section{
		flex: 1;
		overflow: auto;
		height:88vh;
	}
	#ss{
		
		height: 30px;
		width: 80vw;
		margin-left: 5vw;
		margin-top: 1px;
		border: 1px solid #EEEEEE;
		border-radius: 2vw;
		
	}
	#sousuo{
	width: 70vw;
	height: 45px;
	margin-left: 5vw;
	border-left:2px solid #ECE9E9;
	border-top:2px solid #ECE9E9;
	margin-top: 2px;
	}
	input::-webkit-input-placeholder{
		text-align: center;
	}
	span{
		font-size:15px;
		color:#000;
	}
	.list{
		display: flex;
		height:50px;
		justify-content: space-around;
		align-items: center;
	}
	.list span:hover{
		border-bottom: 2px solid #999999;
	}

	
</style>
