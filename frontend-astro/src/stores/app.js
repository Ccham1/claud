import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const mobileMenuOpen = ref(false)
  const activeSection = ref('home')

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }

  function setActiveSection(section) {
    activeSection.value = section
  }

  return { mobileMenuOpen, activeSection, toggleMobileMenu, closeMobileMenu, setActiveSection }
})
