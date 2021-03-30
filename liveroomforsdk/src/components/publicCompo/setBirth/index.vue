
<template>
  <div>
    <VuePicker :data="pickData"
      :showToolbar="true"
      @cancel="cancel"
      @confirm="confirm"
      @clickMask='clickMask'
      :visible.sync="pickerVisible"
      :maskClick="true"
      :defaultIndex="[49,6,15]"
    />
  </div>
</template>

<script>
import VuePicker from '@/components/publicCompo/picker/src';
  export default {
    components: { VuePicker },
    data () {
      return {
        pickerVisible: false,
        pickData: [
        ],
        result: '',
        year:'',
        month:'',
        Day:''
      }
    },
    props:{
      isShow:Boolean
    },
    mounted(){
        this.initDate()
    },
    watch:{
      isShow(newV){
        this.pickerVisible = newV
      }
    },
    methods: {
      initDate(){
        this.year = new Date().getFullYear();
        this.month = 12;
        this.Day = 30;
        for(let i=this.year-80;i<this.year-18;i++){
          this.pickData.push([])
          this.pickData[0].push({
            label:i,
            value:i
          })
        }
        for(let i=1;i<=this.month;i++){
            this.pickData.push([])
            this.pickData[1].push({
              label:i,
              value:i
          })
        }
        for(let i=1;i<=this.Day;i++){
            this.pickData.push([])
            this.pickData[2].push({
              label:i,
              value:i
          })
        }

      },
      cancel () {
        this.result = 'click cancel result: null'
      },
      confirm (res) {
        this.result = JSON.stringify(res)
        console.log(this.result)
      },
      clickMask(){
        this.$emit('mask')
      }
    }
  }
</script>
