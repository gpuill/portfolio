<template>
    <div class="flex flex-row flex-wrap justify-around p-8 items-center">
        <competence-card v-for="comp in competences" :key="comp.nom" :nom="comp.nom" :id="comp.nom"
                                                        :résumé="comp.résumé" :logo="comp.logo"
                                                        :description="comp.description" 
                                                        :mainColor="comp.couleur"/>

    </div>   
</template>

<script setup>
import { useHead } from '@vueuse/head';


useHead({
    title: 'Les compétences du BUT',
    meta: [
        { name: 'description', content: 'Description de la page' }
    ]
});

</script>

<script >
import competences from '@/assets/content/competence.json'
import competenceCard from '~/components/competence-card.vue';

export default {
    components: {
        competenceCard
    },
    data() {
        return {
            competences
        }
    }
}

</script>