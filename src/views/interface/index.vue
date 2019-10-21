<template>
  <div class="interface">
    <!-- <header>接口文档</header> -->
    <div class="container1">
      <div class="item item1">1</div>
      <div class="item item2">2</div>
      <div class="item item3">3</div>
      <div class="item item4">4</div>
      <div class="item item5">5</div>
      <div class="item item6">6</div>
      <div class="item item7">7</div>
      <div class="item item8">8</div>
      <div class="item item9">9</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interface'
}
</script>

<style scoped lang="scss">
.interface {
  width: 100%;
  header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    color: #fff;
    font-size: 16px;
    background-color: #101010;
  }
  .container1 {
    display: grid;
    width: 800px;
    height: 800px;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: repeat(3, 33.33%);
  }
  .item {
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  @for $i from 1 through 9 {
    .item#{$i} {
      background: rgb($i*20, $i*10, $i)
    }
  }
}
</style>