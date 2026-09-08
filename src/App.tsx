import {
  Activity, ArrowDown, ArrowRight, ArrowUpRight, BellRing, Check,
  Code2, FolderKanban, Menu, Smartphone, Sparkles, Target, TimerReset, X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnalyticsPreview } from "./components/AnalyticsPreview";
import { FocusMark } from "./components/FocusMark";
import { ProductVisual } from "./components/ProductVisual";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { TimerPreview } from "./components/TimerPreview";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { features } from "./data/features";
import { badgeMilestones, getImageSlots, siteLinks, widgetNames } from "./data/siteContent";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

const flow = [
  ["01", "Start a session", "Choose a project and what you are working on."],
  ["02", "Focus remembers", "Time, tasks, activity and streaks update together."],
  ["03", "See the pattern", "Analytics turn everyday work into visible progress."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage?.startsWith("pt")
    ? "pt-BR"
    : "en";

  const imageSlots = getImageSlots(currentLanguage);

  if (
    window.location.pathname ===
    "/privacy"
  ) {
    return <PrivacyPolicyPage />;
  }

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Focus home"><FocusMark /><span>focus</span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#system" onClick={() => setMenuOpen(false)}>{t("navigation.product")}</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>{t("navigation.features")}</a>
          <a href="#analytics" onClick={() => setMenuOpen(false)}>{t("navigation.analytics")}</a>
          <a href="#widgets" onClick={() => setMenuOpen(false)}>{t("navigation.widgets")}</a>
          <a className="nav-cta" href="#download" onClick={() => setMenuOpen(false)}>{t("navigation.action")} <ArrowUpRight size={15} /></a>
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <motion.div className="hero-copy" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="eyebrow"><span /> {t("hero.eyebrow")}</div>
          <h1>{t("hero.title")}<br /><em>{t("hero.highlight")}</em></h1>
          <p>{t("hero.description")}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#download">{t("hero.primaryAction")} <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#system">{t("hero.secondaryAction")} <ArrowDown size={16} /></a>
          </div>
          <div className="hero-points">
            <span>{t("hero.point1")}</span>
            <span>{t("hero.point2")}</span>
            <span>{t("hero.point3")}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <TimerPreview />
        </motion.div>
      </section>

      <motion.section className="statement shell" {...reveal} id="system">
        <p>{t("system.eyebrow")}</p>
        <h2>{t("system.title")} <span>{t("system.highlight")}</span></h2>
        <div className="flow-grid">
          {flow.map(([number], index) => (
            <div className="flow-item" key={number}>
              <span>{number}</span>
              <h3>{t(`system.steps.${index}.title`)}</h3>
              <p>{t(`system.steps.${index}.description`)}</p>
              <ArrowRight size={18} />
            </div>
          ))}
        </div>
      </motion.section>

      <section className="features shell" id="features">
        <motion.div className="section-heading" {...reveal}>
          <span className="section-kicker">{t("foundation.eyebrow")}</span>
          <h2>{t("foundation.title")}<br /><span>{t("foundation.highlight")}</span></h2>
        </motion.div>
        <div className="feature-grid">
          {features.map(({ number, icon: Icon, title, text }, index) => (
            <motion.article className="feature-card" key={number} {...reveal} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <div className="feature-top"><span>{number}</span><Icon size={22} /></div><h3>{t(`foundation.features.${index}.title`)}</h3>
              <p>{t(`foundation.features.${index}.description`)}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="showcase shell">
        <motion.div className="showcase-copy" {...reveal}>
          <span className="section-kicker">{t("timer.eyebrow")}</span>
          <h2>{t("timer.title")}<br /><span>{t("timer.highlight")}</span></h2>
          <p>{t("timer.description")}</p>
          <div className="settings-row">
            <span><TimerReset size={17} /> {t("timer.duration")}</span>
            <span><Sparkles size={17} /> {t("timer.transitions")}</span>
          </div>
        </motion.div>
        <ProductVisual src={imageSlots.timer} label={t("timer.imageLabel")} alt={t("timer.imageLabel")} />
      </section>

      <section className="showcase reverse shell">
        <ProductVisual src={imageSlots.notifications} label={t("notification.imageLabel")} alt={t("notification.imageLabel")} className="phone-visual" />
        <motion.div className="showcase-copy" {...reveal}>
          <span className="section-kicker">{t("notification.eyebrow")}</span>
          <h2>{t("notification.title")}<br /><span>{t("notification.highlight")}</span></h2>
          <p>{t("notification.description")}</p>
          <ul className="check-list">
            <li><Check size={16} /> {t("notification.item1")}</li>
            <li><Check size={16} /> {t("notification.item2")}</li>
            <li><Check size={16} /> {t("notification.item3")}</li>
          </ul>
        </motion.div>
      </section>

      <section className="projects-section shell">
        <motion.div className="wide-heading" {...reveal}>
          <span className="section-kicker">{t("projects.eyebrow")}</span>
          <h2>{t("projects.title")} <span>{t("projects.highlight")}</span></h2>
          <p>{t("projects.description")}</p>
        </motion.div>
        <div className="project-layout">
          <ProductVisual src={imageSlots.projects} label={t("projects.imageLabel")} alt={t("projects.imageLabel")} />
          <div className="detail-stack">
            <article><FolderKanban /><div><h3>{t("projects.projectTitle")}</h3><p>{t("projects.projectDescription")}</p></div></article>
            <article><Check /><div><h3>{t("projects.taskTitle")}</h3><p>{t("projects.taskDescription")}</p></div></article>
            <article><Target /><div><h3>{t("projects.goalTitle")}</h3><p>{t("projects.goalDescription")}</p></div></article>
          </div>
        </div>
      </section>

      <section className="analytics-section" id="analytics">
        <div className="shell analytics-layout">
          <motion.div className="analytics-copy" {...reveal}>
            <span className="section-kicker">{t("analytics.eyebrow")}</span>
            <h2>{t("analytics.title")} <span>{t("analytics.highlight")}</span></h2>
            <p>{t("analytics.description")}</p>
            <div className="period-tabs">
              <span>{t("analytics.week")}</span>
              <span className="active">{t("analytics.month")}</span>
              <span>{t("analytics.year")}</span>
              <span>{t("analytics.allTime")}</span>
            </div>
          </motion.div>
          <AnalyticsPreview />
        </div>
        <div className="shell image-pair">
          <ProductVisual src={imageSlots.analytics} label={t("analytics.analyticsImage")} alt={t("analytics.analyticsImage")} />
          <ProductVisual src={imageSlots.history} label={t("analytics.historyImage")} alt={t("analytics.historyImage")} />
        </div>
      </section>

      <section className="insights shell">
        <motion.div className="section-heading" {...reveal}>
          <span className="section-kicker">{t("insights.eyebrow")}</span>
          <h2>
            {t("insights.title1")}<br />
            {t("insights.title2")}<br />
            <span>{t("insights.highlight")}</span>
          </h2>
        </motion.div>
        <div className="insight-grid">
          {Array.from({ length: 4 }).map((_, index) => (
            <article key={index}>
              <Activity size={18} />
              <span>{t(`insights.cards.${index}.label`)}</span>
              <strong>{t(`insights.cards.${index}.value`)}</strong>
              <p>{t(`insights.cards.${index}.detail`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="badges-section shell">
        <motion.div className="badges-copy" {...reveal}>
          <span className="section-kicker">{t("badges.eyebrow")}</span>
          <h2>{t("badges.title")} <span>{t("badges.highlight")}</span></h2>
          <p>{t("badges.description")}</p>
          <div className="badge-strip">
            {badgeMilestones.map((badge) => (
              <div className="badge-item" key={badge.name}>
                <b>{badge.icon}</b>
                <span>{badge.name}</span>
                <small>
                  {currentLanguage === "pt-BR"
                    ? badge.days.replace("days", "dias").replace("day", "dia")
                    : badge.days}
                </small>
              </div>
            ))}
          </div>
        </motion.div>
        <ProductVisual src={imageSlots.badges} label={t("badges.imageLabel")} alt={t("badges.imageLabel")} />
      </section>

      <section className="widgets-section" id="widgets">
        <div className="shell widgets-layout">
          <ProductVisual src={imageSlots.widgets} label={t("widgets.imageLabel")} alt={t("widgets.imageLabel")} className="widgets-visual" />
          <motion.div className="showcase-copy" {...reveal}>
            <span className="section-kicker">{t("widgets.eyebrow")}</span>
            <h2>{t("widgets.title")}<br /><span>{t("widgets.highlight")}</span></h2>
            <p>{t("widgets.description")}</p>
            <div className="widget-tags">{widgetNames.map((name, index) => {
              const portugueseWidgets = [
                "Foco de hoje",
                "Sequência atual",
                "Atividade semanal",
                "Atividade mensal",
                "Análises semanais",
                "Análises mensais",
                "Metas",
                "Projeto principal",
                "Timer de foco",
              ];

              return (
                <span key={name}>
                  {currentLanguage === "pt-BR"
                    ? portugueseWidgets[index]
                    : name}
                </span>
              );
            })}</div>
          </motion.div>
        </div>
      </section>

      <section className="connection shell">
        <motion.div {...reveal}>
          <span className="section-kicker">{t("connection.eyebrow")}</span>
          <h2>{t("connection.title")}<br /><span>{t("connection.highlight")}</span></h2>
        </motion.div>
        <div className="connection-chain">
          {Array.from({ length: 6 }).map((_, index) => (
            
            <div key={index}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{t(`connection.steps.${index}`)}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="origin shell">
        <motion.div className="origin-card" {...reveal}>
          <BellRing size={25} />
          <blockquote>“{t("origin.quote")}”</blockquote>
          <p>{t("origin.description")}</p>
        </motion.div>
      </section>

      <motion.section className="final-cta shell" id="download" {...reveal}>
        <div className="cta-glow" /><FocusMark />
        <h2>{t("final.title")}<br /><span>{t("final.highlight")}</span></h2>
        <p>{t("final.description")}</p>
        <div className="hero-actions">
          <a className="button-primary" href={siteLinks.download}>{t("final.download")} <Smartphone size={18} /></a>
          <a className="text-link" href={siteLinks.github} target="_blank" rel="noreferrer">{t("final.github")} <Code2 size={18} /></a>
        </div>
      </motion.section>

      <footer className="footer shell">
        <div className="brand"><FocusMark /><span>focus</span></div>
        <div className="footer-center">
          <p>{t("footer.message")}</p>
          <a href="/privacy">
            {currentLanguage === "pt-BR"
              ? "Política de Privacidade"
              : "Privacy Policy"}
          </a>
        </div>
        <span>© 2026 Focus</span>
      </footer>
    </main>
  );
}
