
export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig(event);
    const urlGetMaster = "https://api.github.com/repos/gpuill/portfolio/git/refs/heads/master";

    const config1 = {
        method: "GET",
    } as any
    try {
        const jsonMaster = await $fetch(urlGetMaster, config1) as any;
        return "toto";
    } catch (error) {

        return config1
    }
        

});