<template>
	<div>
		<section>
		<div class="main">
			<h1 style="height:60px;line-height: 60px;">早茶 2018.11.01</h1>
			<div class="main_1">
				<p style="border:1px solid #cecece;width:12%;"></p>
				<h6>星期四/20篇内容，15分钟</h6>
				<p style="border:1px solid #cecece;width:12%;"></p>
				<p class="rili iconfont icon-linedesign-18"></p>
			</div>
		</div>
				<div class="riqian" v-for='(item,index) in img' :key='index'>
					
					<h3>
						<div @click="godetail">
							<span>
								<img :src="item.img"/>
							</span>
							{{item.title}}
						</div>
						<p @click="goto()">阅读</p>
					</h3>
					<div class="riqian1">
						<img :src="item.bimg" />
					</div>
					<ul class="riqian2">
						<span class="iconfont icon-tubiao212"></span>
						<span class="iconfont icon-xihuan"></span>
						<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
						<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
						<span class="iconfont icon-dian"></span>
					</ul>
				</div>
				<!-- <div class="riqian">
					<h3>
						<div>
							<span></span>
							正午故事
						</div>
						<p>阅读</p>
					</h3>
					<div class="riqian1"></div>
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
						<div>
							<span></span>
							短片八分钟
						</div>
						<p>阅读</p>
						
					</h3>
					<div class="riqian1"></div>
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
						<div>
							<span></span>
							轻社区日签
						</div>
						<p>阅读</p>
					</h3>
					<div class="riqian1"></div>
					<ul class="riqian2">
						<span class="iconfont icon-tubiao212"></span>
						<span class="iconfont icon-xihuan"></span>
						<span class="iconfont icon-zan"><p style="font-size:12px;">123</p></span>
						<span class="iconfont icon-pinglun"><p style="font-size:12px;">123</p></span>
						<span class="iconfont icon-dian"></span>
					</ul>
				</div> -->
			<div class="foot">查看更多＞＞</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	import { Indicator } from 'mint-ui';
	export default {
		name:'Ghtea',
		data() {
			return {
				img:[]
			};
		},
		methods:{
			goto(){
				this.$router.push("/yuedu")
			},
			godetail(){
				this.$router.push("/riqian")
			}
		},
		mounted(){
			var _this=this
			Indicator.open('加载中...'),
			axios({
				method:'get',
			url:"http://rap2api.taobao.org/app/mock/120452/tupian"

			}).then(function(data){
				console.log(data.data.img)
				_this.img=data.data.img
				Indicator.close()
			})
		}
	}
</script>

<style scoped>
	li{
		list-style: none;
	}
	.iconfont{
		font-size:18px;
	}
	
	section{
		 /* height:1080px; */
		display: flex;
		flex: 1;
		flex-direction: column;
		background: #cecece;
	}
		.riqian{
		background: #fff;
		margin-bottom: 20px;
	}
	.main{
		height:102px;
		width:100vw;
		text-align: center;
		background: #fff;
		border-bottom: 2px solid #999999;
		
	}
	.main_1{
		height:40px;
		display: flex;
		justify-content:space-around;
		position: relative;
	}
	.main_1 p{
		height:0;
		margin-top:10px;
	}
	.main h1{
		font-size: 28px;
	}
	.main_2{
		display: flex;
		flex-direction: column;
		/* flex-shrink: 1; */
		overflow: auto;
		height:980px;
		background: #cecece;
	}
	.main_2 li{
		height:300px;
		margin-bottom: 10px;
		background: #fff;
	}
	.riqian h3{
		width:88%;
		margin:0 6%;
		display: flex;
		height:60px;
		/* background: red; */
		align-items: center;
		justify-content: flex-start;
	}
	.riqian h3 div{
		display: flex;
		align-items: center;
		font-weight: 100;
	}
	.riqian h3 div span{
		display: block;
		height:35px;
		width:35px;
		background: #000000;
		margin-right: 20px;
	}
	.riqian p{
		font-weight: 100;
		font-size:14px;
		flex: 1;
		text-align: right;
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
		background: #fff;
		float:left;
		display: flex;
		justify-content:flex-start;
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
	.rili{
	
		position: fixed;
		top:80px;
		right:27px;
		font-size:30px;
	}
</style>
