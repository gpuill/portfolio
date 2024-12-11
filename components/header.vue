<template>
    <header>
        <nav>
            <NuxtLink to="/projets">Projets</NuxtLink>
            <NuxtLink to="/competences">Competences</NuxtLink>
            <UTooltip text="Accueil" :popper="{ arrow: true }">
                <NuxtLink to="/"><img src="/assets/images/GP_grandformat.png" ></NuxtLink>
            </UTooltip>
            <UTooltip text="Tooltip example" :shortcuts="['⌘', 'O']" :popper="{ arrow: true }">
                <NuxtLink to="/contact">Contact</NuxtLink>
            </UTooltip>
        </nav>
    </header>
</template>