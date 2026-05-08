<template>
  <div class="mission-clawtrol">
    <header>
      <h1>MISSION CLAWTROL</h1>
    </header>

    <div class="main-container">
      <!-- Vertical Sidebar -->
      <nav class="sidebar">
        <button @click="currentView = 'visual-office'" :class="{ active: currentView === 'visual-office' }">
          📟 Visual Office
        </button>
        <button @click="currentView = 'team'" :class="{ active: currentView === 'team' }">
          👥 Team
        </button>
        <button @click="currentView = 'tasks'" :class="{ active: currentView === 'tasks' }">
          ✅ Tasks
        </button>
      </nav>

      <main class="content">
        <VisualOffice v-if="currentView === 'visual-office'" />
        <TeamView v-else-if="currentView === 'team'" />
        <TasksView v-else-if="currentView === 'tasks'" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VisualOffice from './components/VisualOffice.vue'
import TeamView from './components/TeamView.vue'
import TasksView from './components/TasksView.vue'

const currentView = ref('visual-office')
</script>

<style scoped>
.mission-clawtrol {
  background: #0a0a0a;
  color: #00ffcc;
  min-height: 100vh;
  font-family: monospace;
}

.sidebar {
  background: #111;
  border-right: 3px solid #ff00aa;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 220px;
}

button {
  background: transparent;
  border: 2px solid #00ffcc;
  color: #00ffcc;
  padding: 16px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
  text-shadow: 0 0 10px #00ffcc;
}

button:hover, button.active {
  background: #ff00aa;
  color: white;
  box-shadow: 0 0 20px #ff00aa;
  transform: scale(1.05);
}
</style>