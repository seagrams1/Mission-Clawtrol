<template>
  <div class="min-h-screen bg-zinc-950 text-cyan-300 font-mono">
    <!-- Cyberpunk header -->
    <header class="border-b border-cyan-500/30 bg-black/80 backdrop-blur-md py-3 px-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="text-2xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
          MISSION CLAWTROL
        </div>
      </div>
      <nav class="flex gap-8 text-sm">
        <button @click="currentTab = 'office'" 
                :class="{ 'text-pink-400 border-b-2 border-pink-400': currentTab === 'office' }"
                class="pb-1 hover:text-pink-400 transition-colors">
          VISUAL OFFICE
        </button>
        <button @click="currentTab = 'team'" 
                :class="{ 'text-pink-400 border-b-2 border-pink-400': currentTab === 'team' }"
                class="pb-1 hover:text-pink-400 transition-colors">
          TEAM
        </button>
        <button @click="currentTab = 'tasks'" 
                :class="{ 'text-pink-400 border-b-2 border-pink-400': currentTab === 'tasks' }"
                class="pb-1 hover:text-pink-400 transition-colors">
          TASKS
        </button>
      </nav>
    </header>

    <main class="p-6">
      <component :is="currentComponent" />
    </main>

    <footer class="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-cyan-500/30 py-2 px-6 text-xs flex justify-between items-center">
      <div>Connected to OpenClaw • Live Sync</div>
      <button @click="pullLiveData" 
              class="px-4 py-1 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-bold rounded hover:brightness-110 transition">
        PULL LIVE DATA
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VisualOffice from './components/VisualOffice.vue'
import TeamView from './components/TeamView.vue'
import TasksView from './components/TasksView.vue'

// Tab state
const currentTab = ref('office')

const currentComponent = computed(() => {
  if (currentTab.value === 'team') return TeamView
  if (currentTab.value === 'tasks') return TasksView
  return VisualOffice
})

const pullLiveData = () => {
  alert('🔥 Live sync with ~/.openclaw/ coming in Phase 2!')
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>