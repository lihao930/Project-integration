<template>
  <div class="home">
    <div class="tou">
      测试你的
    </div>
    <div class="ding"></div>
    <div class="btn">
      <span @click="btn">点击开始</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  methods:{
    btn(){
      this.$router.push('/login')
    }
  }
}
</script>
