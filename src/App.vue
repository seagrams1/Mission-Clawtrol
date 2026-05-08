<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#00f7ff] font-mono flex">
    <!-- Sidebar -->
    <div class="w-64 bg-black/90 border-r border-[#00f7ff]/30 p-6 flex flex-col">
      <div class="flex items-center gap-3 mb-10">
        <div class="w-9 h-9 bg-[#ff00aa] text-black font-bold text-3xl flex items-center justify-center rounded">C</div>
        <h1 class="text-3xl tracking-[3px] font-bold text-white">MISSION CLAWTROL</h1>
      </div>

      <nav class="space-y-2 flex-1">
        <button @click="currentTab = 'office'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff] text-white': currentTab === 'office' }"
                class="w-full text-left px-5 py-4 rounded-xl border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3 text-lg transition-colors">
          🖥️ Visual Office
        </button>
        <button @click="currentTab = 'team'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff] text-white': currentTab === 'team' }"
                class="w-full text-left px-5 py-4 rounded-xl border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3 text-lg transition-colors">
          👥 Team
        </button>
        <button @click="currentTab = 'tasks'" 
                :class="{ 'bg-[#00f7ff]/10 border-[#00f7ff] text-white': currentTab === 'tasks' }"
                class="w-full text-left px-5 py-4 rounded-xl border border-transparent hover:border-[#00f7ff]/50 flex items-center gap-3 text-lg transition-colors">
          📋 Tasks
        </button>
      </nav>

      <div class="text-xs text-[#00f7ff]/50 mt-auto pt-8">
        <div>OPENCLAW • LIVE</div>
        <div class="text-emerald-400 flex items-center gap-1.5">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          CONNECTED
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-10 overflow-auto">
      <VisualOffice v-if="currentTab === 'office'" />
      <TeamView v-else-if="currentTab === 'team'" />
      <TasksView v-else-if="currentTab === 'tasks'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VisualOffice from './components/VisualOffice.vue'
import TeamView from './components/TeamView.vue'
import TasksView from './components/TasksView.vue'

const currentTab = ref('office')
</script>