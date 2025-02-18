<template>
    <footer class="bg-primary-700">
        <last-commit-portfolio-no-API class="last_commit_footer"/>
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
            <NuxtLink to="https://www.linkedin.com/in/guillaume-puill-295021262/">
                <img src="/static/images/icons/linkedin-icon.svg" alt="Linkedin">
            </NuxtLink>

        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss">
@use "~/assets/scss/components/footer.scss"
</style>