<template>
	<div>
		<header>
			<span style="width:30px;font-size: 30px;" class="fanhui" @click="fanhui()">&lt;</span>
			<p>猫贴正文</p>
			<span style="width:30px;font-size: 30px;" class="iconfont icon-dian"></span>
		</header>
		<section>
			<div class="ccc">
				<p class="head"></p>
				<div class="maine">
					<div class="maine1">
						<p></p>
						<span>偷壁纸的人</span>
					</div>
					<span>2018.10.29 14:36</span>
				</div>
				<div class="bizhi">
					<h4>一周壁纸|北京的秋</h4>
					<span>"我的心是旷野的鸟，在你的眼睛里找到了天空"--泰戈尔</span>
					<span>本期壁纸来自站长周末拍的北京的傍晚，希望大家喜欢</span>
					<p></p>
					<p></p>
					<p></p>
					<div class="maine2">
						<span>评论 36</span>
						<div class="maine3">
							<span class="iconfont icon-xihuan"></span>
							<span class="iconfont icon-zan"><span style="font-size: 12px;margin:0;">123</span></span>
							<span class="iconfont icon-tubiao212"></span>
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer>
			<span style="font-size:30px;" class="iconfont icon-shumajiadian"><p>发送站名给轻社区</p></span>
			<span style="font-size:30px;" class="pinglun iconfont icon-pinglun"></span>
		</footer>
	</div>
</template>

<script>
	export default {
		name:'Maotie',
		data() {
			return {
				
			};
		},
		methods:{
			fanhui(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	header{
		flex-shrink: 0;
		align-items: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background: #cecece; */
	}
	.ccc{
		height:100%;
	}
	section{
		flex: 1;
		height:87vh;
		overflow: auto;
		display: flex;
		flex-direction: column;
		background: #fff;
	}
	footer{
		flex-shrink: 0;
		height:44px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top:1px solid #cecece;
	}
	footer span{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color:#cecece;
		margin-left:3vw;
	}
	footer p{
		font-size: 14px;
		margin-left: 2vw;
	}
	.icon-pinglun{
		margin-right: 3vw;
	}
	.head{
		height:109px;
		background: #cecece;
	}
	.maine{
		height:50px;
		display: flex;
		justify-content: space-between;
		align-items:center;
		border-bottom:1px solid #cecece;
	}
	.maine1{
		height:50px;
		width:38vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.maine1 span{
		font-size:15px;
		font-weight: 800;
		/* margin-right:3vw; */
	}
	 .maine1 p{
		 height:35px;
		 width:24%;
		 background: #000000;
	 }
	 .maine span{		
		margin-right:3vw; 
	 }
	 .bizhi{
		 display: flex;
		 flex-direction: column;
		 height:1180px;
	 }
	 .bizhi h4{
		 height:30px;
		 display: flex;
		 align-items: center;
		 margin-left: 3vw;
		 margin-top:10px;
	 }
	 .bizhi span{
		 display: flex;
		 align-items: center;
		 height:20px;
		 font-size:13px;
		 margin-left:3vw;
	 }
	 .bizhi p{
		 margin-top:8px;
		 height:340px;
		 background: #cecece;
	 }
	 .maine2{
		 height:40px;
		 display: flex;
		 justify-content: space-between;
		 align-items: center;
		 border-top:3px solid #cecece;
		 margin-top:10px;
	 }
	 .maine3{
		 display: flex;
		 justify-content: space-around;
		 align-items: center;
		 margin-right:3vw;
		 font-size:30px;
	 }
	 .maine3 span{
		 font-size:20px;
	 }
</style>
