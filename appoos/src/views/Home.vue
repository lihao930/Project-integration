<template>
  <div class="home">
    <input placeholder="搜索" v-model="value" @keyup.enter="btn"/>
    <div v-for="(item,index) in list" :key="index" class="ps">
      <div class="tu">图片</div>
      <div class="main">
      <p>{{item.nm}}</p>
      <p>{{item.zuo}}</p>
      </div>
      <div class="hou">
        17:00
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'home',
  data(){
    return{
      value:''
    }
  },
  components: {
  },
  computed:{
    list(){
      return store.state.list
    }
  },
  created(){

  },
  methods:{
    btn(){
      store.commit({type:'btn',id:this.value})
    }
  }
}
</script>
<style scoped>
.ps{
  display: flex;
  width: 100%;
  height: 80px;
}
h5{
  margin: 0;
  padding: 0;
}
p{
  margin: 5px 0;
  padding: 0;
}
.tu{
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
.main{
  flex: 1
}
.hou{
  width: 80px;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
</style>
