import './PhoneInput.css'

export default function PhoneInput({ value, onChange }) {
    function handlePhoneChange(e) {
        let v = e.target.value.replace(/\D/g, '')
        v = v.slice(0, 11)

        if (v.length > 2) {
            v = `(${v.slice(0, 2)}) ${v.slice(2)}`
        }
        if (v.length > 10) {
            v = `${v.slice(0, 10)}-${v.slice(10)}`
        }

        onChange({
            target: {
                name: 'phone',
                value: v,
            },
        })
    }

    return (
        <div className="phone-group">
            <span className="phone-prefix">
                <svg width="20" height="14" viewBox="0 0 20 14">
                    <rect width="20" height="14" fill="#009739" />
                    <polygon points="10,2 18,7 10,12 2,7" fill="#FFDF00" />
                    <circle cx="10" cy="7" r="3" fill="#002776" />
                </svg>
                <span>+55</span>
            </span>

            <input
                className="phone-input"
                type="text"
                placeholder="(11) 91234-5678"
                value={value}
                onChange={handlePhoneChange}
            />
        </div>

    )
}
