<!-- Tasks View -->
<template>
  <div class="tasks-view">
    <h2 class="neon-text">TASKS</h2>
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-header">
          <span>{{ task.title }}</span>
          <span class="status-badge" :class="task.status">{{ task.status.toUpperCase() }}</span>
        </div>
        <p class="task-desc">{{ task.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, title: 'Monitor memory logs', description: 'Parse latest daily memory file', status: 'in-progress' },
  { id: 2, title: 'Update AGENTS.md', description: 'Sync agent states', status: 'pending' }
])
</script>

<style scoped>
.tasks-view { padding: 20px; }
.task-item {
  background: #0f0f0f;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #00ff88;
}
</style>