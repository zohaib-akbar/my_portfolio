import { useState } from 'react'
import profileImage from './assets/image.png'
import './App.css'

const projects = [
  {
    number: '01',
    title: 'Enterprise Identity Data Connector',
    type: 'Integration platform',
    description: 'A FastAPI connector that normalizes identity and entitlement data, detects deltas between syncs, and gives teams a clear view of connector health.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    link: 'https://github.com/zohaibakbarrehmani',
  },
  {
    number: '02',
    title: 'AI-Powered Job Portal',
    type: 'Product / AI',
    description: 'A Django platform that matches people to relevant roles through resume parsing, AI recommendations, role-based access, and a RAG assistant.',
    stack: ['Django', 'DRF', 'Python', 'RAG'],
    link: 'https://github.com/zohaibakbarrehmani',
  },
  {
    number: '03',
    title: 'AI Smart Study Assistant',
    type: 'Product / AI',
    description: 'An AI learning companion that turns questions into useful explanations and summaries through a clean MERN stack application and LLM APIs.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/zohaibakbarrehmani',
  },
  {
    number: '04',
    title: 'Agentic AI Automations',
    type: 'Experiments / AI',
    description: 'Autonomous agents and workflows built around task planning, tool use, memory, and multi-step reasoning for practical automation.',
    stack: ['Python', 'Google ADK', 'LLMs', 'n8n'],
    link: 'https://github.com/zohaibakbarrehmani',
  },
]

const skills = [
  { label: 'Agentic AI', group: 'Intelligence', level: 'Core focus' },
  { label: 'LLMs / RAG', group: 'Intelligence', level: 'Core focus' },
  { label: 'Python', group: 'AI engineering', level: 'Expertise' },
  { label: 'OpenAI API / Prompting', group: 'AI engineering', level: 'Working knowledge' },
  { label: 'Django / FastAPI', group: 'AI backend', level: 'Expertise' },
  { label: 'React / Next.js', group: 'AI products', level: 'Expertise' },
]

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-topline"><span>{project.number}</span><span>{project.type}</span></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <a className="text-link" href={project.link} target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <div className={darkMode ? 'portfolio dark' : 'portfolio'}>
      <header className="site-header">
        <a className="brand" href="#home">ZAR<span>.</span></a>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle color theme"><span>{darkMode ? '☼' : '◐'}</span></button>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">AI engineer · Lahore, Pakistan</p>
            <h1>Building intelligent<br /><em>systems</em> with purpose.</h1>
            <p className="hero-intro">I&apos;m Zohaib, an AI engineer who turns models, data, and automation into useful products people can trust.</p>
            <div className="hero-actions"><a className="button primary" href="#projects">See my work <span>↗</span></a><a className="button secondary" href="#contact">Let&apos;s talk <span>↓</span></a></div>
          </div>
          <div className="hero-aside"><div className="avatar"><img src={profileImage} alt="Zohaib Akbar Rehmani" /><div className="avatar-ring"></div></div><p className="availability"><span></span> Available for AI projects</p><p className="hero-note">Currently focused on agentic workflows, RAG assistants, and AI-powered products.</p></div>
          <div className="scroll-cue">Scroll to explore <span>↓</span></div>
        </section>

        <section className="about-section section-grid" id="about">
          <SectionLabel>01 / About me</SectionLabel>
          <div className="about-content"><h2>Making AI useful.<br /><span>Making it reliable.</span></h2><div className="about-text"><p>I&apos;m a Computer Science graduate and AI-focused Software Engineer with a year of experience leading backend integration work at Nexvora Dev Group.</p><p>My work brings together Python, LLMs, RAG, APIs, and automation to solve real problems. I care about the engineering around AI too: clean data, secure systems, useful interfaces, and results people can understand.</p><a className="text-link" href="mailto:muhammadzohaib1613@gmail.com">Start a conversation <span>↗</span></a></div></div>
        </section>

        <section className="skills-section section-grid" id="skills"><SectionLabel>02 / AI capabilities</SectionLabel><div className="skills-content"><h2>The toolkit behind<br /><span>the intelligence.</span></h2><div className="skills-list">{skills.map((skill, index) => <div className="skill-row" key={skill.label}><span className="skill-index">0{index + 1}</span><strong>{skill.label}</strong><span className="skill-group">{skill.group}</span><span className="skill-level">{skill.level}</span></div>)}</div></div></section>

        <section className="projects-section" id="projects"><div className="section-heading"><SectionLabel>03 / Selected work</SectionLabel><h2>AI projects with a<br /><span>point of view.</span></h2><p>A handful of AI products, agentic workflows, and dependable systems built at the intersection of engineering and intelligence.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div></section>

        <section className="experience-section section-grid"><SectionLabel>04 / Experience</SectionLabel><div className="experience-content"><div className="timeline-item"><div><p className="timeline-date">2025 — 2026</p><h3>Lead Software Developer</h3><p className="timeline-company">Nexvora Dev Group</p></div><p>Led a small team building RESTful API integrations, data normalization layers, automation scripts, and React dashboards for internal tools and third-party platforms.</p></div><div className="timeline-item"><div><p className="timeline-date">Education</p><h3>BS Computer Science</h3><p className="timeline-company">COMSATS University Islamabad</p></div><p>Graduated with a 3.05 / 4.00 CGPA. Coursework included AI, data structures, database systems, software engineering, and web development.</p></div><div className="certifications"><span>Certified in</span><strong>Python Essentials · Cisco</strong><strong>Agentic AI · Kaggle / Google</strong></div></div></section>

        <section className="contact-section" id="contact"><div className="contact-intro"><SectionLabel>05 / Contact</SectionLabel><h2>Have an AI<br /><em>idea?</em></h2><p>Let&apos;s turn a promising idea into an intelligent product that works in the real world.</p><div className="contact-details"><a href="mailto:muhammadzohaib1613@gmail.com">muhammadzohaib1613@gmail.com</a><a href="tel:+923178138695">+92 317 8138695</a><div><a href="https://github.com/zohaibakbarrehmani" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/zohaibakbarrehmani" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>{sent ? <div className="form-success"><span>✓</span><h3>Message received.</h3><p>Thanks for reaching out. I&apos;ll be in touch soon.</p><button type="button" onClick={() => setSent(false)}>Send another</button></div> : <><label>Name<input type="text" placeholder="Your name" required /></label><label>Email<input type="email" placeholder="you@example.com" required /></label><label>Message<textarea placeholder="Tell me about your AI project..." rows="4" required></textarea></label><button className="button primary" type="submit">Send message <span>↗</span></button></>}</form></section>
      </main>
      <footer><span>© 2026 Zohaib Akbar Rehmani</span><span>Designed & built with intention.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}

export default App
