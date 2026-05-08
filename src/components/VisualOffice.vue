&lt;template&gt;
  &lt;div class="visual-office"&gt;
    &lt;h2 class="neon-text"&gt;VISUAL OFFICE&lt;/h2&gt;
    &lt;div class="office-grid"&gt;
      &lt;!-- Pixel art agents will go here --&gt;
      &lt;div v-for="agent in agents" :key="agent.id" class="agent-desk"&gt;
        &lt;div class="pixel-agent" :class="{ working: agent.status === 'working' }"&gt;
          {{ agent.name }}
        &lt;/div&gt;
        &lt;p&gt;{{ agent.status }}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const agents = ref([
  { id: 1, name: 'NEXUS', status: 'working' },
  { id: 2, name: 'VOID', status: 'idle' },
  { id: 3, name: 'RAVEN', status: 'working' }
]);
&lt;/script&gt;

&lt;style scoped&gt;
.visual-office {
  padding: 20px;
}
.neon-text {
  color: #00f3ff;
  text-shadow: 0 0 10px #00f3ff;
}
&lt;/style&gt;