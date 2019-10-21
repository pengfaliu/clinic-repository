<template>
  <div class="tagsView">
    <el-scrollbar>
      <ul>
        <li class="tags-li" v-for="(item,index) in tagsList" :style="isActive(item.path) ? 'color: #fff;border: 1px solid ' + skin.name + ';background-color:' + skin.name : ''" :key="index">
          <router-link :to="item.path" class="tags-li-title" :style="isActive(item.path) ? 'color:#fff' : ''">
            {{item.title}}
          </router-link>
          <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
        </li>
      </ul>
    </el-scrollbar>
    <!-- 其他操作按钮 -->
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TagsView',
  data() {
    return {
      tagsList: []
    }
  },
  computed: {
    ...mapGetters(['skin']),
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  watch: {
    // 对router进行监听，每当访问router时，对tags的进行修改
    $route(newValue) {
      this.setTags(newValue);
    }
  },
  created() {
    // 第一次进入页面时，修改tag的值
    this.setTags(this.$route);
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTags(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push('/');
      }
    },
    // 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push('/main');
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      })
      this.tagsList = curItem;
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      })
      !isExist && this.tagsList.push({
        title: route.meta.title,
        path: route.path,
        name: route.name
      })
    },
    // 当关闭所有页面时隐藏
    handleTags(command) {
      command === 'other' ? this.closeOther() : this.closeAll();
    }
  }
}
</script>

<style scoped lang="scss">
.tagsView {
  height: 30px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 2px -1px #eee;
  flex-shrink: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .el-scrollbar {
    width: calc(100% - 50px);
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .tags-li {
    flex-shrink: 0;
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    overflow: hidden;
    cursor: pointer;
    height: 23px;
    line-height: 22px;
    border: 1px solid #e9eaec;
    background: #fff;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #666;
    a {
      text-decoration: none;
    }
  }

  .tags-li:not(.active):hover {
    background: #f8f8f8;
  }

  .tags-li-title {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #666;
  }

  .tags-li.active {
    color: #fff;
    border: 1px solid #409eff;
    background-color:#409eff;
  }

  .tags-li.active .tags-li-title {
    color: #fff;
  }

  .tags-close-box {
    flex-shrink: 0;
    text-align: center;
    z-index: 10;
  }
}
</style>
<style>
.tagsView .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>