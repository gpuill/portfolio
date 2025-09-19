// server/api/last-commit.js
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  try {
    const response = await fetch('https://api.github.com/repos/gpuill/portfolio/commits?per_page=1', {
      headers: {
        'Authorization': `Bearer ${config.githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    if (!response.ok) {
      throw new Error('Erreur API GitHub')
    }
    
    const commits = await response.json()
    return {
      message: commits[0]?.commit?.message || 'Aucun commit trouvé',
      date: commits[0]?.commit?.author?.date,
      sha: commits[0]?.sha?.substring(0, 7)
    }
  } catch (error) {
    return { error: 'Impossible de récupérer le dernier commit' }
  }
})