<template>
    <div>
        <h1>Mes Projets</h1>
        <div class="project-container">
            <div v-for="projet in projets" :key="projet.id" class="project-row">
                <project-card :formation="projet.formation" :annee="projet.annee" :nom="projet.nom"
                    :github="projet.github" :resume="projet.resume" :technologie="projet.technologie"
                    :mainColor="projet['main-color']" :secondaryColor="projet['secondary-color']" :logo="projet.logo" />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from '@/components/project-card.vue'
import projets from '@/assets/content/projets.json'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projets
        }
    }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/projets.scss";
</style>


<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}
</style>