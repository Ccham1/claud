<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">

    <!-- Announcement banner -->
    <div
      v-if="bannerVisible"
      class="bg-sky-400 text-white text-sm text-center px-10 py-2 relative"
      role="banner"
    >
      <span>🎉 Barcelona's friendliest community for over 30s — </span>
      <a href="#events" class="underline font-semibold hover:text-sky-100" @click.prevent="scrollTo('events')">
        see upcoming events
      </a>
      <button
        class="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-sky-100 text-lg leading-none"
        aria-label="Dismiss announcement"
        @click="bannerVisible = false"
      >
        ✕
      </button>
    </div>

    <!-- Middle bar: logo + search + utility -->
    <div class="border-b border-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-4 h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 flex-shrink-0">
          <span class="w-9 h-9 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-lg">A</span>
          <span class="font-bold text-xl text-gray-900">amigos<span class="text-orange-600">30+</span></span>
        </a>

        <!-- Search bar -->
        <div class="flex-1 max-w-xl mx-auto hidden sm:block">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="search"
              placeholder="Search members, events, groups…"
              class="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
              aria-label="Search"
            />
          </div>
        </div>

        <!-- Utility links -->
        <div class="flex items-center gap-4 ml-auto flex-shrink-0">
          <a href="#" class="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-600 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Log in
          </a>
          <a href="#" class="hidden md:flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-600 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Chat
          </a>

          <!-- Hamburger (mobile) -->
          <button
            class="md:hidden p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <svg v-if="!menuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Bottom nav bar (desktop) -->
    <div class="hidden md:block border-b border-gray-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-1 h-11">
        <RouterLink
          v-for="link in links"
          :key="link.label"
          :to="link.href"
          class="px-3 py-1.5 text-sm text-gray-600 hover:text-orange-600 transition-colors rounded-md hover:bg-orange-50 whitespace-nowrap"
          active-class="text-orange-600 bg-orange-50"
        >{{ link.label }}</RouterLink>

        <!-- Prominent CTA -->
        <RouterLink
          to="/contact"
          class="ml-2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors whitespace-nowrap"
        >
          <span>🤝</span> Join the community
        </RouterLink>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" id="mobile-menu" class="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
      <ul class="flex flex-col gap-1 mt-2 list-none p-0 m-0">
        <li v-for="link in links" :key="link.label">
          <RouterLink
            :to="link.href"
            class="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            active-class="text-orange-600 bg-orange-50"
            @click="menuOpen = false"
          >{{ link.label }}</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="block mt-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold text-center hover:bg-gray-700 transition-colors"
            @click="menuOpen = false"
          >
            🤝 Join the community
          </RouterLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const bannerVisible = ref(true)

const links = [
  { label: 'Home',         href: '/' },
  { label: 'About',        href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Chat',         href: '/chat' },
  { label: 'Events',       href: '/events' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
