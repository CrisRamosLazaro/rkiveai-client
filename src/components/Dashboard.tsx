import { useState, useEffect } from 'react'
import redditService from '../services/reddit-services'
import ResultsTable from './ResultsTable/ResultsTable'
import SentimentPieChart from '../components/Charts/SentimentPieChart'
import SentimentLineChart from '../components/Charts/SentimentLineChart'
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
        <div className='flex flex-col'>
            <ResultsTable
                subreddit={subreddit}
                setSubreddit={setSubreddit}
                sorting={sorting}
                setSorting={setSorting}
                posts={posts}
            />
            <div className='flex'>
                <SentimentPieChart posts={posts} />
                <SentimentLineChart posts={posts} />

            </div>
        </div>
    )
}

export default Dashboard
