<template>
  <div class="lyric">
    <div class="box">
      <p class="txt">DHWAIDJILAWJDAWJ</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lyric',
  data() {
    return  {
      showLyric: []
    }
  },

  props: {
    lyric: {
      type: String,
      required: true
    }
  },

  watch: {
    lyric(newVal, oldVal) { 
      console.log(oldVal);
      console.log(newVal);
      
    }
  }

}
</script>

<style lang="scss" scoped>
.lyric {
  width: 335px;
  overflow: hidden;
  .box {
    width: 350px;
    height: 480px;
    overflow-y: scroll;
    padding: 222px 0px;
    box-sizing: border-box;
    p {
      width: 335px;
      text-align: center;
      color: #fff;
      margin: 10px 0px;
      font-size: 16px;
    }
  }
}
</style>