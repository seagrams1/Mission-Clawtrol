<!-- Team View -->
<template>
  <div class="team-view">
    <h2 class="neon-text">TEAM</h2>
    <div class="team-list">
      <div v-for="member in team" :key="member.id" class="team-member">
        <span class="member-name">{{ member.name }}</span>
        <span class="role">{{ member.role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  { id: 1, name: 'NEXUS', role: 'Lead Operator' },
  { id: 2, name: 'VOID', role: 'Data Weaver' },
  { id: 3, name: 'RAVEN', role: 'Infiltration' }
])
</script>

<style scoped>
.team-view { padding: 20px; }
.team-list { display: flex; flex-direction: column; gap: 12px; }
.team-member {
  background: #111;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  border-left: 4px solid #ff00ff;
}
</style>