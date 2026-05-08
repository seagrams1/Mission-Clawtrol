<template>
  <div class="visual-office">
    <h2 class="neon-text">VISUAL OFFICE</h2>
    <div class="agents-grid">
      <div v-for="agent in agents" :key="agent.id" class="agent-desk">
        <div class="pixel-agent" :class="{ working: agent.working }">
          {{ agent.name }}
          <span class="status">{{ agent.working ? '⚡ WORKING' : '💤 IDLE' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agents = ref([
  { id: 1, name: 'Claw-7', working: true },
  { id: 2, name: 'Neon Ghost', working: true },
  { id: 3, name: 'Vortex', working: false }
])
</script>

<style scoped>
.visual-office {
  padding: 20px;
}

.agents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.agent-desk {
  background: #111;
  border: 2px solid #ff00aa;
  padding: 15px;
  text-align: center;
}

.pixel-agent {
  font-size: 1.4rem;
  color: #00ffcc;
}

.working {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
</style>