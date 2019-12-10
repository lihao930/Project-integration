<template>
  <div class="home">
    <div class="box">
      <p v-if="data">{{data.nm}}</p>
      <div v-if="data">
        <span v-for="(item,index) in data.children" :key="index">
          <span
            @click="btn(index,item.xuan)"
            :class="[{'blue':index==data.dui&&falg},{'active':currindex==index}]"
          ></span>
          {{item.lim}}
        </span>
      </div>
    </div>

    <p>
      <button>上一题</button>
      <button>提交</button>
      <button>下一题</button>
    </p>
    <span>{{dang+1}}/{{len}}</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data", "len"],
  data() {
    return {
      currindex: 10,
      dang: 0,
      falg: false
    };
  },
  methods: {
    btn(indexs, xuan) {
      this.currindex = indexs;
      this.falg = true;
      setTimeout(() => {
        axios({ url: "/oot?id=" + xuan }).then(res => {
          console.log(res.data);
        });
        let os = Number(this.$route.params.id) + 1;
        this.dang = os;
        if (os < 5) {
          this.$router.push(`/about/${os}`);
          this.currindex = 10;
        } else {
          this.$router.push("/wan");
        }
        this.falg = false;
      }, 1000);
    }
  }
};
</script>

<style>
</style>