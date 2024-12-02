<template>
    <main>
        <h1>
            {{ route.params.id }}
        </h1>
        <pre>
            {{ spouette }}
        </pre>
    </main>
</template>
<script setup>
const route = useRoute()
const { data:spouette, pending, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts?id='+route.params.id,{
    lazy: true
})
</script>