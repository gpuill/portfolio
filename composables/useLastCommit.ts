export const useLastCommit = () => {
  return $fetch('/api/last-commit')
}