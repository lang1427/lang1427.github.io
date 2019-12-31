# lang1427.github.io

**本人的依赖如下，如您在使用过程中，存有疑问，请提 Issues**

- Vue-Cli 3.10.0+
- 关于 Scroll 都使用了 TypeScript (vue-property-decorator)

## Vue 移动端轻量级封装组件库 version 0.9

访问地址 ： (https://lang1427.github.io/doc)

1. GridView
2. Swiper
3. Scroll
4. ScrollNavbar

### 代码片段

**GridView 栅格布局**

```javascript
<template>
  <div class="test">
    <grid-view :cols="3" :v-margin="20">
      <div v-for="item of 6" :key="item">{{ item }}</div>
    </grid-view>
  </div>
</template>

<script>
import GridView from '@/components/gridview/grid-view.vue'
export default {
  name: 'test',
  components: {
    GridView
  },
  data() {
    return {}
  }
}
</script>
```

**Swiper 轮播图**

如果没有看到效果，请给 swiper 设置高度

```javascript
<template>
  <div class="test">
    <swiper>
      <swiper-item v-for="(item,index) of imgArr" :key="index">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/swiper/Swiper.vue";
import SwiperItem from "@/components/swiper/SwiperItem.vue";
export default {
  name: "test",
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      imgArr: [
        "http://p1.music.126.net/fdO3fFWmSUHSeMOLx-DxLA==/109951164581879063.jpg?imageView&quality=89",
        "http://p1.music.126.net/aIFBOy7IzFlcLPQf-ZQJUg==/109951164582112428.jpg?imageView&quality=89",
        "http://p1.music.126.net/VwGUPxVbd-zYABCzTys1_A==/109951164581860385.jpg?imageView&quality=89",
        "http://p1.music.126.net/zZox7T4HqdzoxGJP8leS4A==/109951164581866240.jpg?imageView&quality=89",
        "http://p1.music.126.net/InF2NLVzcuDP8xzbHAYd9A==/109951164581677405.jpg?imageView&quality=89"
      ]
    };
  }
};
</script>
```

**Scroll**

- 依赖于 better-scroll 插件 _推荐版本_ 1.13.2
- 安装 better-scroll 与 @types/better-scroll

> npm install better-scroll@1.13.2 -S
> npm install @types/better-scroll

```javascript
<template>
  <div class="test">
    <scroll class="scroll-wrapper" :probeType="3" @scroll="scroll">
      <div>
        <ul>
          <li v-for="item of 100" :key="item">{{ item }}</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/scroll/scroll.vue";
export default {
  name: "test",
  components: {
    Scroll
  },
  methods: {
    scroll(position) {
      console.log(position);
    }
  }
};
</script>

<style  scoped>
.scroll-wrapper {
  width: 100vw;
  height: 300px;
  overflow: hidden;
  background-color: orange;
}
</style>
```

**ScrollNavbar**

依赖于 scroll 组件

```javascript
<template>
  <div class="test">
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

<script>
import Navbar from '@/components/scrollNavBar/scroll-nav-bar.vue'
export default {
  name: 'test',
  components: {
    Navbar
  },
  data() {
    return {
      title: [
        '星期天',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ]
    }
  },
  methods: {
    activeItem(index) {
      console.log(index)
    }
  }
}
</script>
```
