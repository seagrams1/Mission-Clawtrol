<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#00f7ff] font-mono flex">
    <!-- Sidebar -->
    <div class="w-64 bg-black/80 border-r border-[#00f7ff]/30 p-4 flex flex-col">
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-8 bg-[#ff00aa] rounded flex items-center justify-center text-black font-bold text-xl">C</div>
        <h1 class="text-2xl tracking-widest font-bold text-white">MISSION CLAWTROL</h1>
      </div>
      
      <nav class="space-y-1">
        <button @click="currentTab = 'office'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]': currentTab === 'office' }"
                class="w-full text-left px-4 py-3 rounded border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3">
          <span>🖥️</span> Visual Office
        </button>
        <button @click="currentTab = 'team'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]': currentTab === 'team' }"
                class="w-full text-left px-4 py-3 rounded border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3">
          <span>👥</span> Team
        </button>
        <button @click="currentTab = 'tasks'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]': currentTab === 'tasks' }"
                class="w-full text-left px-4 py-3 rounded border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3">
          <span>📋</span> Tasks
        </button>
      </nav>
      
      <div class="mt-auto pt-8 text-xs text-[#00f7ff]/60">
        <div>OPENCLAW v0.1.0</div>
        <div class="text-emerald-400">● LIVE SYNC</div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <div v-if="currentTab === 'office'">
        <h2 class="text-4xl mb-6 tracking-widest text-white">VISUAL OFFICE</h2>
        <div class="grid grid-cols-3 gap-6">
          <div v-for="agent in agents" :key="agent.id" 
               class="bg-black/70 border border-[#00f7ff]/30 rounded-lg p-4 hover:border-[#ff00aa] transition-colors">
            <div class="flex justify-between">
              <div>
                <div class="text-lg font-bold">{{ agent.name }}</div>
                <div class="text-sm text-[#ff00aa]">{{ agent.status }}</div>
              </div>
              <div class="text-4xl">🪑</div>
            </div>
            <div class="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div class="h-full bg-[#00ff9d]" :style="{width: agent.activity + '%'}"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentTab === 'team'">
        <h2 class="text-4xl mb-6 tracking-widest text-white">TEAM</h2>
        <div class="space-y-4">
          <div v-for="agent in agents" :key="agent.id" class="flex items-center justify-between bg-black/60 p-5 rounded-lg border border-[#00f7ff]/20">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center text-2xl">{{ agent.emoji }}</div>
              <div>
                <div class="font-bold">{{ agent.name }}</div>
                <div class="text-sm text-gray-400">{{ agent.role }}</div>
              </div>
            </div>
            <div :class="agent.status === 'Active' ? 'text-emerald-400' : 'text-amber-400'">
              {{ agent.status }}
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="currentTab === 'tasks'">
        <h2 class="text-4xl mb-6 tracking-widest text-white">CURRENT TASKS</h2>
        <div class="space-y-3">
          <div v-for="task in tasks" :key="task.id" class="bg-black/60 p-5 rounded-lg border border-[#00f7ff]/20 flex justify-between items-center">
            <div>
              <div class="font-medium">{{ task.title }}</div>
              <div class="text-xs text-[#00f7ff]/70 mt-1">Assigned to: {{ task.assignee }}</div>
            </div>
            <div class="px-4 py-1 bg-[#ff00aa]/10 text-[#ff00aa] text-sm rounded-full">{{ task.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref('office')

const agents = ref([
  { id: 1, name: 'Claw-7', status: 'Working', activity: 85, role: 'Research Lead', emoji: '🔬' },
  { id: 2, name: 'Neon', status: 'Idle', activity: 15, role: 'Data Analyst', emoji: '📡' },
  { id: 3, name: 'Vortex', status: 'Active', activity: 92, role: 'Execution', emoji: '⚡' }
])

const tasks = ref([
  { id: 1, title: 'Analyze latest user query patterns', assignee: 'Claw-7', status: 'In Progress' },
  { id: 2, title: 'Generate daily memory summary', assignee: 'Neon', status: 'Pending' },
  { id: 3, title: 'Optimize agent coordination', assignee: 'Vortex', status: 'Completed' }
])
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
</style>