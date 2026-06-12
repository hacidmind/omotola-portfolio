import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience, education } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.tl-item').forEach((el) => {
        gsap.from(el, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%' },
        })
      })
      gsap.from('.edu-card', {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.edu-grid', start: 'top 88%' },
      })
    },
    { scope: ref },
  )

  return (
    <section id="experience" ref={ref}>
      <p className="section-label">The Work</p>
      <h2 className="section-title">Where the data met the real world.</h2>

      <div className="timeline">
        {experience.map((e) => (
          <article className="tl-item glass" key={e.org}>
            <div className="tl-period">{e.period}</div>
            <h3 className="tl-role">{e.role}</h3>
            <div className="tl-org">{e.org}</div>
            <ul>
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="section-label" style={{ marginTop: '4rem' }}>Education & Certifications</p>
      <div className="edu-grid">
        {education.map((ed) => (
          <div className="edu-card glass" key={ed.school + ed.degree}>
            <div className="year">{ed.year}</div>
            <div className="school">{ed.school}</div>
            <div className="degree">{ed.degree}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
