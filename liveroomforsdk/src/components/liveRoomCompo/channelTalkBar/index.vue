<template>
    <div class="channel-container">
        <div class="channel-left">
            <img class="avatar" src="@/assets/icons/avatar.jpg">
        </div>
        <div class="something-box">
            <span class="boxss">    
                <span class="titles">{{renderJson.title}}</span>
                 <span class="nicknames"> {{renderJson.nickname}}: </span>
                <span class="contents">{{renderJson.content}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        renderJson:Object
    }
}
</script>

<style lang="scss" scoped>
.channel-container{
  width: 750px;
  display: flex;
  margin-bottom: 24px;
  .channel-left{
      .avatar{
          width: 84px;
          height: 84px;
          border-radius: 84px;
      }
  }
  .something-box{
      margin-left: 24px;
      max-width: 642px;
      box-sizing: border-box;
      border-radius: 10px 40px 40px 40px;
      padding: 20px;
      background: $fifteen-percent-black;
      min-height: 84px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      font-size: $text-normal-size;
      color: #fff;
      .boxss{
          text-align: start;
          .titles{
              padding: 0 40px;
              background: $yellow-gradual-changes;
              border-radius: 60px;
          }
          .nicknames{
              color: #ddc7eb;
          }
          .contents{
              line-height: 60px;
          }
      }
  }
}
</style>

