import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Globe2,
  Laptop,
  Menu,
  MonitorSmartphone,
  Puzzle,
  RefreshCw,
  Smartphone,
  Sparkles,
  Watch,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnalyticsPreview } from "./components/AnalyticsPreview";
import { FocusHomePreview } from "./components/FocusHomePreview";
import { FocusMark } from "./components/FocusMark";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { TimerPreview } from "./components/TimerPreview";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { siteLinks } from "./data/siteContent";

const framePath =
  "M31.8 5.8C42.7 4.4 53.8 10.4 58.1 20.3C62.9 31.2 59.1 45.7 50 54.1C41.7 61.7 27.6 61.4 17.1 55.8C7.4 50.6 3.2 39.2 5.7 27.8C8.2 16.4 19.5 7.4 31.8 5.8Z";

const content = {
  "pt-BR": {
    nav: ["Produto", "FocushoMe", "Multiplataforma", "Downloads"],
    heroEyebrow: "Focus 6.0 · um sistema vivo",
    heroTitle: "Planeje o que importa.",
    heroHighlight: "Foque no que transforma.",
    heroDescription:
      "Focus conecta planejamento, sessões, tarefas, projetos, metas e sua identidade FocushoMe em uma experiência que acompanha o seu dia — no navegador, no celular e no desktop.",
    openWeb: "Abrir Focus Web",
    seePlatforms: "Ver plataformas",
    storyEyebrow: "Feito no uso real",
    storyTitle: "Três meses vivendo o Focus antes de publicar.",
    storyDescription:
      "Usei o Focus todos os dias em projetos, trabalho, faculdade e lazer. Nesse período, reuni tudo o que eu sentia falta em outros apps de produtividade: menos atrito, menos obrigação e mais contexto. O objetivo nunca foi fazer você entrar no app por dever. O Focus foi pensado para virar uma extensão natural do seu dia.",
    storyPills: ["Projetos", "Trabalho", "Faculdade", "Lazer"],
    homeEyebrow: "O coração do Focus",
    homeTitle: "Seu foco ganha uma identidade.",
    homeDescription:
      "FocushoMe é o emblema mais importante do Focus. Ele não mede apenas quanto tempo você ficou no timer: observa como você planeja, executa, conclui, retoma e mantém seu ritmo para construir uma identidade que evolui junto com você.",
    homePoints: [
      "Uma identidade construída pelo seu comportamento real.",
      "Cores, emblema e evolução presentes em toda a experiência.",
      "Retrospectivas que transformam produtividade em uma história pessoal.",
    ],
    analyticsEyebrow: "Entenda sem se cobrar",
    analyticsTitle: "Estatísticas que explicam seu ritmo.",
    analyticsDescription:
      "O Focus transforma sessões e progresso em contexto. A ideia não é criar pressão por números, mas ajudar você a entender quando, onde e em que projetos sua atenção realmente acontece.",
    platformsEyebrow: "Um Focus. Várias formas de estar com você.",
    platformsTitle: "Seu foco acompanha a tela que fizer sentido agora.",
    platformsDescription:
      "Cada versão foi desenhada para um momento diferente do seu dia. Os dados continuam fazendo parte da mesma experiência, enquanto cada dispositivo tem seu próprio papel.",
    available: "Disponível no lançamento 6.0",
    future: "Em testes · lançamento futuro",
    platformCopy: {
      palm: "Focus no bolso. Planejamento, timer, tarefas, metas, widgets e sua jornada diária no Android.",
      horizonMac: "Uma experiência desktop dedicada para macOS, com atualizações automáticas após a instalação do 6.0.",
      horizonWin: "Focus Horizon para Windows, com instalador próprio e atualizações automáticas quando você aceitar atualizar.",
      web: "A experiência completa direto no navegador, sempre atualizada na próxima abertura ou recarregamento.",
      ios: "A experiência Palm para iPhone e iPad continua em testes antes de ser liberada publicamente.",
      pulse: "Focus no pulso. Estou usando e testando o Pulse diariamente no Wear OS antes de disponibilizá-lo.",
      extension: "Uma extensão para aproximar timer, lembretes e ações rápidas do navegador. Continua em testes privados.",
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Escolha onde o Focus vai viver com você.",
    migrationTitle: "Já usava o Focus antes do 6.0?",
    migrationText:
      "Instale a versão 6.0 novamente uma vez. Ela prepara o novo sistema de atualização automática do Palm e do Horizon. Depois disso, quando uma nova versão for lançada, o próprio app poderá oferecer a atualização para você.",
    downloadLabels: {
      android: "Palm · Android",
      mac: "Horizon · macOS",
      windows: "Horizon · Windows",
      web: "Focus Web",
      download: "Baixar",
      open: "Abrir",
    },
    futureTitle: "O ecossistema ainda está crescendo.",
    futureDescription:
      "Pulse, Extension e Palm para iPhone/iPad só serão liberados quando a experiência estiver pronta para outras pessoas. Por enquanto, continuam no meu uso diário e nos meus testes.",
    futureNote:
      "Ainda estou testando no meu dia a dia para deixar a experiência impecável para você. Em breve disponível nessa plataforma quando estiver perfeito.",
    footer: "Focus 6.0 · seu foco, do seu jeito.",
    privacy: "Política de Privacidade",
  },
  en: {
    nav: ["Product", "FocushoMe", "Multiplatform", "Downloads"],
    heroEyebrow: "Focus 6.0 · a living system",
    heroTitle: "Plan what matters.",
    heroHighlight: "Focus on what moves you forward.",
    heroDescription:
      "Focus connects planning, sessions, tasks, projects, goals and your FocushoMe identity in an experience that follows your day — in the browser, on your phone and on desktop.",
    openWeb: "Open Focus Web",
    seePlatforms: "See platforms",
    storyEyebrow: "Built through real use",
    storyTitle: "Three months living with Focus before publishing it.",
    storyDescription:
      "I used Focus every day across projects, work, college and leisure. During that time, I brought together everything I missed in other productivity apps: less friction, less obligation and more context. The goal was never to make opening an app feel like a duty. Focus was designed to become a natural extension of the day.",
    storyPills: ["Projects", "Work", "College", "Leisure"],
    homeEyebrow: "The heart of Focus",
    homeTitle: "Your focus becomes an identity.",
    homeDescription:
      "FocushoMe is the most important emblem in Focus. It does not only measure timer minutes: it looks at how you plan, execute, complete, resume and maintain your rhythm to build an identity that evolves with you.",
    homePoints: [
      "An identity built from your real behavior.",
      "Color, emblem and evolution across the whole experience.",
      "Retrospectives that turn productivity into a personal story.",
    ],
    analyticsEyebrow: "Understand without pressure",
    analyticsTitle: "Analytics that explain your rhythm.",
    analyticsDescription:
      "Focus turns sessions and progress into context. The idea is not to create pressure around numbers, but to help you understand when, where and in which projects your attention actually happens.",
    platformsEyebrow: "One Focus. Different ways to stay with you.",
    platformsTitle: "Your focus follows the screen that makes sense right now.",
    platformsDescription:
      "Each version was designed for a different moment in your day. Your data remains part of the same experience while every device has its own role.",
    available: "Available with Focus 6.0",
    future: "In testing · future release",
    platformCopy: {
      palm: "Focus in your pocket. Planning, timer, tasks, goals, widgets and your daily journey on Android.",
      horizonMac: "A dedicated desktop experience for macOS, with automatic updates after installing 6.0.",
      horizonWin: "Focus Horizon for Windows, with its own installer and automatic updates whenever you accept an update.",
      web: "The full experience directly in your browser, updated on the next open or reload.",
      ios: "The Palm experience for iPhone and iPad remains in testing before a public release.",
      pulse: "Focus on your wrist. I am using and testing Pulse daily on Wear OS before making it public.",
      extension: "An extension to bring the timer, reminders and quick actions closer to the browser. Still in private testing.",
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Choose where Focus will live with you.",
    migrationTitle: "Already used Focus before 6.0?",
    migrationText:
      "Install version 6.0 once again. It prepares the new automatic update system for Palm and Horizon. After that, when a new version is released, the app itself can offer the update to you.",
    downloadLabels: {
      android: "Palm · Android",
      mac: "Horizon · macOS",
      windows: "Horizon · Windows",
      web: "Focus Web",
      download: "Download",
      open: "Open",
    },
    futureTitle: "The ecosystem is still growing.",
    futureDescription:
      "Pulse, Extension and Palm for iPhone/iPad will only be released when the experience is ready for other people. For now they remain in my daily use and private testing.",
    futureNote:
      "I am still testing it in my daily life to make the experience impeccable for you. Coming to this platform when it is ready.",
    footer: "Focus 6.0 · your focus, your way.",
    privacy: "Privacy Policy",
  },
} as const;

const sections = ["top", "story", "focushome", "analytics", "platforms", "download", "future"];

function FocusFrame() {
  return (
    <svg
      className="v6-focus-frame"
      viewBox="0 0 64 64"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d={framePath} />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { i18n } = useTranslation();

  const language = i18n.resolvedLanguage?.startsWith("pt") ? "pt-BR" : "en";
  const c = content[language];

  useEffect(() => {
    const observers = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          },
          { threshold: 0.48 },
        );
        observer.observe(element!);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const platforms = useMemo(
    () => [
      { icon: Smartphone, name: "Focus — Palm", device: "Android", status: c.available, text: c.platformCopy.palm, ready: true },
      { icon: Laptop, name: "Focus — Horizon", device: "macOS", status: c.available, text: c.platformCopy.horizonMac, ready: true },
      { icon: MonitorSmartphone, name: "Focus — Horizon", device: "Windows", status: c.available, text: c.platformCopy.horizonWin, ready: true },
      { icon: Globe2, name: "Focus — Web", device: "Browser", status: c.available, text: c.platformCopy.web, ready: true },
      { icon: Smartphone, name: "Focus — Palm", device: "iPhone / iPad", status: c.future, text: c.platformCopy.ios, ready: false },
      { icon: Watch, name: "Focus — Pulse", device: "Wear OS", status: c.future, text: c.platformCopy.pulse, ready: false },
      { icon: Puzzle, name: "Focus — Extension", device: "Chrome", status: c.future, text: c.platformCopy.extension, ready: false },
    ],
    [c],
  );

  if (window.location.pathname === "/privacy") {
    return <PrivacyPolicyPage />;
  }

  return (
    <main className="v6-site">
      <FocusFrame />

      <nav className="v6-nav v6-shell" aria-label="Main navigation">
        <a className="v6-brand" href="#top" aria-label="Focus home">
          <FocusMark />
          <span>focus</span>
        </a>

        <div className={`v6-nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>{c.nav[0]}</a>
          <a href="#focushome" onClick={() => setMenuOpen(false)}>{c.nav[1]}</a>
          <a href="#platforms" onClick={() => setMenuOpen(false)}>{c.nav[2]}</a>
          <a href="#download" onClick={() => setMenuOpen(false)}>{c.nav[3]}</a>
        </div>

        <div className="v6-nav-actions">
          <LanguageSwitcher />
          <button
            className="v6-menu-button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <aside className="v6-watch-dots" aria-label="Page position">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            aria-label={id}
          />
        ))}
      </aside>

      <section className="v6-panel v6-hero v6-shell" id="top">
        <motion.div
          className="v6-hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="v6-kicker">{c.heroEyebrow}</span>
          <h1>
            {c.heroTitle}
            <strong>{c.heroHighlight}</strong>
          </h1>
          <p>{c.heroDescription}</p>
          <div className="v6-actions">
            <a className="v6-button-primary" href={siteLinks.webApp} target="_blank" rel="noreferrer">
              {c.openWeb}
              <ArrowUpRight size={17} />
            </a>
            <a className="v6-text-link" href="#platforms">
              {c.seePlatforms}
              <ArrowDown size={16} />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="v6-hero-preview"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <TimerPreview />
        </motion.div>
      </section>

      <section className="v6-panel v6-story v6-shell" id="story">
        <div>
          <span className="v6-kicker">{c.storyEyebrow}</span>
          <h2>{c.storyTitle}</h2>
        </div>
        <div className="v6-story-copy">
          <p>{c.storyDescription}</p>
          <div className="v6-pill-row">
            {c.storyPills.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="v6-panel v6-focushome v6-shell" id="focushome">
        <div className="v6-focus-copy">
          <span className="v6-kicker">{c.homeEyebrow}</span>
          <h2>{c.homeTitle}</h2>
          <p>{c.homeDescription}</p>
          <ul>
            {c.homePoints.map((item) => (
              <li key={item}><Check size={16} />{item}</li>
            ))}
          </ul>
        </div>
        <div className="v6-focus-preview">
          <FocusHomePreview
            eyebrow="FocushoMe"
            name="Prism"
            description={c.homeDescription}
            traits={language === "pt-BR" ? ["ritmo", "identidade", "evolução"] : ["rhythm", "identity", "evolution"]}
          />
        </div>
      </section>

      <section className="v6-panel v6-analytics v6-shell" id="analytics">
        <div className="v6-analytics-copy">
          <span className="v6-kicker">{c.analyticsEyebrow}</span>
          <h2>{c.analyticsTitle}</h2>
          <p>{c.analyticsDescription}</p>
          <div className="v6-story-highlight">
            <Sparkles size={18} />
            <span>{c.storyDescription}</span>
          </div>
        </div>
        <AnalyticsPreview />
      </section>

      <section className="v6-panel v6-platforms v6-shell" id="platforms">
        <header className="v6-section-heading">
          <span className="v6-kicker">{c.platformsEyebrow}</span>
          <h2>{c.platformsTitle}</h2>
          <p>{c.platformsDescription}</p>
        </header>

        <div className="v6-platform-grid">
          {platforms.map(({ icon: Icon, name, device, status, text, ready }) => (
            <article className={`v6-platform-card ${ready ? "ready" : "future"}`} key={`${name}-${device}`}>
              <div className="v6-platform-icon"><Icon size={21} /></div>
              <div>
                <small>{device}</small>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <span className="v6-status">{status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="v6-panel v6-download v6-shell" id="download">
        <header className="v6-section-heading">
          <span className="v6-kicker">{c.downloadEyebrow}</span>
          <h2>{c.downloadTitle}</h2>
        </header>

        <div className="v6-migration-note">
          <RefreshCw size={22} />
          <div>
            <strong>{c.migrationTitle}</strong>
            <p>{c.migrationText}</p>
          </div>
        </div>

        <div className="v6-download-grid">
          <a href={siteLinks.android} className="v6-download-card">
            <Smartphone size={20} />
            <span><strong>{c.downloadLabels.android}</strong><small>6.0.0 · APK</small></span>
            <b>{c.downloadLabels.download}<Download size={15} /></b>
          </a>

          <a href={siteLinks.macOS} className="v6-download-card">
            <Laptop size={20} />
            <span><strong>{c.downloadLabels.mac}</strong><small>6.0.0 · DMG · Apple Silicon</small></span>
            <b>{c.downloadLabels.download}<Download size={15} /></b>
          </a>

          <a href={siteLinks.windows} className="v6-download-card">
            <MonitorSmartphone size={20} />
            <span><strong>{c.downloadLabels.windows}</strong><small>6.0.0 · EXE · x64</small></span>
            <b>{c.downloadLabels.download}<Download size={15} /></b>
          </a>

          <a href={siteLinks.webApp} target="_blank" rel="noreferrer" className="v6-download-card">
            <Globe2 size={20} />
            <span><strong>{c.downloadLabels.web}</strong><small>Browser</small></span>
            <b>{c.downloadLabels.open}<ArrowUpRight size={15} /></b>
          </a>
        </div>
      </section>

      <section className="v6-panel v6-future v6-shell" id="future">
        <div>
          <span className="v6-kicker">Focus Labs</span>
          <h2>{c.futureTitle}</h2>
          <p>{c.futureDescription}</p>
        </div>
        <blockquote>{c.futureNote}</blockquote>
      </section>

      <footer className="v6-footer v6-shell">
        <div className="v6-brand"><FocusMark /><span>focus</span></div>
        <span>{c.footer}</span>
        <a href="/privacy">{c.privacy}</a>
      </footer>
    </main>
  );
}
