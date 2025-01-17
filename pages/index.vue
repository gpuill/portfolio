<template>
    <main class="flex flex-col">
        <section class="flex flex-row justify-center items-center w-full p-8 gap-8">
            <NuxtImg class=" rounded-full" src="/static/images/moi.png" densities="x1 x2"/>
            <h1 class="flex flex-row gap-2 not-italic text-4xl">Guillaume Puill 
                <h2 class=" text-4xl text-primary font-bold not-italic">ÉTUDIANT ALTERNANT</h2>
            </h1>
        </section>
        <section class="w-full p-16">
            <h3 class="flex flex-row gap-2 not-italic text-4xl underline text-amber-600">
                Bonjour et bienvenue sur mon site ! 
            </h3>
            <p class="text-2xl px-32 py-16">
                Vous y retrouverez mes projets et les compétences sur lesquelles je suis évalué en BUT informatique. Si jamais vous souhaitez me contacter ou bien regarder mes projets n'hésitez pas à faire nu tour sur mon GITHUB 
            </p>
        </section>
    </main>
</template>



<script setup>
import { useHead } from '@vueuse/head';

useHead({
    title: 'Portfolio - accueil',
    meta: [
        { name: 'description', content: 'Je m\'appelle Guillaume PUILL, je fais des études en informatiques, ceci est mon portfolio ou j\'y présente mes projets, compétences travailler au cours des mes études et de mon travail.' }
    ]
});

</script>