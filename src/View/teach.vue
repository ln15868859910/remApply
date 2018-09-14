<template>
    <div class="report_box">
        <ul class="detail">
            <li class="time">学员课时消耗</li>
            <li class="fee">学员学费消耗</li>
            <li class="teach_time">教师课时</li>
            <li class="my_teach_time">我的教师课时</li>
            <li class="raise_rate">出勤率</li>
        </ul>
        <div class="scroller">
            <scrollteach :is="currentView"></scrollteach>
        </div>

    </div>
</template>

<script>
import scrollteach from '../View/scroll_teach'
export default {
  components: {
    scrollteach
  },
  data () {
    return {
      scroller: 'scrollteach',
      currentView: 'scrollteach'
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
