<template>
    <div class="pub-switch" @click="changeState" :class="{actives:active}">
        <div class="circles" ref="moveCircle"></div>
    </div>
</template>

<script>
import Binding from "weex-bindingx";
export default {
    props:{
        active:Boolean
    },
    async mounted(){
        if(this.active){
             await this.BindingxAnimate(this.$refs.moveCircle, 't>1', [
                    {
                        element: this.$refs.moveCircle,
                        property: 'transform.translateX',
                        expression:'0 + (45-0)*(min(t,1)/1)'
                    }
                ])
        }
    },
    methods:{
       async changeState(){
           if(this.active){
               this.$emit('change',!this.active)
                await this.BindingxAnimate(this.$refs.moveCircle, 't>200', [
                    {
                        element: this.$refs.moveCircle,
                        property: 'transform.translateX',
                        expression:'45 + (0-45)*(min(t,200)/200)'
                    }
                ])
                
           }else{
               this.$emit('change',!this.active)
                await this.BindingxAnimate(this.$refs.moveCircle, 't>200', [
                    {
                        element: this.$refs.moveCircle,
                        property: 'transform.translateX',
                        expression:'0 + (45-0)*(min(t,200)/200)'
                    }
                ])
                
           }
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
    .pub-switch{
        width: 144px;
        height: 84px;
        background: $line-default-color;
        border-radius: 84px;
        position: relative;
        .circles{
            width: 60px;
            height: 60px;
            background: #fff;
            border-radius: 60px;
            top: 50%;
            margin-top: -30px;
            left: 10px;
            position: absolute;

        }
    }
    .actives{
        background: $popup-btn-gradual-changes;
    }
</style>