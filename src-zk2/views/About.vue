<template>
  <div class="home">
    <QuertionPicker :data="list[this.$route.params.id]" :len="list.length"></QuertionPicker>
  </div>
</template>

<script>
import QuertionPicker from '../components/QuertionPicker'
import axios from 'axios'
export default {
  data(){
    return{
      list:[],
      listitem:[]
    }
  },
  components:{
    QuertionPicker
  },
  created(){
    axios({url:'/list'}).then(res=>{
      this.list=res.data
    })
  }
}
</script>

<style>

</style>