import { PieChart, Pie, Tooltip, Cell } from 'recharts'
import { graphColors } from '../../consts/graphColors'
import { Post } from '../../types/reddit.types'

interface SentimentPieChartProps {
    posts: Post[]
}

const SentimentPieChart: React.FC<SentimentPieChartProps> = ({ posts }) => {

    const sentimentData = posts.reduce((acc: Record<string, number>, post) => {
        const sentiment = post.sentiment
        acc[sentiment] = (acc[sentiment] || 0) + 1
        return acc
    }, {})

    const chartData = Object.entries(sentimentData).map(([key, value]) => ({
        name: key,
        value,
    }))

    return (
        <PieChart width={400} height={250}>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label={({ name }) => name}
            >
                {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={graphColors[entry.name]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    )
}

export default SentimentPieChart