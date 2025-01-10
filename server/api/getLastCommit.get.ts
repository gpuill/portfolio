import { useLogger } from "nuxt/kit";

export default defineEventHandler(async (event) => {
    const logger = useLogger('API-getLastCommit')

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
    logger.info(JSON.stringify(process.env))
    logger.info(JSON.stringify(config1))
    console.log(process.env)

    return config;
});
