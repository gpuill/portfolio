<template>
    <div v-for="projet in projets" :key="projet.id" class="carte-projet">
        <h2>{{ projet.nom }} - {{ projet.id }}</h2>
        <p>{{ projet.description }}</p>
        <p><strong>Technologies :</strong> {{ projet.technologie.join(', ') }}</p>
    </div>
</template>

<script setup>
import projets from "@/assets/content/projets.json";
</script>
