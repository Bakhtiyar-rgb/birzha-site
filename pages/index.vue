<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Криптовалютный рынок</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <NuxtLink
        v-for="(coin, index) in coins"
        :key="index"
        :to="`/coin/${coin.title.toLowerCase()}`"
        class="block"
      >
        <CryptoCard
          :title="coin.title"
          :price="coin.price"
          :change="coin.change"
          :icon="coin.icon"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import CryptoCard from '@/components/CryptoCard.vue'
import { NuxtLink } from '#components'

const coins = [
  {
    title: 'Bitcoin',
    price: 67000,
    change: 1.2,
    icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
  },
  {
    title: 'Ethereum',
    price: 3100,
    change: -0.8,
    icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
  },
  {
    title: 'Solana',
    price: 145,
    change: 3.5,
    icon: 'https://cryptologos.cc/logos/solana-sol-logo.png'
  }
]
</script>
