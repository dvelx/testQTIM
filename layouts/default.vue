<template>
  <header
    class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom container"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      <span class="fs-4">Andrei Gorbunov</span>
    </a>

    <ul class="nav nav-pills">
      <NuxtLink to="/">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Home</a>
        </li>
      </NuxtLink>
    </ul>
  </header>

  <main>
    <slot />
  </main>

  <footer id="colophon" class="site-footer">
    <div class="container">
      <h1
        style="
          font-family: Herr Von Muellerhoff;
          color: #ccc;
          font-weight: 300;
          text-align: center;
          margin-bottom: 0;
          margin-top: 0;
          line-height: 1.4;
          font-size: 46px;
        "
      >
        Andrei Gorbunov
      </h1>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<style>
.container {
  max-width: 1400px;
  margin: 0 auto;
}
a {
  text-decoration: none;
}
</style>
