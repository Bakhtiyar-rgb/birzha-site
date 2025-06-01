<template>
  <div class="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
    <img :src="icon" alt="icon" class="w-24 h-24 object-contain" />
    <div>
      <h2 class="text-lg font-bold">{{ title }}</h2>
      <p class="text-gray-600">Price: ${{ price }}</p>
      <p :class="change >= 0 ? 'text-green-500' : 'text-red-500'">
        Change: {{ change }}%
      </p>
    </div>
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
