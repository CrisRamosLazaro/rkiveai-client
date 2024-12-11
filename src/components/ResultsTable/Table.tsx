interface TableProps {
    posts: any[]
}

const Table: React.FC<TableProps> = ({ posts }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Comments</th>
                    <th>Date</th>
                    <th>Sentiment</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, index) => (
                    <tr key={index}>
                        <td>{post.title}</td>
                        <td>{post.upvotes}</td>
                        <td>{post.comments}</td>
                        <td>{new Date(post.date).toLocaleDateString()}</td>
                        <td>{post.sentiment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table