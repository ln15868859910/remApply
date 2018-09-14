<template>
    <div class="scroller_box">
        <div class="relative_data">
            <div class="stu_fee">
                <span class="mon1">0.00元</span><br>
                <span class="tip">学员学费消耗</span>
            </div>
            <div class="compare">
                <span class="mon2">--%</span><br>
                <span class="tip">较昨天全天</span>
            </div>
        </div>
        <div class="chart-pillar">
            <div>
                <h3 class="chart-title">社区对比</h3>
                <span class="chat-switch">
                    <span class="chat-switch-text">按教师</span>
                    <b class="icon-switch"></b>
                </span>
            </div>
            <div>
                <div class="reportCenter-loadingMask">
                    <div class="icon-noData-wrap">
                        <b class="icon_nodata"></b>
                        <p>无数据，请调整查询条件</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="chart-pillar  data-list">
            <div>
                <h3 class="chart-title">数据列表</h3>
            </div>
            <div>
                <div class="reportCenter-loadingMask">
                    <div class="icon-noData-wrap">
                        <b class="icon_nodata"></b>
                        <p>无数据，请调整查询条件</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .scroller_box{
        overflow-y: scroll;
        overflow-x: hidden;
        font-size: 0.3rem;
    }
/* relative_data */
    .relative_data{
        padding-top: 0.3rem;
        box-sizing: border-box;
        text-align: center;
        height: 1.5rem;
        background: #ffffff;
        width: 100%;
    }
    .relative_data div{
        text-align: center;
        display: inline-block;
        width: 49%;
    }
    .compare{
        border-left: 1px solid #d2d2d2;
    }
    .mon1{
        font-weight: bold;
        color: #6f94ff;
    }
    .mon2{
        font-weight: bold;
        color: #fa7e88
    }
   /* chart-pillar  */
    .chart-pillar{
        margin-top: 0.2rem;
        background: #ffffff;
    }
    .chart-title{
        display: inline-block;
        margin: .5rem 0 0 .4rem;
        border-left: 2px solid #6f94ff;
        font-weight: normal;
        padding-left: 0.2rem;
    }
    .chat-switch{
        display: inline-block;
        float: right;
        margin-right: 1rem;
        margin-top: 0.5rem;
    }
    .icon-switch{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAABHJJREFUSA3FV11onEUUPfPtJqSRtomUgoFK/SGKWH/omyjYYOpjIxV/QJEqts0G6mZXUvx52AdtpZjuWsxu90HEIojF0gR8KDW0FEFBGh/6YttHKyu0SmIqabPZ3fGccaf5dm23u9HUC8nMN3PvOXfmzty5a9CEpKwNLmfxWAkYMBYbadJjDXpkyu8CmwK/p6LA+MoYvksZU9FcIzGNJlOf2o6ZOeyiTtJarG2k6+eMwUX2R7s6cSC1zVz14/XtDYkTObu1UkGahOtkRMXz/DdO4G9MFD+vWnArxWwbV1/CndTrh8WABXqdvsGFIMDw/kFzpJ60ilc7bK018RzeQwVvuxluoQkwkhk0J2o1r/8Vz9k+W8E+OqGQAAH2ZAbxrjEMSkhqVizS4Sy+oPfPc6JEo3h6ENl6o5D9dbsOJ4cYnc+QLcpd+jIdw4thnCBsqZWKlFs6HRhszsTMWFg5rNuoLxvZCkNYwnS7GDK6tmLFtFzGV1qpDPYPmZMhvRt2kwftA6UyEtEoPhzdYc7WKybG7KaKxXGtPBLBsz7mbsU6vTpIzojb2yyp9Ctld6heK5dw6s2cfbCe2GER0+mSQ1zqO2JdGW7HOm7LlGJab9zoe3Un8rQ7Rvu1pQpOJg7ah+v1HSaxxVG9ngiUHKiYlLJOb6sx1V295y4M0PxrAq+plHCCYXtUeF6EKezqd1KcJjlmHy9ZfMuTdy4zZO73yq22qcO2feYSDpN8izucEWxO7zSnwzjxj+05xro3avBEVGmwOjnhlUY+sSuLV5HgQbvdj92s/eMSNQwKvK1FknfbMibjeduX2WF+vGbLBMT7PSLOqHIvvYAykleYn8cmKqQ03pKEDEi+OihhJ+23ewxxcHxEnMzr1WTPNOgVutfg2OxveLlcaX7F3ta3vJIlG8VR/61WqRZFN9ITda8MPfW5V8Op54ymP3cq/+E/cUwTT5zuOgl7roMRWmbxHCSyinGBC+5l9rmDvJfFnc/btp8W8AJv+aql+sJYFjtXYHzvq0bHzkmVg7T4VTHWQ96rp43teWmcXcAzdOYQk/y/kitz2EAAvedOqhzqFxTjKXrwJD3s58CkRu1tOI45nOH4Q/qmHOX2yMFWZCHSxqwWkiqHrt1p5naM814pc23h327pZbaZmbc+s31X/sQklR/hNdjQ3o5d+143v2h+ycJCQbYRYCJQjUTgiyS4T4+4B937ivm9w6CP3inH3lss4tTuvFU4liSuQGBIxSXOoFqYjQpNlYMecY/8QcxMm048xYEfSH73PF8gAqz38822wnRVyd8Go+J010mFGT25wJhuHFblEBJte1cX+kn+PcnX88AdCE031U1kMSRscYhLRo5YL4wKM4fCckWPdxgx9ZKZbV+Bp0k+xvFD4bmb9YVFh9PSE4evPIm1KG9k7fuuyGO5wgOwtZWCYBFlsSfSMnCEq+3mEvd8FDPv+Nka4ltZ7NUQyxuR3/Ly1m+D2n8U9CwUODzBA7I8BX2Y/H/5CVPjwDL8aPsLsIwO2d/H2OsAAAAASUVORK5CYII=);
        display: inline-block;
        width: 0.35rem;
        margin-top: -0.7rem;
        height: .35rem;
        margin-left: .19rem;
        background-size: 100% 100%;
    }
    .chat-switch-text{
        display: inline-block;
    }
    .reportCenter-loadingMask{
        background: white;
        width: 100%;
        height: 4rem;
        position: relative;
        text-align: center;
    }
    .icon-noData-wrap{
        position: absolute;
        top: 15%;
        left: 23%;
    }
    .icon_nodata{
        display: inline-block;
        width: 2.4rem;
        height: 2rem;
        background-size: 100% 100%;
        background-image: url(../../static/img/background-error-70a8f0.png);
    }
    .data-list{
        margin-bottom: 1.5rem;
    }
</style>
