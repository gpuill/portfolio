<template>
    <main id="accueil" class="flex flex-col">
        <section id="section-intro">
            <h2>Portfolio</h2>
            <h1>Guillaume Puill</h1>
        </section>
        <div id="about"></div>
        <section id="cartePresentation" class="">
            <h1>Qui suis-je ?</h1>
            <div id="carteIdentite">
                <NuxtImg class="rounded-full w-24 lg:w-56" src="/static/images/moi.png" densities="x1 x2" />
                <div class="flex flex-col not-italic">
                    <h2 class="text-primary">Guillaume Puill - 21 ans</h2>
                    <h2 class="">Développeur Fullstack</h2>
                    <h2 class="">BUT 3 - IUT Lannion</h2>
                </div>
            </div>
        </section>
        <section class="w-full p-2 sm:p-16">

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
                    fill="#187FFFaa" stroke="none" />

                <!-- Chemin utilisé pour GSAP (invisible) -->
                <path id="cheminexemple"
                    d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 T 2700 100 T 3000 100"
                    fill="none" stroke="none" stroke-width="2" />

                <path id="wavePath" d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100" fill="none" stroke="none"
                    stroke-width="2" />
                <path id="wavePath2" d="M 900 100 Q 1050 150, 1200 100 T 1500 100 T 1800 100 T 2100 100" fill="none"
                    stroke="none" stroke-width="2" />
                <path id="wavePath3" d="M 2100 100 Q 2250 150, 2400 100 T 2700 100 T 3000 100" fill="none" stroke="none"
                    stroke-width="2" />
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
                <div id="curved-corner-bottomleft">

                </div>
                <div id="curved-corner-topleft">

                </div>
                <div id="curved-corner-bottomright">

                </div>
                <div id="curved-corner-topright">

                </div>
            </div>
        </div>

    </main>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import MotionPathPlugin from "gsap/MotionPathPlugin"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

onMounted(() => {
    const wave = document.querySelector < HTMLElement > (".background-wave")
    const mover = document.querySelector < HTMLElement > ("#movingObject")
    if (!wave || !mover) return

    // Optionnel: garantir un état clean côté SSR/responsive
    ScrollTrigger.saveStyles([".background-wave", "#movingObject"])

    // 1) Toujours fixer la vague en bas du viewport (même si on est déjà scrollé)
    const placeAtBottom = () => {
        gsap.set(wave, {
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            clearProps: "y,x,top" // au cas où des styles précédents trainent
        })
    }

    // 2) Cacher -> révéler une fois que ScrollTrigger a fini son refresh
    gsap.set([wave, mover], { autoAlpha: 0, visibility: "hidden" })

    // Recalage AVANT le calcul des triggers
    ScrollTrigger.addEventListener("refreshInit", placeAtBottom)

    // Révélation APRÈS calcul (layout OK, positions stables)
    ScrollTrigger.addEventListener("refresh", () => {
        placeAtBottom()
        gsap.to([wave, mover], { autoAlpha: 1, duration: 0.2, overwrite: true })
    })

    // 3) Timeline de ta vague
    //    - immediateRender:false => n’injecte pas l’état "from" si on n’est pas au tout début
    //    - invalidateOnRefresh:true => recalcule tout si le viewport change
    const tl = gsap.timeline({
        defaults: { ease: "none", immediateRender: false },
        scrollTrigger: {
            trigger: document.documentElement, // toute la page
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            invalidateOnRefresh: true
        }
    })

    // 👇 Si tu as plusieurs segments (#wavePath, #wavePath2, #wavePath3)
    tl.to("#movingObject", {
        motionPath: {
            path: ["#wavePath", "#wavePath2", "#wavePath3"],
            align: ["#wavePath", "#wavePath2", "#wavePath3"],
            autoRotate: true,
            alignOrigin: [0.5, 0.5]
        }
    })

    // 4) Rafraîchir quand tout est chargé (images, fonts) + un rAF de sécurité
    const doRefresh = () => requestAnimationFrame(() => ScrollTrigger.refresh())
    if (document.readyState === "complete") {
        doRefresh()
    } else {
        window.addEventListener("load", doRefresh, { once: true })
    }

    // 5) Clean-up en sortie (changement de page/layout)
    onUnmounted(() => {
        // Tue uniquement ce qu’on a créé ici
        tl.scrollTrigger?.kill()
        tl.kill()
        // Retire les listeners (important si composant réutilisé)
        ScrollTrigger.removeEventListener("refreshInit", placeAtBottom)
    })
})


</script>

<style>
#curved-corner-bottomleft,
#curved-corner-bottomright,
#curved-corner-topleft,
#curved-corner-topright {
    width: 150px;
    height: 50px;
    overflow: hidden;
    position: relative;
}

#curved-corner-bottomleft:before,
#curved-corner-bottomright:before,
#curved-corner-topleft:before,
#curved-corner-topright:before {
    content: "";
    display: block;
    width: 200%;
    height: 200%;
    position: absolute;
    border-radius: 50%;
}

#curved-corner-bottomleft:before {
    bottom: 0;
    left: 0;
    box-shadow: -50px 50px 0 0 #F5DCD5;
}

#curved-corner-bottomright:before {
    bottom: 0;
    right: 0;
    box-shadow: 50px 50px 0 0 #F5DCD5;
}

#curved-corner-topleft:before {
    top: 0;
    left: 0;
    box-shadow: -50px -50px 0 0 #F5DCD5;
}

#curved-corner-topright:before {
    top: 0;
    right: 0;
    box-shadow: 50px -50px 0 0 #F5DCD5;
}
</style>