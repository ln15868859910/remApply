<template>
  <div id="div_body">
    <div class="padding_style">
      <form>
        <div class="content">
          <div class="login_box" id="TelLogin" v-if="account" style="display:block">
            <div class="page_logo"></div>
            <div class="account_login">
              <div class="login_input">
                <input type="text" class="input_style input_style1" placeholder="输入手机号" maxlength="11">
              </div>
              <div class="login_input">
                <input type="password" class="input_style input_style1" placeholder="输入密码" maxlength="32">
              </div>
              <div class="login_input">
                <input type="code" class="input_style input_style2" style="" placeholder="输入验证码" maxlength="4">
                <img id="phoneCode" class="" src="../imgs/ValidateCode.jpg" style="width:1.98rem;height:0.8rem;border-radius:3px; vertical-align:bottom;float:righ;background:#c3d8ed">
              </div>
            </div>
            <div class="login_a clearfix">
              <div class="login_way">
                <a id="ChangeMode" @click="loginWay">账号登录</a>
              </div>
              <router-link to="/forgetPassword" class="TelRes fr">手机号重置密码</router-link>
            </div>
            <div>
              <router-link to="/index">
                <input type="button" @click="formSubmit()" class="btn" value="登录 ">
              </router-link>
            </div>
            <div class="open ">
              <router-link to="/PersonalEditionRegister" class="btn">立即开通，免费体验</router-link>
            </div>
          </div>
          <div class="login_box" id="OrgNameLogin" v-else style="display:block">
            <div class="page_logo "></div>
            <div class="phone_login ">
              <div class="login_input ">
                <input type="text " class="input_style input_style1 " placeholder="输入机构后缀 " maxlength="11 ">
              </div>
              <div class="login_input ">
                <input type="password " class="input_style input_style1 " placeholder="输入登录名 " maxlength="32 ">
              </div>
              <div class="login_input ">
                <input type="code " class="input_style input_style1 " style=" " placeholder="输入密码 " maxlength="4 ">
              </div>
            </div>
            <div class="login_a clearfix ">
              <div class="login_way ">
                <a id="ChangeMode " @click="loginWay ">手机号登录</a>
              </div>
              <a class="TelRes fr" @click="fgPwd()">忘记密码？</a>
            </div>
            <div>
              <input type="button" @click="formSubmit()" class="btn" value="登录">
            </div>
            <div class="open ">
              <router-link to="/PersonalEditionRegister" class="btn">立即开通，免费体验</router-link>
            </div>
          </div>
        </div>
      </form>
      <div class="login_figure"></div>
    </div>
    <div class="tip_position">
      <div class="tip_position_box ">没有相关登录信息，请重新输入手机号或者使用账号登录
      </div>
    </div>
    <div class="tip_position">
      <div class="tip_position_box" id="power">
        请联系学校最高权限账号拥有者重置密码
      </div>
    </div>
    <div class="tip_position">
      <div class="tip_position_box" id="info">
        输入的信息不完整，请补全
      </div>
    </div>
    <div style="position: absolute;bottom: 0.3rem;font-size: 0.18rem;color: #fff;width: 100%;text-align: center; ">已通过 ISO27001:2013 信息安全认证</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      account: true
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var tipPosition = document.getElementsByClassName('tip_position')[0]
      setTimeout(function () {
        tipPosition.style.display = 'none'
      }, 5000)
    },
    loginWay () {
      this.account = !this.account
    },
    formSubmit () {
      var el = document.getElementById('info')
      el.style.display = 'block'
      setTimeout(function () {
        el.style.display = 'none'
      }, 5000)
    },
    showError (el, val) {
      console.log(1)
      el.text(val)
    },
    fgPwd () {
      var el = document.getElementById('power')
      el.style.display = 'block'
      setTimeout(function () {
        el.style.display = 'none'
      }, 5000)
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../../static/css/reset.css';
/*媒体查询- 在特定分辨率下的字体大小*/
@media screen and (max-width: 321px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 15px;
  }
  .btn_style {
    font-size: 17px;
  }
}

@media screen and (max-width: 400px) and (min-width: 321px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 16px;
  }
  .btn_style {
    font-size: 19px;
  }
}

@media screen and (min-width: 400px) {
  .content,
  .container,
  .input_style,
  .changeRow input,
  .qr_code,
  textarea {
    font-size: 18px;
  }
  .btn_style {
    font-size: 20px;
  }
}

.account_login{
  text-align: center;
}
#power,#info{
  display: none;
}
.tip_position {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 0.24rem;
    color: #fff;
    background: url(../imgs/tip_bg.png) repeat;
    letter-spacing: 2px;
    z-index: 999;
    display: block;
}

.tip_position_box {
    position: relative;
    padding: 0.2rem 0.8rem;
}
input::-webkit-input-placeholder {
  color: #fff; /* WebKit browsers */
}
#div_body{
  height: 100%;
  position: relative;
}
input:-moz-placeholder {
  color: #fff; /* Mozilla Firefox 4 to 18 */
}

input::-moz-placeholder {
  color: #fff; /* Mozilla Firefox 19+ */
}
input:-ms-input-placeholder {
  color: #fff; /* Internet Explorer 10+ */
}
.padding_style {
  width: 6.4rem;
  height: 100%;
  overflow-x: hidden;
  padding: 0.42rem 0.42rem 0.64rem;
  background: #3168a2 url("../imgs/web_bg.png") repeat-x;
  position: relative;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
}
.content {
  height: 100%;
  background: #326ba4 url("../imgs/content_bg.png") no-repeat top left;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  -ms-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.page_logo {
  width: 2.05rem;
  height: 1.11rem;
  margin: -0.05rem auto 0.2rem;
  background: url("../imgs/logo.png") center center;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -ms-background-size: 100% 100%;
  background-size: 100% 100%;
}
.login_box {
  min-height: 3.61rem;
  padding: 0.4rem;
  position: relative;
  z-index: 20;
}
.login_input {
  margin-top: 0.2rem;
}

.input_style{
  height: 0.8rem;
  padding: 0 0.2rem;
  text-align: center;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.23);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  outline: none;
}
.input_style1{
  width: 4.76rem;
}
.input_style2{
  margin-right: 0.06rem;
  float: left;
  width:2.5rem
}
.input_style:focus {
  background-color: #31699e;
}
/* Mozilla Firefox 19+ */

input:focus::-webkit-input-placeholder {
color: transparent;
/* transparent是全透明黑色(black)的速记法，即一个类似rgba(0,0,0,0)这样的值 */
}
/* Mozilla Firefox 4 to 18 */
input:focus:-moz-placeholder {
color: transparent;
}
/* Mozilla Firefox 19+ */

input:focus::-moz-placeholder {
color: transparent;
}
/* Internet Explorer 10+ */
.login_a {
  margin: 0.2rem auto;
}
.login_a a {
  color: #fff;
  text-decoration: underline;
}
.login_way{
  display: inline;
  width: 2rem;
}
.btn {
  width: 4.76rem;
  height: 0.84rem;
  line-height: 0.84rem;
  color: #fff;
  background: none;
  border: 2px #fdfdfd solid;
  font-family: "Microsoft Yahei", sans-serif;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  font-size: 0.3rem;
  text-align: center;
}
.open .btn{
  display: inline-block;
}
.login_figure {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 6.4rem;
  height: 1.56rem;
  background: url("../imgs/login_bottom_bg.png") no-repeat center bottom;
  -webkit-background-size: 100% 92%;
  -moz-background-size: 100% 92%;
  -ms-background-size: 100% 92%;
  background-size: 100% 92%;
}
</style>
