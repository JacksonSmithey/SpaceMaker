<template>
  <div class="space-selector">
    <label for="space-dropdown" class="dropdown-label">
      Choose a Mathematical Space:
    </label>
    <select 
      id="space-dropdown" 
      v-model="selectedSpace" 
      @change="navigateToSpace" 
      class="dropdown"
    >
      <option value="">Select a space...</option>
      <option 
        v-for="space in spaces" 
        :key="space.value" 
        :value="space.value"
      >
        {{ space.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedSpace = ref('')

const spaces = [
  { name: 'Euclidean Space', value: 'euclidean' },
  { name: 'Elliptical Space', value: 'elliptical' }
]

const navigateToSpace = () => {
  if (selectedSpace.value) {
    router.push(`/${selectedSpace.value}`)
  }
}
</script>

<style scoped>
.space-selector {
  margin-bottom: 2rem;
}

.dropdown-label {
  display: block;
  font-weight: 600;
  color: var(--neutral-700);
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.dropdown {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 2px solid var(--neutral-200);
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  color: var(--neutral-700);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 3rem;
}

.dropdown:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.dropdown:hover {
  border-color: var(--primary-300);
}
</style>