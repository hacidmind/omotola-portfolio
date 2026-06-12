import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { profile } from '../data/content.js'

export default function Hero() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-kicker', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero h1 .line', { y: 60, opacity: 0, duration: 0.9, stagger: 0.15 }, '-=0.4')
        .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-ctas .btn', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.5')
        .from('.scroll-hint', { opacity: 0, duration: 1 }, '-=0.2')
    },
    { scope: ref },
  )

  return (
    <section className="hero" id="top" ref={ref}>
      <p className="hero-kicker">
        <span className="dot" /> {profile.location} · open to data roles
      </p>
      <h1>
        <span className="line" style={{ display: 'block' }}>Hi, I&apos;m {profile.firstName}.</span>
        <span className="line grad" style={{ display: 'block' }}>{profile.tagline}</span>
      </h1>
      <p className="hero-sub">{profile.intro}</p>
      <div className="hero-ctas">
        <a className="btn btn-primary" href="#projects">Read the case files</a>
        <a className="btn btn-ghost" href="#contact">Get in touch</a>
      </div>
      <div className="scroll-hint">scroll to explore</div>
    </section>
  )
}
