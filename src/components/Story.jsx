import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { story, stats } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.story-block').forEach((el) => {
        gsap.from(el, {
          y: 70,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })

      gsap.utils.toArray('.stat-value').forEach((el) => {
        const target = Number(el.dataset.value)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.firstChild.textContent = Math.round(obj.v)
          },
        })
      })

      gsap.from('.stats-grid .stat-card', {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
      })
    },
    { scope: ref },
  )

  return (
    <section id="story" ref={ref}>
      <p className="section-label">The Story</p>
      <h2 className="section-title">Analysis is a narrative discipline.</h2>

      {story.map((s) => (
        <article className="story-block glass" key={s.chapter}>
          <div className="story-chapter">{s.chapter}</div>
          <div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        </article>
      ))}

      <div className="stats-grid" style={{ marginTop: '3rem' }}>
        {stats.map((s) => (
          <div className="stat-card glass" key={s.label}>
            <div className="stat-value" data-value={s.value}>
              <span>0</span>{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
