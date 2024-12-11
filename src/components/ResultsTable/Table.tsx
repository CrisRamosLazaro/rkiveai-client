interface TableProps {
    posts: any[]
}

const Table: React.FC<TableProps> = ({ posts }) => {
    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b border-gray-200 text-left w-1/2">Title</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-center">Upvotes</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-center">Comments</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-center">Date</th>
                    <th className="py-2 px-4 border-b border-gray-200 text-center">Sentiment</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border-b border-gray-200 text-left text-sm">{post.title}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center text-sm">{post.upvotes}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center text-sm">{post.comments}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center text-sm">{new Date(post.date).toLocaleDateString()}</td>
                        <td className="py-2 px-4 border-b border-gray-200 text-center text-sm">{post.sentiment}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table