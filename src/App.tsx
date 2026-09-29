import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
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
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FocusHomeSymbol } from "./components/FocusHomeSymbol";
import { FocusMark, FocusOrbitFrame } from "./components/FocusMark";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { siteLinks } from "./data/siteContent";

const content = {
  "pt-BR": {
    heroEyebrow: "Focus 6.0",
    heroTitle: "Planeje o que importa.",
    heroHighlight: "Foque no que transforma.",
    heroDescription: "Um sistema de produtividade que acompanha seu dia sem virar obrigação.",
    openWeb: "Abrir Focus Web",
    storyEyebrow: "Feito no uso real",
    storyTitle: "3 meses antes de publicar.",
    storyDescription: "Usei o Focus em projetos, trabalho, faculdade e lazer. Juntei tudo o que sentia falta em outros apps para que produtividade não virasse uma tarefa a mais — mas uma extensão natural do meu dia.",
    storyPills: ["Projetos", "Trabalho", "Faculdade", "Lazer"],
    homeEyebrow: "O coração do Focus",
    homeTitle: "Seu foco ganha uma identidade.",
    homeDescription: "FocushoMe é o emblema mais importante do Focus. Ele observa como você planeja, executa, conclui, retoma e mantém seu ritmo para construir uma identidade que evolui junto com você.",
    homePoints: ["Comportamento real, não só minutos.", "Emblema, cor e evolução.", "Retrospectivas da sua jornada."],
    analyticsEyebrow: "Entenda seu ritmo",
    analyticsTitle: "Estatísticas sem pressão.",
    analyticsDescription: "Sessões, projetos e progresso viram contexto para você entender onde sua atenção realmente acontece.",
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
    platformModal: {
      eyebrow: "Como essa versão entra na sua rotina",
      featuresLabel: "O que muda nessa plataforma",
      close: "Fechar",
      palm: {
        title: "Focus — Palm",
        device: "Android",
        routine: "É a versão para carregar com você durante o dia: planejar o que importa, iniciar foco longe do computador, receber lembretes e acompanhar progresso sem depender de uma mesa.",
        features: ["Hoje, Timer, Tarefas, Projetos e Metas", "Widgets e notificações no Android", "FocushoMe, insígnias e Analytics no uso diário"],
      },
      horizonMac: {
        title: "Focus — Horizon",
        device: "macOS",
        routine: "Foi pensado para sessões longas de estudo, trabalho e projetos no desktop. O Focus fica disponível junto das ferramentas que você já usa no Mac, sem precisar manter uma aba aberta.",
        features: ["Experiência desktop dedicada", "Timer, planejamento, tarefas, projetos, metas e Analytics", "Atualizações automáticas a partir do Focus 6.0"],
      },
      horizonWin: {
        title: "Focus — Horizon",
        device: "Windows",
        routine: "Leva a mesma experiência desktop do Horizon para o Windows, ideal para quem trabalha, estuda ou joga no PC e quer manter o Focus disponível como aplicativo instalado.",
        features: ["Aplicativo desktop nativo via Horizon", "Mesmo fluxo central de foco, planejamento e acompanhamento", "Atualizações automáticas quando você aceitar instalar"],
      },
      web: {
        title: "Focus — Web",
        device: "Navegador",
        routine: "É a forma mais rápida de entrar no Focus em qualquer computador. Não exige instalação e funciona bem para alternar entre máquinas sem perder o acesso ao seu sistema de produtividade.",
        features: ["Acesso direto pelo navegador", "Dashboard, Timer, Tarefas, Projetos, Metas, FocushoMe e Analytics", "Novas versões chegam naturalmente ao recarregar ou abrir novamente"],
      },
      ios: {
        title: "Focus — Palm",
        device: "iPhone e iPad",
        routine: "A versão para iPhone e iPad continua no meu uso e nos meus testes privados. Ela só será liberada quando estiver consistente com a experiência pública do Palm.",
        features: ["Experiência Palm adaptada ao ecossistema Apple", "Integrações nativas de iOS em validação", "Ainda não disponível publicamente"],
      },
      pulse: {
        title: "Focus — Pulse",
        device: "Wear OS",
        routine: "O Pulse foi feito para reduzir ainda mais o atrito: consultar o dia, iniciar foco e fazer ações rápidas direto no pulso, sem precisar pegar o celular.",
        features: ["Hoje e Timer no relógio", "Ações rápidas de tarefas, projetos, metas e sincronização", "Beta privado enquanto estabilidade e bateria continuam em teste"],
      },
      extension: {
        title: "Focus — Extension",
        device: "Chrome",
        routine: "A Extension aproxima o Focus do navegador para que ações rápidas e lembretes apareçam no contexto em que muita gente já passa boa parte do dia.",
        features: ["Interação rápida sem abrir o Focus Web", "Notificações do timer e lembretes planejados", "Continua em testes privados para o ciclo 7.0"],
      },
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Escolha sua plataforma.",
    migrationTitle: "Já usava antes do 6.0?",
    migrationText: "Instale o 6.0 uma vez. Palm e Horizon passam a oferecer atualizações automáticas nas próximas versões.",
    downloadLabels: { android: "Palm · Android", mac: "Horizon · macOS", windows: "Horizon · Windows", web: "Focus Web" },
    futureEyebrow: "Focus Labs",
    futureTitle: "O que vem depois.",
    futureDescription: "Palm para iPhone/iPad, Focus Pulse e Focus Extension continuam no meu uso diário e em testes privados.",
    futureNote: "Só vou liberar essas plataformas quando a experiência estiver pronta para outras pessoas.",
  },
  en: {
    heroEyebrow: "Focus 6.0",
    heroTitle: "Plan what matters.",
    heroHighlight: "Focus on what moves you.",
    heroDescription: "A productivity system that follows your day without becoming another obligation.",
    openWeb: "Open Focus Web",
    storyEyebrow: "Built through real use",
    storyTitle: "3 months before release.",
    storyDescription: "I used Focus across projects, work, college and leisure. I brought together everything I missed in other apps so productivity would not become another task — but a natural extension of my day.",
    storyPills: ["Projects", "Work", "College", "Leisure"],
    homeEyebrow: "The heart of Focus",
    homeTitle: "Your focus becomes an identity.",
    homeDescription: "FocushoMe is the most important emblem in Focus. It looks at how you plan, execute, complete, resume and maintain your rhythm to build an identity that evolves with you.",
    homePoints: ["Real behavior, not only minutes.", "Emblem, color and evolution.", "Retrospectives of your journey."],
    analyticsEyebrow: "Understand your rhythm",
    analyticsTitle: "Analytics without pressure.",
    analyticsDescription: "Sessions, projects and progress become context so you can understand where your attention actually happens.",
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
    platformModal: {
      eyebrow: "How this version fits your routine",
      featuresLabel: "What changes on this platform",
      close: "Close",
      palm: {
        title: "Focus — Palm",
        device: "Android",
        routine: "The version you carry through the day: plan what matters, start focus away from your desk, receive reminders and follow progress without depending on a computer.",
        features: ["Today, Timer, Tasks, Projects and Goals", "Android widgets and notifications", "FocushoMe, badges and Analytics in daily use"],
      },
      horizonMac: {
        title: "Focus — Horizon",
        device: "macOS",
        routine: "Designed for longer study, work and project sessions on desktop. Focus stays alongside the tools you already use on your Mac without requiring a browser tab.",
        features: ["Dedicated desktop experience", "Timer, planning, tasks, projects, goals and Analytics", "Automatic updates starting with Focus 6.0"],
      },
      horizonWin: {
        title: "Focus — Horizon",
        device: "Windows",
        routine: "Brings the Horizon desktop experience to Windows, ideal for people who work, study or play on PC and want Focus available as an installed application.",
        features: ["Horizon desktop application", "The same core focus, planning and progress flow", "Automatic updates whenever you accept an update"],
      },
      web: {
        title: "Focus — Web",
        device: "Browser",
        routine: "The fastest way to enter Focus on any computer. It requires no installation and works well when moving between machines while keeping access to your productivity system.",
        features: ["Direct browser access", "Dashboard, Timer, Tasks, Projects, Goals, FocushoMe and Analytics", "New versions arrive naturally when you reload or reopen it"],
      },
      ios: {
        title: "Focus — Palm",
        device: "iPhone and iPad",
        routine: "The iPhone and iPad version remains in my own use and private testing. It will only be released when it is consistent with the public Palm experience.",
        features: ["Palm experience adapted to the Apple ecosystem", "Native iOS integrations under validation", "Not publicly available yet"],
      },
      pulse: {
        title: "Focus — Pulse",
        device: "Wear OS",
        routine: "Pulse is designed to remove even more friction: check the day, start focus and perform quick actions directly from your wrist without reaching for your phone.",
        features: ["Today and Timer on the watch", "Quick actions for tasks, projects, goals and sync", "Private beta while stability and battery continue to be tested"],
      },
      extension: {
        title: "Focus — Extension",
        device: "Chrome",
        routine: "Extension brings Focus closer to the browser so quick actions and reminders can live where many people already spend much of their day.",
        features: ["Quick interaction without opening Focus Web", "Timer notifications and reminders planned", "Remains in private testing for the 7.0 cycle"],
      },
    },
    downloadEyebrow: "Focus 6.0",
    downloadTitle: "Choose your platform.",
    migrationTitle: "Used Focus before 6.0?",
    migrationText: "Install 6.0 once. Palm and Horizon can then offer automatic updates for future releases.",
    downloadLabels: { android: "Palm · Android", mac: "Horizon · macOS", windows: "Horizon · Windows", web: "Focus Web" },
    futureEyebrow: "Focus Labs",
    futureTitle: "What comes next.",
    futureDescription: "Palm for iPhone/iPad, Focus Pulse and Focus Extension remain in my daily use and private testing.",
    futureNote: "I will only release these platforms when the experience is ready for other people.",
  },
} as const;

const ids = ["top", "story", "focushome", "analytics", "platforms", "download", "future"];

function HeroVisual() {
  return (
    <div className="hero-orbit-visual" aria-hidden="true">
      <svg viewBox="0 0 180 180">
        <circle className="timer-track" cx="90" cy="90" r="68" />
        <circle className="timer-progress" cx="90" cy="90" r="68" />
      </svg>
      <div className="hero-timer-value"><strong>24:16</strong><span>50 min</span></div>
      <div className="hero-timer-meta"><span>Focus</span><b>+18%</b></div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [34, 52, 42, 68, 56, 82, 66];
  return (
    <div className="analytics-visual" aria-hidden="true">
      <div className="analytics-visual-head">
        <div><span>Focus</span><strong>18h 42m</strong></div>
        <div className="analytics-chip">+12%</div>
      </div>
      <div className="analytics-bars">
        {bars.map((height, index) => <span key={index} style={{ height: `${height}%` }} className={index === 5 ? "active" : ""} />)}
      </div>
      <div className="analytics-caption">Mon · Tue · Wed · Thu · Fri · Sat · Sun</div>
    </div>
  );
}

export default function App() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("top");
  const [language, setLanguage] = useState<"pt-BR" | "en">("pt-BR");
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const c = content[language];

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { root, threshold: [0.5, 0.7, 0.9] },
    );
    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedPlatform) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPlatform(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPlatform]);

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const platforms = useMemo(
    () => [
      { key: "palm", icon: Smartphone, name: "Palm", meta: c.platformCopy.palm, ready: true },
      { key: "horizonMac", icon: Laptop, name: "Horizon", meta: c.platformCopy.horizonMac, ready: true },
      { key: "horizonWin", icon: MonitorSmartphone, name: "Horizon", meta: c.platformCopy.horizonWin, ready: true },
      { key: "web", icon: Globe2, name: "Web", meta: c.platformCopy.web, ready: true },
      { key: "ios", icon: Smartphone, name: "Palm", meta: c.platformCopy.ios, ready: false },
      { key: "pulse", icon: Watch, name: "Pulse", meta: c.platformCopy.pulse, ready: false },
      { key: "extension", icon: Puzzle, name: "Extension", meta: c.platformCopy.extension, ready: false },
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
              <button className="watch-brand" type="button" onClick={() => goTo("top")}><FocusMark /><span>focus</span></button>
              <div className="watch-language">
                <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">EN</button>
                <span>/</span>
                <button className={language === "pt-BR" ? "active" : ""} onClick={() => setLanguage("pt-BR")} type="button">PT</button>
              </div>
            </header>

            <div className="watch-scroller" ref={scrollerRef}>
              <section className="watch-tile hero-tile" id="top">
                <div className="hero-copy">
                  <span className="watch-kicker">{c.heroEyebrow}</span>
                  <h1>{c.heroTitle}<strong>{c.heroHighlight}</strong></h1>
                  <p>{c.heroDescription}</p>
                  <a href={siteLinks.webApp} target="_blank" rel="noreferrer" className="watch-primary">{c.openWeb}<ArrowUpRight size={14} /></a>
                </div>
                <HeroVisual />
                <button className="watch-next" onClick={() => goTo("story")} type="button" aria-label="Continue"><ArrowDown size={16} /></button>
              </section>

              <section className="watch-tile story-tile" id="story">
                <div className="watch-centered narrow">
                  <span className="watch-kicker">{c.storyEyebrow}</span>
                  <h2>{c.storyTitle}</h2>
                  <p>{c.storyDescription}</p>
                  <div className="watch-pills">{c.storyPills.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </section>

              <section className="watch-tile focushome-tile" id="focushome">
                <div className="focushome-layout">
                  <div className="focushome-copy">
                    <span className="watch-kicker">{c.homeEyebrow}</span>
                    <h2>{c.homeTitle}</h2>
                    <p>{c.homeDescription}</p>
                    <ul>{c.homePoints.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul>
                  </div>
                  <div className="focushome-emblem">
                    <div className="focushome-glow" />
                    <FocusHomeSymbol type="prism" size={220} />
                    <strong>Prism</strong><span>FocushoMe</span>
                  </div>
                </div>
              </section>

              <section className="watch-tile analytics-tile" id="analytics">
                <div className="analytics-copy">
                  <span className="watch-kicker">{c.analyticsEyebrow}</span>
                  <h2>{c.analyticsTitle}</h2>
                  <p>{c.analyticsDescription}</p>
                  <div className="watch-highlight"><Sparkles size={15} />{c.storyTitle}</div>
                </div>
                <AnalyticsVisual />
              </section>

              <section className="watch-tile platforms-tile" id="platforms">
                <div className="watch-tile-heading"><span className="watch-kicker">{c.platformsEyebrow}</span><h2>{c.platformsTitle}</h2></div>
                <div className="platform-grid">
                  {platforms.map(({ key, icon: Icon, name, meta, ready }, index) => (
                    <article
                      className={ready ? "ready platform-card" : "future platform-card"}
                      key={`${name}-${index}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedPlatform(key)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setSelectedPlatform(key);
                        }
                      }}
                    >
                      <div className="platform-icon"><Icon size={17} /></div>
                      <div><strong>{name}</strong><span>{meta}</span></div>
                      <i>{ready ? c.available : c.future}</i>
                    </article>
                  ))}
                </div>
              </section>

              <section className="watch-tile download-tile" id="download">
                <div className="watch-tile-heading"><span className="watch-kicker">{c.downloadEyebrow}</span><h2>{c.downloadTitle}</h2></div>
                <div className="update-note"><RefreshCw size={17} /><div><strong>{c.migrationTitle}</strong><p>{c.migrationText}</p></div></div>
                <div className="download-grid">
                  <a href={siteLinks.android}><Smartphone size={16} /><span>{c.downloadLabels.android}<small>6.0.0 · APK</small></span><Download size={14} /></a>
                  <a href={siteLinks.macOS}><Laptop size={16} /><span>{c.downloadLabels.mac}<small>6.0.0 · DMG</small></span><Download size={14} /></a>
                  <a href={siteLinks.windows}><MonitorSmartphone size={16} /><span>{c.downloadLabels.windows}<small>6.0.0 · EXE</small></span><Download size={14} /></a>
                  <a href={siteLinks.webApp} target="_blank" rel="noreferrer"><Globe2 size={16} /><span>{c.downloadLabels.web}<small>Browser</small></span><ArrowUpRight size={14} /></a>
                </div>
              </section>

              <section className="watch-tile future-tile" id="future">
                <div className="future-layout">
                  <div><span className="watch-kicker">{c.futureEyebrow}</span><h2>{c.futureTitle}</h2><p>{c.futureDescription}</p></div>
                  <div className="future-orbit"><Watch size={30} /><Puzzle size={24} /><Smartphone size={24} /><BarChart3 size={22} /></div>
                  <blockquote>{c.futureNote}</blockquote>
                </div>
              </section>
            </div>

            {selectedPlatform && (() => {
              const detail = c.platformModal[selectedPlatform as keyof typeof c.platformModal];
              if (!detail || typeof detail === "string") return null;

              return (
                <div
                  className="platform-modal-layer"
                  role="presentation"
                  onMouseDown={(event) => {
                    if (event.currentTarget === event.target) setSelectedPlatform(null);
                  }}
                >
                  <section className="platform-modal" role="dialog" aria-modal="true" aria-labelledby="platform-modal-title">
                    <button
                      type="button"
                      className="platform-modal-close"
                      aria-label={c.platformModal.close}
                      onClick={() => setSelectedPlatform(null)}
                    >
                      <X size={18} />
                    </button>

                    <span className="platform-modal-kicker">{c.platformModal.eyebrow}</span>
                    <h3 id="platform-modal-title">{detail.title}</h3>
                    <small>{detail.device}</small>

                    <div className="platform-modal-card">
                      <p>{detail.routine}</p>
                      <div className="platform-modal-divider" />
                      <strong>{c.platformModal.featuresLabel}</strong>
                      <ul>
                        {detail.features.map((feature) => (
                          <li key={feature}><Check size={15} />{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
              );
            })()}

            <aside className="watch-dots" aria-label="Section navigation">
              {ids.map((id) => <button key={id} type="button" aria-label={id} className={activeSection === id ? "active" : ""} onClick={() => goTo(id)} />)}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
