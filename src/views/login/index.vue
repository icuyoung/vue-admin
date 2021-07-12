<template>
  <div class="login-container">
     <el-form class="login-form" ref="loginForm" :model="loginForm" autocomplete="on" label-position="left">
       <div class="title-container">
         <h3 class="title">Login Form</h3>
       </div>
       <el-form-item prop="username">
         <i class="iconfont icon-youxiang"></i>
         <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
         ></el-input>
       </el-form-item>
        <el-form-item prop='password'>
          <i class="iconfont icon-mima"></i>
         <el-input
          ref="password"
          v-model="loginForm.password"
          placeholder="Password"
          name="password"
          type="text"
          tabindex="1"
          autocomplete="on"
         ></el-input>
       </el-form-item>
       <el-button
        type='primary'
        @click.native.prevent="handleLogin"
       >Login</el-button>
     </el-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      loginForm: {
        username: 'admin',
        password: '111111'
      },
    }
  },
  computed:{
    ...mapGetters('home',['loginStatus'])
  },
  methods:{
    ...mapActions('home',['setLoginStatus']),
    handleLogin(){
      let username = this.$refs.username.value
      let password = this.$refs.password.value
      console.log(this.loginStatus)
      if(username === 'admin' && password === '111111') {
        this.setLoginStatus(true)
        console.log(this.$router.replace('/home'))
      }
    }
  }
}
</script>

<style lang="scss">

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 93%;

    input {
      background: transparent;
      border: 0px;
      width: 93%;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 10px 0px;
    color: #454545;
  }

  .el-button {
    height: 47px;
    width: 100%;
    border: transparent;
    color: $light_gray;
    background-color:rgba(72, 164, 255, 0.726);
  }
}
</style>

<style lang="scss" scoped>

$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

  .login-container{
    width: 100%;
    height: 100%;
    background-color: $bg;
    overflow: hidden;
    .login-form{
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }
  }

  .title-container{
    position: relative;
    .title{
      font-size: 26px;
      color: $light_gray;
      text-align: center;
      font-weight: bold;
      margin: 0px auto 40px auto;
    }
  }
</style>