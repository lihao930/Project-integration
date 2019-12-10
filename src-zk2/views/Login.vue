<template>
  <div class="home">
      <div class="shu">
          <div>
              <p>请输入您的姓名：</p>
          <input v-model="name"/>
          </div>
      </div>
      <div class="btn">
      <span @click="btn">开始测试</span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods:{
        btn(){
            localStorage.name=this.name
            this.$router.push(`/about/${0}`)
        }
    }
}
</script>

<style>

</style>