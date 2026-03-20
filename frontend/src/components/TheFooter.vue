<template>
  <footer class="bg-gray-900 text-gray-300">

    <!-- Newsletter banner -->
    <div class="border-b border-gray-700">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p class="text-white font-bold text-lg">Find your next adventure 🧡</p>
          <p class="text-sm text-gray-400 mt-0.5">Subscribe and get exclusive Amigos 30+ event offers.</p>
        </div>
        <form class="flex w-full sm:w-auto gap-2" @submit.prevent="subscribeNewsletter">
          <input
            v-model="newsletterEmail"
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email for newsletter"
            class="flex-1 sm:w-64 px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            class="px-5 py-2 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- 4-column grid (site links span 2) -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Col 1: Social media -->
      <div>
        <div class="flex items-center gap-2 mb-4">
          <span class="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">A</span>
          <span class="font-bold text-white text-lg">amigos<span class="text-orange-500">30+</span></span>
        </div>
        <p class="text-sm text-gray-400 mb-6 leading-relaxed">
          Barcelona's community for people aged 30 and above. Connect, chat, and meet real friends.
        </p>
        <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Follow us</p>
        <div class="flex gap-3">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" v-html="social.icon" />
          </a>
        </div>
      </div>

      <!-- Col 2–3: Site links (spans 2 columns, two child columns inside) -->
      <div class="lg:col-span-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Site links</p>
        <div class="flex gap-10">
          <!-- Child col 1: Nav links -->
          <ul class="space-y-2.5 list-none p-0 m-0 flex-1">
            <li v-for="link in siteLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                @click.prevent="scrollTo(link.id)"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <!-- Child col 2: Legal links -->
          <ul class="space-y-2.5 list-none p-0 m-0 flex-1">
            <li class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Legal</li>
            <li v-for="link in legalLinks" :key="link.label">
              <a :href="link.href" class="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Col 3: Newsletter signup -->
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Stay in the loop</p>
        <p class="text-sm text-gray-400 mb-4 leading-relaxed">
          Get notified about new events, groups, and members in your area.
        </p>
        <form class="space-y-3" @submit.prevent="subscribeNewsletter">
          <input
            v-model="newsletterEmail"
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email for newsletter"
            class="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            class="w-full py-2 rounded-lg bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Subscribe
          </button>
          <p v-if="newsletterSent" class="text-xs text-green-400" role="status">You're subscribed!</p>
        </form>

        <div class="mt-8">
          <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Download the app</p>
          <div class="flex flex-col gap-2">
            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors text-sm text-gray-300">
              <span aria-hidden="true">🍎</span> App Store
            </a>
            <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors text-sm text-gray-300">
              <span aria-hidden="true">🤖</span> Google Play
            </a>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
        <p>© {{ currentYear }} Amigos 30+. All rights reserved.</p>
        <p>Made with 🧡 in Barcelona</p>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const newsletterEmail = ref('')
const newsletterSent = ref(false)

function subscribeNewsletter() {
  newsletterSent.value = true
  newsletterEmail.value = ''
}

const siteLinks = [
  { label: 'Home',         id: 'home',         href: '#home' },
  { label: 'About',        id: 'about',        href: '#about' },
  { label: 'How It Works', id: 'how-it-works', href: '#how-it-works' },
  { label: 'Chat',         id: 'chat',         href: '#chat' },
  { label: 'Events',       id: 'events',       href: '#events' },
  { label: 'FAQ',          id: 'faq',          href: '#faq' },
  { label: 'Contact',      id: 'contact',      href: '#contact' },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Cookie Policy',     href: '#' },
  { label: 'Sitemap',           href: '#' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>',
  },
  {
    label: 'Meetup',
    href: '#',
    icon: '<path d="M19.24 10.371c-.208-.756-1.178-1.048-1.929-.628a2.774 2.774 0 00-.087.051c-.301-1.93-1.979-3.404-4.006-3.404-1.17 0-2.23.477-2.993 1.246a3.94 3.94 0 00-.469-.189c-.951-.308-1.975.168-2.283 1.068-.295.873.148 1.809.974 2.153a2.79 2.79 0 00-.128.849c0 1.68 1.435 3.042 3.206 3.042.471 0 .916-.103 1.315-.284.146.42.496.726.918.726h.02c.561-.003 1.014-.455 1.014-1.016V13.9c.27.089.562.138.866.138 1.603 0 2.903-1.249 2.903-2.791 0-.303-.052-.592-.149-.864l.023-.012c.72-.374.986-1.257.805-2zm-7.063 4.505a2.396 2.396 0 01-1.455.491c-1.327 0-2.404-1.036-2.404-2.314 0-.213.031-.419.086-.616l-.012-.005c-.692-.283-1.052-.997-.817-1.679.218-.646.921-.99 1.58-.833l.019.006a3.18 3.18 0 012.336-1.02c1.755 0 3.178 1.37 3.178 3.061 0 .15-.012.298-.034.443l.011.006c.532.282.772.876.577 1.435a1.116 1.116 0 01-1.116.779h-.012a1.115 1.115 0 01-.933-.754z"/>',
  },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
