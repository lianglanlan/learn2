<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn></Cpn>
  </div>
</template>
<script>
import Cpn from "./Cpn";

export default {
  name: "App",
  components: {
    Cpn,
  },
  data() {
    return {
      message: "hello webpack",
      name: "小明",
    };
  },
  methods: {
    btnClick() {
      console.log(1);
    },
  },
};
</script>
<style scoped>
.title {
  color: green;
}
</style>