<template>
  <div class="home">
      <p>姓名：{{name}}</p>
      答题完毕
      <span v-for="(item,index) in lisst" :key="index" class="sss">
          {{index+1}}、{{item}}
      </span>
      正确答案 
      <span v-for="(item,index) in ooo" :key="index+10" class="sss">
          {{index+1}}、{{btbt[item]}}
      </span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            lisst:[],
            name:localStorage.name,
            btbt:['A','B','C','D'],
            ooo:[]
        }
    },
    created(){
        axios({url:"/xuan"}).then(res=>{
           this.lisst=res.data.lisst
           this.ooo=res.data.ooo
        })
    }
}
</script>

<style>
.sss{
    margin-right: 15px
}
</style>