<template>
    <main style="place-content: center; place-items: center;">
        <div class="">

        </div>
        <div class="remplissage">
            <p class="texte">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolore tenetur laborum officia deleniti dolorum distinctio deserunt libero accusamus tempora!
            </p>
        </div>

        <div class="box-timeline">

            <div class="ligne"></div>


            <div class="round r1" data-anim="1">🔥</div>
            <div class="round r2" data-anim="2">🧮</div>
            <div class="round r3" data-anim="3">👟</div>
            <div class="round r4" data-anim="4">💢</div>

            <div class="box b1" data-anim="1">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia! Voluptatibus, voluptates
                    deserunt? Quis nihil, eligendi eos obcaecati libero alias ipsa eaque atque cum est!</p>
                <a href="#" class="btn"> Lorem, ipsum.</a>
            </div>
            <div class="box b2" data-anim="2">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia! Voluptatibus, voluptates
                    deserunt? Quis nihil, eligendi eos obcaecati libero alias ipsa eaque atque cum est!</p>
                <a href="#" class="btn"> Lorem, ipsum.</a>
            </div>
            <div class="box b3" data-anim="3">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia! Voluptatibus, voluptates
                    deserunt? Quis nihil, eligendi eos obcaecati libero alias ipsa eaque atque cum est!</p>
                <a href="#" class="btn"> Lorem, ipsum.</a>
            </div>
            <div class="box b4" data-anim="4">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia! Voluptatibus, voluptates
                    deserunt? Quis nihil, eligendi eos obcaecati libero alias ipsa eaque atque cum est!</p>
                <a href="#" class="btn"> Lorem, ipsum.</a>
            </div>

        </div>

    </main>
</template>

<style lang="scss">
@use "~/assets/scss/about.scss";
</style>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger,TextPlugin); 


useHead({
    title: 'Portfolio - À propos'
});


onMounted(() => {


    gsap.from(".texte", {
        text: "", // Commence vide
        duration: 2,
        ease: "power1.out"
    });
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach((box, index) => {
        gsap.fromTo(box, 
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0, // L'élément se déplace légèrement vers le haut au fil du scroll
                duration: 1.2,
                scrollTrigger: {
                    trigger: box,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: true, // Animation liée au scroll
                    toggleActions: "play none none reverse",
                }
            }
        );
    });
});

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();
});

</script>