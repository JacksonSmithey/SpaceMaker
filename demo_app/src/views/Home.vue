<template>
  <div class="home-view">
    <div class="container py-12">
      <div class="text-center mb-8">
        <h1>Mathematical Spaces Explorer</h1>
        <p class="subtitle">
          Discover the fascinating world of mathematical spaces through interactive exploration and visual learning.
        </p>
      </div>

      <div class="selector-section">
        <div class="card selector-card">
          <SpaceSelector />
          
          <div class="space-grid grid grid-cols-1 md:grid-cols-2 mt-8">
            <div class="space-preview-card">
              <h3>Euclidean Space</h3>
              <div class="preview-diagram">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <defs>
                    <linearGradient id="euclideanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:var(--primary-200);stop-opacity:0.8" />
                      <stop offset="100%" style="stop-color:var(--primary-400);stop-opacity:0.3" />
                    </linearGradient>
                  </defs>
                  
                  <!-- Grid lines -->
                  <g stroke="var(--primary-300)" stroke-width="1" opacity="0.6">
                    <line v-for="i in 8" :key="'h' + i" :x1="20" :y1="20 + i * 15" :x2="180" :y2="20 + i * 15" />
                    <line v-for="i in 10" :key="'v' + i" :x1="20 + i * 16" :y1="20" :x2="20 + i * 16" :y2="140" />
                  </g>
                  
                  <!-- Flat plane representation -->
                  <rect x="20" y="20" width="160" height="120" fill="url(#euclideanGrad)" stroke="var(--primary-600)" stroke-width="2"/>
                  
                  <!-- Points and lines -->
                  <circle cx="60" cy="60" r="3" fill="var(--accent-600)"/>
                  <circle cx="140" cy="100" r="3" fill="var(--accent-600)"/>
                  <line x1="60" y1="60" x2="140" y2="100" stroke="var(--secondary-600)" stroke-width="2"/>
                  
                  <text x="100" y="155" text-anchor="middle" font-size="12" fill="var(--neutral-600)">Flat Geometry</text>
                </svg>
              </div>
              <p class="preview-description">
                The familiar flat space where parallel lines never meet and the sum of triangle angles equals 180°.
              </p>
            </div>

            <div class="space-preview-card">
              <h3>Elliptical Space</h3>
              <div class="preview-diagram">
                <svg width="200" height="150" viewBox="0 0 200 150">
                  <defs>
                    <radialGradient id="ellipticalGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style="stop-color:var(--secondary-200);stop-opacity:0.8" />
                      <stop offset="100%" style="stop-color:var(--secondary-500);stop-opacity:0.3" />
                    </radialGradient>
                  </defs>
                  
                  <!-- Curved surface (sphere representation) -->
                  <ellipse cx="100" cy="75" rx="70" ry="45" fill="url(#ellipticalGrad)" stroke="var(--secondary-600)" stroke-width="2"/>
                  
                  <!-- Great circles -->
                  <ellipse cx="100" cy="75" rx="70" ry="45" fill="none" stroke="var(--primary-400)" stroke-width="1.5" opacity="0.7"/>
                  <ellipse cx="100" cy="75" rx="35" ry="45" fill="none" stroke="var(--primary-400)" stroke-width="1.5" opacity="0.7"/>
                  
                  <!-- Points on the sphere -->
                  <circle cx="80" cy="60" r="3" fill="var(--accent-600)"/>
                  <circle cx="120" cy="90" r="3" fill="var(--accent-600)"/>
                  
                  <!-- Curved line between points -->
                  <path d="M80 60 Q100 50 120 90" stroke="var(--secondary-700)" stroke-width="2" fill="none"/>
                  
                  <text x="100" y="155" text-anchor="middle" font-size="12" fill="var(--neutral-600)">Curved Geometry</text>
                </svg>
              </div>
              <p class="preview-description">
                A positively curved space where parallel lines converge and triangle angles sum to more than 180°.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SpaceSelector from '../components/SpaceSelector.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  padding-top: 2rem;
}

.subtitle {
  font-size: 1.25rem;
  color: var(--neutral-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.selector-section {
  max-width: 800px;
  margin: 0 auto;
}

.selector-card {
  text-align: center;
}

.space-grid {
  gap: 2rem;
}

.space-preview-card {
  text-align: center;
  padding: 1.5rem;
  border: 1px solid var(--neutral-200);
  border-radius: 0.75rem;
  background: var(--neutral-50);
  transition: all 0.3s ease;
}

.space-preview-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
}

.preview-diagram {
  margin: 1rem auto;
  display: flex;
  justify-content: center;
}

.preview-description {
  font-size: 0.875rem;
  color: var(--neutral-600);
  line-height: 1.5;
}
</style>