<template>
    <div class="report_box">
        <ul class="detail">
            <li class="income">总实收</li>
            <li class="cost">总支出</li>
            <li class="consult_count">咨询人数</li>
            <li class="sign_count">报名人数</li>
        </ul>
        <div class="scroller">
            <scrollreport :is="currentView"></scrollreport>
        </div>

    </div>
</template>

<script>
import scrollreport from '../View/scroll_report'
export default {
  components: {
    scrollreport
  },
  data () {
    return {
      scroller: 'scrollreport',
      currentView: 'scrollreport'
    }
  }
}
</script>

<style>
.report_box{
    margin-top: 1.5rem;
}
     /* 内容区域 */
    .sort{
       overflow: hidden;
        height: 1.25rem;
        line-height: 1.25rem;
        width: 100%;
        border: 1px solid red;
    }
    .detail{
        width: 100%;
        transform: translate(-1px, 0px) scale(1) translateZ(0px);
        overflow-y:hidden;
        overflow-x:auto;
        margin: 0.3rem auto;
        white-space: nowrap;
        transform: translate(0px, 0px) scale(1) translateZ(0px);
    }
    .detail li{
        list-style: none;
        margin-left: 0.2rem;
        position: relative;
        display: inline-table;
        border-radius: 1rem;
        padding: 0.1rem 0.3rem;
        background: #ffffff;
    }
    .scroller{
        padding: 0.2rem;
    }
</style>
