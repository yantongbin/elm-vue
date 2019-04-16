<template>
  <div id="app-login">
    <div class="login-loader">
      <img src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt>
    </div>
    <div>
      <form id="MessageLogin">
        <div class="login-telephone">
          <input type="text" name="telephone" id="telephone" placeholder="请输入手机号">
          <button class="verification-btn">获取验证码</button>
        </div>
        <div class="login-verification">
          <input type="text" name="verification-code" id="verification" placeholder="验证码">
        </div>
        <div class="login-title">
          新用户登录即自动注册，并表示已同意
          <a href="##">《用户服务协议》</a>
        </div>
        <button class="login-submit" type="submit">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sms: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#app-login {
  padding-top: 40px;
  .login-loader {
    text-align: center;
    img {
      height: 56px;
    }
  }
  #MessageLogin {
    width: 300px;
    margin: 16px auto 0;
    .login-telephone {
      height: 48px;
      margin-bottom: 16px;
      position: relative;
      #telephone {
        width: 100%;
        height: 50px;
        border: solid 1px #ddd;
        border-radius: 10px;
        position: absolute;
        background-color: #f5f5f5;
        padding-left: 10px;
        box-sizing: border-box;
        &::placeholder {
          color: #ccc;
        }
      }
      .verification-btn {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        border: 0;
        color: #ccc;
        background-color: #f5f5f5;
      }
    }
    .login-verification {
      height: 48px;
      margin-bottom: 16px;
      position: relative;
      #verification {
        width: 100%;
        height: 50px;
        border: solid 1px #ddd;
        border-radius: 10px;
        position: absolute;
        background-color: #f5f5f5;
        padding-left: 10px;
        box-sizing: border-box;
        &::placeholder {
          color: #ccc;
        }
      }
    }
    .login-title{
      width: 300px;
      margin: 0 auto;
      font-size: 14px;
      color: #ddd;
      a{
        color: #2395ff;
        font-size: 14px;
      }
    }
    .login-submit{
      width: 100px;
      display: block;
      width: 100%;
      height: 42px;
      margin-top: 30px;
      border-radius: 4px;
      border: 0;
      background: #4cd96f;
      color: #fff;
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      line-height: 42px;
    }
  }
}
</style>

