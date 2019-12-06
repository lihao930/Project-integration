<template>
  <div class="home">
    <header>
      时间戳：{{token}}
      <br />
      默认地址：{{baseUrl}}
    </header>
    <p>
      <input placeholder="用户名" v-model="phone" />
    </p>
    <input placeholder="密码" v-model="pwd" />
    <br />
    <button @click="btn">请求</button>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
      <span>{{delog}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      phone: "",
      pwd: "",
      token: "",
      baseUrl: localStorage.baseUrl,
      delog:'',
      centerDialogVisible:false
    };
  },
  components: {},
  created() {
    this.di();
  },
  methods: {
    btn() {
      axios.post("/list", { phone: this.phone, pwd: this.pwd }).then(res => {
        this.token = new Date() * 1;
        if (res.data.code == 200) {
          this.delog='成功'
          this.centerDialogVisible=true
        } else {
          this.delog=res.data.msg
          this.centerDialogVisible=true
        }
      });
    },
    di() {
      localStorage.baseUrl = "北京";
    }
  }
};
</script>
