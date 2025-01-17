<template>
    <div class="project-card min-w-64 h-fit sm:max-h-[700px]  md:max-h-[600px] md:h-[600px]" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }">
        <div class="project-header">
            <img v-if="logo.startsWith('/')" :src="logo" alt="Logo Projet" class="project-logo" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }"/>
            <UIcon v-else :name="logo" alt="Logo Projet" class="project-logo" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }"/>
            <h2 class="text-lg md:text-xl">{{ nom }}</h2>
        </div>
        <div class="tags-container" :style="{ backgroundColor: mainColor, borderColor: secondaryColor }">
            <div v-for="(comp, index) in competences" :key="index" class="tag-wrapper w-3/5" :data-skill="comp">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" class="tag" preserveAspectRatio="xMinYMin meet">
                    <path d="M0 0 L180 0 L200 20 L180 40 L0 40 L20 20 Z" fill="currentColor" stroke="white" stroke-width="3" />
                    <circle cx="90%" cy="20" r="5" fill="white" />
                </svg>
                <NuxtLink :to="`/competences#${comp}`">{{ comp }}</NuxtLink>
            </div>  
        </div>
        <p class="project-resume text-xs md:text-base">{{ resume }}</p>
        <div class="project-technologies" :style="{ filter: `drop-shadow(0px 0px 2rem ${mainColor})` }">
            <div class="all-technos">
                <template v-for="(icon, tech) in technologie" :key="tech">
                    <img v-if="icon.startsWith('/')" :src="icon" :alt="tech" class="technology-icon" />
                    <UIcon v-else :name="icon" :alt="tech" class="technology-icon" />
                </template>
            </div>
            <div class="git">
                <a v-if="github" :href="github" class="github-link">
                    <UIcon name="logos:github-icon" class="w-12 h-12" />  
                </a>
            </div>
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
        technologie: {
            type: Object,
            default: () => ({})
        },
        mainColor: String,
        secondaryColor: String,
        logo: String,
        competences: Array
    }   


};
</script>

<style lang="scss">
@use "~/assets/scss/components/project-card.scss";
</style>