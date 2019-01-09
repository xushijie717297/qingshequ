<template>
	<div>
		<section>
			<div class="riqian">
				<h5>港乐漫游</h5>
				<div class="riqian1"></div>
				<h4>若是泪崩，祝你愉快</h4>
				<p style="font-size: 12px;margin-left: 6%;height:30px;margin-top:5px;line-height: 30px;" class="winxin1">这首歌是AGA唱给已去的姐姐</p>
				<span class="xinwen">当我们习惯了现代夏洛克玩着手机发着短信上网的时代，一个电影《神探夏洛克》又让我们进入到夏洛克的思维殿堂，穿越...</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			<div class="riqian">
				<h5>不听歌就会死</h5>
				<div class="riqian1"></div>
				<h4>706.有情歌</h4>
				<p style="font-size: 12px;margin-left: 6%;height:30px;margin-top:5px;line-height: 30px;" class="winxin1">我一直以为会出现邓丽君的副歌</p>
				<span class="xinwen">一切的艺人，辞掉空姐全心投入音乐，极度灰心至于放弃但时间终于印证了他努力...</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			<div class="riqian">
				<h5>小城往事</h5>
				<div class="riqian1"></div>
				<h4>若是泪崩，祝你愉快</h4>
				<p style="font-size: 12px;margin-left: 6%;height:30px;margin-top:5px;line-height: 30px;" class="winxin1">这首歌是AGA唱给已去的姐姐</p>
				<span class="xinwen">当我们习惯了现代夏洛克玩着手机发着短信上网的时代，一个电影《神探夏洛克》又让我们进入到夏洛克的思维殿堂，穿越...</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			<div class="riqian">
				<h5>港乐漫游</h5>
				<div class="riqian1"></div>
				<h4>若是泪崩，祝你愉快</h4>
				<p style="font-size: 12px;margin-left: 6%;height:30px;margin-top:5px;line-height: 30px;" class="winxin1">这首歌是AGA唱给已去的姐姐</p>
				<span class="xinwen">当我们习惯了现代夏洛克玩着手机发着短信上网的时代，一个电影《神探夏洛克》又让我们进入到夏洛克的思维殿堂，穿越...</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			
			<div class="foot">查看更多＞＞</div>
		</section>
	</div>
</template>

<script>
	export default {
		name:'Music',
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	section{
		display: flex;
		flex-direction: column;
		/* flex-shrink: 1; */
		/* overflow: auto; */
		/* height:1450px; */
		background: #cecece;
	}
	.riqian{
		background: #fff;
		margin-bottom: 20px;
	}
	
	.riqian h5{
		display: flex;
		height:60px;
		/* background: red; */
		line-height: 60px;
		justify-content: space-between;
	}	
	.riqian1{
		height:170px;
		background: #999999;
		width:88%;
		margin:0 6%;
	}
	.riqian2{
		height:40px;
		background: #fff;
		margin-top:30px;
	}
	.riqian2 span{
		width:10%;
		display: block;
		height:40px;
		/* background: red; */
		float:left;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.riqian2 span:nth-child(1){
		margin-left:10px;
	}
	.riqian2 span:nth-child(2){
		margin-left:20px;
	}
	.riqian2 span:nth-child(3){
		margin-left:20px;
	}
	.riqian2 span:last-child{
		margin-left:120px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.foot{
		
		height:40px;
		background: #fff;
		margin-top:10px;
		text-align:center;
		line-height: 40px;
	}
	h4{
		margin-left:6%;
	}
	.xinwen{
		height:40px;
		line-height: 20px;
		font-size:12px;
		margin-left:6%;
	}
</style>
