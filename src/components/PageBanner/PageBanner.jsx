import './PageBanner.css'

<<<<<<< HEAD
export default function PageBanner({ eyebrow, title, subtitle, image }) {
=======
export default function PageBanner({ eyebrow, title, subtitle, quote, image }) {
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
  return (
    <section className="pagebanner">
      <div className="container pagebanner__inner">
        <div className="pagebanner__text">
          {eyebrow && <span className="pagebanner__eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="pagebanner__media">
          {image && <img src={image} alt="" />}
<<<<<<< HEAD
=======
          {quote && <p className="pagebanner__quote">{quote}</p>}
>>>>>>> d7417fa6b98d02627a06cce7d2d5852a0ddfa07c
        </div>
      </div>
    </section>
  )
}
