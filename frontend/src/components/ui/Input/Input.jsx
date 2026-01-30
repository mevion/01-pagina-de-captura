import './Input.css'

export default function Input({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    ...rest
}) {
    return (
        <div className="input-group">
            {label && <label className="input-label">{label}</label>}

            <input
                className="input-field"
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </div>
    )
}
