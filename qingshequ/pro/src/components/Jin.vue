<template>
	<div>
		<div class="huang" v-for='(item,index) in bbb' :key='index'>
			<p><img :src="item.qqq"/></p>
			<router-link to="/yanjiuhui" tag="span"><div class="huang1">
				<h4>{{item.eee}}<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>{{item.www}}</h5>
				<span class="huang2">{{item.rrr}}</span>
				<b>{{item.ttt}}万人订阅</b>
			</div></router-link>
		</div>
		<!-- <div class="huang">
			<p></p>
			<div class="huang1">
				<h4>综艺大赏<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>精选各种下饭综艺</h5>
				<span class="huang2">2018.10.18更新，这毕竟是骚断腿的直男改造节目，更是每个普通人的爱与泪</span>
				<b>18.9万人订阅</b>
			</div>
		</div>
		<div class="huang">
			<p></p>
			<div class="huang1">
				<h4>综艺大赏<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>精选各种下饭综艺</h5>
				<span class="huang2">2018.10.18更新，这毕竟是骚断腿的直男改造节目，更是每个普通人的爱与泪</span>
				<b>18.9万人订阅</b>
			</div>
		</div>
		<div class="huang">
			<p></p>
			<div class="huang1">
				<h4>综艺大赏<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>精选各种下饭综艺</h5>
				<span class="huang2">2018.10.18更新，这毕竟是骚断腿的直男改造节目，更是每个普通人的爱与泪</span>
				<b>18.9万人订阅</b>
			</div>
		</div>
		<div class="huang">
			<p></p>
			<div class="huang1">
				<h4>综艺大赏<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>精选各种下饭综艺</h5>
				<span class="huang2">2018.10.18更新，这毕竟是骚断腿的直男改造节目，更是每个普通人的爱与泪</span>
				<b>18.9万人订阅</b>
			</div>
		</div>
		<div class="huang">
			<p></p>
			<div class="huang1">
				<h4>综艺大赏<span style="font-size:20px" class="iconfont icon-jia"></span></h4>
				<h5>精选各种下饭综艺</h5>
				<span class="huang2">2018.10.18更新，这毕竟是骚断腿的直男改造节目，更是每个普通人的爱与泪</span>
				<b>18.9万人订阅</b>
			</div>
		</div> -->
	</div>
</template>

<script>
	import axios from 'axios';
	import Mock from 'mockjs';
	export default {
		name:'Jin',
		data() {
			return {
			bbb:[]	
			};
		},
		mounted(){
			var _this=this
			axios({
				method:'get',
			url:"http://rap2api.taobao.org/app/mock/124134/adadad"
			}).then(function(data){
				console.log(data.data.word)
				_this.bbb=data.data.word
			})
		}
	}
</script>

<style>
	.huang{
		display: flex;
		height:140px;
		background: #fff;
		margin-top:8px;
		
	}
	.huang p{
		height:50%;
		width:25%;
		background: #cecece;
		margin-top:5%;
		border-radius: 5px;
	}
	.huang1{
		margin-top:5%;
		margin-left: 2vw;
		height:80%;
		width:70vw;
	}
	.huang1 h4{
		height:20%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.huang1 h5{
		font-size:15px;
		height:15%;
	}
	.huang2{
		height:50%;
		font-size:14px;
		display: flex;
		align-items: center;
	}
	.huang1 b{
		font-size:12px;
		height:15%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
</style>
