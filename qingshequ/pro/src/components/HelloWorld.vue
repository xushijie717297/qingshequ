<template>
  <div class="hello">
   	<!--<header>{{title}}</header>-->
   	<mt-header fixed :title="title"></mt-header>	
   	<section>
   		<router-view @toparent="getdata"></router-view>
   	</section>
   	<footer>
   		<router-link to="/home" tag="span">首页</router-link>
   		<router-link to="/about" tag='span'>关于</router-link>
   		<router-link to='/other' tag="span">其他</router-link>
   	</footer>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '首页'
    }
  },
  methods:{
  	getdata(msg){
  		this.title=msg;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
	/*vw== 可视窗口 横向宽度*/
	/*vh==竖向高度*/
	.router-link-active{
		color: #fff;
	}
	
	
	.hello{
		height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	footer{
		height: 50px;
		background: orange;
		text-align: center;
		line-height: 50px;
	}
	
	section{
		flex: 1;
		margin-top: 40px;
	}
	footer{
		overflow: hidden;
	}
	
	footer span{
		float: left;
		width: 33.3%;
	}
	
	
</style>
