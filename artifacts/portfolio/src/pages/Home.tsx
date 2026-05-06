import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Phone, ArrowRight, CheckCircle2, ChevronRight, Linkedin, BarChart3, ExternalLink } from "lucide-react";
import { SiMeta, SiGoogle, SiWordpress, SiHubspot, SiPython } from "react-icons/si";
import { ThemeToggle } from "@/components/ThemeToggle";

const ease = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay }
  })
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease, delay }
  })
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease, delay }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease, delay }
  })
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease } }
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h3
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="text-3xl font-serif font-bold mb-12 flex items-center gap-4"
    >
      {children}
      <motion.span
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="h-px flex-1 bg-border block"
      />
    </motion.h3>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const smoothY = useSpring(heroY, { stiffness: 80, damping: 20 });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="font-serif font-bold text-xl tracking-tight"
          >
            MS.
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            <a href="#about" className="hover:text-accent transition-colors" data-testid="nav-about">About</a>
            <a href="#experience" className="hover:text-accent transition-colors" data-testid="nav-experience">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors" data-testid="nav-projects">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors" data-testid="nav-contact">Contact</a>
          </motion.div>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
          {/* Parallax background accent */}
          <motion.div
            style={{ y: smoothY }}
            className="pointer-events-none absolute inset-0 flex items-center justify-end pr-12 opacity-[0.04]"
          >
            <span className="text-[22rem] font-serif font-black leading-none select-none">MS</span>
          </motion.div>

          <motion.div style={{ opacity: heroOpacity }} className="relative max-w-6xl mx-auto">
            <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
              <motion.div
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-3 text-accent font-medium mb-6"
              >
                <motion.span
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease, delay: 0.3 }}
                  className="h-px w-8 bg-accent block"
                />
                <span>Geneva, Switzerland</span>
                <span className="text-muted-foreground/60">·</span>
                <span>Amman, Jordan</span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={0.05}
                className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6"
              >
                Marwan Sharaiha
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-2xl md:text-3xl text-muted-foreground font-light mb-8"
              >
                Senior Digital Performance &amp; Marketing Strategist
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={0.15}
                className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl"
              >
                20+ years spanning advertising, media buying, digital performance, and marketing
                automation across the MENA region and Europe. Building strategic infrastructure,
                not just executing campaigns.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.2} className="flex flex-wrap gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                  data-testid="link-contact-hero"
                >
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/marwansharaiha"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
                  data-testid="link-linkedin-hero"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Impact & Scale ── */}
        <section id="about" className="py-20 bg-secondary/30 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Impact &amp; Scale</SectionHeading>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { title: "Proprietary Network", desc: "Designed 80-billboard network in Iraq, achieving 75% OOH budget savings over 5 years." },
                { title: "Strategic Infrastructure", desc: "Built Cairo Amman Bank's social media strategy from scratch, including LINC youth bank UI/UX." },
                { title: "Global Budgets", desc: "Managed media budgets up to $2M for global brands with precision and performance." },
                { title: "Agency Leadership", desc: "Founded PRODIGI Corp, leading an 18-person team serving Hyundai, LG, and Hamley's." },
                { title: "Digital Entrepreneurship", desc: "Founded MENA Review and Shabab.in, scaling an Arabic platform to ~300 writers across 5 countries." },
                { title: "Multilingual Reach", desc: "Operating fluently in Arabic, French, and English to bridge Western and MENA markets." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  custom={i * 0.05}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-card p-8 rounded-xl border border-card-border shadow-sm"
                  data-testid={`card-impact-${i}`}
                >
                  <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Career Trajectory ── */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="text-3xl font-serif font-bold mb-16 text-center"
            >
              Career Trajectory
            </motion.h3>

            <div className="relative space-y-10">
              {/* Center spine */}
              <motion.div
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease }}
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
              />

              {[
                { role: "Marketing Consultant", company: "SmartBuy", location: "Amman", date: "Apr 2025 – Jul 2025" },
                { role: "Communication Advisor", company: "CAPA / American University of Kurdistan", location: "Dohuk, Iraq", date: "Aug 2024 – Sep 2024" },
                { role: "Sales/Education Advisor", company: "EF Education First", location: "Barcelona", date: "Sep 2022 – Jun 2023" },
                { role: "Sales Consultant", company: "GoDaddy", location: "Barcelona", date: "Feb 2022 – Aug 2022" },
                { role: "General Manager & Owner", company: "Carouge Trade Mediators LLC", location: "Amman", date: "Nov 2019 – Oct 2021" },
                { role: "Online Marketing & Automation Manager", company: "Cairo Amman Bank PLC", location: "Amman", date: "Nov 2013 – Oct 2019", highlight: "6 years — Flagship role driving digital transformation." },
                { role: "Managing Director", company: "PRODIGI Corp", location: "Amman", date: "Oct 2012 – Sep 2013", highlight: "Led 18-person team; key clients included Hyundai, LG, Hamley's." },
                { role: "Project Leader / Consultant", company: "Adrenaline Marketing Communications", location: "Amman", date: "Mar 2012 – Sep 2012" },
                { role: "Marketing Manager", company: "Dar El Ryan (LG Iraq distributor)", location: "Baghdad", date: "Jul 2010 – Dec 2011", highlight: "Built 80-billboard network; 75% OOH budget savings." },
                { role: "Invention Manager / Media Manager", company: "Mindshare MENA", location: "Amman", date: "Feb 2009 – Jun 2010", highlight: "Managed $15K–$2M budgets." },
                { role: "Head of Buying (Media)", company: "Zenith Optimedia", location: "Amman", date: "Jan 2005 – Jan 2009" },
                { role: "Account Manager", company: "Publicis.Graphics", location: "Amman", date: "Dec 2002 – Dec 2004" },
              ].map((job, i) => {
                const isEven = i % 2 === 0;
                const cardVariant = isEven ? slideLeft : slideRight;
                return (
                  <div key={i} className="relative pl-8 md:pl-0">
                    {/* Dot on the spine */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1, ease }}
                      className="absolute left-0 md:left-1/2 top-5 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-background z-10"
                    />

                    <div className={`md:flex items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                      {/* Date label */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={isEven ? slideRight : slideLeft}
                        className="md:w-[45%] mb-2 md:mb-0"
                      >
                        <div className={`text-sm font-semibold text-accent mb-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                          {job.date}
                        </div>
                      </motion.div>

                      {/* Card */}
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={cardVariant}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.25 }}
                        className={`md:w-[45%] bg-card border border-card-border p-6 rounded-xl shadow-sm hover:border-accent/50 hover:shadow-md transition-shadow ${isEven ? "md:text-right" : "md:text-left"}`}
                        data-testid={`card-job-${i}`}
                      >
                        <h4 className="text-lg font-bold">{job.role}</h4>
                        <div className="text-muted-foreground font-medium mb-2">{job.company} — {job.location}</div>
                        {job.highlight && (
                          <p className={`text-sm text-foreground/80 mt-3 border-accent pl-3 ${isEven ? "border-r-2 pr-3 pl-0" : "border-l-2"}`}>
                            {job.highlight}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Skills & Tech Stack ── */}
        <section className="py-20 bg-secondary/30 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-3xl font-serif font-bold mb-8"
              >
                Core Expertise
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Digital Performance Marketing", "Meta Business Manager", "Paid Social",
                  "SEO / SEM", "Content Marketing", "Marketing Automation",
                  "Media Planning & Buying", "Brand Strategy", "Team Leadership",
                  "Campaign Orchestration", "MarTech & AI Workflows"
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariant}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium shadow-sm hover:border-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className="text-3xl font-serif font-bold mb-8"
              >
                Tech Stack
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={stagger}
                className="grid grid-cols-2 gap-5"
              >
                {[
                  { icon: <SiMeta className="w-5 h-5 text-blue-600" />, label: "Meta Ads" },
                  { icon: <BarChart3 className="w-5 h-5 text-amber-500" />, label: "Google Analytics" },
                  { icon: <SiGoogle className="w-5 h-5 text-blue-500" />, label: "Google Cloud" },
                  { icon: <div className="w-5 h-5 bg-[#15A847] rounded flex items-center justify-center text-white text-[10px] font-bold">A</div>, label: "Google AdSense" },
                  { icon: <SiGoogle className="w-5 h-5 text-green-600" />, label: "Google Mktg Platform" },
                  { icon: <SiHubspot className="w-5 h-5 text-[#FF7A59]" />, label: "HubSpot" },
                  { icon: <SiGoogle className="w-5 h-5 text-sky-500" />, label: "Search Console" },
                  { icon: <div className="w-5 h-5 bg-[#008373] rounded flex items-center justify-center text-white text-[10px] font-bold">B</div>, label: "Bing Search Console" },
                  { icon: <SiWordpress className="w-5 h-5 text-slate-700 dark:text-slate-300" />, label: "WordPress" },
                  { icon: <SiPython className="w-5 h-5 text-[#3776AB]" />, label: "Python (Basic)" },
                  { icon: <div className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center text-white text-[10px] font-bold">M</div>, label: "Make.com" },
                ].map(({ icon, label }, i) => (
                  <motion.div
                    key={label}
                    variants={tagVariant}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    {icon}
                    <span className="font-medium text-sm">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Education & Certifications ── */}
        <section id="education" className="py-24 px-6 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="text-3xl font-serif font-bold mb-8"
                >
                  Education
                </motion.h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={scaleIn}
                  className="bg-card p-8 rounded-2xl border border-card-border"
                >
                  <h4 className="text-xl font-bold">B.A. Public Administration</h4>
                  <p className="text-accent font-medium mt-1 mb-4">American University of Beirut</p>
                  <p className="text-muted-foreground text-sm">1997 – 2002</p>
                </motion.div>
              </div>

              <div>
                <motion.h3
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  className="text-3xl font-serif font-bold mb-8"
                >
                  Certifications
                </motion.h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={stagger}
                  className="space-y-4"
                >
                  {[
                    { title: "Certified Marketing Manager (CMM)", issuer: "ZenithOptimedia Middle East", date: "2017" },
                    { title: "Digital Marketing Strategy & Tactics", issuer: "Digital Marketing Arts Academy", date: "Dec 2013" },
                    { title: "Strategic Planning / Communication Specialist", issuer: "ZenithOptimedia ME", date: "Jun 2008" }
                  ].map((cert, i) => (
                    <motion.div
                      key={i}
                      variants={slideLeft}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card p-6 rounded-xl border border-card-border flex justify-between items-center group hover:border-accent transition-colors"
                      data-testid={`card-cert-${i}`}
                    >
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">{cert.date}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Campaign Spotlight ── */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Campaign Spotlight</SectionHeading>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="bg-card border border-card-border rounded-2xl overflow-hidden shadow-sm"
              data-testid="card-campaign-lg"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Video embed */}
                <div className="relative bg-foreground/5 aspect-video md:aspect-auto md:min-h-[320px]">
                  <iframe
                    src="https://www.youtube.com/embed/vz8cE_oTAHI"
                    title="LG Social Crane Campaign"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    data-testid="iframe-lg-crane"
                  />
                </div>

                {/* Description */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <SiGoogle className="w-5 h-5 opacity-40" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Featured Campaign · 2012–2013</span>
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-2">LG Social Crane</h4>
                  <p className="text-accent font-semibold text-sm mb-4">Executed at PRODIGI Corp for LG Electronics</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A pioneering social media activation that connected online engagement with a real-world physical stunt.
                    Social media activity drove a live crane experience, creating a viral feedback loop between digital
                    audiences and an offline spectacle — well ahead of its time in the MENA market.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Experiential Marketing", "Social Media Activation", "LG Electronics", "Viral Campaign"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Ventures row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8 mt-12"
            >
              {[
                {
                  title: "MENA Review",
                  desc: "Marketing & AI trends newsletter keeping professionals ahead of the curve.",
                  year: "2023–present",
                  href: "https://mena-review.com/",
                  testId: "link-mena-review"
                },
                {
                  title: "Shabab.in",
                  desc: "Arabic ad-revenue-sharing blogging platform with ~300 writers across 5 countries.",
                  year: "2020–present",
                  href: null,
                  testId: null
                },
              ].map((proj, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  custom={i * 0.07}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.25 }}
                  className="bg-card rounded-2xl overflow-hidden border border-card-border hover:border-accent/60 transition-colors"
                  data-testid={`card-project-${i}`}
                >
                  <div className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-1">{proj.title}</h4>
                    <span className="text-xs text-accent font-semibold tracking-wide">{proj.year}</span>
                    <p className="text-muted-foreground mt-3 mb-6">{proj.desc}</p>
                    {proj.href && (
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline"
                        data-testid={proj.testId ?? undefined}
                      >
                        Visit Website <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Beyond Work ── */}
        <section id="personal" className="py-24 px-6 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Beyond Work</SectionHeading>

            {/* Top row: Marathon + Volunteer */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={slideLeft}
                className="bg-card p-8 rounded-2xl border border-card-border"
              >
                <h4 className="text-xl font-bold mb-4">Marathon Runner</h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="space-y-3 text-muted-foreground"
                >
                  {[
                    "Dead2Red 242km relay (2010 & 2011)",
                    "Dead Sea Ultra Marathon 21km (2010 & 2011)",
                    "Dubai Standard Chartered 10km",
                    "Aqaba Red Sea 10km",
                    "Amman International Marathon"
                  ].map((item) => (
                    <motion.li key={item} variants={tagVariant} className="flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">—</span> {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={slideRight}
                className="bg-card p-8 rounded-2xl border border-card-border"
              >
                <h4 className="text-xl font-bold mb-4">Volunteer &amp; Community</h4>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="space-y-3 text-muted-foreground"
                >
                  {[
                    "World Economic Forum operations volunteer — Dead Sea, Jordan (2004, 2006)",
                    "Lebanese Red Cross committee member (AUB)",
                    "PSPA student committee member (AUB)"
                  ].map((item) => (
                    <motion.li key={item} variants={tagVariant} className="flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">—</span> {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>

            {/* PICTOMED card — full width */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.25 }}
              className="bg-card rounded-2xl border border-card-border overflow-hidden"
              data-testid="card-pictomed"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Accent sidebar */}
                <div className="hidden md:flex flex-col items-center justify-center bg-accent/8 border-r border-card-border p-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent text-center">IT Volunteer</span>
                  <span className="text-xs text-muted-foreground mt-1">2026 – Present</span>
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-8 md:p-10">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <div>
                      <h4 className="text-2xl font-bold">PICTOMED.org</h4>
                      <p className="text-accent font-semibold text-sm mt-1">Visual Doctor–Patient Communication Tool</p>
                    </div>
                    <span className="md:hidden text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                      IT Volunteer · 2026–Present
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Contributing as an IT volunteer to PICTOMED's web-based, non-verbal visual communication platform
                    designed to overcome language barriers in doctor–patient interactions. The tool enables healthcare
                    providers to communicate effectively with patients regardless of shared language — a meaningful
                    application of technology to human care.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Healthcare Tech", "Language Accessibility", "Web Volunteer", "Social Impact"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to strategize?
              </motion.h3>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-primary-foreground/80 mb-12">
                Based in Geneva. Operating globally. Let's discuss your next big objective.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
              >
                <span className="flex items-center gap-3 text-lg select-all cursor-text" data-testid="text-email">
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>marwansharaiha</span><span className="mx-0.5">[at]</span><span>gmail.com</span>
                </span>
                <a
                  href="tel:+41783293359"
                  className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  +41 783293359
                </a>
                <a
                  href="https://www.linkedin.com/in/marwansharaiha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5 shrink-0" />
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Marwan Sharaiha. All rights reserved.</p>
      </footer>
    </div>
  );
}
