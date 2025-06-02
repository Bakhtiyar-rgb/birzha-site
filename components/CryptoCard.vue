<template>
  <div class="p-4 bg-white rounded-lg shadow text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <img :src="icon" :alt="title" class="w-16 h-16 mx-auto mb-4" />
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-700">Price: ${{ price }}</p>
    <p :class="change >= 0 ? 'text-green-500' : 'text-red-500'">Change: {{ change }}%</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  price: Number,
  change: Number,
  icon: String
})
</script>
