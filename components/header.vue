<template>
    <header>
        <nav class="nav_">
            <NuxtLink class="item_nav_basse" to="/projets">Projets</NuxtLink>
            <NuxtLink class="item_nav_basse" to="/competences">Competences</NuxtLink>
            <UTooltip text="Accueil" :popper="{ arrow: true }">
                <NuxtLink to="/"><img src="/assets/images/GP_grandformat.png" ></NuxtLink>
            </UTooltip>
            <UTooltip class="item_nav_basse" text="Tooltip example" :shortcuts="['⌘', 'O']" :popper="{ arrow: true }">
                <NuxtLink to="/contact">Contact</NuxtLink>
            </UTooltip>
        </nav>
    </header>
</template>