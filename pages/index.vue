<template>
    <main class="flex flex-col justify-center">
        <section class="flex flex-row justify-end items-center w-full h-[40vh] p-8 gap-8">
            <NuxtImg class=" rounded-full" src="/static/images/moi.png" densities="x1 x2"/>
            <div class="flex flex-row gap-2 not-italic text-4xl">
                <h2 class="not-italic text-4xl">Je suis Guillaume Puill, </h2>
                <h1 class=" text-4xl text-primary font-bold not-italic">ÉTUDIANT & ALTERNANT</h1>
            </div>
        </section>
        <section class="w-full p-16">
            <h3 class="flex flex-row gap-2 not-italic text-4xl ">
                Bonjour et bienvenue sur mon site 🌱 ! 
            </h3>
            <p class="text-2xl px-32 py-16">
                Je m'appelle Guillaume Puill, j'ai 21 ans, je suis alternant à l'IUT de Lannion en BUT Informatique, en 3ᵉ année, et je travaille à Brest. Vous y retrouverez mes projets ainsi que les compétences sur lesquelles je suis évalué en BUT Informatique. Si jamais vous souhaitez me contacter, mes réseaux sociaux et mes coordonnées sont juste en dessous ⬇️.            </p>
            <p class="text-4xl px-32 py-16 text-amber-400">
                Je souhaiterai poursuivre mes études en école d'ingénieur en alternance !
            </p>
        </section>
        <section class="reseaux w-full flex flex-col items-center  p-12">
            <h2 class="text-black text-4xl ">Mes réseaux</h2>
            <div class="flex flex-row justify-center gap-8">
                <NuxtLink class="w-32 h-32 flex items-center justify-center rounded-full border-4 border-amber-400 " to="https://github.com/gpuill">
                    <UIcon class="w-24 h-24" name="logos:github-icon" alt="Github" />
                </NuxtLink> 
                <NuxtLink class="w-32 h-32 flex items-center justify-center rounded-full border-4 border-amber-400 " to="https://www.linkedin.com/in/guillaume-puill-295021262/">
                    <img class="w-20 h-20" src="/static/images/icons/linkedin-icon.svg" alt="Linkedin">
                </NuxtLink> 
            </div>
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