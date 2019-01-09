<template>
  <div class="hello">
   	<!--<header>{{title}}</header>-->
   		
   	<section>
   		<router-view @toparent="getdata"></router-view>
   	</section>
   	<footer>
   		<router-link to="/home" tag="span">推荐</router-link>
   		<router-link to="/about" tag='span'>发现</router-link>
   		<router-link to='/other' tag="span">社区</router-link>
		<router-link to='/then' tag="span">我的</router-link>
   	</footer>
  </div>
</template>

<script>
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: ''
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
	
	header,footer{
		flex-shrink: 0;
		height: 50px;
		background: orange;
		text-align: center;
		line-height: 50px;
	}
	
	section{
		flex: 1;
		flex-shrink: 1;
		overflow: auto;
		
	}
	footer{
		
		overflow: hidden;
	}
	
	footer span{
		
		float: left;
		width: 25%;
	}
	
	
</style>
