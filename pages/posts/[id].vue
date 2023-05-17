<template>
  <div class="container">
    <div class="card shadow-sm">
      <img
        :src="post.image"
        :alt="post.preview"
        @error="
          ($event) => {
            $event.target.src = './images/nofoto.png';
          }
        "
      />
      <div class="card-body">
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-text">{{ post.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-body-secondary">{{
            dateFormat(new Date(post.createdAt))
          }}</small>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { usePost } from "~/composables/usePost";

const route = useRoute();
const post = await usePost(String(route.params.id));

const dateFormat = (date) => {
  try {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Intl.DateTimeFormat("ru-RU", options).format(date);
  } catch (e) {
    console.log(e);
    return "-";
  }
};
</script>
