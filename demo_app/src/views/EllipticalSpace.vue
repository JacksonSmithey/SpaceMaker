<template>
  <div class="elliptical-space-view">
    <HomeButton />
    
    <div class="container py-8">
      <div class="space-header text-center mb-8">
        <h1>Elliptical Space</h1>
        <p class="space-subtitle">
          A positively curved space where geometry defies our everyday intuition
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
                  <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
                    <stop offset="0%" style="stop-color:var(--secondary-100);stop-opacity:1" />
                    <stop offset="70%" style="stop-color:var(--secondary-300);stop-opacity:0.8" />
                    <stop offset="100%" style="stop-color:var(--secondary-600);stop-opacity:0.6" />
                  </radialGradient>
                  <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:var(--neutral-400);stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:var(--neutral-600);stop-opacity:0.1" />
                  </linearGradient>
                </defs>
                
                <!-- Shadow/base -->
                <ellipse cx="200" cy="350" rx="80" ry="20" fill="url(#shadowGrad)"/>
                
                <!-- Main sphere representation -->
                <circle cx="200" cy="200" r="120" fill="url(#sphereGrad)" stroke="var(--secondary-700)" stroke-width="2"/>
                
                <!-- Great circles (longitude lines) -->
                <ellipse cx="200" cy="200" rx="120" ry="120" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                <ellipse cx="200" cy="200" rx="60" ry="120" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                <ellipse cx="200" cy="200" rx="30" ry="120" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                
                <!-- Great circles (latitude lines) -->
                <ellipse cx="200" cy="200" rx="120" ry="40" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                <ellipse cx="200" cy="200" rx="120" ry="70" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                <ellipse cx="200" cy="200" rx="120" ry="100" fill="none" stroke="var(--primary-400)" stroke-width="2" opacity="0.7"/>
                
                <!-- Triangle on sphere surface -->
                <g class="spherical-triangle">
                  <path d="M 200 80 Q 280 140 240 240 Q 200 280 160 240 Q 120 140 200 80" 
                        fill="var(--accent-100)" 
                        stroke="var(--accent-600)" 
                        stroke-width="3" 
                        opacity="0.8"/>
                  
                  <!-- Vertices -->
                  <circle cx="200" cy="80" r="4" fill="var(--accent-700)"/>
                  <circle cx="240" cy="240" r="4" fill="var(--accent-700)"/>
                  <circle cx="160" cy="240" r="4" fill="var(--accent-700)"/>
                  
                  <!-- Angle labels -->
                  <text x="200" y="95" text-anchor="middle" font-size="12" fill="var(--accent-800)" font-weight="bold">75°</text>
                  <text x="250" y="235" text-anchor="middle" font-size="12" fill="var(--accent-800)" font-weight="bold">75°</text>
                  <text x="150" y="235" text-anchor="middle" font-size="12" fill="var(--accent-800)" font-weight="bold">75°</text>
                  
                  <text x="200" y="270" text-anchor="middle" font-size="12" fill="var(--accent-700)">
                    Sum of angles = 225° > 180°
                  </text>
                </g>
                
                <!-- "Parallel" lines that meet -->
                <g class="converging-lines">
                  <path d="M 120 150 Q 200 120 280 150" stroke="var(--secondary-600)" stroke-width="3" fill="none"/>
                  <path d="M 120 180 Q 200 130 280 180" stroke="var(--secondary-600)" stroke-width="3" fill="none"/>
                  
                  <!-- Convergence point indicator -->
                  <circle cx="200" cy="125" r="3" fill="var(--secondary-800)"/>
                  <text x="200" y="115" text-anchor="middle" font-size="10" fill="var(--secondary-800)">
                    Lines converge
                  </text>
                </g>
                
                <!-- Distance illustration -->
                <g class="geodesic">
                  <circle cx="150" cy="160" r="3" fill="var(--primary-700)"/>
                  <circle cx="250" cy="160" r="3" fill="var(--primary-700)"/>
                  <path d="M 150 160 Q 200 140 250 160" stroke="var(--primary-700)" stroke-width="2" fill="none"/>
                  <text x="200" y="135" text-anchor="middle" font-size="10" fill="var(--primary-800)">
                    Shortest path (geodesic)
                  </text>
                </g>
                
                <!-- Labels and annotations -->
                <text x="200" y="30" text-anchor="middle" font-size="16" fill="var(--neutral-800)" font-weight="bold">
                  Elliptical (Spherical) Geometry
                </text>
                
                <text x="50" y="380" font-size="12" fill="var(--neutral-600)">
                  • No parallel lines exist
                </text>
                <text x="250" y="380" font-size="12" fill="var(--neutral-600)">
                  • All lines intersect
                </text>
              </svg>
            </div>
          </div>
        </div>

        <!-- Information Section -->
        <div class="info-section space-y-6">
          <div class="card">
            <h2>Key Properties</h2>
            <div class="properties-list space-y-4">
              <div class="property-item">
                <h3>Positive Curvature</h3>
                <p>Elliptical space has constant positive curvature, like the surface of a sphere. This curvature causes all the unique geometric properties.</p>
              </div>
              
              <div class="property-item">
                <h3>No Parallel Lines</h3>
                <p>In elliptical geometry, there are no parallel lines. Every pair of lines will eventually intersect at two points (antipodal points on the sphere).</p>
              </div>
              
              <div class="property-item">
                <h3>Triangle Angle Sum > 180°</h3>
                <p>The sum of interior angles in any triangle is always greater than 180°. The excess depends on the triangle's area relative to the sphere.</p>
              </div>
              
              <div class="property-item">
                <h3>Geodesic Distance</h3>
                <p>The shortest distance between two points is along a great circle (geodesic), not a straight line as in Euclidean space.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <h2>Mathematical Foundation</h2>
            <div class="space-y-4">
              <p>
                <strong>Elliptical geometry</strong> is one of the three classical non-Euclidean geometries, developed in the 19th century. It represents geometry on surfaces of constant positive curvature, with the 2-sphere being the most familiar example.
              </p>
              
              <p>
                In <strong>elliptical space</strong>, we observe:
              </p>
              
              <ul class="mathematical-list">
                <li><strong>Finite, unbounded space:</strong> Limited area but no boundaries or edges</li>
                <li><strong>Great circles:</strong> All "straight lines" are great circles on the sphere</li>
                <li><strong>Dual intersections:</strong> Any two great circles intersect at exactly two points</li>
                <li><strong>Angular excess:</strong> Triangle angle sum = 180° + (Area/R²) where R is sphere radius</li>
              </ul>
              
              <p>
                The <strong>angle of parallelism</strong> doesn't exist in elliptical geometry, as the parallel postulate is replaced by: "Any two lines intersect."
              </p>
            </div>
          </div>

          <div class="card">
            <h2>Real-World Applications</h2>
            <div class="applications-grid grid grid-cols-1 space-y-4">
              <div class="application-item">
                <h3>Navigation & Cartography</h3>
                <p>Global navigation, great circle routes for aviation and shipping, and map projections all use spherical geometry principles.</p>
              </div>
              
              <div class="application-item">
                <h3>Astronomy & Cosmology</h3>
                <p>Celestial navigation, stellar coordinate systems, and certain cosmological models employ elliptical geometry.</p>
              </div>
              
              <div class="application-item">
                <h3>General Relativity</h3>
                <p>Einstein's theory describes spacetime curvature using non-Euclidean geometries, including elliptical space in certain solutions.</p>
              </div>
              
              <div class="application-item">
                <h3>Crystallography</h3>
                <p>Some crystal structures and molecular arrangements are best described using spherical and elliptical coordinate systems.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <h2>Comparison with Euclidean Space</h2>
            <div class="comparison-table">
              <div class="comparison-row">
                <div class="comparison-label">Parallel Lines</div>
                <div class="euclidean-value">Exactly one through any external point</div>
                <div class="elliptical-value">None exist - all lines intersect</div>
              </div>
              
              <div class="comparison-row">
                <div class="comparison-label">Triangle Angles</div>
                <div class="euclidean-value">Sum = 180°</div>
                <div class="elliptical-value">Sum > 180°</div>
              </div>
              
              <div class="comparison-row">
                <div class="comparison-label">Space</div>
                <div class="euclidean-value">Infinite, flat</div>
                <div class="elliptical-value">Finite, positively curved</div>
              </div>
              
              <div class="comparison-row">
                <div class="comparison-label">Shortest Path</div>
                <div class="euclidean-value">Straight line</div>
                <div class="elliptical-value">Great circle arc</div>
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
.elliptical-space-view {
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
  border-left: 4px solid var(--secondary-200);
  background: var(--secondary-25);
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

.comparison-table {
  display: grid;
  gap: 0.5rem;
}

.comparison-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: var(--neutral-50);
  align-items: center;
}

.comparison-label {
  font-weight: 600;
  color: var(--neutral-800);
}

.euclidean-value {
  padding: 0.5rem;
  background: var(--primary-100);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: var(--primary-800);
  text-align: center;
}

.elliptical-value {
  padding: 0.5rem;
  background: var(--secondary-100);
  border-radius: 0.25rem;
  font-size: 0.875rem;
  color: var(--secondary-800);
  text-align: center;
}

@media (max-width: 1024px) {
  .diagram-section {
    position: static;
  }
  
  .elliptical-space-view {
    padding-top: 4rem;
  }
  
  .comparison-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .comparison-row {
    padding: 0.5rem;
  }
  
  .comparison-label {
    font-size: 0.875rem;
  }
  
  .euclidean-value, .elliptical-value {
    font-size: 0.75rem;
  }
}
</style>