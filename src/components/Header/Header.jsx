<<<<<<< HEAD
import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
=======
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
import { Search, Menu, X, Leaf } from 'lucide-react'
import Button from '../Button/Button.jsx'
import './Header.css'

const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Sobre nós', to: '/sobre-nos' },
  { label: 'Funcionalidades', to: '/funcionalidades' },
  { label: 'Planos', to: '/planos' },
  { label: 'Contatos', to: '/contatos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
<<<<<<< HEAD
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  const navigate = useNavigate()

  const results = query.trim()
    ? NAV_LINKS.filter((l) => l.label.toLowerCase().includes(query.trim().toLowerCase()))
    : NAV_LINKS

  useEffect(() => {
    if (!searchOpen) return undefined
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [searchOpen])

  const goTo = (to) => {
    navigate(to)
    setSearchOpen(false)
    setQuery('')
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (results[0]) goTo(results[0].to)
  }
=======
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" onClick={() => setOpen(false)}>
          <span className="header__brand-icon">
            <Leaf size={20} strokeWidth={2.4} />
          </span>
          <span className="header__brand-text">
            REVIGORAR
            <small>Cuidado que evolui</small>
          </span>
        </NavLink>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
<<<<<<< HEAD
          <div className="header__nav-cta">
            <Button as="link" to="/contatos" variant="primary" size="sm" onClick={() => setOpen(false)}>
              Acessar o sistema
            </Button>
          </div>
        </nav>

        <div className="header__actions">
          <div className="header__search" ref={searchRef}>
            <button
              className="header__icon-btn"
              aria-label="Buscar"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Search size={18} />
            </button>

            {searchOpen && (
              <form className="header__search-panel" onSubmit={handleSearchSubmit}>
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar página..."
                  aria-label="Buscar página"
                />
                <ul>
                  {results.length > 0 ? (
                    results.map((link) => (
                      <li key={link.to}>
                        <button type="button" onClick={() => goTo(link.to)}>
                          {link.label}
                        </button>
                      </li>
                    ))
                  ) : (
                    <li className="header__search-empty">Nenhuma página encontrada</li>
                  )}
                </ul>
              </form>
            )}
          </div>

=======
        </nav>

        <div className="header__actions">
          <button className="header__icon-btn" aria-label="Buscar">
            <Search size={18} />
          </button>
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
          <Button as="link" to="/contatos" variant="primary" size="sm">
            Acessar o sistema
          </Button>
          <button
            className="header__icon-btn header__menu-toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
