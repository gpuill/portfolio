<template>
    <main style="place-content: center; place-items: center;">
        <p>
            C'est moi🚀
        </p>
        <pre>
            {{ lastCommit }}
        </pre>

    </main>
</template>


<script setup>
import { ref, onMounted } from "vue";

// Variables et URLs
const lastCommit = ref(null);

const fetchLastCommit = async () => {
    try {
        
        const commit = await $fetch("https://api.github.com/repos/gpuill/portfolio/git/refs/heads/master", {
            method: "GET",
        });
        console.log(commit.object.sha)
        // Récupérer les informations du dernier commit
        if (commit) {
            lastCommit.value = `🚑 ${commit.object.sha} 🚑`;
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