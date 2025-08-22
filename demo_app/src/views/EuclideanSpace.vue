<template>
  <div class="euclidean-space-view">
    <HomeButton />
    
    <div class="container py-8">
      <div class="space-header text-center mb-8">
        <h1>Euclidean Space (ℝⁿ)</h1>
        <p class="space-subtitle">
          The foundation of classical geometry and the everyday intuitive understanding of space.
        </p>
      </div>

      <div class="content-grid grid grid-cols-1 lg:grid-cols-2">
        <!-- Diagram Section -->
        <div class="diagram-section">
          <div class="card">
            <h2>Interactive Diagram</h2>
            <div class="diagram-container">
              <svg width="100%" height="400" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="euclideanBackground" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--primary-50);stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:var(--secondary-50);stop-opacity:0.8" />
                  </linearGradient>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--neutral-300)" stroke-width="0.5"/>
                  </pattern>
                </defs>
                
                <!-- Background with grid -->
                <rect width="400" height="400" fill="url(#euclideanBackground)"/>
                <rect width="400" height="400" fill="url(#grid)"/>
                
                <!-- Coordinate axes -->
                <line x1="50" y1="350" x2="350" y2="350" stroke="var(--neutral-700)" stroke-width="2" marker-end="url(#arrowhead)"/>
                <line x1="50" y1="350" x2="50" y2="50" stroke="var(--neutral-700)" stroke-width="2" marker-end="url(#arrowhead)"/>
                
                <!-- Arrow markers -->
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--neutral-700)" />
                  </marker>
                </defs>
                
                <!-- Parallel lines demonstration -->
                <g class="parallel-lines">
                  <line x1="100" y1="300" x2="300" y2="200" stroke="var(--primary-600)" stroke-width="3"/>
                  <line x1="120" y1="320" x2="320" y2="220" stroke="var(--primary-600)" stroke-width="3"/>
                  <text x="210" y="240" text-anchor="middle" font-size="14" fill="var(--primary-800)">Parallel Lines</text>
                  <text x="210" y="255" text-anchor="middle" font-size="12" fill="var(--neutral-600)">Never intersect</text>
                </g>
                
                <!-- Triangle with angle measurements -->
                <g class="triangle-demo">
                  <polygon points="150,150 250,150 200,100" fill="var(--accent-100)" stroke="var(--accent-600)" stroke-width="2"/>
                  
                  <!-- Angle markers -->
                  <circle cx="150" cy="150" r="2" fill="var(--accent-600)"/>
                  <circle cx="250" cy="150" r="2" fill="var(--accent-600)"/>
                  <circle cx="200" cy="100" r="2" fill="var(--accent-600)"/>
                  
                  <!-- Angle labels -->
                  <text x="160" y="145" font-size="12" fill="var(--accent-700)">60°</text>
                  <text x="235" y="145" font-size="12" fill="var(--accent-700)">60°</text>
                  <text x="195" y="95" font-size="12" fill="var(--accent-700)">60°</text>
                  
                  <text x="200" y="180" text-anchor="middle" font-size="12" fill="var(--neutral-600)">
                    Sum of angles = 180°
                  </text>
                </g>
                
                <!-- Distance measurement -->
                <g class="distance-demo">
                  <circle cx="100" cy="80" r="4" fill="var(--secondary-600)"/>
                  <circle cx="180" cy="80" r="4" fill="var(--secondary-600)"/>
                  <line x1="100" y1="80" x2="180" y2="80" stroke="var(--secondary-600)" stroke-width="2"/>
                  <text x="140" y="70" text-anchor="middle" font-size="12" fill="var(--secondary-700)">
                    d = √[(x₂-x₁)² + (y₂-y₁)²]
                  </text>
                </g>
                
                <!-- Labels -->
                <text x="360" y="365" font-size="14" fill="var(--neutral-700)">x</text>
                <text x="35" y="45" font-size="14" fill="var(--neutral-700)">y</text>
              </svg>
            </div>
          </div>
        </div>

        <!-- Information Section -->
        <div class="info-section space-y-6">
          <div class="card">
            <h2>Defining postulates</h2>
            <div class="properties-list space-y-4">
              <div class="property-item">
                <h3>Flat Geometry</h3>
                <p>Euclidean space is perfectly flat, meaning it has zero curvature everywhere. This results in the familiar geometric properties we learn in school.</p>
              </div>
              
              <div class="property-item">
                <h3>Parallel Postulate</h3>
                <p>Through any point not on a line, there exists exactly one parallel line. Parallel lines never intersect and maintain constant distance.</p>
              </div>
              
              <div class="property-item">
                <h3>Triangle Angle Sum</h3>
                <p>The sum of interior angles in any triangle always equals exactly 180° (π radians).</p>
              </div>
              
              <div class="property-item">
                <h3>Distance Formula</h3>
                <p>Distance between two points follows the Pythagorean theorem: d = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]</p>
              </div>
            </div>
          </div>

          <div class="card">
            <h2>Mathematical Foundation</h2>
            <div class="space-y-4">
              <p>
                <strong>Euclidean space</strong> is the fundamental space of classical geometry, first formalized by the ancient Greek mathematician Euclid around 300 BCE. It represents our intuitive understanding of physical space and forms the foundation for much of mathematics and physics.
              </p>
              
              <p>
                In <strong>n-dimensional Euclidean space (ℝⁿ)</strong>, we can define:
              </p>
              
              <ul class="mathematical-list">
                <li><strong>Points:</strong> Represented by coordinates (x₁, x₂, ..., xₙ)</li>
                <li><strong>Lines:</strong> Shortest paths between two points</li>
                <li><strong>Planes:</strong> Flat surfaces extending infinitely in all directions</li>
                <li><strong>Angles:</strong> Measured using the dot product of vectors</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <h2>Applications</h2>
            <div class="applications-grid grid grid-cols-1 space-y-4">
              <div class="application-item">
                <h3>Topology</h3>
                <p>Euclidean vector space is a finite-dimensional inner product space over the real numbers. 
                  Commonly defined as ℝⁿ or ℝ x ℝ x ... x ℝ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeButton from '../components/HomeButton.vue'
</script>

<style scoped>
.euclidean-space-view {
  min-height: 100vh;
  padding-top: 6rem;
}

.space-header {
  margin-bottom: 3rem;
}

.space-subtitle {
  font-size: 1.25rem;
  color: var(--neutral-600);
  max-width: 600px;
  margin: 0 auto;
}

.content-grid {
  gap: 3rem;
}

.diagram-section {
  top: 2rem;
  height: fit-content;
}

.diagram-container {
  margin-top: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
}

.property-item, .application-item {
  padding: 1rem;
  border-left: 4px solid var(--primary-200);
  background: var(--primary-25);
  border-radius: 0 0.5rem 0.5rem 0;
}

.mathematical-list {
  list-style: none;
  padding: 0;
}

.mathematical-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--neutral-200);
}

.mathematical-list li:last-child {
  border-bottom: none;
}

@media (max-width: 1024px) {
  .diagram-section {
    position: static;
  }
  
  .euclidean-space-view {
    padding-top: 4rem;
  }
}
</style>