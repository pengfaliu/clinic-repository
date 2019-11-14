<template>
  <div class="abstract">
    <div class="pdf">
      <img :src="require('@/assets/images/PDF.png')" alt="">
    </div>
    {{ pageCount }}
    <pdf
      :src="pdfUrl">
    </pdf>
    
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import { test } from '@/api/user'
export default {
  name: 'abstract',
  components: { pdf },
  data () {
    return {
      pdfUrl: 'http://image.cache.timepack.cn/nodejs.pdf',
      currentPage: 0,
      pageCount: 0
    }
  },
  created () {
    this.pdfUrl = pdf.createLoadingTask(this.pdfUrl)
    test().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
.abstract {
  width: 100%;
  height: 100%;
  overflow: auto;
  &>span {
    height: 100%;
    width: 50%;
  }
}
</style>