const links = [
  ['#story', 'Story'],
  ['#skills', 'Skills'],
  ['#experience', 'Experience'],
  ['#projects', 'Case Files'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  return (
    <nav className="nav glass">
      <a className="brand" href="#top">OK<span className="accent">.</span></a>
      {links.map(([href, label]) => (
        <a key={href} href={href}>{label}</a>
      ))}
    </nav>
  )
}
