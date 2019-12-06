<template>
  <div class="box">
    <div class="bod">
        <router-view/>
    </div>
    <div id="nav">
      <router-link to="/home" tag="span">消息</router-link>
      <router-link to="/about" tag="span">我的</router-link>
      <router-link to="/coo" tag="span">空间</router-link>
    </div>
  </div>
</template>

<style>
.box{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.bod{
  flex: 1;
}
.nav{
  width: 100%;
  height: 50px;
}
#nav>span{
  display: inline-block;
  width: 33%;
  height: 50px;
  text-align: center
}
</style>
