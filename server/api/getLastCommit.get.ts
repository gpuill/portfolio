
export default defineEventHandler(async (event) => {
    interface JsonMaster{
        object:{
            sha:string,
        },
    }


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

    console.log(config1.headers);

    const jsonMaster: JsonMaster = await $fetch(urlGetMaster, config1);

    // Extraire le SHA de la réponse
    const sha:string = jsonMaster.object.sha;

    // Étape 2 : Construire l'URL pour récupérer les commits
    const urlGetCommits = `https://api.github.com/repos/gpuill/portfolio/commits/${sha}`;

    // Étape 3 : Récupérer les commits (le plus récent est le premier)
    const commit:JSON = await $fetch(urlGetCommits, {
        method: "GET",
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${config.githubToken}`,
            "X-GitHub-Api-Version": "2022-11-28",

        },
    });

    return commit;
});
