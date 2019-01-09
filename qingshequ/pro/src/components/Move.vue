<template>
	<div>
		<section>
			<div class="riqian">
				<h3>
					<span></span>
					设计小站
					<p>微信</p>
				</h3>
				<div class="riqian1"></div>
				<h5>日本公司的“大失败奖”火了！员工亏了5000万...</h5>
				<span class="xinwen">我想很多人都会有些人生遗憾和懊悔，不是多重要的话，多半经过岁月的清洗而渐渐消失。</span>
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
					短篇八分钟
					<p>阅读</p>
				</h3>
				<div class="riqian1"></div>
				<h5>短篇阅读|赛跑的人by哈尼夫.库雷西</h5>
				<span class="xinwen">“有时，你需要对幻灭怀抱勇气。不是在施虐者和受虐者的纠缠，不再是死亡华尔兹。残忍是一种艺术。”</span>
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
					正午故事
					<p>微信</p>
				</h3>
				<div class="riqian1"></div>
				<h5>总理的肖像</h5>
				<span class="xinwen">他一再向电话那边解释，这是一张照片而已。为了一张照片要么大近，太荒谬了，看到则个肖像，注意忽然就来了，“这论...</span>
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
					设计小站
					<p>阅读</p>
				</h3>
				<div class="riqian1"></div>
				<h5>日本公司的“大失败奖”火了！员工亏了5000万...</h5>
				<span class="xinwen">我想很多人都会有些人生遗憾和懊悔，不是多重要的话，多半经过岁月的清洗而渐渐消失。</span>
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
		name:'Move',
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
		flex-shrink: 1;
		overflow: auto;
		/* height:1450px; */
		background: #cecece;
	}
	.riqian{
		background: #fff;
		margin-bottom: 20px;
	}
	.main_2 li{
		height:350px;
		margin-bottom: 10px;
		background: #fff;
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
		border-top:2px solid #cecece;
		
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
