import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.skill-card', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 82%' },
      })

      gsap.utils.toArray('.skill-fill').forEach((el) => {
        gsap.to(el, {
          width: `${el.dataset.level}%`,
          duration: 1.3,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section id="skills" ref={ref}>
      <p className="section-label">The Toolkit</p>
      <h2 className="section-title">Tools change. Thinking compounds.</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card glass" key={s.name}>
            <div className="skill-head">
              <span className="skill-name">{s.name}</span>
              <span className="skill-pct">{s.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" data-level={s.level} />
            </div>
            <div className="skill-note">{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
