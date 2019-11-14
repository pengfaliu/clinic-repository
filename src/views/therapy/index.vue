<template>
  <div class="therapy">
    <div class="therapr-content">
      <div v-for="item in items" :key="item.id" class="item">
        <div class="item-img"><img :src="require('@/assets/images/doctor1.png')" alt=""></div>
        <div class="item-content">
          <p>
            <span class="name">姓名：</span>
            <span class="content elli">{{ item.name }}</span>
          </p>
          <p>
            <span class="name">职务：</span>
            <span class="content elli">{{ item.zw }}</span>
          </p>
          <p>
            <span class="name">就职医院：</span>
            <span class="content elli">{{ item.jzyy }}</span>
          </p>
          <p>
            <span class="name">科室：</span>
            <span class="content elli">{{ item.ks }}</span>
          </p>
          <p>
            <span class="name">擅长：</span>
            <span class="content moreelli">{{ item.sc }}</span>
          </p>
          <p>
            <span class="name">咨询费用：</span>
            <span class="content elli">{{ item.zxfy }}元</span>
          </p>
          <p>
            <span class="name">星级评分：</span>
            <span class="content">
              <el-rate
                v-model="item.xjpf"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}分">
              </el-rate>
            </span>
          </p>
        </div>
        <div class="feature">
          <div class="evaluate"><i class="iconfont">&#xe61b;</i> 评价</div>
          <div class="chat"><i class="iconfont">&#xe616;</i> 私聊</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'therapy',
  data () {
    return {
      item: {
        name: '孙文兵',
        zw: '医学博士、主任医师',
        jzyy: '北京朝阳医院京西院区',
        ks: '普通外科',
        sc: '1.肝脏肿瘤的综合治疗；2.胆囊疾患和胆管疾病；3.胰腺疾病；4.脾脏疾病。',
        zxfy: '10',
        xjpf: 4.5
      },
      items: []
    }
  },
  created () {
    for (let i = 0; i < 8; i++) {
      this.item.id = this.items.length
      this.items.push(JSON.parse(JSON.stringify(this.item)))
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #ccc;
.therapy {
  padding: 10px;
  width: 100%;
  height: 100%;
  .therapr-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    padding-top: 1px;
    padding-left: 1px;
    .item {
      width: 278px;
      height: 400px;
      font-size: 0;
      border: 1px solid $border-color;
      margin-left: -1px;
      margin-top: -1px;
      position: relative;
      overflow: hidden;
      .item-img {
        padding: 10px;
        width: 50%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .item-content {
        font-size: 14px;
        padding: 10px 20px;
        width: 100%;
        p {
          display: flex;
          line-height: 20px;
        }
        .name {
          font-weight: bold;
          flex-shrink: 0;
          color: #666;
        }
        .content {
          color: #000;
        }
        .elli {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .moreelli {
          display:-webkit-box;
          overflow:hidden;
          text-overflow:ellipsis;
          -webkit-line-clamp:3;
          -webkit-box-orient:vertical;
        }
      }
      .feature {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(40px);
        width: 100%;
        opacity: 0;
        transition: all 0.2s;
        font-size: 16px;
        height: 50px;
        display: flex;
        background-color: #fff;
        color: #fff;
        cursor: pointer;
        div {
          line-height: 50px;
          text-align: center;
          width: 50%;
          height: 100%;
          transition: all 0.2s;
          &:hover {
            opacity: 0.8;
          }
        }
        .evaluate {
          background-color: #5CBB7A;
        }
        .chat {
          background-color: #409EFF;
        }
      }
      &:hover .feature {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>