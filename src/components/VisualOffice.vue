<!-- Visual Office - Cyberpunk Pixel Art Dashboard -->
<template>
  <div class="visual-office">
    <div class="crt-container">
      <h2 class="neon-text">VISUAL OFFICE</h2>
      <div class="office-grid">
        <div v-for="agent in agents" :key="agent.id" class="agent-desk">
          <div class="pixel-character" :class="{ 'working': agent.isWorking }">
            <!-- Simple pixel-art style character with subtle nudity hint -->
            <div class="character-body"></div>
            <div class="character-head"></div>
          </div>
          <div class="desk-info">
            <p class="agent-name neon-text-small">{{ agent.name }}</p>
            <p class="status" :class="{ 'active': agent.isWorking }">
              {{ agent.isWorking ? 'WORKING' : 'IDLE' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agents = ref([
  { id: 1, name: 'NEXUS', isWorking: true },
  { id: 2, name: 'VOID', isWorking: false },
  { id: 3, name: 'RAVEN', isWorking: true },
  { id: 4, name: 'PHANTOM', isWorking: false }
])
</script>

<style scoped>
.visual-office {
  padding: 20px;
}
.crt-container {
  background: #0a0a0a;
  border: 2px solid #00ffff;
  padding: 15px;
  box-shadow: 0 0 25px #00ffff;
}
.office-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.agent-desk {
  background: #111;
  padding: 15px;
  text-align: center;
  border: 1px solid #ff00ff;
}
.pixel-character {
  width: 80px;
  height: 110px;
  margin: 0 auto 10px;
  background: linear-gradient(#ff00aa, #00ffff);
  position: relative;
  border-radius: 4px;
}
.character-body, .character-head {
  background: #222;
}
.working .pixel-character {
  animation: glow 1.5s infinite alternate;
}
.neon-text {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #ff00ff;
  font-family: monospace;
}
</style>