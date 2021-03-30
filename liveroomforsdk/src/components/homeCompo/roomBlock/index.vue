<template>
  <div class="room-block">
      <div class="type">
          Gifl
      </div>
      <div class="person">
          <div class="awesome-person-box">
              <img class="awesome-avtar" src="@/assets/icons/persons1.png">
               <img class="awesome-avtar" src="@/assets/icons/persons1.png">
                <img class="awesome-avtar" src="@/assets/icons/persons1.png">
          </div>
          <div class="onlineNum">
              55
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .room-block{
        width: 480px;
        height: 600px;
        background-image: url('../../../assets/icons/cover.png');
        background-size: 100%;
        border-radius: 40px;
        margin-top: 30px;
        font-size: $text-normal-size;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
        .type{
            width: 156px;
            height: 60px;
            border-radius: 60px;
            background-color: #aa7dff;
            color: #fff;
            text-align: center;
            line-height: 60px;
        }
        .person{
            display: flex;
            justify-content: space-between;
            .awesome-person-box{
                display: flex;
                .awesome-avtar{
                    width: 72px;
                    height: 72px;
                    border-radius: 72px;
                    display: block;
                    margin-right: 10px;
                 }
            }
            .onlineNum{
                width: 72px;
                height: 72px;
                border-radius: 72px;
                background-color: rgba(60,60,60,0.75);
                text-align: center;
                line-height: 72px;
                color: #fff;
                font-size: $text-normal-size;
            }
        }
    }
</style>