<template>
  <div class="onlinePosition" ref="block" v-show="show">
     
      <onlinePopBtn :imgs="arr[0]['image']" :text="arr[0]['text']"/>
      <onlinePopBtn :imgs="arr[1]['image']" :text="arr[1]['text']" :hasVertical="true"/>
      <onlinePopBtn :imgs="arr[2]['image']" :text="arr[2]['text']"/>
       <div class="san"></div>

  </div>
</template>

<script>
import Binding from "weex-bindingx";
import onlinePopBtn from '@/components/liveRoomCompo/onlinePopBtn'
export default {
    components:{
        onlinePopBtn
    },
    props:{
        isShow:Boolean,
        hasVerticalLine:Boolean,
    },
    watch:{
        isShow(newV){
            if(newV){
               this.showAnimation() 
            }else{
               this.hideAnimation()
            }
        }
    },
    data(){
        return{
            show:false,
            done:false,
            arr:[
                {image:require('@/assets/icons/ban.png'),text:'Banned'},
                {image:require('@/assets/icons/block.png'),text:'Block'},
                {image:require('@/assets/icons/getoutofroom.png'),text:'Remove'},
            ]
        }
    },
    methods:{
        async hideAnimation() {
				await this.BindingxAnimate(this.$refs.block, 't>150', [
                    {
                        element: this.$refs.block,
                        property: 'opacity',
                        expression: '1-t/150'
                    }
                ])
                this.show = false
		},
        async showAnimation() {
                this.show = true;
                await this.BindingxAnimate(this.$refs.block, 't>150', [
                    {
                        element: this.$refs.block,
                        property: 'opacity',
                        expression: '0+t/150'
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
    .onlinePosition{
        width: 652px;
        height: 200px;
        background: #282828;
        position: absolute;
        right: 120px;
        bottom: 50%;
        transform: translateY(50%);
        border-radius: 40px;
        opacity: 0;
        display: flex;
        .san{
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: 30px solid transparent;
            border-left: 30px solid #282828;
            border-bottom: 30px solid transparent; 
        }

    }
</style>>