<template>
  <div class="mic-state-container">
       <img v-if="micState" class="mic" src="@/assets/icons/mic_turn_on.png">
      <img v-else class="mic" src="@/assets/icons/mic_turn_off.png">
  </div>
</template>

<script>
export default {
    props:{
        micState:Boolean
    }
}
</script>

<style lang="scss" scoped>
    .mic-state-container{
        width: 60px;
        height: 48px;
        background: $mic-state-btn-online;
        border-radius: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        .mic{
            display: block;
            width: 24px;
        }
    }
</style>