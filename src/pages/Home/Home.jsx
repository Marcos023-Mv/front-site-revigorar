import {
  ClipboardList, Stethoscope, FileText, Radio, Laptop2, Tablet, Smartphone,
  Building2, GraduationCap, HeartPulse, Users2, ShieldCheck, MessageCircle,
} from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import { Card } from '../../components/Card/Card.jsx'
import useReveal from '../../hooks/useReveal.js'
import './Home.css'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1666887360726-f55472d96c34?auto=format&fit=crop&w=1200&q=80'
const ABOUT_SYSTEM_IMAGE = 'https://images.unsplash.com/photo-1666886573421-d19e546cfc4e?auto=format&fit=crop&w=1200&q=80'

const QUICK_FEATURES = [
  { icon: <ClipboardList size={18} />, label: 'Prontuário eletrônico especializado' },
  { icon: <Stethoscope size={18} />, label: 'Avaliação de feridas' },
  { icon: <FileText size={18} />, label: 'Prescrição e condutas' },
  { icon: <Radio size={18} />, label: 'Telemonitoramento e muito mais' },
]

const BENEFITS = [
  {
    icon: <ShieldCheck size={24} />,
    title: 'Mais organização',
    description: 'Prontuários e rotinas centralizados em um só lugar, sem retrabalho.',
  },
  {
    icon: <HeartPulse size={24} />,
    title: 'Maior segurança',
    description: 'Histórico completo do paciente sempre acessível para a equipe.',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Melhor comunicação',
    description: 'Toda a equipe acompanha a evolução do tratamento em tempo real.',
  },
  {
    icon: <Users2 size={24} />,
    title: 'Atendimento humanizado',
    description: 'Menos tempo com burocracia, mais tempo com o paciente.',
  },
]

const DEVICES = [
  { icon: <Laptop2 size={26} />, label: 'Computador' },
  { icon: <Tablet size={26} />, label: 'Tablet' },
  { icon: <Smartphone size={26} />, label: 'Celular' },
]

const AUDIENCE = [
  { icon: <HeartPulse size={22} />, label: 'Enfermeiros' },
  { icon: <Stethoscope size={22} />, label: 'Estomaterapeutas' },
  { icon: <Building2 size={22} />, label: 'Hospitais e clínicas' },
  { icon: <ClipboardList size={22} />, label: 'Ambulatórios' },
  { icon: <GraduationCap size={22} />, label: 'Universidades' },
]

export default function Home() {
  const aboutSystemRef = useReveal()
  const benefitsRef = useReveal()
  const devicesRef = useReveal()
  const audienceRef = useReveal()
  const closingRef = useReveal()

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__eyebrow">Saúde e bem-estar digital</span>
            <h1>
              Tecnologia e cuidado em cada etapa do tratamento de estomas e feridas.
            </h1>
            <p>
              O REVIGORAR é uma plataforma completa e inteligente desenvolvida para
              profissionais de saúde que atuam com estomaterapia, oferecendo tecnologia,
              organização e segurança para um atendimento mais eficiente e humanizado.
            </p>
            <div className="hero__actions">
              <Button as="link" to="/funcionalidades" variant="primary" size="lg">
                Conheça o sistema
              </Button>
              <Button as="link" to="/planos" variant="secondary" size="lg">
                Ver planos
              </Button>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__frame">
              <img className="hero__photo" src={HERO_IMAGE} alt="Profissional de saúde utilizando tablet" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero__pills">
            {QUICK_FEATURES.map((f) => (
              <div className="pill" key={f.label}>
                <span className="pill__icon">{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section className="section about-system reveal" ref={aboutSystemRef}>
        <div className="container about-system__inner">
          <div className="about-system__text">
            <h2>O que é o REVIGORAR?</h2>
            <p>
              É uma plataforma digital que centraliza informações, facilita o
              acompanhamento dos pacientes e integra a equipe de saúde para oferecer um
              cuidado mais completo, seguro e eficiente.
            </p>
            <Button as="link" to="/sobre-nos" variant="ghost" icon>
              Saiba mais
            </Button>
          </div>
          <div className="about-system__media">
            <div className="about-system__frame">
              <img
                className="about-system__photo"
                src={ABOUT_SYSTEM_IMAGE}
                alt="Profissional de saúde consultando informações do paciente em um tablet"
              />
            </div>
            <div className="pill about-system__badge">
              <span className="pill__icon"><ShieldCheck size={18} /></span>
              <span>Dados centralizados e seguros</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPAIS BENEFÍCIOS */}
      <section className="section benefits reveal" ref={benefitsRef}>
        <div className="container">
          <h2 className="section-title">Principais benefícios</h2>
          <div className="benefits__grid">
            {BENEFITS.map((b) => (
              <Card
                key={b.title}
                icon={b.icon}
                title={b.title}
                description={b.description}
                className="benefits__card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DISPOSITIVOS */}
      <section className="section devices reveal" ref={devicesRef}>
        <div className="container devices__inner">
          <h2>Funciona em todos os dispositivos</h2>
          <p>Acesse de onde estiver, quando precisar.</p>
          <div className="devices__row">
            {DEVICES.map((d) => (
              <div className="devices__item" key={d.label}>
                {d.icon}
                <span>{d.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section audience reveal" ref={audienceRef}>
        <div className="container">
          <h2 className="section-title">Para quem é o REVIGORAR?</h2>
          <div className="audience__grid">
            {AUDIENCE.map((a) => (
              <div className="audience__item" key={a.label}>
                <span className="audience__icon">{a.icon}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section closing reveal" ref={closingRef}>
        <div className="container">
          <div className="cta-card cta-card--full">
            <h3>Pronta para transformar o cuidado em saúde?</h3>
            <p className="cta-card__text">
              Fale com nossa equipe e veja como o REVIGORAR pode se adaptar à rotina
              da sua instituição.
            </p>
            <div className="cta-card__actions">
              <Button as="link" to="/planos" variant="outline">
                Ver planos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
