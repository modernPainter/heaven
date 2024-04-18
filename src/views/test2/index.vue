<template>
  <div class="box">
    <h1 class="color1">{{ msg }}</h1>
    <p>{{ result.num }}</p>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
    <el-button type="primary" @click="test">Primary</el-button>
  </div>
</template>
<script setup lang="ts">
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
const props = defineProps<{ msg: string }>();
import { useRouter } from "vue-router";
const router = useRouter();

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
watch(
  () => props.msg,
  (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
  }
);

watch(
  [name, () => ctrl.url],
  (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
  },
  {
    immediate: true,
  }
);

watchEffect(() => {});

function test() {
  name.value = "加油！";
  emit("change", name.value, name.value + "时来运转", name.value + "否极泰来");
  router.push({ path: "/" });
}

function dealData() {
  console.log(ctrl.url);
}

onMounted(() => {
  nextTick(() => {
    console.log(ctrl.url);
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
