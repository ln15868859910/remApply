<template>
    <div id="div_body2">
        <div class="my_report">
            <div class="list_title">
                <span style="margin-left:1.5rem">我的报表</span>
                <span class="set">
                    <router-link to="/DataCenterData">设置</router-link>
                    <b class="setImg" style="margin:0.1rem 0.1rem;background: url('../../static/img/iconsetting.png') no-repeat center center;"></b>
                </span>
            </div>
            <div class="time_tab">
                <div class="tab">
                    <span :class="{today:a,current:b}" @click="toggleTabs(today)">今日</span>
                    <span :class="{week:a,current:c}" @click="toggleTabs(week)">本周</span>
                    <span :class="{month:a,current:d}" @click="toggleTabs(month)">本月</span>
                </div>
                <div :class="{tab_content:true}">
                    <today :is="currentview" keep-alive></today>
                </div>
                <div :class="{hide:flag2}" style="" class="loading2Box">
                    <span class="loading2"></span>
                </div>
            </div>
        </div>
        <div class="listItem">
            <div class="list_title">我的应用
            </div>
            <div class="app_box">
                <div class="deskIcon">
                    <b class="desk1 desk"></b><br>
                    <span>校内通知</span>
                </div>
                <div class="deskIcon">
                    <b class="desk2 desk"></b><br>
                    <span>咨询本</span>
                </div>
                <div class="deskIcon">
                    <b class="desk3 desk"></b><br>
                    <span>课程表</span>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk4 desk"></b><br>
                        <span>记上课</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk5 desk"></b><br>
                        <span>校宝秀</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk6 desk"></b><br>
                        <span>校宝家</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk7 desk"></b><br>
                        <span>学员</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk8 desk"></b><br>
                        <span>报表中心</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk9 desk"></b><br>
                        <span>校宝学院</span>
                    </div>
                </div>
                <div class="deskIcon">
                    <div class="deskIcon">
                        <b class="desk10 desk"></b><br>
                        <span>收银宝</span>
                    </div>
                </div>
                <!-- <div class="work" @click="toggle(workspace);">
                    <a>工作台</a>
                    <i style="background: url('../../static/img/icon-func-2.png') no-repeat center center;"></i>
                </div>
                <div class="me" @click="toggle(myinfo);">
                    <a class="work">我的</a>
                    <i style="background: url('../../static/img/icon-user-1.png') no-repeat center center;"></i>
                </div> -->
            </div>

        </div>
        <div class="list_title1">
            <div style="padding-top: 0.2rem;font-size: 0.18rem;color: #b5b5b1;width: 100%;text-align: center;">
                已通过 ISO27001:2013 信息安全认证
            </div>
        </div>
    </div>

</template>

<script>
import today from '../View/today'
import week from '../View/week'
import month from '../View/month'
export default {
  components: {
    today, week, month
  },
  data () {
    return {
      today: 'today',
      week: 'week',
      month: 'month',
      currentview: 'today',
      a: true,
      b: true,
      c: false,
      d: false,
      flag1: true,
      flag2: false
    }
  },
  methods: {
    toggleTabs (thistab) {
      this.b = this.d = this.c = false
      if (thistab === 'today') {
        this.b = true
      } else if (thistab === 'week') {
        this.c = true
      } else {
        this.d = true
      }

    //   this.flag2 = true
    //   setTimeout(function () {
    //     this.currentview = thistab
    //     this.flag1 = true
    //     this.flag2 = false
    //     console.log(this.flag1)
    //   }, 2000)
    //   console.log(this.flag1)
    }
  }
}
</script>

<style>
    /* 标题 */
    a{
        text-decoration: none;
        color:
    }
    .my_report{
        width: 100%;
        position: relative;
    }
    .list_title{
        color: #929292;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        box-sizing: border-box;
    }
    .set{
        margin-right: 0.3rem;
        color: #68a6f5;
        width: 1rem;
        display: inline-block;
        text-align: left;
        position: relative;
        float: right;
    }
    .setImg{
        width: 0.38rem ;
        height: 0.38rem ;
        display: inline-block;
        position: absolute;
        top: 0;
    }
    /* 我的报表内容 */
    .time_tab{
        padding-top: 0.01rem;
        padding-bottom: 0.2rem;
        width: 100%;
        background: #ffffff;
    }
    .tab{
        margin: 0.3rem 0.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-radius: 1rem;
        background: #f2f4fb;
    }
    .today,.week,.month{
        display: inline-block;
        width: 32%;
        text-align: center;
        border-radius: 1rem;
    }
    .today1{
        color: white;
        background: #6f94ff;
    }
    .tab_content{
        height:2.1rem;
    }
    .current{
        color: white;
        background: #6f94ff;
    }
    /* 加载图片 */
    .loading2{
        display: inline-block;
        width: 100%;
         height:100%;
        background: url("../../static/img/loading2.gif") no-repeat center center;
    }
    .loading2Box{
        width: 100%;
        background-color: #fff;
        text-align: center;
        height:2.5rem;
        display: none;
    }
    .hide{
        display: none
    }
    /* 我的应用 */
    .app_box{
        background: white;
        height: 4.7rem;
    }
    .app_box>div{
        display: inline-block;
        width: 23%;
        text-align: center;
        height: 1.6rem;
    }
    .desk{
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        margin-top: 0.3rem;
    }
    .desk1{
        background: url('../../static/img/icon-desk1.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
     .desk2{
        background: url('../../static/img/icon-desk2.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk3{
        background: url('../../static/img/icon-desk3.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk4{
        background: url('../../static/img/icon-desk4.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk5{
        background: url('../../static/img/icon-desk5.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk6{
        background: url('../../static/img/icon-desk6.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk7{
        background: url('../../static/img/icon-desk7.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk8{
        background: url('../../static/img/icon-desk8.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk9{
        background: url('../../static/img/icon-desk10.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .desk10{
        background: url('../../static/img/icon-desk11.png') no-repeat center center;
         -webkit-background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        -ms-background-size: 100% 100%;
        background-size: 100% 100%;
    }
    .list_title1{
        height: 2rem;
    }
    a{
        text-decoration: none;
        color: #68a6f5;
    }
</style>
