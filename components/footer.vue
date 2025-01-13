<template>
    <footer class="bg-lime-950">
        <last-commit-portfolio-no-API/>
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
            <NuxtLink to="/lore">
                <span>Le lore</span>
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