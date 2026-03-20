<template>
  <div>
    <TheHeader />
    <main class="pt-36">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
