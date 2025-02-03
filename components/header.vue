<template>
    <header class="">
        <UHorizontalNavigation :links="links_horizontal" class="hidden horizontalNaviagationes lg:flex hover:text-primary" />
        <NuxtLink class="flex lg:hidden" to="/">
                    <NuxtImg
                    preload 
                    class="min-w-16 max-h-24 w-full p-2"
                    src="/static/images/logo_guillaume.svg"
                    densities="x1"
                    loading="lazy"
                    />
                </NuxtLink>
        <UButton
            icon="heroicons:bars-3-bottom-right-20-solid"
            size="xl"
            class="flex lg:hidden h-fit w-fit absolute end-10 top-8 z-10"
            color="primary"
            square
            variant="solid"
            @click="isOpen = true"
        />
        <USlideover v-model="isOpen">
            <div class="py-20 px-4 flex-1">
                <UButton
                color="gray"
                variant="ghost"
                size="xl"
                icon="i-heroicons-x-mark-20-solid"
                class="flex lg:hidden absolute end-5 top-5 z-10"
                square
                padded
                @click="isOpen = false"
                />
                <UVerticalNavigation :links="links_vertical" @click="isOpen = false"/>
            </div>
        </USlideover>

    </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const links_horizontal = [
    {
        label: 'Projets',
        to: '/projets',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    },
    {
        avatar: {
            src:'/static/images/logo_guillaume.svg',
            as:'img',
            imgClass:'rounded-md min-w-16 max-h-20 w-full p-2',
            size:'3xl'
        },
        to: '/',
    },
    {
        label: 'Compétences',
        to: '/competences',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    }
    ,
    {
        label: 'À propos',
        to: '/about',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    }
    
    
]
/*
,
    {
        label: 'Contact',
        to: '/contact',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    }
,
    {
        label: 'À propos',
        to: '/about',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    }
        */
const links_vertical = [
    {
        label: 'Accueil',
        to: '/',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
        icon:'heroicons:home-20-solid',
        iconClass:'heroicons:home-20-solid',
    },
    {
        label: 'Projets',
        to: '/projets',
        icon:'heroicons:cpu-chip-20-solid',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    },
    {
        label: 'Compétences',
        to: '/competences',
        icon:'heroicons:academic-cap-solid',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    },
    {
        label: 'Contact',
        to: '/contact',
        icon:'heroicons:envelope-20-solid',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    },
    {
        label: 'À propos',
        to: '/about',
        icon:'heroicons:identification-20-solid',
        labelClass:'text-xl',
        linkClass:'hover:text-primary',
    }
]

</script>

<style lang="scss">
@use "~/assets/scss/components/header.scss"
</style>