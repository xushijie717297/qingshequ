<template>
	<div>
		<section>
			<div class="riqian">
				<h3>
					<span></span>
					ZUO设计
					<p>艺术</p>
				</h3>
				<div class="riqian1"></div>
				<h5>这或许是唯一一个，男人花24小时打扮不使人奇怪的时代</h5>
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
				<h3>
					<span></span>
					IDEAT理想家
					<p>趣味</p>
				</h3>
				<div class="riqian1"></div>
				<h5>当代建筑的世纪变身：一部毫不费力的视觉编年史</h5>
				<span class="xinwen">一说到建筑风格，那些永远解释不清的“注意”们总是要来捣乱让人一头雾水？</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			<div class="riqian">
				<h3>
					<span></span>
					裸体午餐
					<p>阅读</p>
				</h3>
				<div class="riqian1"></div>
				<h5>我们现在为什么被归类为“黄种人”？</h5>
				<span class="xinwen">中国古代文献并没有“黄种人”的记录，也没有种族学上的肤色概念，反而，中国人区分自己和外国人的标准是毛发...</span>
				<ul class="riqian2">
					<span class="iconfont icon-tubiao212"></span>
					<span class="iconfont icon-xihuan"></span>
					<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
					<span class="iconfont icon-dian"></span>
				</ul>
			</div>
			<div class="riqian">
				<h3>
					<span></span>
					设计僻
					<p>生活</p>
				</h3>
				<div class="riqian1"></div>
				<h5>十款设计工具：全方面帮你解决空间问题</h5>
				<span class="xinwen">我们常常埋怨空间太小，东西没地方放，而储物柜又占用太多空间...其实有时候不..一定是空间小。而是我们没有下...</span>
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
		name:'Cnxh',
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
	.riqian h3{
		width:88%;
		margin:0 6%;
		display: flex;
		height:60px;
		/* background: red; */
		line-height: 60px;
		justify-content: space-between;
	}
	.riqian h3 span{
		display: block;
		height:40px;
		width:10%;
		background: #000000;
		margin-top:10px;
		margin-left:0;
	}
	.riqian p{
		font-weight: 100;
		font-size:14px;
		
		line-height: 60px;
	}
	.riqian1{
		height:200px;
		background: #999999;
		width:88%;
		margin:0 6%;
	}
	.riqian2{
		height:40px;
		background: #fff;
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
	h5{
		margin-left:6%;
	}
	.xinwen{
		height:30px;
		line-height: 15px;
		font-size:12px;
		margin-left:6%;
	}
</style>
