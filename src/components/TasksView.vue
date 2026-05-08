<template>
  <div>
    <h2 class="text-4xl mb-6 tracking-widest text-white neon-text">TASKS</h2>
    <div class="space-y-4">
      <div v-for="task in tasks" :key="task.id" class="bg-black/70 border border-cyan-400/20 p-6 rounded-xl flex justify-between items-center">
        <div>
          <div class="font-medium text-lg">{{ task.title }}</div>
          <div class="text-xs text-cyan-300">Assigned to: {{ task.assignee }}</div>
        </div>
        <div class="px-5 py-1.5 rounded-3xl text-sm font-medium" :class="task.status === 'In Progress' ? 'bg-pink-500 text-white' : 'bg-emerald-400 text-black'">
          {{ task.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  { id: 1, title: 'Analyze user intent patterns', assignee: 'Claw-7', status: 'In Progress' },
  { id: 2, title: 'Update daily memory log', assignee: 'Neon', status: 'Pending' },
  { id: 3, title: 'Optimize coordination protocols', assignee: 'Vortex', status: 'Completed' }
])
</script>