<template>
    <header>
        <UHorizontalNavigation :links="links_horizontal" class="hidden horizontalNaviagationes lg:flex hover:text-primary" />
        <UTooltip class="flex lg:hidden p-2 border-4 border-secondary rounded-xl" text="Accueil" :popper="{ arrow: true }">
                <NuxtLink to="/">
                    <NuxtImg
                    preload 
                    class="min-w-16 max-h-24 w-full p-2"
                    src="/static/images/logo_guillaume.svg"
                    densities="x1"
                    loading="lazy"
                    />
                </NuxtLink>
        </UTooltip>

    </header>
</template>

<script setup>


const links_horizontal = [{
    label: 'Projets',
    icon: 'i-heroicons-home',
    to: '/projets',
    labelClass:'text-xl',
    linkClass:'hover:text-primary',
},
{
    label: 'Compétences',
    icon: '',
    to: '/competences',
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
    label: 'Contact',
    icon: '',
    to: '/contact',
    labelClass:'text-xl',
    linkClass:'hover:text-primary',
},
{
    label: 'À propos',
    icon: '',
    to: '/about',
    labelClass:'text-xl',
    linkClass:'hover:text-primary',
}

]


</script>

<style lang="scss">
@use "~/assets/scss/components/header.scss"
</style>