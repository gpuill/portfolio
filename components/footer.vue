<template>
    <footer class="bg-lime-950">
        <UTooltip text="Accueil" :popper="{ arrow: true }">
            <NuxtLink to="/"><img src="/static/images/GP_grandformat.png" ></NuxtLink>
        </UTooltip>
        <div class="menu_wrap">
            <NuxtLink to="/projets">
                <span>Projets</span>
            </NuxtLink>
            <NuxtLink to="/competences">
                <span>Compétences</span>
            </NuxtLink>
            <NuxtLink to="/Contact">
                <span>Contact</span>
            </NuxtLink>
            <NuxtLink to="/about">
                <span>À propos</span>
            </NuxtLink>
        </div>
        <div class="media_wrap">
            <NuxtLink to="https://github.com/gpuill">
                <img src="/static/images/icons/github-icon.svg" alt="Github personnel">
            </NuxtLink>
            <NuxtLink to="">
                <img src="/static/images/icons/linkedin-icon.svg" alt="Linkedin">
            </NuxtLink>
            <NuxtLink to=""></NuxtLink>
        </div>
    </footer>
</template>

<style lang="scss">
@use "~/assets/scss/components/footer.scss"
</style>