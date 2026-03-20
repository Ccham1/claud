<template>
  <section id="home" class="relative w-full min-h-[520px] overflow-hidden">

    <!-- Slides -->
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="absolute inset-0 transition-opacity duration-700 cursor-pointer"
      :class="i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      @click="onSlideClick(slide)"
    >
      <!-- Background -->
      <div class="absolute inset-0 bg-cover bg-center" :class="slide.bg" :style="slide.image ? `background-image: url('${slide.image}')` : ''" />

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

      <!-- Content -->
      <div class="relative z-10 h-full flex items-center">
        <div class="w-full max-w-6xl mx-auto px-6 sm:px-10 py-20 flex justify-center sm:justify-end">
          <div class="text-center sm:text-right max-w-xl">
          <p class="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {{ slide.eyebrow }}
          </p>
          <p class="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            {{ slide.title }}
          </p>
          <p class="text-white/80 text-lg mb-8">
            {{ slide.subtitle }}
          </p>
          <div class="flex justify-center sm:justify-end">
          <a
            :href="slide.ctaLink"
            class="inline-flex items-center px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            @click.stop
          >
            {{ slide.ctaLabel }}
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Prev arrow -->
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Previous slide"
      @click="prev"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Next arrow -->
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Next slide"
      @click="next"
    >
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dot indicators -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        :class="i === currentIndex ? 'bg-sky-400' : 'bg-white/40 hover:bg-white/70'"
        :aria-label="`Go to slide ${i + 1}`"
        :aria-current="i === currentIndex ? 'true' : undefined"
        @click="goTo(i)"
      />
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
let timer = null

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
}

function goTo(i) {
  currentIndex.value = i
}

function onSlideClick(slide) {
  if (slide.ctaLink) window.location.href = slide.ctaLink
}

onMounted(() => {
  timer = setInterval(next, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
