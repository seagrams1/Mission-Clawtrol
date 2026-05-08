<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#a0f0ff] font-mono crt overflow-hidden">
    <div class="max-w-screen-2xl mx-auto p-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-10 border-b border-cyan-400/30 pb-6">
        <div>
          <h1 class="text-5xl font-black tracking-[4px] neon-pink">MISSION CLAWTROL</h1>
          <p class="text-cyan-300 text-sm tracking-widest">OPENCLAW COMMAND CENTER</p>
        </div>
        <div class="flex gap-3">
          <button @click="currentTab = 'office'" :class="{ 'neon-cyan border-cyan-400 bg-black/80' : currentTab === 'office', 'border-gray-600' : currentTab !== 'office' }" class="px-8 py-3 border text-lg font-medium transition-all">VISUAL OFFICE</button>
          <button @click="currentTab = 'team'" :class="{ 'neon-pink border-pink-400 bg-black/80' : currentTab === 'team', 'border-gray-600' : currentTab !== 'team' }" class="px-8 py-3 border text-lg font-medium transition-all">TEAM</button>
          <button @click="currentTab = 'tasks'" :class="{ 'neon-yellow border-yellow-400 bg-black/80' : currentTab === 'tasks', 'border-gray-600' : currentTab !== 'tasks' }" class="px-8 py-3 border text-lg font-medium transition-all">TASKS</button>
        </div>
      </div>

      <div v-if="currentTab === 'office'">
        <h2 class="text-4xl mb-8 neon-cyan flex items-center gap-4">
          <span class="text-5xl">🖥️</span> VISUAL OFFICE
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <!-- Agent 1 -->
          <div class="bg-zinc-950 border border-cyan-500/60 rounded-2xl p-6 hover:border-pink-500 transition-all group">
            <div class="flex justify-between items-start">
              <div>
                <div class="text-7xl mb-3">🔥</div>
                <h3 class="text-2xl">Claw-7</h3>
                <p class="text-pink-400">Lead Operator</p>
              </div>
              <div class="text-green-400 text-sm font-bold">WORKING</div>
            </div>
            <div class="h-40 bg-black/80 rounded-xl mt-6 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
              👾
            </div>
          </div>
          <!-- More agents can be added similarly -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentTab = ref('office')
</script>