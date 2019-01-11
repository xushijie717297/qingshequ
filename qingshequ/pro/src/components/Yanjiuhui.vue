<template>
	<div>
		<header>
			<div class="qing">
				<span style="width:25px;font-size: 30px;" class="fanhu" @click="fanhui()">&lt;</span>
				<p><span style="font-size: 20px;" class="iconfont icon-fenxiang"></span><span style="font-size: 20px;" class="iconfont icon-dian"></span></p>
			</div>
			<div class="qing1">
				<div class="qing2">
					<div class="qing_2">
						<h5 style="font-size:14px;">轻社区学习研究会</h5>
						<h3 style="font-size:20px;">英语学习研究会</h3>
						<b style="font-size:12px;">248115人关注</b>
					</div>
					<p></p>
				</div>
				<div class="qing3">
					<span class="iconfont icon-info"></span>
					<span class="iconfont icon-z"></span>
					<span class="iconfont icon-taolun"><span style="font-size:12px;">0 讨论</span></span>
				</div>
			</div>
			<h4 class="qing_3">你抓不住这个梗，你肯定抓不住</h4>
			<div class="qing4">
				<p><span class="iconfont icon-weixin"></span>英语学习研究会</p>
				<span class="iconfont icon-jia"></span>
			</div>
		</header>
		<section>
			<div class="lan">
				<div class="lan1">
					<div class="lan1_1">
						<span>1天前</span>
						<span>趣味</span>
					</div>
					<div class="lan2">
						<p class="lan_2" style="height:70%;"></p>
						<b>Goodnight Sweet</b>
						<span>一个向经典游戏直径的动画短片</span>
					</div>
					<div class="lan3">
						<div class="lan_3">
							<span class="iconfont icon-fenxiang"></span>
							<span class="iconfont icon-xihuan"></span>
							<span class="iconfont icon-zan"><span style="font-size:12px;">123</span></span>
							<span class="iconfont icon-taolun"><span style="font-size:12px;">123</span></span>
						</div>
						<span class="iconfont icon-dian"></span>
					</div>
				</div>
				<div class="lan1">
					<div class="lan1_1">
						<span>1天前</span>
						<span>趣味</span>
					</div>
					<div class="lan2">
						<p class="lan_2" style="height:70%;"></p>
						<b>Goodnight Sweet</b>
						<span>一个向经典游戏直径的动画短片</span>
					</div>
					<div class="lan3">
						<div class="lan_3">
							<span class="iconfont icon-fenxiang"></span>
							<span class="iconfont icon-xihuan"></span>
							<span class="iconfont icon-zan"><span style="font-size:12px;">123</span></span>
							<span class="iconfont icon-taolun"><span style="font-size:12px;">123</span></span>
						</div>
						<span class="iconfont icon-dian"></span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name:'Yanjiuhui',
		data() {
			return {
				
			};
		},
		methods: {
			fanhui(){
				this.$router.go(-1)
			},
		}
	}
</script>

<style>
	header{
		height:50vh;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}
	.qing{
		height:6vh;
		display: flex;
		
		align-items: center;
		justify-content: space-between;
	}
	.qing p{
		height:6vh;
		width:16vw;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.qing1{
		height:27vh;
		background: #cecece;
		display: flex;
		justify-content: space-between;
	}
	.qing2{
		height:27vh;
		width:46vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left:4vw;
	}
	.qing_2{
		margin-top:34px;
	}
	.qing2 p{
		height:9vh;
		width:18vw;
		background: #999999;
	}
	.qing h5{
		height:20px;
		font-size:17px;
	}
	.qing h3{
		height:27px;
		font-size:26px;
	}
	.qing b{
		height:20px;
		font-size:15px;
	}
	.qing3{
		height:27vh;
		width:46vw;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}
	.qing3 span{
		height:6vh;
		display: flex;
		align-items: center;
		font-size:20px;
	}
	.qing_3{
		height:7vh;
		border-bottom: 1px solid #cecece;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.qing4{
		height:10vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
	section{
		flex: 1;
		overflow: auto;
		height:50vh;
		background: #cecece;
	}
	.lan{
		height:100%;
	}
	.lan1{
		height:240px;
		background: #fff;
		margin-top:15px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.lan1_1{
		height:20%;
		width: 94vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size:12px;
	}
	.lan2{
		height:70%;
		width: 94vw;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #cecece;
	}
	.lan2 p{
		font-size:12px;
		height:15%;
		display: flex;
		justify-content: flex-start;
	}
	.lan_2{
		height:70%;
		background: #999999;
	}
	.lan3{
		height:10%;
		width: 94vw;
		display: flex;
		justify-content: space-between;
	}
	.lan2 b{
		height:15%;
		display: flex;
		justify-content: flex-start;
		font-size:16px;
	}
	.lan2 span{
		height:15%;
		display: flex;
		justify-content: flex-start;
		font-size:14px;
	}
	.lan_3{
		height:100%;
		width:50vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.lan_3 span{
		width:25%;
		font-size:18px;
	}
	.icon-dian{
		width:10vw;
		height:100%;
		font-size:18px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
