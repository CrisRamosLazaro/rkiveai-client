import InputField from './InputField'
import SelectField from './SelectField'
import Table from './Table'
import { PostSortingOption } from '../../consts/postSortingOptions'

interface ResultsTableProps {
    subreddit: string
    setSubreddit: (value: string) => void
    sorting: PostSortingOption
    setSorting: (value: PostSortingOption) => void
    posts: any[]
}

const ResultsTable: React.FC<ResultsTableProps> = ({ subreddit, setSubreddit, sorting, setSorting, posts }) => {

    return (
        <div>
            <h1>Reddit Sentiment Analysis</h1>
            <InputField value={subreddit} onChange={(e) => setSubreddit(e.target.value)} />
            <SelectField value={sorting} onChange={(e) => setSorting(e.target.value)} />
            <Table posts={posts} />
        </div>
    )
}

export default ResultsTable
