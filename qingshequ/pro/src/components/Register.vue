<template>
	<div>
		<mt-header fixed title="注册"></mt-header>
		
		<div style="margin-top:40px">
			<mt-field label="手机号" placeholder="请输入手机号" v-model="phonenum"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" v-model="pass"></mt-field>
			<mt-field label="验证码" placeholder="请输入验证码" v-model="yzm"></mt-field>
			
			<mt-button size="normal" type="primary" @click="send()">发送验证码</mt-button>
			<mt-button size="normal" type="danger" @click="register()">注册</mt-button>
			
			
		</div>

		
	</div>
</template>

<script>
	import axios from 'axios';
	
	
	export default{
		name:"Register",
		data(){
			return{
				phonenum:'',
				pass:'',
				yzm:''
			}
		},
		methods:{
			send(){
				var _this=this;
				axios({
					method:'post',
					url:'http://localhost:3000/register',
					params:{phonenum:_this.phonenum,id:'1'}
				}).then(function(data){
					console.log(data.data)
				})
			},
			register(){
				var _this=this;
				axios({
					method:'post',
					url:'http://localhost:3000/register',
					params:{phonenum:_this.phonenum,id:'2',pass:_this.pass,yzm:_this.yzm}
				}).then(function(data){
					console.log(data.data)
				})
			}
		}
	}
</script>

<style>
</style>