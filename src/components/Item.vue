<template>
  <li class="item">
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
      post: {}
    };
  },
  async created() {
    let res = await fetch(`${api_host}item/${this.id}.json?print=pretty`);
    let data = await res.json();
    this.post = data;
  },
  methods: {
    millisecondsToStr(milliseconds) {
      // TIP: to find current time in milliseconds, use:
      // var  current_time_milliseconds = new Date().getTime();

      function numberEnding(number) {
        return number > 1 ? "s" : "";
      }

      var temp = Math.floor(milliseconds / 1000);
      var years = Math.floor(temp / 31536000);
      if (years) {
        return years + " year" + numberEnding(years);
      }
      //TODO: Months! Maybe weeks?
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
      return "less than a second"; //'just now' //or other string you like;
    }
  }
};
</script>

<style>
</style>