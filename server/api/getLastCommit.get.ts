
export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig(event);
    const urlGetMaster = "https://api.github.com/repos/gpuill/portfolio/git/refs/heads/master";
    const headers = getRequestHeaders(event)
    console.log(headers.Host)
    console.log(headers)

    const config1 = {
        method: "GET",
        Headers:headers
    } as any
    try {
        const jsonMaster:JSON = await $fetch(urlGetMaster, config1) as any;
        return jsonMaster;
    } catch (error) {

        return error
    }
        

});