<template>
    <footer class="bg-lime-950">
        <UTooltip text="Accueil" :popper="{ arrow: true }">
            <NuxtLink to="/"><img src="/assets/images/GP_grandformat.png" ></NuxtLink>
        </UTooltip>
        <div class="menu_wrap">

        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi, recusandae molestias tempora sequi vero ratione totam quae, dolorum aliquam beatae minus consequatur? Aspernatur perferendis ipsum, reprehenderit provident possimus distinctio.</p>
    </footer>
</template>

<style lang="scss">
@use "~/assets/scss/components/footer.scss"
</style>