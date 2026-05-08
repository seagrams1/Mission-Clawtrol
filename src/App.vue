<template>
  <div class="min-h-screen bg-zinc-950 text-cyan-400 font-mono">
    <!-- Header -->
    <div class="border-b border-cyan-500/30 bg-black/80 backdrop-blur-md p-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <h1 class="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">MISSION CLAWTROL</h1>
      </div>
      <div class="flex gap-2">
        <button class="px-6 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-400 text-emerald-400 rounded font-medium transition-colors">VISUAL OFFICE</button>
        <button class="px-6 py-2 hover:bg-zinc-800 border border-transparent text-zinc-400 hover:text-white rounded font-medium transition-colors">TEAM</button>
        <button class="px-6 py-2 hover:bg-zinc-800 border border-transparent text-zinc-400 hover:text-white rounded font-medium transition-colors">TASKS</button>
      </div>
      <div class="flex items-center gap-2 text-emerald-400 text-sm">
        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        OPENCLAW • LIVE
      </div>
    </div>

    <div class="p-6">
      <h2 class="text-2xl mb-6 text-cyan-300 tracking-widest flex items-center gap-3">
        <span class="text-purple-400">◼</span> VISUAL OFFICE
      </h2>

      <!-- Visual Office Grid -->
      <div class="grid grid-cols-3 gap-6">
        <!-- Agent cards with cyberpunk feel -->
        <div class="bg-zinc-900 border border-cyan-500/30 rounded-xl p-6 hover:border-purple-400 transition-all group">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="text-lg font-semibold text-white">Claw-7</div>
              <div class="text-purple-400 text-sm">Lead Operator</div>
            </div>
            <div class="text-3xl">🔥</div>
          </div>
          <div class="h-48 bg-black/70 rounded-xl flex items-center justify-center text-6xl border border-dashed border-cyan-400/30 group-hover:border-purple-400 transition-colors">
            🧬
          </div>
          <div class="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            WORKING
          </div>
        </div>

        <!-- More agent slots -->
        <div class="bg-zinc-900 border border-cyan-500/30 rounded-xl p-6 hover:border-purple-400 transition-all">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="text-lg font-semibold text-white">Neon</div>
              <div class="text-pink-400 text-sm">Data Ghost</div>
            </div>
            <div class="text-3xl">👾</div>
          </div>
          <div class="h-48 bg-black/70 rounded-xl flex items-center justify-center text-6xl border border-dashed border-cyan-400/30">
            👤
          </div>
          <div class="mt-4 text-emerald-400 text-sm font-medium flex items-center gap-2">
            <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            WORKING
          </div>
        </div>

        <div class="bg-zinc-900 border border-amber-500/30 rounded-xl p-6 hover:border-amber-400 transition-all">
          <div class="flex justify-between items-start mb-4">
            <div>
              <div class="text-lg font-semibold text-white">Vortex</div>
              <div class="text-amber-400 text-sm">Execution</div>
            </div>
            <div class="text-3xl">⚡</div>
          </div>
          <div class="h-48 bg-black/70 rounded-xl flex items-center justify-center text-6xl border border-dashed border-cyan-400/30">
            ⚙️
          </div>
          <div class="mt-4 text-amber-400 text-sm font-medium">IDLE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Additional custom styles can go here */
</style>