<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const name = ref<string>("669887");
</script>

<template>
  <div class="box">
    <h1 class="color1">{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </div>
</template>

<style scoped lang="scss">
.box {
  .color1 {
    color: $bg-color;
  }
}
</style>
