<template>
    <div class="project-card" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }">
        <div class="project-header">
            <img v-if="logo" :src="logo" :alt="nom" class="project-logo" />
            <h2>{{ nom }}</h2>
        </div>
        <p class="project-resume">{{ resume }}</p>
        <p><strong>Formation :</strong> {{ formation }} (Année {{ annee }})</p>
        <p><strong>Technologies :</strong> {{ technologie.join(', ') }}</p>
        <a :href="github" target="_blank" class="github-link">Voir sur GitHub</a>
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
    }
}
</script>

<style lang="scss">
@use  "~/assets/scss/components/project-card.scss";
</style>
