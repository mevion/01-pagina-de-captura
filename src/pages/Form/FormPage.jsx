import FormLayout from '../../components/layout/FormLayout'
import HeroSection from './sections/HeroSection'
import FormSection from './sections/FormSection'
import Footer from "../../components/Footer/Footer"


export default function FormPage() {
  return (
    <>
      <HeroSection />
      <FormLayout>
        <FormSection />
      </FormLayout>
      <Footer />
    </>
  )
}
