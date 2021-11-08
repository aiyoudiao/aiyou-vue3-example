<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>

    <br />
    <button @click="toggle">click</button>
    <transition name="fade">
      <h1 v-if="showTitle">你好 Vue3</h1>
    </transition>
  </div>

  <router-view></router-view>

  <!-- <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>
<script setup>
import { ref } from 'vue'
let showTitle = ref(true)
function toggle() {
  showTitle.value = !showTitle.value
}

</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>