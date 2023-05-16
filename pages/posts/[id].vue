<template>
  <div class="container">
      <div class="card shadow-sm">
          <img :src="post.image" :alt="post.preview">
          <div class="card-body">
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="card-text">{{ post.description }}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary">{{ post.createdAt }}</small>
              </div>
          </div>
      </div>
  </div>
</template>
<script setup lang="ts">
  import {usePost} from "~/composables/usePost";

  const route = useRoute()

  const post = await usePost(route.params.id)


</script>
