&lt;template&gt;
  &lt;div class="mission-clawtrol"&gt;
    &lt;header class="header"&gt;
      &lt;h1&gt;MISSION CLAWTROL&lt;/h1&gt;
      &lt;div class="status"&gt;
        OPENC LAW • LIVE
        &lt;span class="live-dot"&gt;●&lt;/span&gt;
      &lt;/div&gt;
    &lt;/header&gt;

    &lt;nav class="sidebar"&gt;
      &lt;button @click="currentTab = 'visual-office'" 
              :class="{ active: currentTab === 'visual-office' }"&gt;
        VISUAL OFFICE
      &lt;/button&gt;
      &lt;button @click="currentTab = 'team'" 
              :class="{ active: currentTab === 'team' }"&gt;
        TEAM
      &lt;/button&gt;
      &lt;button @click="currentTab = 'tasks'" 
              :class="{ active: currentTab === 'tasks' }"&gt;
        TASKS
      &lt;/button&gt;
    &lt;/nav&gt;

    &lt;main class="content"&gt;
      &lt;VisualOffice v-if="currentTab === 'visual-office'" /&gt;
      &lt;TeamView v-else-if="currentTab === 'team'" /&gt;
      &lt;TasksView v-else-if="currentTab === 'tasks'" /&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import VisualOffice from './components/VisualOffice.vue';
import TeamView from './components/TeamView.vue';
import TasksView from './components/TasksView.vue';

const currentTab = ref('visual-office');
&lt;/script&gt;

&lt;style&gt;
/* Basic dark cyberpunk styles */
.mission-clawtrol {
  background: #0a0a0a;
  color: #00ffcc;
  font-family: monospace;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  background: #111;
  padding: 1rem;
  border-bottom: 2px solid #ff00ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar {
  background: #111;
  width: 220px;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 2px solid #00ffff;
}
.sidebar button {
  background: transparent;
  border: 2px solid #00ffff;
  color: #00ffff;
  padding: 14px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s;
}
.sidebar button:hover, .sidebar button.active {
  background: #00ffff;
  color: #000;
  box-shadow: 0 0 20px #00ffff;
}
.content {
  flex: 1;
  padding: 2rem;
  overflow: auto;
}
&lt;/style&gt;