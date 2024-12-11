interface InputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="subreddit" className="text-gray-700 font-medium">Subreddit:</label>
            <input
                id="subreddit"
                type="text"
                value={value}
                onChange={onChange}
                className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default InputField