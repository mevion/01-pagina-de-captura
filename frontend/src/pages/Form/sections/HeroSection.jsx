import './HeroSection.css'
import heroBg from '../../../assets/img/bg-hero-ultra.webp'
import Button from '../../../components/ui/Button/Button'


export default function HeroSection() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero__overlay" />

            <header className="hero__topbar">
                <div className="hero__logo">
                    <img src="/src/assets/img/logo.webp" alt="Mevion" />
                </div>
                <Button
                    className="topbar__cta"
                    variant="primary"
                    onClick={() => {
                        document
                            .getElementById("formulario")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }}
                >
                    QUERO CONTRATAR →
                </Button>
            </header>

            <div className="hero__content">
                <span className="hero__pill">
                    Novas ações. Novos resultados!
                </span>
                <h1>
                    Sua cozinha entrega excelência,<span> e o seu marketing não!</span>
                </h1>

                <p>
                    Enquanto você cresce devagar, outros enchem a casa todos os dias. Com a nossa estratégia, seu restaurante passa a ter clientes constantes, independentemente do movimento.
                </p>

                <div className="hero__cta">
                    <Button
                        className="hero__cta"
                        variant="primary"
                        onClick={() => {
                            document
                                .getElementById("formulario")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        QUERO CRESCER MEU RESTAURANTE
                    </Button>
                </div>
            </div>
        </section>
    )
}
