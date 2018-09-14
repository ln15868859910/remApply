<template>
    <div class="report_box">
        <ul class="detail">
            <li class="consult_count">咨询人数</li>
            <li class="say_count">沟通次数</li>
            <li class="test_count">试听人次</li>
            <li class="attend_count">报名人数</li>
            <li class="sell_grade">销售业绩</li>
            <li class="my_grade">我的业绩</li>
        </ul>
        <div class="scroller">
            <scrollmarket :is="currentView"></scrollmarket>
        </div>

    </div>
</template>

<script>
import scrollmarket from '../View/scroll_market'
export default {
  components: {
    scrollmarket
  },
  data () {
    return {
      scroller: 'scrollmarket',
      currentView: 'scrollmarket'
    }
  }
}
</script>

<style>
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
