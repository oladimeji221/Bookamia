import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

function initPlugins() {
  // Remove duplicate #sticky-space elements inserted by stickyHeader() on each init
  document.querySelectorAll('#sticky-space').forEach(el => el.remove())
  if (window.e && typeof window.e.init === 'function') {
    window.e.init()
  }
}

// Re-init after every navigation (including initial load)
router.afterEach(() => nextTick(initPlugins))
