<template>
  <div>
    <h2 class="text-4xl mb-6 tracking-widest text-white neon-text">TEAM</h2>
    <div class="space-y-4">
      <div v-for="agent in agents" :key="agent.id" class="flex items-center justify-between bg-black/70 border border-cyan-400/20 p-6 rounded-xl">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center text-3xl">{{ agent.emoji }}</div>
          <div>
            <div class="font-bold text-xl">{{ agent.name }}</div>
            <div class="text-sm text-gray-400">{{ agent.role }}</div>
          </div>
        </div>
        <div class="px-6 py-2 rounded-3xl text-sm" :class="agent.status === 'ACTIVE' ? 'bg-emerald-400 text-black' : 'bg-amber-400 text-black'">
          {{ agent.status }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const agents = ref([
  { id: 1, name: 'Claw-7', role: 'Lead Operator', status: 'ACTIVE', emoji: '🔥' },
  { id: 2, name: 'Neon', role: 'Data Ghost', status: 'IDLE', emoji: '🌃' },
  { id: 3, name: 'Vortex', role: 'Execution', status: 'ACTIVE', emoji: '⚡' }
])
</script>