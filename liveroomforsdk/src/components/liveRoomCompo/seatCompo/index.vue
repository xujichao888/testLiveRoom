<template>
  <div class="seat-container">
      <!-- 有人座时 -->
      <div class="person-seat">
        <img class="img-border" :src="switchBorder" v-if="renderJson.id && switchBorder">
        <img class="img-avatar" src="@/assets/icons/avatar.jpg"  v-if="renderJson.id">
        <div class="money"  v-if="renderJson.id">
            <img class="heart" src="@/assets/icons/icon_aixin.png" >
            <div class="moneyNum">{{calculationNum}}</div>
        </div>
        <div class="nickname" :class="{noperson:!renderJson.id}">
            {{renderJson.nickname || (idx+1)}}
        </div>
      </div>
      <!-- 麦克风状态 -->
      <div class="mic-state" v-if="renderJson.id">
          <img v-if="renderJson.hasVoice" class="mic-turn-on" src="@/assets/icons/mic_turn_on.png">
          <img v-else class="mic-turn-off" src="@/assets/icons/mic_turn_off.png">
      </div>
      <!-- 没有人时 -->
      <div class="empty-seat" v-if="!renderJson.id">
          <img src="@/assets/icons/btn_jia.png" class="increment">
      </div>
      
      <!-- 动画播放组件 -->
      <div class="animation-block" ref="ani" v-if="renderJson.isSpeak"></div>
 
  </div>
</template>

<script>
import Binding from "weex-bindingx";
export default {
    props:{
        renderJson:{
            type:Object,
            default:{

            }
        },
        idx:Number
    },
    data(){
        return{
            borders:{
                border1:require('@/assets/icons/border_03.png'),
                border2:require('@/assets/icons/border_05.png'),
            }
        }
    },
    mounted(){
        // setInterval(() => {
        //       this.animations()
        // }, 1000);
      
    },
    computed:{
        //计算数值
        calculationNum(){
            return this.$calculationNum(this.renderJson.money)
        },
        //计算边框
        switchBorder(){
            if(JSON.stringify(this.renderJson) == "{}") return false
            switch (this.renderJson.border) {
                case 'border1':
                    return this.borders.border1
                case 'border2':
                    return this.borders.border2
                default:
                    return ''
            }
        }
    },
    methods:{
			async animations() {
				let stepScale = await this.BindingxAnimate(this.$refs.ani, 't>1000', [
                    {
                        element: this.$refs.ani,
                        property: 'transform.scale',
                        expression: '0 + (1.5)*(min(t,1000)/1000)'
				    },
                    {
                        element: this.$refs.ani,
                        property: 'opacity',
                        expression: '1-t/1000'
                    }
                ])
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
    .seat-container{
        width: 229px;
        height: 275px;
        position: relative;
        .mic-state{
            width: 60px;
            height: 60px;
            background: rgba(0,0,0,0.75);
            border-radius: 60px;
            position: absolute;
            right: 0;
            top: 40px;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: center;
            .mic-turn-on{
                width: 24px;
                height: 30px;
            }
            .mic-turn-off{
               width: 27px;
               height: 30px; 
            }
        }
        .person-seat{
            width: 229px;
            height: 275px;
           
            .img-border{
                width: 220px;
                height: 220px;
                position: absolute;
                z-index: 2;
                left: 50%;
                top: 0;
                transform: translate(-50%,0);
            }
            .img-avatar{
                width: 180px;
                height: 180px;
                position: absolute;
                border-radius: 200px;
                left: 50%;
                top: 20px;
                z-index: 1;
                transform: translate(-50%,0);
            }
            .money{
                width: 140px;
                height: 48px;
                background: rgba(0,0,0,0.6);
                position: absolute;
                left: 50%;
                top: 180px;
                border-radius: 500px;
                transform: translate(-50%,0);
                z-index: 2;
                display: flex;
                padding: 0 20px;
                justify-content: center;
                align-items: center;
                .heart{
                    width: 34px;
                    height: 30px;
                    margin-right: 15px;
                }
                .moneyNum{
                    font-size: $text-normal-size;
                    color: #fff;
                    margin-top: 5px;
                }
            }
            .nickname{
                width: 170px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: $text-normal-size;
                color: #fff;
                position: absolute;
                z-index: 1;
                bottom: 0;
                left: 50%;
                transform: translate(-50%,0);
            }
            .noperson{
                  color: #ddc7eb;
            }
        }
        .empty-seat{
            width: 180px;
            height: 180px;
            position: absolute;
            border-radius: 200px;
            left: 50%;
            top: 20px;
            transform: translate(-50%,0);
            background: rgba(255,255,255,0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            .increment{
                width: 48px;
                height: 48px;
            }
        }
        .animation-block{
            width: 180px;
            height: 180px;
            position: absolute;
            border-radius: 200px;
            left: 50%;
            top: 20px;
            background:#fff;
            border-radius: 300px;
            margin-left: -90px;
        }
    }
</style>