<template>
  <ul class="pagination">
    <li @click="prePage">&larr;</li>
    <li>{{`${pages}/${total}`}}</li>
    <li @click="nextPage">&rarr;</li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  name: "Pagination",
  methods: {
    prePage() {
      if (this.pages !== 1) this.$emit("prePage");
    },
    nextPage() {
      if (this.pages !== this.total) this.$emit("nextPage");
    }
  }
};
</script>

<style>
</style>