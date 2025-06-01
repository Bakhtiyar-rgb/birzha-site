<template>
  <div>
    <nav class="bg-primary text-white p-4">
      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Главная</NuxtLink></li>
        <li><NuxtLink to="/coin/Bitcoin">Bitcoin</NuxtLink></li>
        <li><NuxtLink to="/coin/Ethereum">Ethereum</NuxtLink></li>
      </ul>
    </nav>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
