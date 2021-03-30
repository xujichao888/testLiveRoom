<template>
  <div class="level-compo" 
        :class="{
                marsterbg:rule=='marster',
                adminbg:rule=='admin',
                lessTenlevelbg:getLevelFor==1,
                moreTenlevelbg:getLevelFor==2,
                greaterninetynine:getLevelFor==3
    }" >
      {{text}}
  </div>
</template>

<script>
export default {
    props:{
        rule:String
    },
    computed:{
        text(){
            switch (this.rule) {
                case 'marster':
                  return 'Owner';
                case 'admin' :
                  return  'admin';
                default:
                  return 'Lv.'+ this.rule
            }
        },
        getLevelFor(){ //等级转换颜色
            if( isNaN(this.rule*10)) return false;
            if(this.rule<10){return 1}
            return this.rule<10?1:this.rule<99?2:3
        }   
    }
}
</script>

<style lang="scss" scoped>
    .level-compo{
        width: 142px;
        height: 48px;
        color: #fff;
        border-radius: 60px;
        text-align: center;
        line-height: 48px;
        font-size: $text-normal-mini-size;
        margin-left: 10px;
        margin-right: 10px;
    }
    .marsterbg{
        background: $marster-gradual-changes;
    }
    .adminbg{
         background: $admin-gradual-changes;
    }
    .lessTenlevelbg{
        background: $levelLessTen-gradual-changes;
    }
    .moreTenlevelbg{
        background: $greaterTen-gradual-changes;
    }
    .greaterninetynine{
        background: $greater-ninety-nine-gradual-changes;
    }
</style>