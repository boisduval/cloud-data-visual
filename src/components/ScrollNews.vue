<template>
  <div id="scroll-news">
    <ul :class="{ anim: animate === true }">
      <li
        class="font-small flex-column flex-center"
        v-for="(item, index) in arr"
        :key="index"
      >
        <p>{{ item.Title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScrollNews",
  props: {
    arr: Array
  },
  data() {
    return {
      animate: false,
      timer: ""
    };
  },
  methods: {
    scroll() {
      this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
      setTimeout(() => {
        //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
        this.arr.push(this.arr[0]); // 将数组的第一个元素添加到数组的
        this.arr.shift(); //删除数组的第一个元素
        this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
      }, 500);
    }
  },
  created() {
    if (this.arr.length > 6) {
      this.timer = setInterval(this.scroll, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    arr: function(newArr, oldArr) {
      if (newArr <= 6) {
        clearInterval(this.timer);
      } else {
        clearInterval(this.timer);
        this.timer = setInterval(this.scroll, 1000);
      }
    }
  }
};
</script>

<style scoped>
ul li {
  color: #46a6b5;
  cursor: pointer;
}
ul li p {
  width: 100%;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (max-width: 1300px) {
  ul li {
    height: 17px;
  }
  .anim {
    transition: all 0.5s;
    margin-top: -17px;
  }
}
@media screen and (min-width: 1300px) {
  ul li {
    height: 19px;
  }
  .anim {
    transition: all 0.5s;
    margin-top: -19px;
  }
}
@media screen and (min-width: 1500px) {
  ul li {
    height: 20px;
  }
  .anim {
    transition: all 0.5s;
    margin-top: -20px;
  }
}
</style>
