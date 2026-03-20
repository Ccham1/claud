<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const route = useRoute()
const layouts = { HomeLayout, DefaultLayout }

const layout = computed(() => layouts[route.meta.layout] ?? DefaultLayout)
</script>
