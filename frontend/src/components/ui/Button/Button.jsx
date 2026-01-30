import './Button.css'

export default function Button({
    children,
    type = 'button',
    variant = 'primary',
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn btn--${variant}`}
        >
            {children}
        </button>
    )
}
