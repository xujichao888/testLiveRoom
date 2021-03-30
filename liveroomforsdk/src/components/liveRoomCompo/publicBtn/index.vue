<template>
    <!-- 公共按钮组件 -->
    <div class="btnsss" :class="{mini:size=='mini'}" @click="handleClick">
        <img :src="chooseIcon" :class="{miniicon:size=='mini'}">
        <div>{{text}}</div>
    </div>
</template>
<script>
export default {
    props:{
        size:String,
        iconUrl:String,
        text:String,
        iconType:String
    },
    computed:{
        chooseIcon(){
            switch(this.iconType){
                case 'plus':
                    return this.plus
            }
        }
    },
    data(){
        return{
            plus:require('@/assets/icons/btn_jia.png')
        }
        
    },
    methods:{
        handleClick(){ //点击按钮事件
            this.$emit('clickFun')
        }
    }
}
</script>
<style lang="scss" scoped>
  .btnsss{
      border-radius: 1000px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .mini{
      width: 192px;
      height: 60px;
      font-size: $text-normal-size;
      color: #fff;
      background: linear-gradient(to left,$btn-gradual-change-start,$btn-gradual-change-end);
      .miniicon{
          width: 24px;
          height: 24px;
          margin-right: 5px;
      }
  }
</style>