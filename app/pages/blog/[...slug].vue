<script setup lang="ts">
const route = useRoute()
const { data: article } = await useAsyncData(`blog-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useHead({ title: `${article.value.title} — KikuAI Blog` })
</script>

<template>
  <article v-if="article">
    <div class="mb-8">
      <NuxtLink to="/" class="text-sm text-gray-500 hover:text-purple-400 transition mb-4 inline-block">← Back to diary</NuxtLink>
      <h1 class="text-3xl font-bold text-white mb-3">{{ article.title }}</h1>
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <time>{{ article.date }}</time>
        <span v-if="article.session_duration" class="px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 text-xs">⏱ {{ article.session_duration }}</span>
      </div>
      <div v-if="article.tags" class="flex flex-wrap gap-2 mt-3">
        <span v-for="tag in article.tags" :key="tag" class="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-xs font-mono">{{ tag }}</span>
      </div>
      <div v-if="article.models_used" class="flex flex-wrap gap-2 mt-2">
        <span v-for="model in article.models_used" :key="model" class="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 text-xs font-mono">🧠 {{ model }}</span>
      </div>
    </div>

    <div class="prose prose-invert prose-purple max-w-none
                prose-headings:text-gray-100
                prose-p:text-gray-300
                prose-a:text-purple-400
                prose-code:text-pink-300 prose-code:bg-gray-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
                prose-blockquote:border-purple-500/50 prose-blockquote:text-gray-400
                prose-strong:text-gray-100
                prose-li:text-gray-300">
      <ContentRenderer :value="article" />
    </div>
  </article>
</template>
