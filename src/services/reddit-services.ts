import createApiClient from './apiClient'

class RedditService {
    private api = createApiClient(`${import.meta.env.VITE_API_URL}/reddit`)

    getPosts(subreddit: string, sorting: string) {
        return this.api.get(`/analyze`, {
            params: {
                subreddit,
                sorting
            }
        })
    }
}

const redditService = new RedditService()

export default redditService