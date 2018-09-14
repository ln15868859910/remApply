<template>
    <div id="div_body">
        <div class="padding_style">
            <div class="content">
                <div class="login_box" id="TelLogin" v-if="account" style="display:block">
                    <div class="page_logo"></div>
                    <div class="account_login">
                        <div class="login_input">
                            <input type="text" class="input_style input_style1" placeholder="输入手机号" maxlength="11">
                        </div>
                        <div class="login_input">
                            <input type="code" class="input_style input_style2" style="" placeholder="图形验证码" maxlength="4">
                            <img id="phoneCode" class="" src="../imgs/ValidateCode.jpg" style="width:1.98rem;height:0.8rem;border-radius:3px; vertical-align:bottom;float:righ;background:#c3d8ed">
                        </div>
                        <div class="login_input">
                            <input type="code" class="input_style input_style2" style="" placeholder="短信验证码" maxlength="4">
                            <input type="button" id="phoneCode" style="font-size:0.3rem;width:1.98rem;height:0.8rem;border-radius:3px; vertical-align:bottom;float:righ;background:#c3d8ed" value="获取">
                        </div>
                    </div>
                    <div>
                        <input type="button" onclick="formSubmit" class="btn" value="确定">
                    </div>
                </div>
            </div>
            <div class="login_figure"></div>
        </div>

        <div style="position: absolute;bottom: 0.3rem;font-size: 0.18rem;color: #fff;width: 100%;text-align: center;">已通过 ISO27001:2013 信息安全认证</div>
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
  created () {
  },
  methods: {
    init () {
      var tipPosition = document.getElementsByClassName('tip_position')[0]
      setInterval(function () {
        for (var i = 0, l = tipPosition.length; i < l; i++) {
          tipPosition[i].style.display = 'none'
        }
      }, 5000)
      console.log(this.account)
    },
    loginWay () {
      this.account = !this.account
      console.log(this.account)
    },
    doshowErr (select) {
      // 请联系学校最高权限账号拥有着重置密码
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
  width:2.7rem
}
.input_style:focus {
  background-color: #31699e;
}

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
  color: #fff;
  background: none;
  border: 2px #fdfdfd solid;
  font-family: "Microsoft Yahei", sans-serif;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  font-size: 0.22rem;
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
