<template>
  <div class="home-button-container">
    <router-link to="/" class="btn btn-secondary">
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Home
    </router-link>
  </div>
</template>

<script setup lang="ts">
// Home button component for navigation
</script>

<style scoped>
.home-button-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
}

.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .home-button-container {
    top: 1rem;
    left: 1rem;
  }
}
</style>