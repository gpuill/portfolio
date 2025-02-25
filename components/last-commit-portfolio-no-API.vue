<template>
    <div class="
    bg-zinc-900 border-lime-600 font-mono 
    p-2 w-fit h-fit
    sm:p-4 
    md:p-6
    rounded-lg border-4 ease duration-300 
    lg:

    ">
        <pre v-if="lastCommit" 
        class="text-xs
        sm:text-sm
        md:text-lg
        
        ">{{ lastCommit }}</pre>
        <p v-else>Chargement...</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Variables et URLs
const lastCommit = ref(null);

const fetchLastCommit = async () => {
    try {
        
        const token = await $fetch("/api/getGitToken", {
            method: "GET",
        });
        const urlGetMaster = "https://api.github.com/repos/gpuill/portfolio/git/refs/heads/master";

        const config1 = {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`,
                "X-GitHub-Api-Version": "2022-11-28",
                
            },
        }


        const jsonMaster = await $fetch(urlGetMaster, config1);

        // Extraire le SHA de la réponse
        const sha = jsonMaster.object.sha;

        // Étape 2 : Construire l'URL pour récupérer les commits
        const urlGetCommits = `https://api.github.com/repos/gpuill/portfolio/commits/${sha}`;

        // Étape 3 : Récupérer les commits (le plus récent est le premier)
        const commit = await $fetch(urlGetCommits, {
            method: "GET",
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${token}`,
                "X-GitHub-Api-Version": "2022-11-28",

            },
        });


        // Récupérer les informations du dernier commit
        if (commit) {
            lastCommit.value = `Nom: ${commit.commit.message}\nDate: ${commit.commit.author.date.substring(0,10)}`;
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