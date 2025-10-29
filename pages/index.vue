<template>
    <main id="accueil" class="flex flex-col">
        <ColorBends class-name="fond" style="" :colors="['#ff5c7a', '#8a5cff', '#00ffd1']" :rotation="0" :speed="0.3"
            :scale="0.2" :frequency="1.7" :warpStrength="1" :mouseInfluence="0.8" :parallax="0.5" :noise="0.08"
            transparent />
        <section id="section-intro">
            <h2>Portfolio</h2>
            <h1>Guillaume Puill</h1>
            <h3>Pour Guillaume Bébou et Johan Bébou qu'ils arrêtent de me broyer les couilles avec ce portfolio de
                mort
            </h3>

        </section>


    </main>
</template>

<script setup>
import ColorBends from '@/components/vue-bits/ColorBends.vue'

</script>

<style>
.fond {
    position: absolute;
    top: 0;
    height: 100%;
}
</style>