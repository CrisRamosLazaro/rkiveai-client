import { postSortingOptions, PostSortingOption } from "../../consts/postSortingOptions"

interface SelectProps {
    value: PostSortingOption
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField: React.FC<SelectProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center space-x-2">
            <label htmlFor="sort-by" className="text-gray-700 font-medium">Sort by:</label>
            <select
                id="sort-by"
                value={value}
                onChange={onChange}
                className="px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                {postSortingOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectField