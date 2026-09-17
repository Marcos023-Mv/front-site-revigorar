import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, Mail, MapPin, CalendarCheck } from 'lucide-react'
import PageBanner from '../../components/PageBanner/PageBanner.jsx'
import Button from '../../components/Button/Button.jsx'
import './Contact.css'

const BANNER_IMAGE = 'https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?auto=format&fit=crop&w=900&q=80'

const CONTACT_PHONE_DISPLAY = import.meta.env.VITE_CONTACT_PHONE_DISPLAY
const CONTACT_WHATSAPP_NUMBER = import.meta.env.VITE_CONTACT_WHATSAPP_NUMBER
const CONTACT_HOURS = import.meta.env.VITE_CONTACT_HOURS
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL
const CONTACT_ADDRESS = import.meta.env.VITE_CONTACT_ADDRESS

const OTHER_CONTACTS = [
  {
    icon: <Phone size={18} />,
    title: 'WhatsApp',
    lines: [CONTACT_PHONE_DISPLAY, CONTACT_HOURS],
    href: `https://wa.me/${CONTACT_WHATSAPP_NUMBER}`,
  },
  {
    icon: <Mail size={18} />,
    title: 'E-mail',
    lines: [CONTACT_EMAIL, 'Respondemos em até 24h'],
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: <MapPin size={18} />,
    title: 'Localização',
    lines: [CONTACT_ADDRESS, '(Atendimento online e presencial)'],
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`,
  },
]

const FAQ = [
  'Como funciona a implementação?',
  'É possível cadastrar vários profissionais?',
  'Posso utilizar pelo celular?',
  'Como funciona o suporte?',
  'Posso utilizar pelo tablet?',
  'Como funciona a contratação?',
  'O sistema funciona em clínicas?',
  'Quais são as formas de pagamento?',
]

const INITIAL_FORM = {
  nome: '', email: '', whatsapp: '', instituicao: '', cargo: '', assunto: '', mensagem: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)
  const [searchParams] = useSearchParams()
  const formRef = useRef(null)

  useEffect(() => {
    const assunto = searchParams.get('assunto')
    const plano = searchParams.get('plano')
    if (!assunto && !plano) return
    setForm((f) => ({
      ...f,
      assunto: assunto || f.assunto,
      mensagem: plano ? `Tenho interesse no plano ${plano}.` : f.mensagem,
    }))
  }, [searchParams])

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
  }

  const handleScheduleClick = () => {
    setForm((f) => ({ ...f, assunto: 'Solicitar demonstração' }))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageBanner
        eyebrow="CONTATOS"
        title="Fale com o REVIGORAR"
        subtitle="Tire suas dúvidas, solicite uma demonstração ou peça uma proposta personalizada."
        image={BANNER_IMAGE}
      />

      <section className="section contact-main">
        <div className="container contact-main__grid">
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <h2>Envie sua mensagem</h2>

            <div className="field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" value={form.nome} onChange={handleChange} placeholder="Seu nome" required />
            </div>

            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" required />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="whatsapp">WhatsApp</label>
                <input id="whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
              </div>
              <div className="field">
                <label htmlFor="instituicao">Instituição</label>
                <input id="instituicao" name="instituicao" value={form.instituicao} onChange={handleChange} placeholder="Nome da instituição" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="cargo">Cargo / Profissão</label>
              <select id="cargo" name="cargo" value={form.cargo} onChange={handleChange}>
                <option value="">Selecione</option>
                <option>Enfermeiro(a)</option>
                <option>Estomaterapeuta</option>
                <option>Gestor(a) de saúde</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" name="assunto" value={form.assunto} onChange={handleChange}>
                <option value="">Selecione</option>
                <option>Solicitar demonstração</option>
                <option>Dúvidas sobre planos</option>
                <option>Suporte técnico</option>
                <option>Parcerias</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} value={form.mensagem} onChange={handleChange} placeholder="Digite sua mensagem..." required />
            </div>

            <Button type="submit" variant="primary" className="contact-form__submit">
              Enviar mensagem
            </Button>
            {sent && <p className="contact-form__success">Mensagem enviada com sucesso! Em breve entraremos em contato.</p>}
          </form>

          <aside className="contact-side">
            <div className="contact-side__card">
              <h3>Outros meios de contato</h3>
              {OTHER_CONTACTS.map((c) => (
                <a className="contact-item" key={c.title} href={c.href} target="_blank" rel="noreferrer">
                  <span className="contact-item__icon">{c.icon}</span>
                  <div>
                    <strong>{c.title}</strong>
                    {c.lines.map((line) => <span key={line}>{line}</span>)}
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-side__card contact-side__card--dark">
              <CalendarCheck size={22} />
              <h3>Solicite uma demonstração</h3>
              <p>Veja na prática como o REVIGORAR pode facilitar o seu dia a dia.</p>
              <Button variant="secondary" onClick={handleScheduleClick}>
                Agendar demonstração
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section contact-faq">
        <div className="container">
          <h2 className="section-title">Perguntas frequentes</h2>
          <div className="contact-faq__grid">
            {FAQ.map((question) => (
              <div className="contact-faq__item" key={question}>{question}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
