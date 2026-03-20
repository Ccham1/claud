<template>
  <div>
    <TheHeader />
    <main class="pt-36">
      <HeroSlider :slides="heroSlides" />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import HeroSlider from '@/components/HeroSlider.vue'

const heroSlides = [
  {
    bg: 'bg-gradient-to-br from-orange-700 to-orange-400',
    image: '',
    eyebrow: 'Barcelona · 30+',
    title: 'Welcome to Amigos 30+',
    subtitle: 'Meet real people, make genuine friendships, and enjoy Barcelona together.',
    ctaLabel: 'Sign Up Free',
    ctaLink: '#contact',
  },
  {
    bg: 'bg-gradient-to-br from-sky-700 to-sky-400',
    image: '',
    eyebrow: "What's on",
    title: 'Join Upcoming Events',
    subtitle: 'Hikes, dinners, language exchanges and more — something for everyone.',
    ctaLabel: 'See Events',
    ctaLink: '#events',
  },
  {
    bg: 'bg-gradient-to-br from-amber-700 to-amber-400',
    image: '',
    eyebrow: 'Community',
    title: 'Connect with Members',
    subtitle: 'Browse profiles, find shared interests, and start a conversation.',
    ctaLabel: 'Browse Members',
    ctaLink: '#members',
  },
]
</script>
