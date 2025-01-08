<template>
    <header>
        <nav class="nav_">
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/projets">Projets</NuxtLink>
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/competences">Competences</NuxtLink>
            <UTooltip text="Accueil" :popper="{ arrow: true }">
                <NuxtLink to="/">
                    <NuxtImg
                    preload 
                    class="min-w-16 max-h-20 w-full p-2"
                    src="/static/images/logo_guillaume.svg"
                    densities="x1"
                    loading="lazy"
                    />
                </NuxtLink>
            </UTooltip>
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/contact">Contact</NuxtLink>
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/About">À propos</NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss">
@use "~/assets/scss/components/header.scss"
</style>