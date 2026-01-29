import { Routes, Route } from "react-router-dom"
import FormPage from "../pages/Form/FormPage"
import ThankYouPage from "../pages/ThankYou/ThankYouPage"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<FormPage />} />
            <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
    )
}
