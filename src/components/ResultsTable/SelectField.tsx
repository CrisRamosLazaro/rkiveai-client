import { postSortingOptions, PostSortingOption } from "../../consts/postSortingOptions"

interface SelectProps {
    value: PostSortingOption
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectField: React.FC<SelectProps> = ({ value, onChange }) => {
    return (
        <select value={value} onChange={onChange}>
            {postSortingOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default SelectField