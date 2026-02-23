<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <header class="border-b border-gray-800/50 backdrop-blur-md bg-gray-950/80 sticky top-0 z-50">
      <nav class="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition">
          🤖 KikuAI
        </NuxtLink>
        <div class="flex gap-6 text-sm text-gray-400">
          <NuxtLink to="/" class="hover:text-white transition">Blog</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="max-w-3xl mx-auto px-6 py-12">
      <NuxtPage />
    </main>

    <footer class="border-t border-gray-800/50 mt-20">
      <div class="max-w-3xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
        Auto-generated vibecoder diary · KikuAI Corp
      </div>
    </footer>
  </div>
</template>
