<template>
    <main class="flex flex-col justify-center">
        <section class="flex flex-row justify-end items-center w-full h-fit p-8 gap-8">
            <div class="flex flex-row gap-2 not-italic text-4xl">
                <h2 class="not-italic text-4xl text-end">Je suis Guillaume Puill, <strong
                        class="text-primary">développeur fullstack</strong></h2>
            </div>
        </section>
        <section class="w-full p-2 sm:p-16">
            <p class="text-2xl px-8 py-2 leading-8">
                Je m'appelle Guillaume Puill, j'ai 21 ans, je suis actuellement en 3e année de BUT informatique en
                alternance à l'IUT de Lannion</p>
            <p class="text-4xl px-8 py-2 text-amber-400">
                Je souhaiterai poursuivre mes études en école d'ingénieur en alternance !
            </p>
            <NuxtImg class="rounded-full" src="/static/images/moi.png" densities="x1 x2" />

        </section>
        <div class="background-wave">
            <svg width="100%" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Vague remplie pour l'aspect visuel -->
                <path
                    d="M 0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100 V 200 H 0 Z"
                    fill="blue" stroke="none" />

                <!-- Chemin utilisé pour GSAP (invisible) -->
                <path id="wavePath"
                    d="M 0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100"
                    fill="none" stroke="red" stroke-width="2" />

                <!-- Objet qui suit le chemin -->
                <circle id="movingObject" cx="0" cy="100" r="10" fill="red" />
            </svg>
            <div class="background">

            </div>
        </div>

    </main>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";


gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

useHead({
    title: 'Portfolio - accueil',
    meta: [
        { name: 'description', content: 'Je m\'appelle Guillaume PUILL, je fais des études en informatiques, ceci est mon portfolio ou j\'y présente mes projets, compétences travailler au cours des mes études et de mon travail.' }
    ]
});

onMounted(() => {

        /* gsap.from(".texte", {
        text: "", // Commence vide
        duration: 2,
        ease: "power1.out"
    }); */

    // Fait monter la vague avec le scroll
    gsap.to(".background-wave", {
        scrollTrigger: {
            trigger: "main",
            scrub: 1,
            start: "top top",
            end: "bottom top"
        },
        y: "-50vh", // Fait monter la vague progressivement
        ease: "none"
    });

    // Fait bouger un élément (ex: un cercle) sur la vague
    gsap.to("#movingObject", {
        scrollTrigger: {
            trigger: ".background-wave",
            scrub: 1,
            start: "top top",
            end: "bottom top"
        },
        motionPath: {
            path: "#wavePath",
            align: "#wavePath",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        duration: 3,
        ease: "power1.inOut"
    });
});


onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
});

</script>