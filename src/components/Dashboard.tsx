import { useState, useEffect } from 'react'
import redditService from '../services/reddit-services'
import ResultsTable from './ResultsTable/ResultsTable'
import { PostSortingOption } from '../consts/postSortingOptions'

const Dashboard: React.FC = () => {

    const [posts, setPosts] = useState<any[]>([])
    const [subreddit, setSubreddit] = useState('news')
    const [sorting, setSorting] = useState<PostSortingOption>("hot")

    const fetchData = async () => {
        try {
            const { data } = await redditService.getPosts(subreddit, sorting)
            setPosts(data)
        } catch (error) {
            console.error("Error fetching posts:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [subreddit, sorting])

    return (
        <div>
            <ResultsTable
                subreddit={subreddit}
                setSubreddit={setSubreddit}
                sorting={sorting}
                setSorting={setSorting}
                posts={posts}
            />
        </div>
    )
}

export default Dashboard
