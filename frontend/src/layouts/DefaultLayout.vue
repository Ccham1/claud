<template>
  <div>
    <TheHeader />
    <main class="pt-36">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 lg:col-span-10">
            <slot />
          </div>
          <aside class="col-span-12 lg:col-span-2">
            <slot name="sidebar" />
          </aside>
        </div>
      </div>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
