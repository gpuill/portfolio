<template>
    <main id="accueil" class="flex flex-col">
        <section id="section-intro">
            <h2>Portfolio</h2>
            <h1>Guillaume Puill</h1>
        </section>
        <section id="cartePresentation" class="">
            <h1>Qui suis-je ?</h1>
            <div id="carteIdentite">
                <NuxtImg class="rounded-full" src="/static/images/moi.png" densities="x1 x2" />
                <div class="flex flex-col gap-4 not-italic text-4xl">
                    <h2 class="text-primary">Guillaume Puill</h2>
                    <h2 class="text-primary">Développeur Fullstack</h2>
                    <h2 class="text-primary">BUT 3 - IUT Lannion</h2>
                </div>
            </div>
        </section>
        <div id="about"></div>
        <section  class="w-full p-2 sm:p-16">
            <p class="text-2xl px-8 py-2 leading-8">
                Je m'appelle Guillaume Puill, j'ai 21 ans, je suis actuellement en 3e année de BUT informatique en
                alternance à l'IUT de Lannion</p>
            <p class="text-4xl px-8 py-2 text-amber-400">
                Je souhaiterai poursuivre mes études en école d'ingénieur en alternance !
            </p>

        </section>
        <section id="competences">

        </section>

        <div class="background-wave">
            <svg id="wave-svg" width="100%" height="200px" viewBox="0 0 3000 200" preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg">
                <!-- Vague remplie pour l'aspect visuel -->
                <path
                    d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 T 2700 100 T 3000 100 V 200 H 0 Z"
                    fill="#1e3a8aaa" stroke="none" />

                <!-- Chemin utilisé pour GSAP (invisible) -->
                <path id="cheminexemple"
                    d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 T 2700 100 T 3000 100"
                    fill="none" stroke="none" stroke-width="2" />

                <path id="wavePath"
                    d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100"
                    fill="none" stroke="none" stroke-width="2" />
                <path id="wavePath2"
                    d="M 900 100 Q 1050 150, 1200 100 T 1500 100 T 1800 100 T 2100 100"
                    fill="none" stroke="none" stroke-width="2" />
                <path id="wavePath3"
                    d="M 2100 100 Q 2250 150, 2400 100 T 2700 100 T 3000 100"
                    fill="none" stroke="none" stroke-width="2" />
            </svg>
            <div id="movingObject">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                    <defs>
                        <mask id="ipTPaperShip0">
                            <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4">
                                <path fill="#555" stroke-linecap="round"
                                    d="m4 24l8.571 18L24 29zm40 0l-8.571 18L24 29zM13 42h22L24 29z" />
                                <path d="M12 26L24 4l12 22" />
                            </g>
                        </mask>
                    </defs>
                    <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPaperShip0)" />
                </svg>
            </div>
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

    gsap.fromTo(".background-wave",{
        y:"95vh",
    },{
        scrollTrigger: {
            trigger: ".background-wave",
            scrub: 0.5,
            start: "top bottom",
            end: "top -10%",
        },
        y: "10vh", // Fait monter la vague progressivement
        ease: "none",
        onComplete: () => {
            console.log("finished")
        },
    });



    // Fait bouger un élément (ex: un cercle) sur la vague
    gsap.to("#movingObject", {
        scrollTrigger: {
            trigger: "#wavePath",
            scrub: 1,
            start: "top bottom",
            end: "top 33%",
            toggleActions: "play none none reverse",
        },
        motionPath: {
            path: "#wavePath",
            align: "#wavePath",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        ease: "power1.inOut"
    });

    gsap.to("#movingObject", {
        scrollTrigger: {
            trigger: "#wavePath2",
            scrub: 1,
            start: "top 33%",
            end: "top -45%",
            toggleActions: "play none none reverse",
        },
        motionPath: {
            path: "#wavePath2",
            align: "#wavePath2",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        ease: "power1.inOut"
    });


    gsap.to("#movingObject", {
        scrollTrigger: {
            trigger: "#wavePath3",
            scrub: 1,
            start: "bottom -45%",
            end: "bottom -100%",
            toggleActions: "play none none reverse",
        },
        motionPath: {
            path: "#wavePath3",
            align: "#wavePath3",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        ease: "power1.inOut"
    });
});


onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
});

</script>