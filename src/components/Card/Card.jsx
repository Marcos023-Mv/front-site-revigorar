import { Check } from 'lucide-react'
import './Card.css'

export function Card({ icon, title, items, description, className = '' }) {
  return (
    <div className={`card ${className}`.trim()}>
      {icon && <div className="card__icon">{icon}</div>}
      {title && <h3 className="card__title">{title}</h3>}
      {description && <p className="card__description">{description}</p>}
      {items && (
        <ul className="card__list">
          {items.map((item) => (
            <li key={item}>
              <Check size={15} className="card__check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Card
