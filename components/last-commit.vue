<template>
  <div class="bg-zinc-100 border-blue -600 font-mono 
    p-2 w-fit h-fit
    sm:p-4 
    md:p-6
    rounded-lg border-4 ease duration-300 
    lg:">
    <div v-if="pending">Chargement...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <p>{{ data.message }}</p>
    </div>
  </div>
</template>

<script script="ts" setup>
const { data, pending, error } = await useLazyFetch('/api/last-commit')

</script>