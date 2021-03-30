<template>
    <!-- 第一排的排名icon组件 -->
    <div class="awesome-btn-container">
        <img class="img-box" src="@/assets/icons/avatar.jpg">
        <div class="score" :class="{first:Ranking=='1',second:Ranking=='2',third:Ranking=='3',fourth:Ranking=='4'}" >
            {{scoreCal}}
        </div>
    </div>
</template>
<script>
export default {
    props:{
        score:String,
        Ranking:String
    },
    computed:{
        scoreCal(){
            return this.$calculationNum(this.score)
        }
    }
}
</script>
<style lang="scss" scoped>
    .awesome-btn-container{
        width: 72px;
        height: 96px;
        margin-right: 24px;
        position: relative;
        display: flex;
        align-items: flex-start;
        .img-box{
            width: 72px;
            height: 72px;
            border-radius: 100px;
        }
        .score{
            width: 72px;
            height: 36px;
            position: absolute;
            font-size: $text-mini-size;
            bottom: 0;
            border-radius: 100px;
            text-align: center;
            line-height: 36px;
            color: #fff;
        }
        .first{
            color: $avatar-score-first-text;
            background: $avatar-score-first;
        }
        .second{
            background: $avatar-score-second;
        }
        .third{
            background: $avatar-score-third;
        }
        .fourth{
            background: $avatar-score-fourth;
        }
    }
</style>