import { useState } from 'react'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import photo5 from './assets/photo5.jpg'
import photo6 from './assets/photo6.jpg'
import photo7 from './assets/photo7.jpg'
import photo8 from './assets/photo8.jpg'
import photo9 from './assets/photo9.jpg'
import reference from './assets/reference.jpg'

const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzQ0MaMDmIdAZKlNAN9EfF72C2jvyLPcvQkr4NateSKp8U_2U33avrpZUA2mBrve7s/exec'

const NAV_LINKS = ['Services', 'About', 'Gallery', 'Testimonials', 'Contact']

const SERVICES = [
  {
    icon: '🏠',
    title: 'Interior Painting',
    desc: 'From accent walls to full room transformations, we deliver flawless finishes that elevate every living space.',
  },
  {
    icon: '🏛️',
    title: 'Exterior Painting',
    desc: "Weather-resistant, precision-applied coatings that protect and beautify your home's facade for years to come.",
  },
  {
    icon: '✨',
    title: 'Cabinet Refinishing',
    desc: 'Restore or reinvent your cabinetry with our expert spray and brush finishes — no replacement needed.',
  },
  {
    icon: '🎨',
    title: 'Color Consultation',
    desc: 'Our certified color specialists guide you to the perfect palette that complements your architecture and lifestyle.',
  },
  {
    icon: '🏢',
    title: 'Commercial Painting',
    desc: 'Minimal disruption, maximum impact for offices, retail spaces, and multi-unit residential properties.',
  },
]

const STATS = [
  { value: '20+', label: 'Years in Business' },
  { value: '2,400+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5★', label: 'Average Rating' },
]

const TESTIMONIALS = [
  {
    name: 'Margaret L.',
    location: 'Dallas, TX',
    text: 'H.V. Professional Paint transformed our entire home exterior. The crew was meticulous, respectful of our property, and the finish is absolutely stunning. Worth every penny.',
    rating: 5,
  },
  {
    name: 'David & Carol R.',
    location: 'Plano, TX',
    text: "We've used H.V. twice now — once for interior and once for exterior. Consistent, professional, and the quality speaks for itself. Our neighbors keep asking who did the work.",
    rating: 5,
  },
  {
    name: 'Jonathan M.',
    location: 'Frisco, TX',
    text: 'From the color consultation all the way to the final walkthrough, the experience was seamless. These are true craftsmen who take pride in their work.',
    rating: 5,
  },
]

