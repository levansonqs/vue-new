<template>
  <transition name="fade">
    <li class="item" v-if="!loading">
      <div class="item-wrapper">
        <div class="item-score">{{post.score}}</div>
        <div class="item-content">
          <h1 class="item-title">{{post.title}}</h1>
          <p>
            <span>by</span>
            <router-link to="/">{{post.by}}</router-link>
            {{millisecondsToStr(post.time)}}
            <router-link to="/">{{post.descendants}} comments</router-link>
          </p>
        </div>
      </div>
    </li>
  </transition>
</template>

<script>
import { api_host } from "../utils/constants";
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      post: {},
      loading: true
    };
  },
  async created() {
    let res = await fetch(`${api_host}item/${this.id}.json?print=pretty`);
    let data = await res.json();
    this.loading = false;
    this.post = data;
  },
  methods: {
    millisecondsToStr(milliseconds) {
      function numberEnding(number) {
        return number > 1 ? "s" : "";
      }

      var temp = Math.floor(milliseconds / 1000);
      var years = Math.floor(temp / 31536000);
      if (years) {
        return years + " year" + numberEnding(years);
      }
      var days = Math.floor((temp %= 31536000) / 86400);
      if (days) {
        return days + " day" + numberEnding(days);
      }
      var hours = Math.floor((temp %= 86400) / 3600);
      if (hours) {
        return hours + " hour" + numberEnding(hours);
      }
      var minutes = Math.floor((temp %= 3600) / 60);
      if (minutes) {
        return minutes + " minute" + numberEnding(minutes);
      }
      var seconds = temp % 60;
      if (seconds) {
        return seconds + " second" + numberEnding(seconds);
      }
      return "less than a second";
    }
  }
};
</script>
