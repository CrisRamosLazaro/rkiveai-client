interface InputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    )
}

export default InputField