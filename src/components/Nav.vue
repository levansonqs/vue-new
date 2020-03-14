<template>
  <nav class="nav">
    <div class="nav-content">
      <router-link to="/" class="nav-logo-link">
        <img class="nav-logo" src="/images/computer.svg" />
      </router-link>
      <ul class="nav-link">
        <li v-for="link in links" :key="link.id">
          <router-link :to="link.path">{{link.name}}</router-link>
        </li>
      </ul>
      <div class="nav-right"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      links: [
        { id: 1, name: "Top", path: "/" },
        { id: 2, name: "New", path: "/new" },
        { id: 3, name: "Show", path: "/show" },
        { id: 4, name: "Ask", path: "/ask" },
        { id: 5, name: "Jobs", path: "/jobs" }
      ]
    };
  }
};
</script>

<style>
</style>