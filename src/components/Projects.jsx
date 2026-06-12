import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.utils.toArray('.proj-card').forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        })
      })
    },
    { scope: ref },
  )

  return (
    <section id="projects" ref={ref}>
      <p className="section-label">Case Files</p>
      <h2 className="section-title">Every analysis starts with a question.</h2>
      <p className="proj-intro">
        Each case file follows the same arc: a business question, an analytical
        approach, and the insight that changed a decision.
      </p>

      {projects.map((p) => (
        <article className="proj-card glass" key={p.id}>
          <div>
            <div className="proj-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <blockquote className="proj-q">“{p.question}”</blockquote>
            <div className="proj-label">Approach</div>
            <p>{p.approach}</p>
            <div className="proj-label">Insight</div>
            <p>{p.insight}</p>
          </div>
          <div className="proj-metrics">
            {p.metrics.map((m) => (
              <div className="proj-metric glass" key={m.label}>
                <div className="v">{m.value}</div>
                <div className="l">{m.label}</div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  )
}
