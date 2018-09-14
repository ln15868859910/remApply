<template>
    <div id="div_body">
        <div class="changeRow" id="step1">
            <div id="tel" class="listRow">
                <label for="">手机号码 <input type="text" name="" placeholder="请输入手机号码" id=""></label>
            </div>
            <div id="tel" class="listRow">
                <label for="">验证码 <input type="text" name="" placeholder="请输入验证码" id=""></label>
                <img src="../imgs/ValidateCode.jpg" class="code_img" alt="">
            </div>
        </div>
        <button class="blueBtn" id="step2" @click="tipError()">下一步</button>
        <div class="regTips">点击上面按钮“下一步”即表示同意</div>
        <router-link to='/ServiceArg' class="regTips blueTxt">《校宝ERP服务协议》</router-link>
        <div class="tip_position">
            <div class="tip_position_box" id="error_tip">手机号错误，请重新输入
            </div>
        </div>
    </div>
</template>

<script>

export default {
  methods: {
    tipError () {
      var el = document.getElementById('error_tip')
      el.style.display = 'block'
      setTimeout(function () {
        el.style.display = 'none'
      }, 5000)
    }
  }
}
</script>

<style>
@media screen and (max-width: 321px) {
  .container,
  input,label{
    font-size: 15px;
  }
  .blueBtn{
    font-size: 17px;
  }
}

@media screen and (max-width: 400px) and (min-width: 321px) {
  .container,
  input,label{
    font-size: 16px;
  }
  .blueBtn{
    font-size: 19px;
  }
}

@media screen and (min-width: 400px) {
.container,
  input,label{
    font-size: 18px;
  }
  .blueBtn{
    font-size: 20px;
  }
}
#error_tip{
    display: none;
}
.code_img{
    width: 1.6rem;
    height: 0.6rem;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    float: right;
    margin-right: 0.2rem;
    margin-top: 0.1rem;
    }
.changeRow:before{content: "";display: block;height: 0.6rem;}
.reset{
    padding: 0;
    margin: 0;
    height: 0.3rem;
    line-height: 0.3rem;
}
.regTips{
    font-size: 0.25rem;
}
#div_body{
    font-family: 'Microsoft Yahei', sans-serif;
    text-align: center;
    background-color: #f0f0f1;
    height: 100%;
}
.changeRow .listRow{
    padding: 0 0.3rem;
    box-sizing: border-box;
    text-align: left;
    height: 0.8rem;
    background-color: white;
    border-bottom:1px solid #d0d0d0;
    line-height: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
.changeRow{
    box-sizing: border-box;
}
input{
    height: 0.7rem;
    line-height: 0.7rem
}
#step2{
    margin-top: o.6rem;
    margin-bottom: 0.4rem;
    width: 97%;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 4px;
   background: #67adf7;
   color: white;
}
a{
    text-decoration: none;
    display: block;
    color: #67adf7;
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
}
.tip_position_box {
    position: relative;
    padding: 0.2rem 0.8rem;
}
</style>
