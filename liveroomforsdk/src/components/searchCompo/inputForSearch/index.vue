<template>
  <div class="input-box">
      <input type="search" class="reset-input" v-model="inputVal" @keyup.13="confirm" >
      <div class="clear-input" v-if="clearCircleIsShow" @click="clearInputVal">
          <img class="clear-icon" src="@/assets/icons/close_white.png">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            inputVal:'',
            clearCircleIsShow:false
        }
    },
    methods:{
        clearInputVal(){
            this.inputVal = ''
        },
        confirm(){ //提交
            this.$emit('confirm')
        }
    },
    watch:{
        inputVal(newV){
            this.clearCircleIsShow = newV.length>0
            this.$emit('bindingChildVal',newV);
        }

    }
}
</script>

<style lang="scss" scoped>
    .input-box{
        width: 708px;
        height: 108px;
        background: #f5f5f5;
        border-radius: 108px;
        display: flex;
        align-items: center;
        padding: 0 24px;
        .reset-input{
          margin-left: 36px;
          caret-color:#ab78ff;
          flex: 1;
          height: 60px;
          border: none;
          background: none;
        }
        .reset-input::-webkit-input-placeholder{
          color: #fff;
          font-size: $text-normal-size;
          line-height: 108px;
        }
        .reset-input::-webkit-search-decoration,
        .reset-input::-webkit-search-cancel-button {
            display: none;
            }
        .clear-input{
            width: 60px;
            height: 60px;
            border-radius: 60px;
            background: #a0a0a0;
            display: flex;
            align-items: center;
            justify-content: center;
            .clear-icon{
                display: block;
                width: 24px;
            }
        }
    }
</style>