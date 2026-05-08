<template>
  <div>
    <h2 class="text-4xl mb-6 tracking-widest text-white neon-text">VISUAL OFFICE</h2>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="agent in agents" :key="agent.id" class="relative bg-black/80 border border-cyan-400/30 rounded-xl p-6 hover:border-pink-500 transition-all">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-2xl font-bold text-white">{{ agent.name }}</div>
            <div class="text-pink-400 text-sm">{{ agent.role }}</div>
          </div>
          <div class="text-5xl">{{ agent.emoji }}</div>
        </div>
        <div class="mt-6 h-3 bg-zinc-900 rounded-full overflow-hidden">
          <div class="h-full bg-emerald-400 transition-all" :style="{ width: agent.activity + '%' }"></div>
        </div>
        <div class="mt-2 text-xs text-emerald-400">{{ agent.status }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agents = ref([
  { id: 1, name: 'Claw-7', role: 'Lead Operator', status: 'WORKING', activity: 92, emoji: '🔥' },
  { id: 2, name: 'Neon', role: 'Data Ghost', status: 'IDLE', activity: 23, emoji: '🌃' },
  { id: 3, name: 'Vortex', role: 'Execution', status: 'ACTIVE', activity: 88, emoji: '⚡' }
])
</script>