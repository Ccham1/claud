<template>
  <section class="py-20 bg-gray-50 overflow-hidden" aria-labelledby="testimonials-heading">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">Member stories</p>
        <h2 id="testimonials-heading" class="text-3xl sm:text-4xl font-bold text-gray-900">
          What our Amigos say
        </h2>
      </div>

      <!-- Slider -->
      <div class="relative">
        <!-- Track -->
        <div class="overflow-hidden">
          <div
            class="track flex transition-transform duration-500 ease-in-out"
            :style="{ '--offset': offset }"
          >
            <div
              v-for="(t, i) in testimonials"
              :key="i"
              class="card w-full md:w-1/4 flex-shrink-0 px-3"
            >
              <article class="bg-white rounded-2xl shadow-sm p-6 h-full flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:scale-[1.03]">
                <!-- Quote mark -->
                <div class="text-4xl font-serif text-orange-100 leading-none mb-2" aria-hidden="true">"</div>

                <!-- Comment -->
                <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{{ t.comment }}</p>

                <!-- Stars -->
                <div class="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  <svg v-for="s in 5" :key="s" class="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <!-- Profile -->
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    :class="t.avatarBg"
                    aria-hidden="true"
                  >
                    {{ t.initials }}
                  </div>
                  <div>
                    <p class="font-bold text-gray-900 text-sm">{{ t.name }}</p>
                    <p class="text-xs text-gray-500">{{ t.role }}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <!-- Prev arrow -->
        <button
          class="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="offset === 0"
          aria-label="Previous testimonials"
          @click="prev"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Next arrow -->
        <button
          class="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="offset >= testimonials.length - 1"
          aria-label="Next testimonials"
          @click="next"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="w-2 h-2 rounded-full transition-colors focus:outline-none"
          :class="i === offset ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'"
          :aria-label="`Go to testimonial ${i + 1}`"
          :aria-current="i === offset ? 'true' : undefined"
          @click="offset = i"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const offset = ref(0)

const testimonials = [
  {
    name: 'Sofia M.',
    role: 'Member since 2023 · Graphic designer',
    initials: 'SM',
    avatarBg: 'bg-pink-500',
    comment: 'I moved to Barcelona alone and was nervous about making friends as an adult. Amigos 30+ changed that completely — I now have a solid group I see every week.',
  },
  {
    name: 'James T.',
    role: 'Member since 2022 · Software engineer',
    initials: 'JT',
    avatarBg: 'bg-blue-500',
    comment: 'The events are so well organised and the people are genuinely warm. I came to one dinner not knowing anyone and left with three new friends.',
  },
  {
    name: 'Marta R.',
    role: 'Member since 2021 · Teacher',
    initials: 'MR',
    avatarBg: 'bg-amber-500',
    comment: 'As a local, I joined to meet internationals and practise my English. It\'s been so enriching — I\'ve learned more about the world without leaving Barcelona.',
  },
  {
    name: 'Karim B.',
    role: 'Member since 2023 · Chef',
    initials: 'KB',
    avatarBg: 'bg-green-500',
    comment: 'The cooking nights are brilliant! Great atmosphere, real conversations, and nobody is trying to sell you anything. Just people enjoying life.',
  },
  {
    name: 'Elena V.',
    role: 'Member since 2022 · Marketing',
    initials: 'EV',
    avatarBg: 'bg-purple-500',
    comment: 'After relocating from Kyiv I felt very isolated. This community gave me confidence and a social life I thought would take years to build.',
  },
  {
    name: 'David L.',
    role: 'Member since 2021 · Writer',
    initials: 'DL',
    avatarBg: 'bg-orange-500',
    comment: 'I\'ve tried other expat groups but none felt as authentic as this one. The 30+ angle really helps — people are past the party phase and into real connection.',
  },
  {
    name: 'Ana P.',
    role: 'Member since 2024 · Architect',
    initials: 'AP',
    avatarBg: 'bg-rose-500',
    comment: 'I was hesitant at first but within two events I felt completely at home. The organizers do a fantastic job setting the tone.',
  },
  {
    name: 'Marco F.',
    role: 'Member since 2023 · Photographer',
    initials: 'MF',
    avatarBg: 'bg-teal-500',
    comment: 'The hiking trips are my favourite. Beautiful scenery, great company, and always someone interesting to talk to. Couldn\'t recommend it more.',
  },
]

function next() {
  if (offset.value < testimonials.length - 1) offset.value++
}

function prev() {
  if (offset.value > 0) offset.value--
}
</script>

<style scoped>
.track {
  transform: translateX(calc(var(--offset) * -100%));
}

@media (min-width: 768px) {
  .track {
    transform: translateX(calc(var(--offset) * -25%));
  }
}
</style>
