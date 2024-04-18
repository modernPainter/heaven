<template>
  <div class="box">
    <p>{{ result.num }}</p>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <el-button type="primary" @click="test">Primary</el-button>
  </div>
</template>
<script setup lang="ts" name="home">
import {
  computed,
  nextTick,
  reactive,
  ref,
  watch,
  watchEffect,
  onMounted,
  onUnmounted,
} from "vue";
//const props = defineProps<{ msg: string }>();
const name = ref<string>("56");
const input = ref("");
const ctrl = reactive({
  url: "" as string,
  num: 26000 as number,
});

const emit = defineEmits(["change"]);

const result = computed(() => {
  return {
    num: ctrl.num * 2,
  };
});
// watch(
//   () => props.msg,
//   (newValue, oldValue) => {

//   }
// );

watch(
  [name, () => ctrl.url],
  (newValue, oldValue) => {

  },
  {
    immediate: true,
  }
);

watchEffect(() => {});

function test() {
  name.value = "加油！";
  emit("change", name.value, name.value + "时来运转", name.value + "否极泰来");
}

function dealData() {
  console.log(ctrl.url);
}

onMounted(() => {
  nextTick(() => {
  //  console.log(ctrl.url);
  });
});

onUnmounted(() => {});

defineExpose({
  onOk() {
    return dealData();
  },
  test,
});
</script>
<style scoped lang="scss">
.box {
  .color1 {
    color: $bg-color;
  }
}
</style>
