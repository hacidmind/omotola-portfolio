import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.contact-card', {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-card', start: 'top 82%' },
      })
    },
    { scope: ref },
  )

  return (
    <section id="contact" ref={ref}>
      <div className="contact-card glass">
        <p className="section-label" style={{ justifyContent: 'center' }}>
          The Next Dataset
        </p>
        <h2>Have data that needs a story?</h2>
        <p>
          Whether it&apos;s a dashboard, a deep-dive analysis, or training your
          team to think analytically — let&apos;s talk.
        </p>
        <div className="contact-links">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-ghost" href={profile.site} target="_blank" rel="noreferrer">
            Google Site
          </a>
        </div>
      </div>
    </section>
  )
}
