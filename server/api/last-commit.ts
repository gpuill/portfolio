// server/api/last-commit.js
export default defineEventHandler(async (event) => {

  const token = await fetch('/api/getGitToken')

  const config = useRuntimeConfig()
  
  // Debug temporaire
  console.log('Token présent:', !!token)
  console.log('Token length:', token?.length || 0)
  
  if (!config.githubToken) {
    return { error: 'Token GitHub non configuré' }
  }
  
  try {
    const response = await fetch('https://api.github.com/repos/gpuill/portfolio/commits?per_page=1', {
      headers: {
        'Authorization': `Bearer ${config.githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    console.log('GitHub API Status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('GitHub API Error:', errorText)
      throw new Error(`GitHub API Error: ${response.status}`)
    }
    
    const commits = await response.json()
    return {
      message: commits[0]?.commit?.message || 'Aucun commit trouvé',
      date: commits[0]?.commit?.author?.date,
      sha: commits[0]?.sha?.substring(0, 7)
    }
  } catch (error) {
    console.error('Erreur complète:', error)
    return { error: `Erreur: ${error.message}` }
  }
})