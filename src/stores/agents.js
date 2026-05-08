import { defineStore } from 'pinia'

export const useAgentsStore = defineStore('agents', {
  state: () => ({
    agents: [
      { 
        id: 1, 
        name: 'Nexus', 
        status: 'working', 
        activity: 'Building cyberpunk UI', 
        lastSeen: 'now' 
      },
      { 
        id: 2, 
        name: 'Shadow', 
        status: 'idle', 
        activity: 'Monitoring memory logs', 
        lastSeen: '3m ago' 
      },
      { 
        id: 3, 
        name: 'Viper', 
        status: 'working', 
        activity: 'Processing tasks', 
        lastSeen: 'now' 
      }
    ]
  }),
  actions: {
    updateAgentStatus(id, newStatus) {
      const agent = this.agents.find(a => a.id === id)
      if (agent) agent.status = newStatus
    }
  }
})
