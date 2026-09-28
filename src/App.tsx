import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Globe2,
  Laptop,
  MonitorSmartphone,
  Puzzle,
  RefreshCw,
  Smartphone,
  Sparkles,
  Watch,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnalyticsPreview } from "./components/AnalyticsPreview";
import { FocusHomePreview } from "./components/FocusHomePreview";
import { FocusMark, FocusOrbitFrame } from "./components/FocusMark";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { TimerPreview } from "./components/TimerPreview";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { siteLinks } from "./data/siteContent";

const content = {
  "pt-BR": {
    heroEyebrow: "Focus 6.0",
    heroTitle: "Planeje o que importa.",
    heroHighlight: "Foque no que transforma.",
    heroDescription:
      "Um sistema de produtividade que acompanha seu dia sem virar obrigação.",
    openWeb: "Abrir Focus Web",
    next: "Continuar",
    storyEyebrow: "Feito no uso real",
    storyTitle: "3 meses antes de publicar.",
    storyDescription:
      "Usei o Focus em projetos, trabalho, faculdade e lazer. Juntei o que sentia falta em outros apps para que produtividade não virasse uma tarefa a mais — mas uma extensão natural do meu dia.",
    storyPills: ["Projetos", "Trabalho", "Faculdade", "Lazer"],
    homeEyebrow: "O coração do Focus",
    homeTitle: "Seu foco ganha uma identidade.",
    homeDescription:
      "FocushoMe é o emblema mais importante do Focus. Ele observa como você planeja, executa, conclui, retoma e mantém seu ritmo para construir uma identidade que evolui junto com você.",
    homePoints: [
      "Comportamento real, não só minutos.",
      "Emblema, cor e evolução.",
      "Retrospectivas da sua jornada.",
    ],
    analyticsEyebrow: "Entenda seu ritmo",
    analyticsTitle: "Estatísticas sem pressão.",
    analyticsDescription:
      "Sessões, projetos e progresso viram contexto para você entender onde sua atenção realmente acontece.",
    platformsEyebrow: "Multiplataforma",
    platformsTitle: "Um Focus. Várias telas.",
    available: "Disponível",
    future: "Em testes",
    platformCopy: {
      palm: "Android · Focus no bolso.",
      horizonMac: "macOS · desktop dedicado.",
      horizonWin: "Windows · desktop dedicado.",
      web: "Browser · sem instalar.",
      ios: "iPhone e iPad · futuro.",
      pulse: "Wear OS · testes privados.",
      extension: "Chrome · testes privados.",
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Escolha sua plataforma.",
    migrationTitle: "Já usava antes do 6.0?",
    migrationText:
      "Instale o 6.0 uma vez. Palm e Horizon passam a oferecer atualizações automáticas nas próximas versões.",
    downloadLabels: {
      android: "Palm · Android",
      mac: "Horizon · macOS",
      windows: "Horizon · Windows",
      web: "Focus Web",
      download: "Baixar",
      open: "Abrir",
    },
    futureEyebrow: "Focus Labs",
    futureTitle: "O que vem depois.",
    futureDescription:
      "Palm para iPhone/iPad, Focus Pulse e Focus Extension continuam no meu uso diário e em testes privados.",
    futureNote:
      "Só vou liberar essas plataformas quando a experiência estiver pronta para outras pessoas.",
    footer: "Focus 6.0",
  },
  en: {
    heroEyebrow: "Focus 6.0",
    heroTitle: "Plan what matters.",
    heroHighlight: "Focus on what moves you.",
    heroDescription:
      "A productivity system that follows your day without becoming another obligation.",
    openWeb: "Open Focus Web",
    next: "Continue",
    storyEyebrow: "Built through real use",
    storyTitle: "3 months before release.",
    storyDescription:
      "I used Focus across projects, work, college and leisure. I brought together what I missed in other apps so productivity would not become another task — but a natural extension of my day.",
    storyPills: ["Projects", "Work", "College", "Leisure"],
    homeEyebrow: "The heart of Focus",
    homeTitle: "Your focus becomes an identity.",
    homeDescription:
      "FocushoMe is the most important emblem in Focus. It looks at how you plan, execute, complete, resume and maintain your rhythm to build an identity that evolves with you.",
    homePoints: [
      "Real behavior, not only minutes.",
      "Emblem, color and evolution.",
      "Retrospectives of your journey.",
    ],
    analyticsEyebrow: "Understand your rhythm",
    analyticsTitle: "Analytics without pressure.",
    analyticsDescription:
      "Sessions, projects and progress become context so you can understand where your attention actually happens.",
    platformsEyebrow: "Multiplatform",
    platformsTitle: "One Focus. Many screens.",
    available: "Available",
    future: "In testing",
    platformCopy: {
      palm: "Android · Focus in your pocket.",
      horizonMac: "macOS · dedicated desktop.",
      horizonWin: "Windows · dedicated desktop.",
      web: "Browser · no install.",
      ios: "iPhone and iPad · future.",
      pulse: "Wear OS · private testing.",
      extension: "Chrome · private testing.",
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Choose your platform.",
    migrationTitle: "Used Focus before 6.0?",
    migrationText:
      "Install 6.0 once. Palm and Horizon can then offer automatic updates for future releases.",
    downloadLabels: {
      android: "Palm · Android",
      mac: "Horizon · macOS",
      windows: "Horizon · Windows",
      web: "Focus Web",
      download: "Download",
      open: "Open",
    },
    futureEyebrow: "Focus Labs",
    futureTitle: "What comes next.",
    futureDescription:
      "Palm for iPhone/iPad, Focus Pulse and Focus Extension remain in my daily use and private testing.",
    futureNote:
      "I will only release these platforms when the experience is ready for other people.",
    footer: "Focus 6.0",
  },
} as const;

const ids = ["top", "story", "focushome", "analytics", "platforms", "download", "future"];

export default function App() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("top");
  const [language, setLanguage] = useState<"pt-BR" | "en">("pt-BR");
  const c = content[language];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { root: scroller, threshold: [0.45, 0.65, 0.85] },
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const platforms = useMemo(
    () => [
      { icon: Smartphone, name: "Palm", meta: c.platformCopy.palm, ready: true },
      { icon: Laptop, name: "Horizon", meta: c.platformCopy.horizonMac, ready: true },
      { icon: MonitorSmartphone, name: "Horizon", meta: c.platformCopy.horizonWin, ready: true },
      { icon: Globe2, name: "Web", meta: c.platformCopy.web, ready: true },
      { icon: Smartphone, name: "Palm", meta: c.platformCopy.ios, ready: false },
      { icon: Watch, name: "Pulse", meta: c.platformCopy.pulse, ready: false },
      { icon: Puzzle, name: "Extension", meta: c.platformCopy.extension, ready: false },
    ],
    [c],
  );

  if (window.location.pathname === "/privacy") return <PrivacyPolicyPage />;

  return (
    <main className="watch-page">
      <div className="watch-stage">
        <div className="watch-shell">
          <FocusOrbitFrame />

          <div className="watch-glass">
            <header className="watch-topbar">
              <button className="watch-brand" type="button" onClick={() => goTo("top")}>
                <FocusMark />
                <span>focus</span>
              </button>

              <div className="watch-language">
                <button
                  className={language === "en" ? "active" : ""}
                  onClick={() => setLanguage("en")}
                  type="button"
                >
                  EN
                </button>
                <span>/</span>
                <button
                  className={language === "pt-BR" ? "active" : ""}
                  onClick={() => setLanguage("pt-BR")}
                  type="button"
                >
                  PT
                </button>
              </div>
            </header>

            <div className="watch-scroller" ref={scrollerRef}>
              <section className="watch-tile hero-tile" id="top">
                <div className="watch-tile-copy">
                  <span className="watch-kicker">{c.heroEyebrow}</span>
                  <h1>{c.heroTitle}<strong>{c.heroHighlight}</strong></h1>
                  <p>{c.heroDescription}</p>
                  <a href={siteLinks.webApp} target="_blank" rel="noreferrer" className="watch-primary">
                    {c.openWeb}<ArrowUpRight size={14} />
                  </a>
                </div>
                <div className="watch-preview compact-timer"><TimerPreview /></div>
                <button className="watch-next" onClick={() => goTo("story")} type="button" aria-label={c.next}>
                  <ArrowDown size={16} />
                </button>
              </section>

              <section className="watch-tile story-tile" id="story">
                <div className="watch-centered">
                  <span className="watch-kicker">{c.storyEyebrow}</span>
                  <h2>{c.storyTitle}</h2>
                  <p>{c.storyDescription}</p>
                  <div className="watch-pills">
                    {c.storyPills.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </section>

              <section className="watch-tile focushome-tile" id="focushome">
                <div className="watch-focus-grid">
                  <div className="watch-focus-copy">
                    <span className="watch-kicker">{c.homeEyebrow}</span>
                    <h2>{c.homeTitle}</h2>
                    <p>{c.homeDescription}</p>
                    <ul>
                      {c.homePoints.map((item) => <li key={item}><Check size={13} />{item}</li>)}
                    </ul>
                  </div>
                  <div className="watch-focus-preview">
                    <FocusHomePreview
                      eyebrow="FocushoMe"
                      name="Prism"
                      description={language === "pt-BR" ? "Sua identidade de foco." : "Your focus identity."}
                      traits={language === "pt-BR" ? ["ritmo", "identidade", "evolução"] : ["rhythm", "identity", "evolution"]}
                    />
                  </div>
                </div>
              </section>

              <section className="watch-tile analytics-tile" id="analytics">
                <div className="watch-analytics-copy">
                  <span className="watch-kicker">{c.analyticsEyebrow}</span>
                  <h2>{c.analyticsTitle}</h2>
                  <p>{c.analyticsDescription}</p>
                  <div className="watch-highlight"><Sparkles size={15} />{c.storyTitle}</div>
                </div>
                <div className="watch-analytics-preview"><AnalyticsPreview /></div>
              </section>

              <section className="watch-tile platforms-tile" id="platforms">
                <div className="watch-tile-heading">
                  <span className="watch-kicker">{c.platformsEyebrow}</span>
                  <h2>{c.platformsTitle}</h2>
                </div>
                <div className="watch-platform-grid">
                  {platforms.map(({ icon: Icon, name, meta, ready }, index) => (
                    <article className={ready ? "ready" : "future"} key={`${name}-${index}`}>
                      <Icon size={16} />
                      <div><strong>{name}</strong><span>{meta}</span></div>
                      <i>{ready ? c.available : c.future}</i>
                    </article>
                  ))}
                </div>
              </section>

              <section className="watch-tile download-tile" id="download">
                <div className="watch-tile-heading">
                  <span className="watch-kicker">{c.downloadEyebrow}</span>
                  <h2>{c.downloadTitle}</h2>
                </div>

                <div className="watch-update-note">
                  <RefreshCw size={17} />
                  <div><strong>{c.migrationTitle}</strong><p>{c.migrationText}</p></div>
                </div>

                <div className="watch-download-grid">
                  <a href={siteLinks.android}><Smartphone size={16} /><span>{c.downloadLabels.android}<small>6.0.0 · APK</small></span><Download size={14} /></a>
                  <a href={siteLinks.macOS}><Laptop size={16} /><span>{c.downloadLabels.mac}<small>6.0.0 · DMG</small></span><Download size={14} /></a>
                  <a href={siteLinks.windows}><MonitorSmartphone size={16} /><span>{c.downloadLabels.windows}<small>6.0.0 · EXE</small></span><Download size={14} /></a>
                  <a href={siteLinks.webApp} target="_blank" rel="noreferrer"><Globe2 size={16} /><span>{c.downloadLabels.web}<small>Browser</small></span><ArrowUpRight size={14} /></a>
                </div>
              </section>

              <section className="watch-tile future-tile" id="future">
                <div className="watch-centered">
                  <span className="watch-kicker">{c.futureEyebrow}</span>
                  <h2>{c.futureTitle}</h2>
                  <p>{c.futureDescription}</p>
                  <blockquote>{c.futureNote}</blockquote>
                  <small>{c.footer}</small>
                </div>
              </section>
            </div>

            <aside className="watch-dots" aria-label="Section navigation">
              {ids.map((id) => (
                <button
                  key={id}
                  type="button"
                  aria-label={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => goTo(id)}
                />
              ))}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
