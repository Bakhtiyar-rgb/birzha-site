<template>
  <div>
    <!-- Навбар -->
    <header class="flex justify-between items-center bg-green-500 border-b p-4 flex-wrap max-sm:flex-col">
      <div class="w-1/4 max-sm:w-full">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitcoin.svg" alt="Logo" class="w-12 h-12" />
      </div>
      <div class="flex-grow max-sm:w-full"></div>
      <nav
        class="flex space-x-4 text-white max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:bg-white max-sm:text-black max-sm:w-full"
      >
        <NuxtLink to="/" class="hover:bg-white hover:text-black px-4 py-2 rounded">Главная</NuxtLink>
        <NuxtLink to="/coin/Bitcoin" class="hover:bg-white hover:text-black px-4 py-2 rounded">Bitcoin</NuxtLink>
        <NuxtLink to="/coin/Ethereum" class="hover:bg-white hover:text-black px-4 py-2 rounded">Ethereum</NuxtLink>
      </nav>
    </header>

    <!-- Контент -->
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
