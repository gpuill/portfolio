<template>
    <h1>Projets</h1>
    <li v-for="post in posts" :key="post.id">
        <pre>{{ post }}</pre>
        <NuxtLink :to="`/competences/${post.id}`">lien</NuxtLink>

    </li>
</template>

<script setup>

</script>