<template>
	<div>
		<header>
			<div class="blue">
				<span style="width:30px;font-size: 30px;" class="fanhui" @click="fanhui()">&lt;</span>
				<p>编辑推荐</p>
			</div>
		</header>
		<section>
			<div class="blue_1">
				<ul>
					<li>
						<div class="blue1">
							<h4>外滩教育</h4>
							<span class="iconfont icon-jia"></span>
						</div>
						<div class="blue2">
							<p></p>
							<div class="blue21">
								<b>花样福利不定期风尚</b>
								<span style="font-size:14px;">15.9万人关注/科普</span>
							</div>
						</div>
					</li>
					<li>
						<div class="blue1">
							<h4>外滩教育</h4>
							<span class="iconfont icon-jia"></span>
						</div>
						<div class="blue2">
							<p></p>
							<div class="blue21">
								<b>花样福利不定期风尚</b>
								<span style="font-size:14px;">15.9万人关注/科普</span>
							</div>
						</div>
					</li>
					<li>
						<div class="blue1">
							<h4>外滩教育</h4>
							<span class="iconfont icon-jia"></span>
						</div>
						<div class="blue2">
							<p></p>
							<div class="blue21">
								<b>花样福利不定期风尚</b>
								<span style="font-size:14px;">15.9万人关注/科普</span>
							</div>
						</div>
					</li>
					<li>
						<div class="blue1">
							<h4>外滩教育</h4>
							<span class="iconfont icon-jia"></span>
						</div>
						<div class="blue2">
							<p></p>
							<div class="blue21">
								<b>花样福利不定期风尚</b>
								<span style="font-size:14px;">15.9万人关注/科普</span>
							</div>
						</div>
					</li>
					<li>
						<div class="blue1">
							<h4>外滩教育</h4>
							<span class="iconfont icon-jia"></span>
						</div>
						<div class="blue2">
							<p></p>
							<div class="blue21">
								<b>花样福利不定期风尚</b>
								<span style="font-size:14px;">15.9万人关注/科普</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name:'Tuijian',
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
		height:6vh;
		background: #cecece;
		display: flex;
	}
	.blue{
		height:6vh;
		width:58vw;
		display: flex;
		justify-content:space-between;
		align-items: center;
		margin-left:3vw;
	}
	section{
		flex: 1;
		overflow: auto;
		height:94vh;
	}
	.blue_1{
		height:100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	ul li{
		height:121px;
		width:100vw;
		background: #fff;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #cecece;
	}
	.blue1{
		height:40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 3vw;
	}
	.blue2{
		height:70px;
		display: flex;
		padding:0 3vw;
	}
	.blue2 p{
		height:70px;
		width:20vw;
		background: #000000;
		border-radius: 5px;
	}
	.blue21{
		width:71vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left:3vw;
	}
	
	
</style>
