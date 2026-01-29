import './FormWrapper.css'
import { useState } from 'react'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import PhoneInput from '../ui/PhoneInput/PhoneInput'
import CustomSelect from "../ui/CustomSelect/CustomSelect"
import { useNavigate } from "react-router-dom"

export default function FormWrapper() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        segment: '',
        revenue: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        navigate("/obrigado")
    }


    return (
        <div id="formulario" className="form-page">
            {/* CARD ÚNICO */}
            <div className="form-card form-grid">

                {/* LEFT — STEPS */}
                <div className="form-steps">
                    <div className="step active">
                        <span>1</span>
                        <div>
                            <strong>Complete o formulário</strong>
                            <p>
                                Preencha seus dados com total segurança para que possamos
                                entender melhor o seu momento atual, seu negócio e seus
                                principais desafios.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span>2</span>
                        <div>
                            <strong>Receba uma ligação</strong>
                            <p>
                                Após o envio do formulário, um especialista do nosso time
                                entrará em contato em até 30 minutos para entender seus
                                objetivos com mais profundidade.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <span>3</span>
                        <div>
                            <strong>Entenda nossa estratégia</strong>
                            <p>
                                Durante a ligação, será agendada uma reunião estratégica
                                com nosso time. Nessa reunião, vamos apresentar nossa
                                estratégia completa e como aplicamos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — FORM */}
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="form-fields">

                        <Input
                            name="name"
                            placeholder="Seu nome"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <Input
                            name="email"
                            placeholder="Seu melhor e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />


                        <Input
                            name="company"
                            placeholder="Nome da empresa"
                            value={formData.company}
                            onChange={handleChange}
                            required
                        />

                        <PhoneInput
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <CustomSelect
                            name="segment"
                            value={formData.segment}
                            onChange={handleChange}
                            placeholder="Qual é o seu segmento?"
                            required
                            options={[
                                { value: "hamburgueria", label: "Hamburgueria" },
                                { value: "pizzaria", label: "Pizzaria" },
                                { value: "churrascaria/steakhouse", label: "Churrascaria/Steakhouse" },
                                { value: "japonês/asiáticos", label: "Japonês/Asiáticos" },
                                { value: "massas/italiano", label: "Massas/Italiano" },
                                { value: "comida brasileira", label: "Comida brasileira" },
                                { value: "outros", label: "Outros" }
                            ]}
                        />

                        <CustomSelect
                            name="revenue"
                            value={formData.segment}
                            onChange={handleChange}
                            placeholder="Qual é o seu faturamento mensal?"
                            required
                            options={[
                                { value: "ate-20", label: "Até 20 mil" },
                                { value: "20-50", label: "De 20 mil a 50 mil" },
                                { value: "50-80", label: "De 50 mil a 80 mil" },
                                { value: "80-100", label: "De 80 mil a 100 mil" },
                                { value: "100-150", label: "De 100 mil a 150 mil" },
                                { value: "150-250", label: "De 150 mil a 250 mil" },
                                { value: "250-500", label: "De 250 mil a 500 mil" },
                                { value: "500-1m", label: "De 500 mil a 1 milhão" },
                                { value: "mais-1m", label: "Mais de 1 milhão" }
                            ]}
                        />
                    </div>

                    <Button variant="primary" type="submit">
                        Receber mais informações
                    </Button>
                </form>

            </div>
        </div>
    )
}
