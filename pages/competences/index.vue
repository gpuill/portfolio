<template>
    <h1>Competences</h1>
    <li v-for="post in posts" :key="post.id">
        <pre>{{ post }}</pre>
        <NuxtLink :to="`/competences/${post.id}`">lien</NuxtLink>

    </li>
</template>

<script setup>
const { data: posts, pending, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>