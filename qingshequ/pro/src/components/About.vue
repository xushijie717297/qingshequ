<template>
	<div>
		<header>
			<router-link to="/sousuo" tag="span"><input type="text"  　　placeholder="搜索你感兴趣的内容" id="ss"></router-link>
		</header>
		<section>
			<div class="bbb">
				<router-link to="/maotie"><div>
					<mt-swipe :auto="4000" style="height:200px">
					  <mt-swipe-item style="background: red;">1</mt-swipe-item>
					  <mt-swipe-item style="background: yellow;">2</mt-swipe-item>
					  <mt-swipe-item style="background: pink;">3</mt-swipe-item>
					</mt-swipe>
			</div></router-link>
			<div class="fenlei">
				<h5>分类查看主题站</h5>
				<div class="fenlei1">
					<p @click="sind()"></p>
					<p @click="sond()"></p>
					<p @click="sund()"></p>
					<p @click="spnd()"></p>
				</div>
				<div class="tuijian">
					<h4>编辑推荐<span @click="rec()">更多></span></h4>
					<div class="tuijian1">
						<h4>轻社区电台<span class="iconfont" :class='isOk?classA:classB' @click="message()"></span></h4>
					<div class="tuijian_1">
						<img />
						<p>轻社区出品的博客节目，关于我们的未知与好奇，每周三更新</p>
						<span>18.9万人关注/生活</span>
					</div>	
					</div>
					<div class="tuijian2">
						<h4>轻社区电台<span class="iconfont icon-jia"></span></h4>
					<div class="tuijian_1">
						<img />
						<p>轻社区出品的博客节目，关于我们的未知与好奇，每周三更新</p>
						<span>18.9万人关注/生活</span>
					</div>	
					</div>
					<div class="tuijian3">
						<h4>轻社区电台<span class="iconfont icon-jia"></span></h4>
					<div class="tuijian_1">
						<img />
						<p>轻社区出品的博客节目，关于我们的未知与好奇，每周三更新</p>
						<span>18.9万人关注/生活</span>
					</div>	
					</div>
					<div class="tuijian4">
						<h4>轻社区电台<span class="iconfont icon-jia"></span></h4>
					<div class="tuijian_1">
						<img />
						<p>轻社区出品的博客节目，关于我们的未知与好奇，每周三更新</p>
						<span>18.9万人关注/生活</span>
					</div>	
					</div>
				</div>
				<div class="tuijian5">
					<h4>排行榜与反馈</h4>
					<p></p>
					<span></span>
					<img />
				</div>
				<em></em>
				<div class="tuijian6">
					<h4>编辑推荐</h4>
					<div class="tuijian1">
						<h4>轻社区电台<span class="iconfont icon-jia"></span></h4>
					<div class="tuijian_1">
						<img />
						<p>轻社区出品的博客节目，关于我们的未知与好奇，每周三更新</p>
						<span>18.9万人关注/生活</span>
					</div>	
					</div>
				</div>
				<div class="gengduo">点击加载更多》》》</div>
			</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:'About',
		data(){
			return{
				tit:'关于',
				isOk:true, classA:'icon-jia',classB:'icon-fenxiang'
			}
		},
		mounted(){
			this.$emit('toparent',this.tit)
		},
		methods: {
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
			},
			rec(){
				this.$router.push("/tuijian")
			},
			message(){
				MessageBox.confirm('是否要订阅?').then(action => {
					this.isOk =false
}).catch(()=>{})
			}
		},
	}
</script>

<style scoped="">
	html,body{height:100%}
    body{display: flex;flex-direction: column;}
	header{
		height:50px;
		flex-shrink: 0;
	}
	section{
		height:84vh;
		display: flex;
		flex-direction: column;
		flex: 1;
		/* flex-shrink: 1; */
		overflow: auto;
		background: #fff;
	}
	#ss{
		
		height: 30px;
		width: 90vw;
		margin-left: 5vw;
		margin-top: 1px;
		border: 1px solid #EEEEEE;
		border-radius: 3vw;
		
	}
	.fenlei{
		height:120px;
		background: #fff;
	}
	.bbb{
		height:100%;
	}
	.fenlei h5{
		height:20px;
		margin-top:8px;
	}
	.fenlei1{
		margin-top:6px;
		height:80px;
		display: flex;
		justify-content: space-around;
	}
	.fenlei1 p{
		display: flex;
		flex-direction: column;
		height:78px;
		width:20%;
		background: #999999;
		border:1px solid #999999;
		border-radius: 5px;
	}
	.tuijian{
		height:485px;
	}
	.tuijian h4{
		width:97vw;
		height:40px;
		line-height: 40px;
		font-size:14px;
		margin-left:3vw;
		background: #fff;
		
		
	}
	.tuijian h4 span{
		margin-left:70%;
	}
	.tuijian1,.tuijian2,.tuijian3,.tuijian4,{
		height:115px;
		background: #fff;
		border-bottom: 1px solid #999999;
	}
	.tuijian1 h4{
		width:97vw;
		height:30px;
		line-height: 30px;
		font-size:16px;
		background: #fff;
		margin-left:3vw;
		
	}
	.tuijian1 h4 span{
		margin-left:70%;
	}
	.tuijian_1{
		height:72px;
		border-bottom: 1px solid #cecece;
	}
	.tuijian_1 img{
		float: left;
		height:65px;
		width:11vh;
		background: #999999;
		margin-left:3vw;
	}
	.tuijian_1 p{
		float: left;
		width:73vw;
		height:50px;
		line-height: 25px;
		font-size: 14px;
		margin-left:2vw;
	}
	.tuijian_1 span{
		float: left;
		width:73vw;
		height:20px;
		line-height: 20px;
		font-size: 12px;
		margin-left:2vw;
	}
	.tuijian5{
		margin-top:15px;
		height:220px;
	}
	.tuijian5 h4{
		height:30px;
		width:98vw;
		margin-left:2vw;
		background: #fff;
		line-height: 30px;
	}
	.tuijian5 p{
		height:80px;
		width:45vw;
		background: #cecece;
		margin:0 2vw;
		border: 1px solid #fff;
		border-radius: 10px;
		float: left;
	}
	.tuijian5 span{
		display: block;
		height:80px;
		width:45vw;
		float: left;
		background: #cecece;
		margin:0 2vw;
		border-radius: 10px;
	}
	.tuijian5 img{
		float: left;
		height:100px;
		width:100vw;
		margin-top:10px;
		background: #cecece;
		border-radius: 10px;
	}
	em{
		display: block;
		width:100vw;
		height:15px;
		background: #999999;
	}
	.tuijian6{
		float:left;
		width:100vw;
		height:140px;
	}
	.tuijian6 h4{
		font-size:14px;
		height:30px;
		line-height: 30px;
		margin-left:3vw;
	}
	.gengduo{
		width:100vw;
		float: left;
		height:70px;
		line-height: 70px;
		display: flex;
		justify-content: center;
		background: #cecece;
		font-size:20px;
	}
</style>