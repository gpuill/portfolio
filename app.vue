<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <Header />
    <NuxtPage style="background-color: #060D3D;"/>
    <Footer />
</template>

<style lang="scss">
@use  "~/assets/scss/main.scss";
</style>