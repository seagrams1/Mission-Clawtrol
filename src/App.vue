<template>
  <div class="min-h-screen bg-[#0a0a0a] text-cyan-300 font-mono flex">
    <!-- Vertical Sidebar -->
    <div class="w-64 bg-black/80 border-r border-cyan-500/30 flex flex-col p-4 space-y-3">
      <div class="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-8">MISSION CLAWTROL</div>
      <button class="neon-button active">📟 VISUAL OFFICE</button>
      <button class="neon-button">👥 TEAM</button>
      <button class="neon-button">📋 TASKS</button>
    </div>
    <div class="flex-1 p-8">
      <h1 class="text-4xl font-bold mb-8 tracking-widest neon-text">VISUAL OFFICE</h1>
      <div class="grid grid-cols-3 gap-6">
        <!-- Agent cards with nudity hints -->
        <div class="bg-zinc-900 border border-pink-500/40 p-4 rounded-xl neon-glow">
          <div class="text-pink-400">Claw-7 • WORKING</div>
          <div class="h-48 bg-gradient-to-b from-amber-900 to-pink-900 flex items-end justify-center text-6xl">🧍‍♀️</div>
          <p class="text-xs text-pink-300 mt-2">Bare skin cyberpunk operator • Active</p>
        </div>
        <!-- more agents -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style>
.neon-button {
  @apply w-full py-4 text-left px-6 border border-cyan-400/60 hover:border-pink-400 text-cyan-300 hover:text-pink-400 transition-all hover:scale-105 font-mono tracking-widest;
  text-shadow: 0 0 10px currentColor;
}
.neon-glow {
  box-shadow: 0 0 25px -5px rgb(236 72 153);
}
.neon-text {
  text-shadow: 0 0 20px #67e8f9;
}
</style>