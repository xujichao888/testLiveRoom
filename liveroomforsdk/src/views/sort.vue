<template>
    <div class="sort-content">
        <div class="position-bg"></div>
        <div class="top-row">
            <img class="icon" src="@/assets/icons/btn_fanhui.png" @click="back">
              <div class="gift-bar-title">
                <div class="box">
                    <div class="tags" 
                        v-for="(item,index) in arr" 
                        :key="index" 
                        :class="{activetag:index==current,endEl:index==1}" 
                        @click="changeActive(index)"
                        >
                        {{item}}
                    </div>
                    <div class="positionBar" ref="moveCircle"></div>
                </div>
            </div>
        </div>
        <div class="swiper">
            <van-swipe class="my-swipe" duration="200" @change="onChange" ref="swipe">
                <van-swipe-item>
                    <div class="box1">
                        <div class="top">
                            <sortAwesome :renderJson="dayArr[1]" :idx="1"/>
                            <sortAwesome :bigSize="true" :renderJson="dayArr[0]" :idx="0"/>
                            <sortAwesome :renderJson="dayArr[2]" :idx="2"/>
                        </div>
                        <div class="bottom">
                            <sortList v-for="(item,index) in calculateDayArr" :key="index" :renderJson="item" :idx="index"/>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                                       <div class="box1">
                        <div class="top">
                            <sortAwesome :renderJson="dayArr[1]" :idx="1"/>
                            <sortAwesome :bigSize="true" :renderJson="dayArr[0]" :idx="0"/>
                            <sortAwesome :renderJson="dayArr[2]" :idx="2"/>
                        </div>
                        <div class="bottom">
                            <sortList v-for="(item,index) in calculateDayArr" :key="index" :renderJson="item" :idx="index"/>
                        </div>
                    </div>
                </van-swipe-item>
                  <van-swipe-item>
                                      <div class="box1">
                        <div class="top">
                            <sortAwesome :renderJson="dayArr[1]" :idx="1"/>
                            <sortAwesome :bigSize="true" :renderJson="dayArr[0]" :idx="0"/>
                            <sortAwesome :renderJson="dayArr[2]" :idx="2"/>
                        </div>
                        <div class="bottom">
                            <sortList v-for="(item,index) in calculateDayArr" :key="index" :renderJson="item" :idx="index"/>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="time-tags">
            <div class="tag-box">
                 <div class="tag" v-for="(item,index) in timeTagArr" :key="index" :class="{active:current2 == index}" @click="changeCurrent2(index)">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Binding from "weex-bindingx";
import sortAwesome from '@/components/publicCompo/sortAwesome';
import sortList from '@/components/publicCompo/sortList';
export default {
    components:{
        sortAwesome,
        sortList
    },
    data(){
        return{
            arr:[
                'Contribution',
                'Charm'
            ],
            timeTagArr:[
                'Day',
                'Week',
                'Month'
            ],
            lastNum:0,
            current:0,
            animationNum:150,
            current2:0,
            dayArr:[
                {
                    nickname:'Jack',
                    avatar:require('@/assets/icons/testavatar.png'),
                    sex:1,
                    level:'99',
                    power:3210
                },
                 {
                    nickname:'Jack',
                    avatar:require('@/assets/icons/testavatar.png'),
                    sex:1,
                    level:'11',
                    power:1234
                },
                 {
                    nickname:'Jack',
                    avatar:require('@/assets/icons/testavatar.png'),
                    sex:1,
                    level:'1',
                    power:100
                },
                {
                    nickname:'Jack',
                    avatar:require('@/assets/icons/testavatar.png'),
                    sex:1,
                    level:'99',
                    power:100
                },
                {
                    nickname:'Manager',
                    avatar:require('@/assets/icons/testavatar.png'),
                    sex:1,
                    level:'1',
                    power:100
                },
            ]
        }
    },
    computed:{
        calculateDayArr(){
            return this.dayArr.length>3?this.dayArr.slice(3):[]
        }
    },
    methods:{
        changeActive(idx){
            this.current = idx;
            this.$emit('change',idx)
            this.changeState(idx)
        },
        onChange(idx){
            this.current2 = idx;
        },
        changeCurrent2(idx){
            this.current2 = idx
            this.$refs.swipe.swipeTo(this.current2)
        },
        back(){
            this.$router.go(-1)
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
    .sort-content{
        position: relative;
        .position-bg{
            width: 1080px;
            height: 1002px;
            background:$popup-btn-gradual-bg;
            position: absolute;
            left: 0;
            top: 0;
        }
        .top-row{
            width: 1080px;
            box-sizing: border-box;
            border-bottom: $line-default-opcaty-white;
            position: absolute;
            height: 160px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            .icon{
                width: 54px;
                position: absolute;
                left: 50px;
                top: 50%;
                transform: translateY(-50%);
            }
            .gift-bar-title{
                height: 154px;
                border-bottom: $line-default;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: $text-normal-size;
                color: $text-gray-color;
                .box{
                    width: 400px;
                    height: 154px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    position: relative;
                    .tags{
                        width: 200px;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        box-sizing: border-box;
                    }
                    .endEl{
                        justify-content: flex-end;
                    }
                    .positionBar{
                        width: 50px;
                        height: 10px;
                        background: #fff;
                        position: absolute;
                        left: 100px;
                        bottom: 0;
                        border-radius: 30px;
                    }
                    .activetag{
                        color: #fff;
                        font-weight: bolder;
                    } 
                }
            }
        }
        .swiper{
             height: calc(100vh - 160px);
             position: relative;
             top: 160px;
            .my-swipe{
                height: calc(100vh - 160px);
                .box1{
                    height: 100%;
                    .top{
                        padding: $live-room-padding;
                        height: 520px;
                        margin-top: 250px;
                        display: flex;
                        align-items: flex-end;
                        justify-content: space-between;
                    }
                    .bottom{
                        height: calc(100% - 843px);
                        margin-top: 72px;
                        overflow: auto;
                    }
                }
            }   
        }
        .time-tags{
            width: 1080px;
            height: 84px;
            position: absolute;
            top: 220px;
            display: flex;
            justify-content: center;
            .tag-box{
                width: 732px;
                display: flex;
                font-size: $text-normal-size;
                justify-content: space-between;
                .tag{
                    width: 228px;
                    height: 84px;
                    background: $fifteen-percent-white;
                    border-radius: 84px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: $text-pink-white-normal;
                }
                .active{
                    background: #fff;
                    color: #aa7dff;
                }
            }
  
        }
    }
</style>