import {
  Stethoscope, TrendingUp, FileText, Brain, Radio, Settings, ShieldCheck,
} from 'lucide-react'
import PageBanner from '../../components/PageBanner/PageBanner.jsx'
import Card from '../../components/Card/Card.jsx'
import './Features.css'

const BANNER_IMAGE = 'https://images.unsplash.com/photo-1631217873436-b0fa88e71f0a?auto=format&fit=crop&w=900&q=80'

const FEATURE_GROUPS = [
  {
    icon: <Stethoscope size={20} />,
    title: 'Avaliação clínica',
    items: ['Prontuário eletrônico', 'Anamnese', 'Avaliação de estomas e feridas', 'Mensurações', 'Escalas clínicas'],
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Evolução',
    items: ['Fotografias', 'Histórico visual', 'Comparativo de imagens', 'Linha do tempo', 'Registro de evolução'],
  },
  {
    icon: <FileText size={20} />,
    title: 'Prescrição e condutas',
    items: ['Prescrição de enfermagem', 'Catálogo de coberturas', 'Registro de condutas', 'Histórico'],
  },
  {
    icon: <Brain size={20} />,
    title: 'Inteligência',
    items: ['Assistente inteligente', 'Sugestões de conduta', 'Análise de imagens', 'Base de conhecimento'],
  },
  {
    icon: <Radio size={20} />,
    title: 'Telemonitoramento',
    items: ['Envio de fotos', 'Acompanhamento remoto', 'Comunicação com a equipe', 'Alertas'],
  },
  {
    icon: <Settings size={20} />,
    title: 'Gestão',
    items: ['Estoque e dispensação', 'Alertas e notificações', 'Relatórios e indicadores', 'Controle de insumos'],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Segurança',
    items: ['Controle de acesso', 'Histórico de ações', 'Proteção de dados', 'Conformidade com a LGPD'],
  },
]

export default function Features() {
  return (
    <>
      <PageBanner
        eyebrow="FUNCIONALIDADES"
        title="Tudo o que você precisa em um só lugar."
        subtitle="O REVIGORAR reúne as principais ferramentas para um cuidado mais completo, seguro e humanizado."
        image={BANNER_IMAGE}
      />

      <section className="section features-grid">
        <div className="container features-grid__inner">
          {FEATURE_GROUPS.map((group) => (
            <Card key={group.title} icon={group.icon} title={group.title} items={group.items} />
          ))}
        </div>
      </section>
    </>
  )
}
