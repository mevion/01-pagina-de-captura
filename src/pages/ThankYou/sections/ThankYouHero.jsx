import "./ThankYouHero.css"
import { useNavigate } from "react-router-dom"

export default function ThankYouHero() {
    const navigate = useNavigate()

    return (
        <section className="thankyou-bg">
            <div className="thankyou-card">

                {/* ESQUERDA — IMAGEM */}
                <div className="thankyou-media">
                    <img
                        src="/src/assets/img/bg-hero-ultra.webp"
                        alt="Obrigado"
                    />
                </div>

                {/* DIREITA — TEXTO */}
                <div className="thankyou-content">
                    <h1>Obrigado!</h1>

                    <p>
                        Recebemos suas informações.
                        <br />
                        Em breve nosso time entrará em contato com você.
                    </p>

                    <button onClick={() => navigate("/")}>
                        Voltar para o início
                    </button>
                </div>

            </div>

            {/* REDES SOCIAIS */}
            <div className="thankyou-social">
                {/* WHATSAPP */}
                <a
                    href="https://wa.me/55SEUNUMEROAQUI"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="WhatsApp"
                >
                    <i className="bi bi-whatsapp"></i>
                </a>

                {/* INSTAGRAM */}
                <a
                    href="https://instagram.com/SEUUSUARIO"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label="Instagram"
                >
                    <i className="bi bi-instagram"></i>
                </a>

                {/* YOUTUBE */}
                <a
                    href="https://youtube.com/@SEUCANAL"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn-youtube"
                >
                    <i className="bi bi-youtube"></i>
                </a>
            </div>


        </section>
    )
}
