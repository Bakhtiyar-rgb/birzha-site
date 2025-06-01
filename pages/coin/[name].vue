<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4 capitalize">{{ name }}</h1>
    <img
      :src="coinData.icon"
      :alt="name"
      class="w-16 h-16 mb-4"
    />
    <p>Price: ${{ coinData.price }}</p>
    <p :class="changeClass">Change: {{ coinData.change }}%</p>

    <NuxtLink to="/" class="text-purple-600 underline mt-4 block">← Назад</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const name = route.params.name

const coinDataMap = {
  bitcoin: {
    price: 67000,
    change: 1.2,
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026'
  },
  ethereum: {
    price: 3100,
    change: -0.8,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=026'
  },
  solana: {
    price: 145,
    change: 3.5,
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=026'
  }
}

const coinData = coinDataMap[name] || { price: 0, change: 0, icon: '' }

const changeClass = computed(() => {
  return coinData.change >= 0 ? 'text-green-500' : 'text-red-500'
})
</script>
