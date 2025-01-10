
export default defineEventHandler(async (event) => {

    const config = useRuntimeConfig(event);
    const urlGetMaster = "https://api.github.com/repos/gpuill/portfolio/git/refs/heads/master";

    const config1 = {
        method: "GET",
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${config.githubToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
            
        },
    } as any
    console.log(process.env)

    return process.env;
});
