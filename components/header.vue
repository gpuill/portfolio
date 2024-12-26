<template>
    <header>
        <nav class="nav_">
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/projets">Projets</NuxtLink>
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/competences">Competences</NuxtLink>
            <UTooltip text="Accueil" :popper="{ arrow: true }">
                <NuxtLink to="/"><img src="/static/images/GP_grandformat.png" ></NuxtLink>
            </UTooltip>
            <NuxtLink class="hover:ease hover:bg-zinc-700 sm: mn-none" to="/contact">Contact</NuxtLink>
        </nav>
    </header>
</template>

<style lang="scss">
@use "~/assets/scss/components/header.scss"
</style>