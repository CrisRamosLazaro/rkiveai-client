import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts'
import { graphColors } from '../../consts/graphColors'
import { Post } from '../../types/reddit.types'

interface SentimentLineChartProps {
    posts: Post[]
}

const SentimentLineChart: React.FC<SentimentLineChartProps> = ({ posts }) => {

    const data = posts.map(post => {
        const date = new Date(post.date)
        const dateString = `${date.toISOString().split('T')[0]} ${date.getUTCHours()}:00`
        return {
            date: dateString,
            sentiment: post.sentiment
        }
    })

    const sentimentCountByDate = data.reduce((acc: Record<string, Record<string, number>>, { date, sentiment }) => {
        if (!acc[date]) {
            acc[date] = { Positive: 0, Neutral: 0, Negative: 0 }
        }
        if (sentiment) {
            acc[date][sentiment] += 1
        }
        return acc
    }, {})

    const chartData = Object.entries(sentimentCountByDate).map(([date, sentiments]) => ({
        date,
        ...sentiments
    }))

    return (
        <LineChart width={600} height={250} data={chartData} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }}>
                <Label value="Sentiment per Date" offset={-4} position="insideBottom" style={{ textAnchor: 'middle', fontSize: '16px', fontWeight: 'bold', fill: 'black' }} />
            </XAxis>
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ marginBottom: 20 }} />
            <Line type="monotone" dataKey="Positive" stroke={graphColors.Positive} />
            <Line type="monotone" dataKey="Neutral" stroke={graphColors.Neutral} />
            <Line type="monotone" dataKey="Negative" stroke={graphColors.Negative} />
        </LineChart>

    )
}

export default SentimentLineChart