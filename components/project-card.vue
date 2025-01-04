<template>
    <div class="project-card" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }">
        <div class="project-header">
            <img v-if="logo" :src="logo" :alt="nom" class="project-logo" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }"/>
            <img v-else :src="`/static/images/icons/${topTechnologies[0]}-icon.png`" :alt="nom" class="project-logo" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }"/>
            <h2>{{ nom }}</h2>
        </div>
        <div class="tags-container">

        </div>
        <p class="project-resume">{{ resume }}</p>
        <div class="project-technologies">
            <div class="all-technos">
                <div v-for="(tech, index) in topTechnologies" :key="index" class="technology-icon">
                    <img :src="`/static/images/icons/${tech}-icon.png`" :alt="tech" />
                </div>  
            </div>
            <a v-if="github" :href="github" class="github-link"><img :src="`/static/images/icons/github-icon.png`" :alt="`Lien github vers le projet ${nom}`"></a>
            <img v-else class="no-github-image" src="/static/images/icons/no-github-icon.png" alt="">
        </div>
        
    </div>
</template>


<script>
export default {
    props: {
        formation: String,
        annee: Number,
        nom: String,
        github: String,
        resume: String,
        technologie: Array,
        mainColor: String,
        secondaryColor: String,
        logo: String
    },
    computed: {
        topTechnologies() {
            // Retourne les trois premières technologies
            return this.technologie.slice(0, 3);
        }
    },
    methods: {
        getTechIcon(tech) {
            try {
                // Import dynamique des icônes
                return new URL(`@/assets/images/icons/${tech}-icon.png`, import.meta.url).href;

            } catch (e) {
                // Icône par défaut en cas d'erreur
                return new URL('/assets/images/icons/default-icon.png', import.meta.url).href;
            }
        }
    }


};
</script>

<style lang="scss">
@use "~/assets/scss/components/project-card.scss";
</style>