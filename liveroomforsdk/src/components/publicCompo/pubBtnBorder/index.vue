<template>
  <div class="contentss">
      <div class="box">
         <span class="textss">{{text}}</span> 
        </div>
  </div>
</template>

<script>
export default {
    props:{
        text:String
    }
}
</script>

<style lang="scss" scoped>
.contentss { 
	width: 100%; 
   	height: 100%; 
    background: $popup-btn-gradual-changes;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 300px;
}
.box { 
	width:calc(100% - 5px); 
    height:calc(100% - 5px); 
    background: white;
    border-radius: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    .textss{
        background: $popup-btn-gradual-changes;
        background-clip: text;
        color: transparent;
        font-weight: bold;
    }
}
</style>