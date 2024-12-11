<template>
    <h1>Competences</h1>
    <li v-for="post in posts" :key="post.id">
        <pre>{{ post }}</pre>
        <NuxtLink :to="`/competences/${post.id}`">lien</NuxtLink>

    </li>
</template>

<script setup>
import { useHead } from '@vueuse/head';

useHead({
    title: 'Titre personnalisé de la page',
    meta: [
        { name: 'description', content: 'Description de la page' }
    ]
});


const { data: posts, pending, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>