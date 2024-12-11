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
            <h1 className="text-4xl mb-12">Reddit Sentiment Analysis</h1>
            <div className="flex items-center justify-center space-x-8 mb-8">
                <InputField value={subreddit} onChange={(e) => setSubreddit(e.target.value)} />
                <SelectField value={sorting} onChange={(e) => setSorting(e.target.value as PostSortingOption)} />
            </div>
            <div className="mb-8">
                <Table posts={posts} />
            </div>
        </div>
    )
}

export default ResultsTable
