import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Linkedin, BarChart3 } from "lucide-react";
import { SiMeta, SiGoogle, SiWordpress } from "react-icons/si";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif font-bold text-xl tracking-tight">MS.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-accent font-medium mb-6">
                <span className="h-px w-8 bg-accent block"></span>
                <span>Geneva, Switzerland</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                Marwan Sharaiha
              </motion.h1>
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
                Senior Digital Performance & Marketing Strategist
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl">
                20+ years spanning advertising, media buying, digital performance, and marketing automation across the MENA region and Europe. Building strategic infrastructure, not just executing campaigns.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors" data-testid="link-contact-hero">
                  Let's Talk <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/marwansharaiha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:bg-secondary transition-colors" data-testid="link-linkedin-hero">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
        <section id="about" className="py-20 bg-secondary/30 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                Impact & Scale
                <span className="h-px flex-1 bg-border block"></span>
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Proprietary Network", desc: "Designed 80-billboard network in Iraq, achieving 75% OOH budget savings over 5 years." },
                  { title: "Strategic Infrastructure", desc: "Built Cairo Amman Bank's social media strategy from scratch, including LINC youth bank UI/UX." },
                  { title: "Global Budgets", desc: "Managed media budgets up to $2M for global brands with precision and performance." },
                  { title: "Agency Leadership", desc: "Founded PRODIGI Corp, leading an 18-person team serving Hyundai, LG, and Hamley's." },
                  { title: "Digital Entrepreneurship", desc: "Founded MENA Review and Shabab.in, scaling an Arabic platform to ~300 writers across 5 countries." },
                  { title: "Multilingual Reach", desc: "Operating fluently in Arabic, French, and English to bridge Western and MENA markets." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="bg-card p-8 rounded-xl border border-card-border shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-8 h-8 text-accent mb-4" />
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-16 text-center">
                Career Trajectory
              </motion.h3>
              <div className="space-y-12">
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
                ].map((job, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative pl-8 md:pl-0">
                    <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
                    <div className={`md:flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="absolute left-0 md:left-[50%] top-2 w-3 h-3 bg-accent rounded-full -translate-x-1.5 md:-translate-x-1.5 ring-4 ring-background z-10"></div>
                      <div className="md:w-[45%] mb-2 md:mb-0">
                        <div className={`text-sm font-semibold text-accent mb-1 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>{job.date}</div>
                      </div>
                      <div className={`md:w-[45%] bg-card border border-card-border p-6 rounded-xl shadow-sm hover:border-accent/50 transition-colors ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h4 className="text-lg font-bold">{job.role}</h4>
                        <div className="text-muted-foreground font-medium mb-2">{job.company} — {job.location}</div>
                        {job.highlight && <p className="text-sm text-foreground/80 mt-3 border-l-2 border-accent pl-3">{job.highlight}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-20 bg-secondary/30 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16"
            >
              <div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-8">Core Expertise</motion.h3>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {["Digital Performance Marketing", "Meta Business Manager", "Paid Social", "SEO/SEM", "Content Marketing", "Marketing Automation", "Media Planning & Buying", "Brand Strategy", "Team Leadership", "Campaign Orchestration", "MarTech & AI workflows"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium shadow-sm hover:border-accent transition-colors">
                      {skill}
                    </span>
                  ))}
                </motion.div>
              </div>
              <div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-8">Tech Stack</motion.h3>
                <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <SiMeta className="w-6 h-6 text-blue-600" />
                    <span className="font-medium">Meta Ads</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-amber-500" />
                    <span className="font-medium">Google Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SiGoogle className="w-6 h-6 text-blue-500" />
                    <span className="font-medium">Google Cloud</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <SiWordpress className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                    <span className="font-medium">WordPress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-md flex items-center justify-center text-white text-xs font-bold">M</div>
                    <span className="font-medium">Make.com</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="py-24 px-6 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16"
            >
              <div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-8">Education</motion.h3>
                <motion.div variants={fadeInUp} className="bg-card p-8 rounded-2xl border border-card-border">
                  <h4 className="text-xl font-bold">B.A. Public Administration</h4>
                  <p className="text-accent font-medium mt-1 mb-4">American University of Beirut</p>
                  <p className="text-muted-foreground text-sm">1997 – 2002</p>
                </motion.div>
              </div>
              
              <div>
                <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-8">Certifications</motion.h3>
                <div className="space-y-4">
                  {[
                    { title: "Certified Marketing Manager (CMM)", issuer: "ZenithOptimedia Middle East", date: "2017" },
                    { title: "Digital Marketing Strategy & Tactics", issuer: "Digital Marketing Arts Academy", date: "Dec 2013" },
                    { title: "Strategic Planning / Communication Specialist", issuer: "ZenithOptimedia ME", date: "Jun 2008" }
                  ].map((cert, i) => (
                    <motion.div key={i} variants={fadeInUp} className="bg-card p-6 rounded-xl border border-card-border flex justify-between items-center group hover:border-accent transition-colors">
                      <div>
                        <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap">{cert.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                Personal Ventures
                <span className="h-px flex-1 bg-border block"></span>
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp} className="group relative bg-card rounded-2xl overflow-hidden border border-card-border hover:border-accent transition-colors">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">MENA Review</h4>
                    <p className="text-muted-foreground mb-6">Marketing & AI trends newsletter keeping professionals ahead of the curve. (2023–present)</p>
                    <a href="https://mena-review.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline" data-testid="link-mena-review">
                      Visit Website <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="group relative bg-card rounded-2xl overflow-hidden border border-card-border hover:border-accent transition-colors">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Shabab.in</h4>
                    <p className="text-muted-foreground mb-6">Arabic ad-revenue-sharing blogging platform scaling to ~300 writers across 5 countries. (2020–present)</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="group relative bg-card rounded-2xl overflow-hidden border border-card-border hover:border-accent transition-colors">
                  <div className="p-8">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">PICTOMED.org</h4>
                    <p className="text-muted-foreground mb-6">IT volunteer for a vital visual doctor-patient communication tool, aiding accessible healthcare. (2026–present)</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beyond Work */}
        <section id="personal" className="py-24 px-6 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-3xl font-serif font-bold mb-12 flex items-center gap-4">
                Beyond Work
                <span className="h-px flex-1 bg-border block"></span>
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp} className="bg-card p-8 rounded-2xl border border-card-border">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">🏃‍♂️</span>
                    Marathon Runner
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Dead2Red 242km relay (2010 & 2011)</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Dead Sea Ultra Marathon 21km (2010 & 2011)</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Dubai Standard Chartered 10km</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Aqaba Red Sea 10km</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Amman International Marathon</li>
                  </ul>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="bg-card p-8 rounded-2xl border border-card-border">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm">🤝</span>
                    Volunteer & Community
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> World Economic Forum operations volunteer (Dead Sea, Jordan - 2004, 2006)</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> Lebanese Red Cross committee member (AUB)</li>
                    <li className="flex items-start gap-2"><span className="text-accent mt-1">•</span> PSPA student committee member (AUB)</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to strategize?</motion.h3>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-primary-foreground/80 mb-12">
                Based in Geneva. Operating globally. Let's discuss your next big objective.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <a href="mailto:mgsharaiha@gmail.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors" data-testid="link-email">
                  <Mail className="w-6 h-6" />
                  mgsharaiha@gmail.com
                </a>
                <a href="tel:+41783293359" className="flex items-center gap-3 text-lg hover:text-accent transition-colors" data-testid="link-phone">
                  <Phone className="w-6 h-6" />
                  +41 783293359
                </a>
                <a href="https://www.linkedin.com/in/marwansharaiha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-accent transition-colors" data-testid="link-linkedin">
                  <Linkedin className="w-6 h-6" />
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
