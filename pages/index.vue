<template>
    <main>
        <div class="main-hello">
            <h1 class="sm:bg-black xl:bg-red-300">Bonjour</h1>
        </div>
        <div class="main-content">
            <div class="grid">
                <img src="/assets/images/moi.png" alt="Photo contractuel" name="Photo contractuel">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa totam, libero, commodi pariatur dolorum amet non, omnis quod sed eos saepe nobis iure? Omnis suscipit asperiores sequi placeat voluptate amet?</p>
            </div>
        </div>
        <p class="remplissage">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis inventore molestias molestiae quis a! Odit, deserunt laboriosam dignissimos magni delectus vel doloribus voluptatum eligendi eius voluptate, aperiam, earum eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nobis consectetur repudiandae voluptas labore fugiat at quis aliquam! Voluptates cum voluptas maiores fugiat officia facilis reiciendis nam corporis accusantium in?</p>
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