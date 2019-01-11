<template>
	<div>
    <div class="hong">
			<span style="width:25px;font-size: 30px;" class="fanhu" @click="fanhui()">&lt;</span>
		</div>
		<div class='img'></div>
		<div class='pinglun'>
			<span>963人关注</span>
			<div class='white'>
			</div>
			<div>
				<i class='iconfont icon-z'></i>
				<i class='iconfont icon-taolun'></i>
				<span>0讨论</span>
			</div>
		</div>
		<div class='text'>
			<h2>Voicer</h2>
			<p>灵感点亮生活，生活温暖人心。Voicer是一本分享
				生活与设计美学的在线杂志，给予你有的美好的
					发想和实践灵感。</p>
		</div>
		<div class='xinxi'>
			<div class='center'>
				<span></span>
				<div>
					<p>Voicer me</p>
				  <p>暂无描述</p>
				</div>
			</div>
		</div>
		<div class='tuisong'>
			<h3>推送提醒</h3>
		</div>
		<div class='first'>
			<div class='tuisong1'>
				<div>
					<span>一天前</span>
					<span>微信</span>
				</div>
			</div>
			<div class='img2'></div>
			<strong>用一张车票，去看日本最美的海</strong>
			<p>换一种方式去看海——不再需要大张旗鼓地涂着防晒油、沾
 			 上咸湿的海风或者滚一身海滩的沙子，只要跳上电车，顺...</p>
			<div class='down'>
				<div>
					<i class='iconfont icon-tubiao212'></i>
					<i class='iconfont icon-xihuan'></i>
					<i class='iconfont icon-zan'>253</i>
					<i class='iconfont icon-pinglun'>15</i>
				</div>
				<i class='iconfont icon-dian'></i>
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		name:"Riqian",
		data(){
			return{
			}
        },
    methods: {
        fanhui () {
          this.$router.push('/ghtea')      
        }
    }
	}
</script>

<style>
	.hong{
		height:6vh;
		display: flex;
		align-items: center;
	}
	.hong span{
		display: block;
		width:15vw;
	}
	.img{
		width: 100%;
		height: 11rem;
		background:#cecece;
	}
	.pinglun{
		font-size: 13px;
		display: flex;
		margin-top: -1.5rem;
		margin-left: 1rem;
		justify-content: space-between
	}
	.pinglun div {
		margin-right: 1rem;
		font-size: 13px;
	}
	.pinglun div i {
		margin-left: 1rem;
		font-size: 1.1rem
	}
	.white{
		width: 4rem;
		height: 4rem;
		border: 1px solid #cecece;
		position: absolute;
		top: 11rem;
		left: 40%;
		background: white
		
	}
	.text{
		font-size: 12px;
		width: 100%;
		height: 6rem;
		margin-top: 3rem;
		text-align: center;
		border-bottom: 1px solid rgba(244, 241, 241, 1)
	}
	.text h2{
		font-weight: normal;
	}
	.text p {
		width: 18rem;
		margin: 0.5rem auto;
	}
	.xinxi{
		width: 100%;
		height: 5rem;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgba(244, 241, 241, 1)
	}
	.xinxi .center{
		width: 100%;
		height: 3rem;
		display: flex
		
	}
	.xinxi .center span{
		width: 3rem;
		height:3rem;
		border: 1px solid #cecece;
		margin-left: 2rem;
		margin-right: 1rem;
	}
	.xinxi .center div p:first-child{
		font-size: 14px;
		height: 1.5rem;
		line-height: 1.5rem
	}
	.xinxi .center div p:last-child{
		font-size: 11px;
		color: #888888;
		height: 1.5rem;
		line-height: 1.5rem
	}
	.tuisong{
		width: 100%;
		height: 2rem;
		display: flex;
		align-items: center;
		border-bottom: 1rem solid #cecece
	}
	.tuisong h3{
		width: 90%;
		margin: 0 auto;
		font-weight: normal;
		font-size: 14px;
	}
	.first{
			border-bottom: 1rem solid #cecece
	}
	.first .tuisong1{
		width: 100%;
		height: 2rem;
	}
	.first .tuisong1 div{
		display: flex;
		justify-content: space-between;
		height: 100%;
		width: 90%;
		margin: 0 auto;
		font-size: 12px;
	}
  .first .tuisong1 div span{
		line-height: 2rem;
	}
	.first .img2{
		width: 90%;
		height: 9rem;
		background: #cecece;
		margin: 0 auto
	}
	.first strong {
		display: block;
		font-size: 16px;
		width: 90%;
		margin: 13px auto;
		font-weight: normal
	}
	.first p{
		width: 90%;
		margin: 0 auto;
		font-size: 12px;
		height: 2.4rem;
		border-bottom: 1px solid rgba(244, 242, 242, 1);
	}
	.down{
		height: 3rem;	
		line-height: 3rem;
		width: 90%;
		margin:0 auto;
		display: flex;
		justify-content: space-between;
		font-size: 12px;
	}
	.down i {
			margin-right: 1rem;
			font-size: 12px;
	}
</style>
