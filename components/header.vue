<template>
    <header class="fixed top-0 left-0 w-full flex flex-row justify-center z-1000 p-4"> 
        <nav class="flex flex-row justify-center items-center gap-4 w-fit bg-zinc-950 px-8 py-2 rounded-2xl">
            <img src="~/assets/logo/logo_guillaume.svg" class="w-20 h-20" alt=""/>
        </nav>

    </header>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import MotionPathPlugin from "gsap/MotionPathPlugin";


gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin);

</script>