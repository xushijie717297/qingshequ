<template>
	<div>
		<header>
			<div class="hong">
				<span style="width:25px;font-size: 30px;" class="fanhu" @click="fanhui()">&lt;</span>
				<p>分类查看</p>
			</div>
			<div class="hong1">
				<span @click="sind()">阅读</span>
				<span @click="sond()">科技</span>
				<span @click="sund()">艺术</span>
				<span @click="spnd()">设计</span>
				<span @click="slnd()">趣味</span>
			</div>
		</header>
		<section>
			<div class="cheng">
				<RouterView>
					
				</RouterView>
			</div>
		</section>
	</div>
</template>
<script>
var oSpan = document.getElementsByTagName("span")
oSpan.onclick=function(){
	oSpan.style.color="red"
}
</script>
<script>
	export default {
		name:'Fenlei',
		data() {
			return {
				
			};
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			},
			sind(){
				this.$router.push("/jin")
			},
			sond(){
				this.$router.push("/muo")
			},
			sund(){
				this.$router.push("/shui")
			},
			spnd(){
				this.$router.push("/huo")
			},
			slnd(){
				this.$router.push("/tuo")
			}
		}
	}
	
</script>

<style>
	.router-link-active{
		color: red;
	}
	header{
		display: flex;
		flex-direction: column;
		height:12vh;
		flex-shrink: 0;
	}
	.hong{
		background: #cecece;
		height:6vh;
		display: flex;
		align-items: center;
	}
	.hong span{
		display: block;
		width:15vw;
	}
	.hong p{
		width:85vw;
		display: flex;
		justify-content: center;
	}
	.hong1{
		height:6vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
	}
	section{
		flex: 1;
		height:88vh;
		background: #cecece;
		overflow: auto;
	}
	.cheng{
		height:100%;
		display: flex;
		flex-direction: column;
	}
	.hong1 span{
		display: flex;
		height:100%;
		align-items: center;
		
	}
</style>
