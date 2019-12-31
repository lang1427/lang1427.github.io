<template>
  <div id="app">
    <navbar :text="title" @changeHandler="activeItem">
      <span slot="星期天">星期天</span>
      <span slot="星期一">星期一</span>
      <span slot="星期二">星期二</span>
      <span slot="星期三">星期三</span>
      <span slot="星期四">星期四</span>
      <span slot="星期五">星期五</span>
      <span slot="星期六">星期六</span>
    </navbar>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/scrollNavBar/scroll-nav-bar.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  title = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  activeItem(index: number) {
    console.log(index)
  }
}
</script>

<style></style>
