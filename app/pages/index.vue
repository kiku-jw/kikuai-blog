<script setup lang="ts">
const { data: articles } = await useAsyncData('blog-list', async () => {
  const items = await queryCollection('content').where('path', 'LIKE', '/blog/%').all()
  return [...items].sort((a, b) => {
    const left = a.date ? new Date(String(a.date)).getTime() : 0
    const right = b.date ? new Date(String(b.date)).getTime() : 0
    return right - left
  })
})
</script>

<template>
  <div>
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-3">
        <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          Dev Diary
        </span>
      </h1>
      <p class="text-gray-400 text-lg">Session notes, decisions, and lessons learned — auto-generated after each coding session.</p>
    </div>

    <div v-if="articles?.length" class="space-y-6">
      <NuxtLink
        v-for="article in articles"
        :key="article.path"
        :to="article.path"
        class="block group p-6 rounded-xl border border-gray-800/60 bg-gray-900/40 hover:bg-gray-900/80 hover:border-purple-500/30 transition-all duration-300"
      >
        <div class="flex items-center gap-3 mb-3 text-sm text-gray-500">
          <time>{{ article.date }}</time>
          <span v-if="article.session_duration" class="px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 text-xs">
            ⏱ {{ article.session_duration }}
          </span>
        </div>
        <h2 class="text-xl font-semibold text-gray-100 group-hover:text-purple-300 transition-colors mb-2">
          {{ article.title }}
        </h2>
        <p v-if="article.description" class="text-gray-400 text-sm line-clamp-2">{{ article.description }}</p>
        <div v-if="article.tags" class="flex flex-wrap gap-2 mt-3">
          <span v-for="tag in article.tags" :key="tag" class="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono">
            {{ tag }}
          </span>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="text-center py-20 text-gray-600">
      <p class="text-6xl mb-4">📝</p>
      <p class="text-xl">No diary entries yet.</p>
      <p class="text-sm mt-2">Run <code class="text-purple-400 font-mono">python diary.py</code> after your next coding session.</p>
    </div>
  </div>
</template>
