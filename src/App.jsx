import './App.css'
import karimImg from './assets/karim.jpeg'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-title">Abdelkarim Chatti</span>
          <span className="brand-sub">Junior Web Developer</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="btn">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <img className="hero-img" src={karimImg} alt="Abdelkarim Chatti" />
        <div className="hero-text">
          <h1>Abdelkarim Chatti</h1>
          <p>Junior Web Developer</p>
          <div className="hero-actions">
            <a href="#projects" className="btn">View My Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            <a href="https://github.com/KareemChatti" target="_blank" rel="noreferrer" className="pill-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/abdelkarim-chatti-7623a625a/" target="_blank" rel="noreferrer" className="pill-btn">LinkedIn</a>
            <a href="mailto:karim2004ch@gmail.com" className="pill-btn">Email</a>
          </div>
          <div className="location">Bizerte, Tunisia</div>
        </div>
      </div>
    </section>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-intro">
        <p>
          I am a passionate junior web developer, specialized in modern technologies like React, Angular, and Spring Boot. With a solid academic background and enriching practical experiences, I am committed to creating innovative and high-performance web solutions. My journey in scouting and IEEE has allowed me to develop leadership and teamwork skills that complement my technical expertise.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <h3>Education</h3>
          <p><ul><li>Bachelor's in Information Systems Development at ISET Bizerte (2022-2025)</li>
             <li>Professional Master's Degree Co-Constructed in Data Analysis & Business Intelligence at ISET Bizerte (2025-2027)</li></ul> 
          </p>
        </div>
        <div className="card">
          <h3>Passion</h3>
          <p>Modern web development -  data analysis  -  cloud computing and devops
          </p>
        </div>
        <div className="card">
          <h3>Leadership</h3>
          <p>Scout Leader and IEEE member, building strong team skills</p>
        </div>
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="list">
        <article className="item">
          <div className="item-head">
            <h3>FullStack Developer Intern — SIGA</h3>
            <span>Feb 2025 — May 2025 • Tunis, Les Berges du Lac</span>
          </div>
          <p>
            Intelligent web and mobile platform in the medical field connecting patients, doctors and administrators through appointment management, medical record tracking and virtual assistance.
          </p>
          <div className="tags">
            <span className="pill">React</span>
            <span className="pill">Angular</span>
            <span className="pill">Spring Boot</span>
            <span className="pill">Flutter</span>
            <span className="pill">MongoDB</span>
          </div>
        </article>
        <article className="item">
          <div className="item-head">
            <h3>FullStack Developer Intern — Technix Informatique</h3>
            <span>Jan 2024 — Feb 2024 • Bizerte, RafRaf</span>
          </div>
          <p>
            Web application managing books in an online bookstore using MERN stack technology.
          </p>
          <div className="tags">
            <span className="pill">MongoDB</span>
            <span className="pill">Express.js</span>
            <span className="pill">React</span>
            <span className="pill">Node.js</span>
          </div>
        </article>
      </div>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" title="Recent Projects">
      <div className="cards">
        <div className="card">
          <h3>FIXORA</h3>
          <p>
            Home services platform with microservices architecture and real-time booking. Artisan and customer management with a modern responsive interface.
          </p>
          <div className="tags">
            <span className="pill">Angular</span>
            <span className="pill">Spring Boot</span>
            <span className="pill">Express.js</span>
            <span className="pill">Microservices</span>
            <span className="pill">MongoDB</span>
          </div>
          <div className="actions">
            <a className="btn btn-secondary" href="https://github.com/KareemChatti/Fixora" target="_blank" rel="noreferrer">Source Code</a>
          </div>
        </div>
        <div className="card">
          <h3>SHIFAA PLUS</h3>
          <p>
            Intelligent medical platform connecting patients, doctors and administrators with appointment management, medical records, virtual assistance and notifications.
          </p>
          <div className="tags">
            <span className="pill">React</span>
            <span className="pill">Angular</span>
            <span className="pill">Spring Boot</span>
            <span className="pill">Flutter</span>
            <span className="pill">MongoDB</span>
            <span className="pill">AI</span>
            <span className="pill">JWT</span>
          </div>
          <div className="actions">
            <a className="btn btn-secondary" href="https://github.com/KareemChatti/Shifaa-Plus" target="_blank" rel="noreferrer">Source Code</a>
            <a className="btn" href="https://www.linkedin.com/posts/abdelkarim-chatti-7623a625a_webdevelopment-innovation-healthcare-activity-7345081974966960129-GxQc?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_GGroBlcHIxom3xX_NJ3NqPZ44wCzzqP4" target="_blank" rel="noreferrer">View Project</a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="skills-cards">
        <div className="skill-card">
          <div className="skill-head">🧠 Languages</div>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Dart</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-head">💻 Frontend</div>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-head">🛠️ Backend</div>
          <ul>
            <li>Spring Boot</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>REST APIs</li>
            <li>JWT</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-head">🗄️ Databases</div>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Cassandra</li>
            <li>Neo4j</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-head">⚙️ Tools</div>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>Docker</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-head">🎨 Design</div>
          <ul>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>UI/UX</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contact" title="Contact Me">
      <div className="contact-card">
        <div className="contact-card-left">
          <h3>Let's Connect</h3>
          <p className="muted">Always open for opportunities and collaborations. Reach out anytime.</p>
          <div className="contact-info">
            <div className="info-item"><strong>Email:</strong> karim2004ch@gmail.com</div>
            <div className="info-item"><strong>Phone:</strong> +216 51 261 648</div>
            <div className="info-item"><strong>Location:</strong> Bizerte, Tunisia</div>
          </div>
        </div>
        <div className="contact-card-actions">
          <a className="pill-btn" href="mailto:karim2004ch@gmail.com">Email</a>
          <a className="pill-btn" href="https://github.com/KareemChatti" target="_blank" rel="noreferrer">GitHub</a>
          <a className="pill-btn" href="https://www.linkedin.com/in/abdelkarim-chatti-7623a625a/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Abdelkarim Chatti</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
