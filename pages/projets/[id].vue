<template>
    <h1></h1>
</template>

<script setup>
const route = useRoute()
const { data:spouette, pending, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts?id='+route.params.id,{
    lazy: true
})
</script>