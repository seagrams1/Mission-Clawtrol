<template>
  <div class="min-h-screen bg-[#0a0a0a] text-[#00ffff] crt">
    <div class="max-w-7xl mx-auto p-6">
      <header class="flex justify-between items-center mb-8 border-b border-[#ff00ff]/30 pb-4">
        <h1 class="text-4xl font-bold tracking-widest neon-pink">MISSION CLAWTROL</h1>
        <div class="flex gap-2">
          <button class="px-6 py-2 bg-black border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-colors">VISUAL OFFICE</button>
          <button class="px-6 py-2 bg-black border border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition-colors">TEAM</button>
          <button class="px-6 py-2 bg-black border border-[#ffff00] text-[#ffff00] hover:bg-[#ffff00] hover:text-black transition-colors">TASKS</button>
        </div>
      </header>

      <div class="mb-4 flex items-center gap-3">
        <div class="px-4 py-1 bg-green-900/50 text-green-400 text-sm font-mono flex items-center gap-2 border border-green-400/50">
          ● OPENCLAW • LIVE
        </div>
      </div>

      <h2 class="text-3xl font-bold neon-cyan mb-6">VISUAL OFFICE</h2>

      <!-- Simple agent grid for now -->
      <div class="grid grid-cols-3 gap-6">
        <div class="bg-black/70 border border-[#00ffff]/50 p-6 rounded-xl hover:border-[#ff00ff] transition-colors">
          <div class="text-center">
            <div class="text-6xl mb-2">🔥</div>
            <p class="text-lg font-mono">Claw-7</p>
            <p class="text-sm text-[#ff00ff]">Lead Operator</p>
            <p class="text-green-400 text-sm mt-4">WORKING</p>
          </div>
        </div>
        <!-- Add more agents -->
      </div>
    </div>
  </div>
</template>

<script setup>
</script>