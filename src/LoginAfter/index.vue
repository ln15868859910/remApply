<template>
    <div id="div_body1">
        <div class="content">
            <workspace :is="currentView"></workspace>
        </div>
        <div class="naV_bottom">
            <div class="work" @click="toggle(workspace);">
                <a>工作台</a>
                <i :class="{iconFunc2:work,iconFunc1:info}"></i>
            </div>
            <div class="me" @click="toggle(myinfo);">
                <a class="work">我的</a>
                <i :class="{iconUser1:work,iconUser2:info}"></i>
            </div>
        </div>
    </div>
</template>
<script>
import workspace from '../View/workSpace.vue'
import myinfo from '../view/myinfo'
export default {
  data () {
    return {
      work: true,
      info: false,
      workspace: 'workspace',
      myinfo: 'myinfo',
      currentView: 'workspace'

    }
  },
  components: {
    workspace,
    myinfo
  },
  methods: {
    toggle (tabText) {
      this.currentView = tabText
      if (tabText === 'workspace') {
        this.work = true
        this.info = false
        console.log(1)
      } else {
        this.work = false
        this.info = true
        console.log(2)
      }
    }
  }
}
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
        font-size: 0.3rem;
    }
    #div_body1{
        background: #f0f0f1;
        height: 100%;
        width: 100%;
    }
    /* 下切换卡 */
    .naV_bottom{
        width: 100%;
        height: 1.2rem;
        background: #ffffff;
        border: 1px solid #dddcdc;
        position: fixed;
        bottom: 0;
        box-sizing: border-box;
    }
    .work,.me{
        display: inline-block;
        text-align:end;
        width: 49%;
        height: 1rem;
        line-height: 1.5rem;
        text-align: center;
        position: relative;
    }
    i{
        width: 0.38rem ;
        height: 0.38rem ;
        display: inline-block;
        position: absolute;
        top: 0.1rem;
        left: 1.4rem;
    }
    .iconFunc2{
        background: url('../../static/img/icon-func-2.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .iconUser1{
        background: url('../../static/img/icon-user-1.png') no-repeat center center;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
       .iconFunc1{
        background: url('../../static/img/icon-func-1.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .iconUser2{
        background: url('../../static/img/icon-user-2.png') no-repeat center center;
        -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    /* 内容区域 */
    .content{
        height: 100%;
    }
</style>
