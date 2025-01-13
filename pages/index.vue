<template>
    <main class="bg-zinc-900">
        <div class="main-hello">
            <h1 class="sm:bg-black xl:bg-red-300">Bonjour</h1>
        </div>
        <div class="main-content">
            <div class="grid">
                <img src="~/assets/images/moi.png" alt="Photo contractuel" name="Photo contractuel">
                <p>Ceci n'est pas moi   </p>
            </div>
            <div class="para-presa">
                <p class="bg-zinc-700 text-2xl font-sans tracking-widest leading-8 max-w-6xl">
                    Bonjour et bienvenue sur mon portfolio, vous pourrez y retrouvés mes projets, une explication des compétences que j'ai pus acquérir au cours de mon BUT et quelque pages que j'ai réaliser pour passer le temps.
                </p>
            </div>
        </div>
        

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