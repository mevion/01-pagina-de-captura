import "./Footer.css"
import logo from "../../assets/img/favicon.webp"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__brand">
                    <img src={logo} alt="Mevion" />
                    <p>Novas ações. Novos resultados!</p>
                </div>

                <span className="footer__copy">
                    © {new Date().getFullYear()} Mevion. Todos os direitos reservados.
                </span>
            </div>
        </footer>
    )
}
