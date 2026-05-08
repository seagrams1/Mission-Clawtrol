<template>
  <div class="min-h-screen bg-[#0a0a0a] text-cyan-300 font-mono flex">
    <!-- Vertical Sidebar -->
    <div class="w-64 bg-[#111111] border-r border-cyan-500/30 flex flex-col py-6">
      <div class="px-6 mb-8">
        <h1 class="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 neon-text">MISSION CLAWTROL</h1>
      </div>
      
      <nav class="flex-1 px-3 space-y-2">
        <button @click="currentTab = 'office'" 
                :class="{ 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_#22d3ee]': currentTab === 'office' }"
                class="w-full text-left px-6 py-4 text-lg font-medium border border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all rounded-xl flex items-center gap-3">
          <span class="text-xl">🖥️</span>
          VISUAL OFFICE
        </button>
        <button @click="currentTab = 'team'" 
                :class="{ 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_#22d3ee]': currentTab === 'team' }"
                class="w-full text-left px-6 py-4 text-lg font-medium border border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all rounded-xl flex items-center gap-3">
          <span class="text-xl">👥</span>
          TEAM
        </button>
        <button @click="currentTab = 'tasks'" 
                :class="{ 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_#22d3ee]': currentTab === 'tasks' }"
                class="w-full text-left px-6 py-4 text-lg font-medium border border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_#22d3ee] transition-all rounded-xl flex items-center gap-3">
          <span class="text-xl">📋</span>
          TASKS
        </button>
      </nav>

      <div class="mt-auto px-6 text-xs text-cyan-500/60">
        OPENC LAW • LIVE
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8">
      <div v-if="currentTab === 'office'">
        <h2 class="text-4xl font-bold mb-8 tracking-widest neon-text">VISUAL OFFICE</h2>
        <div class="grid grid-cols-3 gap-8">
          <!-- Agent 1 -->
          <div class="bg-[#1a1a1a] border border-purple-500/40 rounded-2xl p-6 hover:border-pink-400 transition-all hover:scale-105">
            <div class="h-48 bg-gradient-to-b from-purple-900/30 to-black flex items-center justify-center text-6xl mb-4 rounded-xl relative">
              🔥
              <div class="absolute bottom-4 text-xs text-pink-400">WORKING</div>
            </div>
            <h3 class="text-xl font-bold">Claw-7</h3>
            <p class="text-purple-300">Lead Operator</p>
            <p class="text-xs text-cyan-400 mt-3">Bare torso • Neon straps • Active terminal</p>
          </div>

          <!-- Agent 2 -->
          <div class="bg-[#1a1a1a] border border-cyan-500/40 rounded-2xl p-6 hover:border-pink-400 transition-all hover:scale-105">
            <div class="h-48 bg-gradient-to-b from-cyan-900/30 to-black flex items-center justify-center text-6xl mb-4 rounded-xl relative">
              👾
              <div class="absolute bottom-4 text-xs text-pink-400">IDLE</div>
            </div>
            <h3 class="text-xl font-bold">Neon Ghost</h3>
            <p class="text-purple-300">Data Ghost</p>
            <p class="text-xs text-cyan-400 mt-3">Revealing cyber-suit • Bare legs</p>
          </div>

          <!-- Agent 3 -->
          <div class="bg-[#1a1a1a] border border-pink-500/40 rounded-2xl p-6 hover:border-pink-400 transition-all hover:scale-105">
            <div class="h-48 bg-gradient-to-b from-pink-900/30 to-black flex items-center justify-center text-6xl mb-4 rounded-xl relative">
              ⚡
              <div class="absolute bottom-4 text-xs text-pink-400">WORKING</div>
            </div>
            <h3 class="text-xl font-bold">Vortex</h3>
            <p class="text-purple-300">Execution</p>
            <p class="text-xs text-cyan-400 mt-3">Minimal outfit • Bare shoulders</p>
          </div>
        </div>
      </div>

      <div v-else-if="currentTab === 'team'">
        <h2 class="text-4xl font-bold mb-8 tracking-widest neon-text">TEAM</h2>
        <p class="text-cyan-400">Team roster coming soon...</p>
      </div>

      <div v-else-if="currentTab === 'tasks'">
        <h2 class="text-4xl font-bold mb-8 tracking-widest neon-text">TASKS</h2>
        <p class="text-cyan-400">Live tasks coming soon...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref('office')
</script>

<style scoped>
.neon-text {
  text-shadow: 
    0 0 10px #22d3ee,
    0 0 20px #22d3ee;
}
</style>