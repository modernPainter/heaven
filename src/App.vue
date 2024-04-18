<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">test</router-link>
  </div>
  <el-button type="primary" @click="jumpTest2">Primary</el-button>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive :include="keepaliveRoutes">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import { useRouter, useRoute, RouteRecordRaw } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
const router = useRouter();

const keepaliveRoutes = computed(() => {
  // 根据路由的meta属性决定是否缓存
  if (route.meta && route.meta.keepAlive) {
    // 如果当前路由需要被缓存，则返回当前组件的name
    console.log(route.name);
    return route.name;
  }
  return null;
});

const jumpTest2 = () => {
  const getPerson = store.getters.getPerson;
  console.log(getPerson.age);
  store.dispatch("setAgeGrow", 18);
  // router.push({ path: "/test2" });
};
</script>
<style scoped lang="ts"></style>
