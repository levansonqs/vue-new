<template>
  <div id="app">
    <top-nav />
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import TopNav from "./components/Nav";
export default {
  components: { TopNav },
  name: "App"
};
</script>

<style lang="scss"></style>
