<template>
    <div class="div_body">
        <router-link to="/Teach">
            <div class="item">
                <span class="num">
                    <b>0.00</b>课时
                </span><br>
                <span style="color:black">
                    我的教师课时
                </span>
            </div>
        </router-link>
        <div class="item" style="border-left:1px solid #dddddd;border-right:1px solid #dddddd;">
            <span class="num">
                <b>0.00</b>元
            </span><br>
            <span style="color:black">我的业绩</span>
        </div>
        <div class="item">
            <span class="num">
                <b>0</b>人
            </span><br>
            <span style="color:black">咨询人数</span>
        </div>
        <div class="item">
            <span class="num">
                <b>0</b>人
            </span><br>
            <span style="color:black">报名人数</span>
        </div>
        <div class="item" style="border-left:1px solid #dddddd;border-right:1px solid #dddddd;">
            <span class="num">
                <b>0.00</b>元
            </span><br>
            <span style="color:black">总实收</span>
        </div>
        <div class="item">
            <span class="num">
                <b>0.00</b>元
            </span><br>
            <span style="color:black">总支出</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .item{
        font-size: 0.25rem;
        width:2.1rem;
        height: 0.8rem;
        text-align: center;
        float: left;
        margin: 0.2rem auto;
    }
    .num{
        color: #6f94ff
    }
</style>
