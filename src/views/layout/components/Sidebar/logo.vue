<template>
  <div class="logo">
    <router-link to="/main">
      <div :style="sidebar.opened ? 'opacity: 1' : 'opacity: 0'">
        <el-image
          style="height: 100%"
          fit="contain"
          :src="logo2"></el-image>
      </div>
      <div :style="sidebar.opened ? 'opacity: 0' : 'opacity: 1'">
        <el-image
          style="height: 100%"
          fit="contain"
          :src="logo1"></el-image>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import logo1 from '@/assets/images/YWHK1.png'
import logo2 from '@/assets/images/YWHK2.png'
// import logo1 from '@/assets/images/LOGO.png'
// import logo2 from '@/assets/images/LOGO2.png'
export default {
  name: 'logo',
  computed: {
    ...mapGetters(['sidebar'])
  },
  data () {
    return {
      logo1,
      logo2
    }
  }
}
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #007aff;
  // background-color: rgb(153, 204, 51);
  background-color: #f5f5f5;
  overflow: hidden;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 2px -1px #eee;
  position: relative;
  div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: all 0.3s;
  }
}
</style>