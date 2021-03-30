<template>
  <div class="gift-bar-title">
      <div class="box">
        <div class="tags" v-for="(item,index) in arr" :key="index" :class="{activetag:index==current}" @click="changeActive(index)">
            {{item}}
        </div>
        <div class="positionBar" ref="moveCircle"></div>
      </div>
  </div>
</template>

<script>
import Binding from "weex-bindingx";
export default {
    data(){
        return{
            arr:[
                'Pack',
                'Gift',
                'Props'
            ],
            lastNum:0,
            current:0,
            animationNum:105
        }
    },

    methods:{
        changeActive(idx){
            this.current = idx;
            this.$emit('change',idx)
            this.changeState(idx)
        },
        async changeState(idx){
               if(this.current == this.lastNum) return false;
               if(this.current>this.lastNum){
                    await this.BindingxAnimate(this.$refs.moveCircle, 't>200', [
                        {
                            element: this.$refs.moveCircle,
                            property: 'transform.translateX',
                            expression:`${this.animationNum}*${idx-1} + (${this.animationNum}*${idx}-${this.animationNum}*${idx-1})*(min(t,200)/200)`
                        }
                    ])
               }else{
                    await this.BindingxAnimate(this.$refs.moveCircle, 't>200', [
                        {
                            element: this.$refs.moveCircle,
                            property: 'transform.translateX',
                            expression:`${this.animationNum}*${idx+1} + (${this.animationNum}*${idx}-${this.animationNum}*${idx+1})*(min(t,200)/200)`
                        }
                    ])
               }
  
                this.lastNum = this.current
        },
        BindingxAnimate(token, animateTimeStr, propsArr) { // valueName,expression
				let main_btn = token;
				return new Promise((resolve, reject) => {
					Binding.bind({
						eventType: 'timing', //动画的模式 timing 表示是时间动画
						exitExpression: animateTimeStr, //动画的时间
						props: propsArr
					}, function(res) {
						let {
							state
						} = res;
						if (state == 'exit') {
							resolve('done')
						}
					})
				})
		},
    }
}
</script>

<style lang="scss" scoped>
.gift-bar-title{
    height: 154px;
    border-bottom: $line-default;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $text-normal-size;
    color: $text-gray-color;
    .box{
        width: 450px;
        height: 154px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: relative;
        .tags{
            width: 150px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }
        .positionBar{
            width: 50px;
            height: 10px;
            background: #fff;
            position: absolute;
            left: 50px;
            bottom: 0;
            border-radius: 30px;
        }
        .activetag{
            color: #fff;
            font-weight: bolder;
        } 
    }

}
</style>