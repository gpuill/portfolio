<template>
    <main class="flex flex-col justify-center">
        <section class="flex flex-row justify-end items-center w-full h-fit p-8 gap-8">
            <div class="flex flex-row gap-2 not-italic text-4xl">
                <h2 class="not-italic text-4xl text-end">Je suis Guillaume Puill, <strong class="text-primary">développeur fullstack</strong></h2>
            </div>
        </section>
        <section class="w-full p-2 sm:p-16">
            <p class="text-2xl px-8 py-2 leading-8">
                Je m'appelle Guillaume Puill, j'ai 21 ans, je suis actuellement en 3e année de BUT informatique en alternance à l'IUT de Lannion</p>
            <p class="text-4xl px-8 py-2 text-amber-400">
                Je souhaiterai poursuivre mes études en école d'ingénieur en alternance !
            </p>
            <NuxtImg class="rounded-full" src="/static/images/moi.png" densities="x1 x2"/>

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