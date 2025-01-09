<template>
    <div class="bg-zinc-900 border-lime-600 font-mono min-w-40 max-w-96 w-full rounded-lg border-4 ease duration-300 p-6">
        <pre>{{ test }}</pre>
        <pre v-if="lastCommit">{{ lastCommit }}</pre>
        <p v-else>Chargement...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Variables et URLs
const lastCommit = ref(null);

const fetchLastCommit = async () => {
    try {
        
        const commit = await $fetch("/api/getLastCommit", {
            method: "GET",
        });

        // Récupérer les informations du dernier commit
        if (commit) {
            lastCommit.value = `Message: ${commit.commit.message}\nAuteur: ${commit.commit.author.name}\nDate: ${commit.commit.author.date}`;
        } else {
            lastCommit.value = "Aucun commit trouvé.";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des commits :", error);
        lastCommit.value = "Une erreur est survenue lors de la récupération du commit.";
    }
};

// Appeler la fonction lors du montage du composant
onMounted(() => {
    fetchLastCommit();
});
</script>