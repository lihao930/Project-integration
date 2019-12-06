<template>
  <div class="home">
    <div class="swp">
      <swiper :options="swiperOption">
        <swiper-slide>1</swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
      <div class="swiper-pagination"></div>
      </swiper>
    </div>
    <div class="bod">
      <dl v-for="(item,index) in list" :key="index">
        <dt>1</dt>
        <dd>{{item.nm}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
      list:[
        {
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        },{
          nm:'成单奖励'
        }
      ],
      swiperOption:{
        pagination:{
          el:'.swiper-pagination'
        },
        loop:true,
        autoplay:true
      }
    }
  },
  components: {
  }
}
</script>
<style scoped>
.swp{
  width: 100%;
  height: 100px;
  overflow: hidden;
  background: #ccc;
  text-align: center;
  line-height: 100px;
}
.bod{
  width: 100%;
  height: 160px;
  margin: 0;
  padding: 0;
}
dl{
  width: 25%;
  text-align: center;
  display: inline-block;
}
dt{
  display: inline-block;
}
dd{
  margin: 0;
  padding: 0;
}
</style>
