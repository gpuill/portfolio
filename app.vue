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
    <NuxtPage class="bg-zinc-900"/>
    <Footer />
</template>

<style lang="scss">
@use  "~/assets/scss/main.scss";
</style>