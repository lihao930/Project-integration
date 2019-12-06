<template>
  <div class="app">
    <div class="main">
      <router-view />
    </div>
    <div class="nav">
      <router-link to="/">首页</router-link>|
      <router-link to="/about">我的</router-link>
    </div>
  </div>
</template>

<style>
.app{
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.main{
  flex: 1
}
.nav{
  width: 100%;
  height: 50px;
}
</style>
