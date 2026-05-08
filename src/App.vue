<!-- Full cyberpunk rebuild -->
<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#00f7ff] font-mono relative overflow-hidden">
    <!-- CRT scanlines overlay -->
    <div class="scanlines absolute inset-0 pointer-events-none"></div>

    <!-- Header -->
    <header class="border-b border-[#00f7ff]/30 bg-black/90 backdrop-blur-md p-4 flex items-center justify-between z-20 relative">
      <div class="flex items-center gap-3">
        <h1 class="text-4xl font-bold tracking-[4px] neon-text">MISSION CLAWTROL</h1>
      </div>
      <nav class="flex gap-1">
        <button @click="currentTab = 'office'" :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]' : currentTab === 'office', 'border-transparent' : true }" class="px-8 py-3 border text-sm font-medium transition-all hover:bg-[#ff00aa]/10">
          VISUAL OFFICE
        </button>
        <button @click="currentTab = 'team'" :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]' : currentTab === 'team' }" class="px-8 py-3 border text-sm font-medium transition-all hover:bg-[#ff00aa]/10">
          TEAM
        </button>
        <button @click="currentTab = 'tasks'" :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff]' : currentTab === 'tasks' }" class="px-8 py-3 border text-sm font-medium transition-all hover:bg-[#ff00aa]/10">
          TASKS
        </button>
      </nav>
      <div class="flex items-center gap-3 text-emerald-400">
        <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        OPENCLAW • LIVE
      </div>
    </header>

    <main class="p-8 relative z-10">
      <h2 class="text-3xl mb-8 neon-text flex items-center gap-4">
        <span class="text-[#ff00aa]">◼</span> VISUAL OFFICE
      </h2>

      <!-- Visual Office - Cyberpunk Desk Grid -->
      <div class="grid grid-cols-3 gap-8">
        <!-- Agent 1 -->
        <div class="cyber-card rounded-2xl p-6 transition-all hover:scale-105 group">
          <div class="flex justify-between">
            <div>
              <div class="text-xl font-bold">Claw-7</div>
              <div class="text-[#ff00aa] text-sm">Lead Operator</div>
            </div>
            <div class="text-4xl">🔥</div>
          </div>
          <div class="my-6 h-64 bg-[#111] rounded-xl flex items-center justify-center text-8xl border-2 border-dashed border-[#00f7ff]/50 group-hover:border-[#ff00aa] transition-colors relative">
            <!-- Pixel character with subtle nudity hint -->
            <div class="text-6xl">🧬</div>
            <div class="absolute bottom-4 left-4 text-xs bg-black/70 px-3 py-1 rounded text-[#39ff14]">WORKING</div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-[#39ff14] flex items-center gap-1"><span class="animate-pulse">●</span> ACTIVE</span>
          </div>
        </div>

        <!-- Agent 2 -->
        <div class="cyber-card rounded-2xl p-6 transition-all hover:scale-105 group">
          <div class="flex justify-between">
            <div>
              <div class="text-xl font-bold">Neon</div>
              <div class="text-[#ff00aa] text-sm">Data Ghost</div>
            </div>
            <div class="text-4xl">👾</div>
          </div>
          <div class="my-6 h-64 bg-[#111] rounded-xl flex items-center justify-center text-8xl border-2 border-dashed border-[#00f7ff]/50 group-hover:border-[#ff00aa] transition-colors relative">
            <div class="text-6xl">👤</div>
            <div class="absolute bottom-4 left-4 text-xs bg-black/70 px-3 py-1 rounded text-[#39ff14]">WORKING</div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-[#39ff14] flex items-center gap-1"><span class="animate-pulse">●</span> ACTIVE</span>
          </div>
        </div>

        <!-- Agent 3 -->
        <div class="cyber-card rounded-2xl p-6 transition-all hover:scale-105 group">
          <div class="flex justify-between">
            <div>
              <div class="text-xl font-bold">Vortex</div>
              <div class="text-amber-400 text-sm">Execution</div>
            </div>
            <div class="text-4xl">⚡</div>
          </div>
          <div class="my-6 h-64 bg-[#111] rounded-xl flex items-center justify-center text-8xl border-2 border-dashed border-[#00f7ff]/50 group-hover:border-[#ff00aa] transition-colors relative">
            <div class="text-6xl">⚙️</div>
            <div class="absolute bottom-4 left-4 text-xs bg-black/70 px-3 py-1 rounded text-amber-400">IDLE</div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <span class="text-amber-400 flex items-center gap-1">○ IDLE</span>
          </div>
        </div>
      </div>
    </main>

    <footer class="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-[#00f7ff]/20 p-4 text-xs flex justify-between text-[#00f7ff]/70">
      <div>Connected to ~/.openclaw/workspace</div>
      <div class="flex gap-6">
        <button class="hover:text-white transition-colors">PULL LIVE DATA</button>
        <button class="hover:text-white transition-colors">SYNC AGENTS</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentTab = ref('office')
</script>

<style scoped>
/* Extra cyberpunk polish */
</style>