<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">test</router-link>
  </div>
  <el-button type="primary" @click="jumpTest2">Primary</el-button>
  <router-view v-slot="{ Component, route }">
    <transition>
      <keep-alive>
        <component
          :is="Component"
          v-if="route.meta.keepAlive == true"
          :key="route.path"
          msg="测试"
        />
      </keep-alive>
    </transition>
    <transition>
      <component
        :is="Component"
        v-if="route.meta.keepAlive == false"
        :key="route.path"
        msg="测试"
      />
    </transition>
  </router-view>
  <!-- <keep-alive>
    <router-view v-if="route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view v-if="!route.meta.keepAlive"></router-view> -->
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();

const jumpTest2 = () => {
  router.push({ path: "/test2" });
};
</script>
<style scoped></style>
