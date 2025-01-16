<template>
    <div class="flex flex-col max-w-xs md:max-w-lg w-fit p-6 md:p-12 rounded-3xl gap-4 items-center" :style="{ backgroundColor: mainColor }">
        <div class="flex flex-nowrap justify-start items-center gap-5 ">
            <UIcon :name="`${logo}`" class="w-12 h-12" />  
            <h2 class="text-xl font-bold md:text-2xl">{{ nom }}</h2>
        </div>
        <p class="text-base font-medium md:text-lg">{{ résumé }}</p>
    </div>
</template>


<script>
export default {
    props: {
        nom: String,
        résumé: String,
        description: String,
        mainColor: String,
        secondaryColor: String,
        logo: String,
    }


};
</script>

<style lang="scss">
@use "~/assets/scss/components/project-card.scss";
</style>