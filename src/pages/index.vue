<template>
  <ul class="list">
    <Items v-for="list in lists" :key="list" :id="list" />
    <pagination @prePage="prePage" @nextPage="nextPage" :pages="pages" :total="total" />
  </ul>
</template>

<script>
import Items from "../components/Item";
import Pagination from "../components/Pagination";
import { pages, api_host } from "./../utils/constants";
export default {
  name: "Home",
  components: {
    Items,
    Pagination
  },
  data: function() {
    return {
      items: [],
      pages: 1
    };
  },
  computed: {
    lists: function() {
      return this.items.slice((this.pages - 1) * 10, this.pages * 10);
    },
    total() {
      return Math.round(this.items.length / 10);
    }
  },
  created() {
    this.fetchNew(`${this.$route.params.category}stories`);
  },
  methods: {
    prePage() {
      --this.pages;
    },
    nextPage() {
      ++this.pages;
    },
    async fetchNew(url) {
      const resrouce = pages.includes(url) ? url : pages[0];
      let res = await fetch(`${api_host}${resrouce}.json?print=pretty`);
      let data = await res.json();
      this.items = data;
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchNew(`${to.params.category}stories`);
    next();
  }
};
</script>
