<template>
  <div>
    <router-link to="/" class="back">></router-link>
    <h1>搜索 页面</h1>
    <input type="search" 
      class="searchInput"
      v-model="searchVal" 
      @input='onInput'
      placeholder="请输入"
      >
    <ul class="box">
      <li 
        class="searchList"
        v-for="item in searchResult" 
        :key="item.id" style="margin: 20px 0px;"
        @click="play(item.id, item.name, item.artists[0].name)"
      >
      <img v-lazy="item.artists[0].img1v1Url" alt="">
       {{ `${item.name} -- ${item.artists[0].name}` }}
       </li>

    </ul>
  </div>
</template>

<script>
// 引入 axios
import { getSearchResult, } from '@/api/home'

export default {
  name: 'SearchPage',
  data () {
    return {
      // input 的数据
      searchVal: '',
      // 搜索结果列表
      searchResult: []
    }
  },

  methods: {
    // 输入框输入执行的 fn
    onInput() {
      if (this.searchVal) {
        clearTimeout(this.searchTimer)
        this.searchTimer = setTimeout(() => {
          this.getSearchResult(this.searchVal)
        },500)
      }
    },

    // 获取搜索结果
    getSearchResult (val) {
      getSearchResult(val).then(res => {
        this.searchResult = res.result.songs
      })
    },

    // 携带歌曲id进入 私人FM页面
    play(id, title, singer) {
      this.$router.push(`/home/find?id=${id}&title=${title}&singer=${singer}`)
    }
  },
}
</script>

<style lang='scss' scoped>
.back {
  width: 50px;
  height: 50px;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  float: left;
  display: block;
  transform: rotateY(180deg);
}
h1 {
    float: left;
    margin-left: 20px;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
}
.searchInput {
  width: 95%;
  height: 40px;
  margin: 0px 10px;
  box-sizing: border-box;
}
.box {
  height: 587px;
  overflow-y: scroll;
}
.searchList {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>