const GALLERY_IMAGES = [
  {
    url: photo3,
    label: 'Grand Foyer — Dallas, TX',
  },
  {
    url: photo2,
    label: 'Exterior — Highland Park, TX',
  },
  {
    url: photo5,
    label: 'Vaulted Ceiling — Frisco, TX',
  },
  {
    url: photo7,
    label: 'Pool Home Exterior — University Park, TX',
  },
  {
    url: photo8,
    label: 'Tudor Exterior — Dallas, TX',
  },
  {
    url: photo6,
    label: 'Modern Exterior — Lakewood, TX',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    try {
      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Lead submission failed', err)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#050d1a', color: '#f0f4f8', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(5,13,26,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(43,181,216,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img src={reference} alt="H.V. Professional Paint logo" style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #2bb5d8' }} />
            <div>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 17, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.1 }}>H.V. Professional Paint</div>
              <div style={{ fontSize: 11, color: '#2bb5d8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Since 2002 · Dallas, TX</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#b8ccd8', fontSize: 14, fontWeight: 500, letterSpacing: '0.04em', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2bb5d8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#b8ccd8')}>
                {link}
              </a>
            ))}
            <a href="#contact" style={{ background: '#2bb5d8', color: '#050d1a', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '10px 22px', borderRadius: 4, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#5ecfec')}
              onMouseLeave={e => (e.currentTarget.style.background = '#2bb5d8')}>
              Get a Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', color: '#2bb5d8', cursor: 'pointer', fontSize: 24 }} className="show-mobile">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: '#0a1628', borderTop: '1px solid rgba(43,181,216,0.15)', padding: '16px 24px 24px' }}>
            {[...NAV_LINKS, 'Get a Quote'].map(link => (
              <a key={link} href={`#${link === 'Get a Quote' ? 'contact' : link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', color: link === 'Get a Quote' ? '#2bb5d8' : '#b8ccd8', padding: '12px 0', fontSize: 15, fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${photo9})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.25)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,13,26,0.9) 0%, rgba(10,22,40,0.6) 50%, rgba(5,13,26,0.85) 100%)' }} />

        {/* Decorative diagonal */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(135deg, transparent 0%, rgba(43,181,216,0.05) 100%)', borderLeft: '1px solid rgba(43,181,216,0.1)' }} />

        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 28, background: 'rgba(43,181,216,0.1)', border: '1px solid rgba(43,181,216,0.3)', borderRadius: 4, padding: '6px 16px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2bb5d8' }} />
              <span style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>20+ Years of Excellence</span>
            </div>

            <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(42px, 6vw, 78px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 28, color: '#fff' }}>
              Where Precision<br />
              <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Meets</em> Artistry
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.7, color: '#8aa8c0', marginBottom: 44, maxWidth: 520 }}>
              H.V. Professional Paint delivers flawless interior and exterior finishes to discerning homeowners across the Dallas–Fort Worth area. Call us at <a href="tel:2149620467" style={{ color: '#2bb5d8', textDecoration: 'none', fontWeight: 600 }}>214 962 0467</a>.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ background: '#2bb5d8', color: '#050d1a', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#5ecfec'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#2bb5d8'; e.currentTarget.style.transform = 'translateY(0)' }}>
                Request Free Estimate
              </a>
              <a href="#gallery" style={{ background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '16px 36px', borderRadius: 4, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.2s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2bb5d8'; e.currentTarget.style.color = '#2bb5d8' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff' }}>
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 11, color: '#2bb5d8', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Scroll</div>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #2bb5d8, transparent)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#0a1628', borderTop: '1px solid rgba(43,181,216,0.15)', borderBottom: '1px solid rgba(43,181,216,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '40px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(43,181,216,0.1)' : 'none' }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 44, fontWeight: 700, color: '#2bb5d8', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#8aa8c0', marginTop: 8, letterSpacing: '0.06em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>What We Offer</div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Comprehensive Painting<br />
            <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Services</em>
          </h2>
          <p style={{ fontSize: 17, color: '#8aa8c0', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Every project is approached with the same commitment to quality — whether it's a single room or an entire estate.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: '#0a1628', borderTop: '1px solid rgba(43,181,216,0.08)', borderBottom: '1px solid rgba(43,181,216,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '120px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Our Story</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 28 }}>
              Two Decades of<br />
              <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Trusted Craftsmanship</em>
            </h2>
            <p style={{ fontSize: 16, color: '#8aa8c0', lineHeight: 1.8, marginBottom: 20 }}>
              Founded in 2002, H.V. Professional Paint has built a reputation across the Dallas–Fort Worth metroplex for delivering premium results on time, every time. We combine old-world attention to detail with modern materials and techniques.
            </p>
            <p style={{ fontSize: 16, color: '#8aa8c0', lineHeight: 1.8, marginBottom: 40 }}>
              Our team of licensed and insured painters treats every home as if it were our own — carefully preparing surfaces, using only top-tier paints, and leaving no trace except for the beautiful finish.
            </p>
            <div style={{ display: 'flex', gap: 40 }}>
              {[['Licensed', '& Insured'], ['Free', 'Estimates'], ['5-Year', 'Warranty']].map(([a, b], i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 20, fontWeight: 700, color: '#2bb5d8' }}>{a}</div>
                  <div style={{ fontSize: 13, color: '#8aa8c0', marginTop: 2 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img src={photo1} alt="H.V. painter at work" style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block', borderRadius: 2 }} />
            <div style={{ position: 'absolute', bottom: -24, left: -24, background: '#2bb5d8', padding: '24px 32px', borderRadius: 2 }}>
              <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 36, fontWeight: 700, color: '#050d1a', lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: 13, color: '#0a1628', fontWeight: 600, letterSpacing: '0.06em', marginTop: 4 }}>Years of Excellence</div>
            </div>
            <div style={{ position: 'absolute', top: -16, right: -16, width: 80, height: 80, border: '2px solid rgba(43,181,216,0.3)', borderRadius: 2 }} />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Our Portfolio</div>
          <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
            Recent <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Projects</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 4 }}>
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden', background: '#0a1628', aspectRatio: i === 0 ? '16/10' : '4/3', gridColumn: i === 0 ? '1 / 3' : undefined }}>
              <img src={img.url} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,13,26,0.85) 0%, transparent 60%)', opacity: 0, transition: 'opacity 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 13, color: '#fff', fontWeight: 500 }}>{img.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ background: '#0a1628', borderTop: '1px solid rgba(43,181,216,0.08)', padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Client Reviews</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
              What Our Clients <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Say</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background: '#050d1a', border: '1px solid rgba(43,181,216,0.12)', borderRadius: 4, padding: '40px 36px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 32, right: 36, fontSize: 48, color: '#2bb5d8', opacity: 0.2, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
                <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: '#c9a96e', fontSize: 16 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: '#8aa8c0', lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ borderTop: '1px solid rgba(43,181,216,0.1)', paddingTop: 20 }}>
                  <div style={{ fontWeight: 600, color: '#fff', fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#2bb5d8', marginTop: 4 }}>{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Get In Touch</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.15, marginBottom: 28 }}>
              Ready to Transform<br />
              <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Your Space?</em>
            </h2>
            <p style={{ fontSize: 16, color: '#8aa8c0', lineHeight: 1.8, marginBottom: 48 }}>
              Request a free, no-obligation estimate. We respond within one business day and can typically schedule an on-site consultation within the week.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                { icon: '📞', label: 'Phone', value: '214 962 0467', href: 'tel:2149620467' },
                { icon: '📍', label: 'Service Area', value: 'Dallas–Fort Worth Metroplex', href: undefined },
                { icon: '⏰', label: 'Hours', value: 'Mon–Sat · 7:00 AM – 6:00 PM', href: undefined },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, background: 'rgba(43,181,216,0.1)', border: '1px solid rgba(43,181,216,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: 17, color: '#fff', fontWeight: 500, textDecoration: 'none' }}>{item.value}</a>
                      : <div style={{ fontSize: 16, color: '#8aa8c0' }}>{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ background: 'rgba(43,181,216,0.08)', border: '1px solid rgba(43,181,216,0.3)', borderRadius: 4, padding: '60px 40px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 24 }}>✓</div>
                <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 28, color: '#2bb5d8', marginBottom: 16 }}>Message Received</h3>
                <p style={{ color: '#8aa8c0', lineHeight: 1.7 }}>Thank you for reaching out. A member of the H.V. team will contact you within one business day to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '214 000 0000' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} style={{ display: 'block', fontSize: 12, color: '#2bb5d8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      value={formData[f.id as keyof typeof formData]}
                      onChange={e => setFormData(p => ({ ...p, [f.id]: e.target.value }))}
                      style={{ width: '100%', background: '#0a1628', border: '1px solid rgba(43,181,216,0.2)', borderRadius: 4, padding: '14px 18px', color: '#f0f4f8', fontSize: 15, outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#2bb5d8')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(43,181,216,0.2)')} />
                  </div>
                ))}

                <div>
                  <label htmlFor="service" style={{ display: 'block', fontSize: 12, color: '#2bb5d8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>Service Needed</label>
                  <select id="service" required value={formData.service}
                    onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                    style={{ width: '100%', background: '#0a1628', border: '1px solid rgba(43,181,216,0.2)', borderRadius: 4, padding: '14px 18px', color: formData.service ? '#f0f4f8' : '#8aa8c0', fontSize: 15, outline: 'none', cursor: 'pointer' }}>
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 12, color: '#2bb5d8', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 8 }}>Project Details</label>
                  <textarea id="message" rows={5} placeholder="Describe your project, timeline, and any specific requirements…"
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{ width: '100%', background: '#0a1628', border: '1px solid rgba(43,181,216,0.2)', borderRadius: 4, padding: '14px 18px', color: '#f0f4f8', fontSize: 15, outline: 'none', resize: 'vertical', fontFamily: 'inherit', transition: 'border-color 0.2s' }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#2bb5d8')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(43,181,216,0.2)')} />
                </div>

                {submitError && (
                  <div style={{ color: '#f87171', fontSize: 13, background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 4, padding: '12px 16px' }}>
                    Something went wrong sending your request. Please try again or call us directly.
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} style={{ background: '#2bb5d8', color: '#050d1a', fontWeight: 700, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '18px 36px', borderRadius: 4, border: 'none', cursor: isSubmitting ? 'default' : 'pointer', opacity: isSubmitting ? 0.7 : 1, transition: 'all 0.2s', marginTop: 4 }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.background = '#5ecfec'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#2bb5d8'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  {isSubmitting ? 'Sending…' : 'Request Free Estimate'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: '#0a1628', borderTop: '1px solid rgba(43,181,216,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 600 }}>Our Home Base</div>
            <h2 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 700, color: '#fff', lineHeight: 1.15 }}>
              Based in <em style={{ color: '#2bb5d8', fontStyle: 'italic' }}>Highland Park, TX</em>
            </h2>
            <p style={{ fontSize: 16, color: '#8aa8c0', marginTop: 16, maxWidth: 440, margin: '16px auto 0' }}>
              Proudly serving the entire Dallas–Fort Worth metroplex for over 20 years.
            </p>
          </div>

          <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid rgba(43,181,216,0.2)' }}>
            <iframe
              title="H.V. Professional Paint — Highland Park, TX"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13415.55!2d-96.8!3d32.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9e2e8e2e8e2f%3A0x0!2sHighland+Park%2C+TX+75205!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="420"
              style={{ display: 'block', border: 'none', filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay pin card */}
            <div style={{ position: 'absolute', top: 24, left: 24, background: '#050d1a', border: '1px solid rgba(43,181,216,0.3)', borderRadius: 4, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 40, height: 40, background: 'rgba(43,181,216,0.15)', border: '1px solid rgba(43,181,216,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>📍</div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>H.V. Professional Paint</div>
                <div style={{ fontSize: 12, color: '#2bb5d8', marginTop: 2 }}>Highland Park, TX · DFW Metroplex</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#030a14', borderTop: '1px solid rgba(43,181,216,0.1)', padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 60, marginBottom: 60 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <img src={reference} alt="H.V. logo" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #2bb5d8' }} />
                <div>
                  <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>H.V. Professional Paint</div>
                  <div style={{ fontSize: 11, color: '#2bb5d8', letterSpacing: '0.1em' }}>Dallas–Fort Worth, TX</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#8aa8c0', lineHeight: 1.8, maxWidth: 320 }}>
                Two decades of premium painting services for residential and commercial clients across the DFW metroplex. Licensed, insured, and dedicated to excellence.
              </p>
            </div>

            <div>
              <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 20 }}>Services</div>
              {['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Color Consultation', 'Commercial Painting'].map(s => (
                <div key={s} style={{ fontSize: 14, color: '#8aa8c0', marginBottom: 10 }}>{s}</div>
              ))}
            </div>

            <div>
              <div style={{ fontSize: 12, color: '#2bb5d8', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 20 }}>Contact</div>
              <div style={{ fontSize: 14, color: '#8aa8c0', lineHeight: 1.8 }}>
                <div><a href="tel:2149620467" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>214 962 0467</a></div>
                <div style={{ marginTop: 8 }}>Dallas–Fort Worth<br />Metroplex, TX</div>
                <div style={{ marginTop: 8 }}>Mon–Sat · 7am–6pm</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 13, color: '#4a6070' }}>© 2024 H.V. Professional Paint. All rights reserved.</div>
            <div style={{ fontSize: 13, color: '#4a6070' }}>Licensed · Insured · 20+ Years of Excellence</div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  )
}

function ServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#0f2040' : '#0a1628',
        border: `1px solid ${hovered ? 'rgba(43,181,216,0.35)' : 'rgba(43,181,216,0.08)'}`,
        padding: '40px 36px',
        transition: 'all 0.25s ease',
        cursor: 'default',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}>
      <div style={{ fontSize: 32, marginBottom: 20 }}>{icon}</div>
      <h3 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{title}</h3>
      <p style={{ fontSize: 15, color: '#8aa8c0', lineHeight: 1.75 }}>{desc}</p>
      <div style={{ marginTop: 28, fontSize: 13, color: '#2bb5d8', fontWeight: 600, letterSpacing: '0.06em', opacity: hovered ? 1 : 0, transition: 'opacity 0.25s' }}>Learn More →</div>
    </div>
  )
}
