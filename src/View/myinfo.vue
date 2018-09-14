<template>
    <div id="div_body">
        <div class="content">
            <div class="basic">
                <span>我的工资条</span>
                <b class="point"></b>
            </div>
            <div class="basic">
                <span>查看电脑版</span>
                <b class="point"></b>
            </div>
            <div class="basic">
                <span>帮助中心</span>
                <b class="point"></b>
            </div>
            <div class="exit" @click="show">
                安全退出
            </div>
        </div>
        <div class="exit_box">
            <div class="exit_page">
                <div class="safe">安全退出？</div>
                <router-link to="/">
                    <div class="ok">确定</div>
                </router-link>
                <div class="cancel" @click="hide">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    show () {
      var exit = document.getElementsByClassName('exit_box')[0]
      exit.style.display = 'block'
    },
    hide () {
      var exit = document.getElementsByClassName('exit_box')[0]
      exit.style.display = 'none'
    }
  }
}
</script>

<style>

    .div_body{
        position: relative;
        background: #dddddd;
    }
    .basic{
        background: #ffffff;
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.3rem;
        padding-left: 0.2rem;
        border-bottom: 1px solid #e2e2e2;

    }
    .point{
        display: inline-block;
        float: right;
        margin-top: 0.2rem;
        margin-right: 0.3rem;
        width: 0.13rem;
        height: 0.25rem;
         background: url('../../static/img/icon-go.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .exit{
        width: 100%;
        text-align: center;
        background:#ffffff;
        height: 0.7rem;
        line-height: 0.7rem;
        margin-top: 1rem;
    }
    .exit_page{
        background: #f0eff0;
    }
    .exit_box{
        display: none;
        padding-top: 9rem;
        opacity: 0.9;
        position: fixed;
        height: 100%;
        width: 100%;
        background: #474748;
        top: 0;
        left: 0;
        z-index: 999;
    }
    .exit_page>div{
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: #ffffff;
    }
    .cancel{
        margin-top: 0.2rem;
    }
    .ok{
        color: #52a3fd;
    }
    a{
        text-decoration: none;
        text-align: center;
    }
</style>
