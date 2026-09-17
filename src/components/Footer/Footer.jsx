import { NavLink } from 'react-router-dom'
import { Leaf, Instagram, Linkedin, Facebook } from 'lucide-react'
import './Footer.css'

const LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/sobre-nos' },
  { label: 'Funcionalidades', to: '/funcionalidades' },
  { label: 'Planos', to: '/planos' },
  { label: 'Contatos', to: '/contatos' },
]

<<<<<<< HEAD
const SOCIAL_LINKS = [
  { label: 'Instagram', url: import.meta.env.VITE_SOCIAL_INSTAGRAM, icon: <Instagram size={16} /> },
  { label: 'LinkedIn', url: import.meta.env.VITE_SOCIAL_LINKEDIN, icon: <Linkedin size={16} /> },
  { label: 'Facebook', url: import.meta.env.VITE_SOCIAL_FACEBOOK, icon: <Facebook size={16} /> },
].filter((s) => s.url)

const LEGAL_LINKS = [
  { label: 'Política de Privacidade', url: import.meta.env.VITE_PRIVACY_POLICY_URL },
  { label: 'Termos de Uso', url: import.meta.env.VITE_TERMS_URL },
].filter((l) => l.url)

=======
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <NavLink to="/" className="footer__brand">
          <span className="footer__brand-icon">
            <Leaf size={18} strokeWidth={2.4} />
          </span>
          <span className="footer__brand-text">
            REVIGORAR
            <small>Cuidado que evolui</small>
          </span>
        </NavLink>

        <nav className="footer__nav">
          <ul>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

<<<<<<< HEAD
        {SOCIAL_LINKS.length > 0 && (
          <div className="footer__social">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        )}
=======
        <div className="footer__social">
          <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
        </div>
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© 2026 Revigorar. Todos os direitos reservados.</span>
<<<<<<< HEAD
          {LEGAL_LINKS.length > 0 && (
            <div className="footer__legal">
              {LEGAL_LINKS.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          )}
=======
          <div className="footer__legal">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
        </div>
      </div>
    </footer>
  )
}
