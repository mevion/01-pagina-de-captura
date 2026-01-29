import { useState, useRef, useEffect } from "react"
import "./CustomSelect.css"

export default function CustomSelect({
    value,
    onChange,
    placeholder,
    options,
    name
}) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    function handleSelect(option) {
        onChange({
            target: {
                name,
                value: option.value
            }
        })
        setOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const selected =
        options.find(o => o.value === value)?.label || placeholder

    return (
        <div className="custom-select" ref={ref}>
            <button
                type="button"
                className="select-trigger"
                onClick={() => setOpen(!open)}
            >
                <span className={!value ? "placeholder" : ""}>
                    {selected}
                </span>
                <span className="arrow">▾</span>
            </button>

            {open && (
                <ul className="select-options">
                    {options.map(option => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
