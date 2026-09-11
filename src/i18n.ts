import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: "EN",
      navigation: {
        product: "Product",
        features: "Features",
        focusHome: "FocushoMe",
        analytics: "Analytics",
        widgets: "Widgets",
        action: "Get the app",
      },
      hero: {
        eyebrow: "Focus 5.0 · Living Glass",
        title: "Focus on what matters.",
        highlight: "Discover how you focus.",
        description:
          "A calmer, more personal productivity system. Focus 5.0 connects your work, reveals your patterns and gives your progress an identity.",
        primaryAction: "Open Focus",
        secondaryAction: "Discover FocushoMe",
        point1: "Start the timer.",
        point2: "Build the streak.",
        point3: "Understand your time.",
      },
      system: {
        eyebrow: "Focus is more than a timer.",
        title: "One session feeds your entire",
        highlight: "productivity story.",
        steps: [
          {
            number: "01",
            title: "Start a session",
            description: "Choose a project and what you are working on.",
          },
          {
            number: "02",
            title: "Focus remembers",
            description:
              "Time, tasks, activity and streaks update together.",
          },
          {
            number: "03",
            title: "See the pattern",
            description:
              "Analytics turn everyday work into visible progress.",
          },
        ],
      },
      foundation: {
        eyebrow: "The foundation",
        title: "Everything connected.",
        highlight: "Almost nothing manual.",
        features: [
          {
            number: "01",
            title: "Deep focus, made simple.",
            description:
              "Start a session in seconds. No setup maze, no distractions — just you and the work that matters.",
          },
          {
            number: "02",
            title: "Your work, in context.",
            description:
              "Connect every focus session to a task and project, so your time always tells a useful story.",
          },
          {
            number: "03",
            title: "Progress you can see.",
            description:
              "Understand your rhythm with streaks, trends and focused time — without turning your day into a spreadsheet.",
          },
        ],
      },
      timer: {
        eyebrow: "A timer that fits your day",
        title: "Think about the work.",
        highlight: "Not the timer.",
        description:
          "Customize focus, short break and long break durations. Auto-start can move from work to rest and back again without constantly asking for your attention.",
        duration: "Flexible durations",
        transitions: "Automatic transitions",
        imageLabel: "Timer or dashboard screenshot",
        previewStatus: "Focusing",
        previewProject: "Deep work · Focus App",
        previewDuration: "of 50 minutes",
        previewAction: "Start session",
        previewToday: "Today",
        previewFocused: "3h 24m focused",
      },
      focusHome: {
        eyebrow: "New in Focus 5.0",
        title: "Your focus develops",
        highlight: "an identity of its own.",
        description:
          "FocushoMe analyzes real patterns across your sessions, tasks, projects and goals to reveal how you naturally build progress.",
        item1: "12 identities shaped by real behavior",
        item2: "A new assessment after each complete month",
        item3: "Your emblem lives inside the timer",
        previewEyebrow: "Your FocushoMe",
        previewDescription:
          "Clarity through structure. Progress built with intention.",
        trait1: "Clarity",
        trait2: "Structure",
        trait3: "Momentum",
        principles: [
          {
            title: "Living Glass",
            description:
              "Translucent surfaces, subtle light and depth replace opaque blocks throughout Focus 5.0.",
          },
          {
            title: "Built from your patterns",
            description:
              "Your identity comes from how you actually focus — never from a generic personality quiz.",
          },
          {
            title: "Present everywhere",
            description:
              "Your color and emblem follow you through the timer, reports and home-screen widgets.",
          },
        ],
      },
      notification: {
        eyebrow: "Your timer stays with you",
        title: "Leave the app.",
        highlight: "Keep the focus.",
        description:
          "On supported Android and Samsung devices, active sessions remain visible through ongoing notifications and lock-screen integrations.",
        item1: "Active task and project",
        item2: "Remaining focus time",
        item3: "Current streak",
        imageLabel: "Android notification or lock screen",
      },
      projects: {
        eyebrow: "Projects + tasks + goals",
        title: "Give every focused minute",
        highlight: "a purpose.",
        description:
          "Focus connects intention with execution. Choose what matters, work on it, complete it and keep the result as part of a larger history.",
        projectTitle: "Projects give time meaning",
        projectDescription:
          "See exactly where your attention goes instead of stopping at a total number of hours.",
        taskTitle: "Tasks create the feedback loop",
        taskDescription:
          "Choose what matters → Focus → Complete it → See the progress.",
        goalTitle: "Goals keep the year visible",
        goalDescription:
          "Track achievements that are bigger than today’s task list.",
        imageLabel: "Projects and tasks screenshot",
      },
      analytics: {
        eyebrow: "Analytics that understand focus",
        title: "Using Focus creates the report",
        highlight: "automatically.",
        description:
          "Move between this week, month, year and all time. See total focus, completed sessions, daily averages and the project receiving most of your attention.",
        week: "Week",
        month: "Month",
        year: "Year",
        allTime: "All time",
        analyticsImage: "Full analytics screenshot",
        historyImage: "Six-month history screenshot",
        thisMonth: "This month",
        currentStreak: "Current streak",
        longestStreak: "Longest streak",
        days: "days",
      },
      insights: {
        eyebrow: "Insights without digging",
        title1: "What happened.",
        title2: "Where time went.",
        highlight: "Whether you’re improving.",
        cards: [
          {
            label: "Focus momentum",
            value: "+18%",
            detail: "More focus than last month",
          },
          {
            label: "Most productive day",
            value: "Tuesday",
            detail: "7h 42m of deep work",
          },
          {
            label: "Main focus",
            value: "MaDev",
            detail: "42% of all focus time",
          },
          {
            label: "Active days",
            value: "24 days",
            detail: "Consistency over intensity",
          },
        ],
      },
      badges: {
        eyebrow: "Consistency worth collecting",
        title: "Your streak becomes part of",
        highlight: "your identity.",
        description:
          "Milestones become gradually harder, turning invisible discipline into a progression you want to protect — without meaningless points or pressure.",
        imageLabel: "Badges and activity heatmap",
      },
      widgets: {
        eyebrow: "Your productivity at a glance",
        title: "Not shortcuts.",
        highlight: "Windows into your progress.",
        description:
          "Multiple Android widgets bring the same connected Focus data directly to your home screen.",
        imageLabel: "Android home-screen widgets",
      },
      connection: {
        eyebrow: "Everything is connected",
        title: "You focus.",
        highlight: "Focus remembers.",
        steps: [
          "Focus time increases",
          "Project receives time",
          "Analytics recalculate",
          "Streak advances",
          "Widgets update",
          "Your story grows",
        ],
      },
      origin: {
        quote:
          "Productivity software shouldn’t become another thing you need to manage.",
        description:
          "Focus was built for real life, where some days hold four focused hours and others hold twenty-five minutes. Both matter. Over time, they become a truthful record of the days you actually showed up.",
      },
      final: {
        eyebrow: "Focus 5.0 is available",
        title: "Start the timer.",
        highlight: "Watch your progress grow.",
        description:
          "Use Focus directly on the web or download the official Focus 5.0 APK for Android.",
        platform: "Android",
        available: "Available now",
        versionLabel: "Version",
        sizeLabel: "Size",
        formatLabel: "Format",
        download: "Download Focus for Android",
        openWeb: "Open Focus on the web",
        signed:
          "Official APK digitally signed by the developer.",
        checksum: "Verify SHA-256",
        instructionsTitle: "How to install",
        steps: [
          "Download the APK using the button.",
          "Open the downloaded file on your Android device.",
          "If requested, allow your browser to install apps from this source.",
        ],
        permissionNote:
          "Android may display a security warning because Focus is not yet distributed through Galaxy Store.",
        galaxyStoreSoon:
          "Coming soon to Galaxy Store",
        playStoreSoon:
          "Coming soon to Google Play",
        appStoreSoon:
          "Coming soon to the App Store",
      },
      footer: {
        message: "Designed and built with intention.",
      },
    },
  },

  "pt-BR": {
    translation: {
      language: "PT-BR",
      navigation: {
        product: "Produto",
        features: "Recursos",
        focusHome: "FocushoMe",
        analytics: "Estatísticas",
        widgets: "Widgets",
        action: "Baixar o app",
      },
      hero: {
        eyebrow: "Focus 5.0 · Living Glass",
        title: "Foque no que importa.",
        highlight: "Descubra como você foca.",
        description:
          "Um sistema de produtividade mais calmo e pessoal. O Focus 5.0 conecta seu trabalho, revela seus padrões e dá uma identidade ao seu progresso.",
        primaryAction: "Abrir o Focus",
        secondaryAction: "Conheça o FocushoMe",
        point1: "Inicie o timer.",
        point2: "Construa sua sequência.",
        point3: "Entenda seu tempo.",
      },
      system: {
        eyebrow: "Focus é mais do que um timer.",
        title: "Uma sessão alimenta toda a sua",
        highlight: "história de produtividade.",
        steps: [
          {
            number: "01",
            title: "Inicie uma sessão",
            description: "Escolha um projeto e no que você está trabalhando.",
          },
          {
            number: "02",
            title: "O Focus se lembra",
            description:
              "Tempo, tarefas, atividades e sequências são atualizados juntos.",
          },
          {
            number: "03",
            title: "Enxergue o padrão",
            description:
              "As análises transformam o trabalho diário em progresso visível.",
          },
        ],
      },
      foundation: {
        eyebrow: "A base do sistema",
        title: "Tudo conectado.",
        highlight: "Quase nada manual.",
        features: [
          {
            number: "01",
            title: "Foco profundo de forma simples.",
            description:
              "Inicie uma sessão em segundos. Sem configurações complicadas ou distrações — apenas você e o trabalho que importa.",
          },
          {
            number: "02",
            title: "Seu trabalho dentro de um contexto.",
            description:
              "Conecte cada sessão a uma tarefa e projeto, fazendo com que seu tempo sempre conte uma história útil.",
          },
          {
            number: "03",
            title: "Progresso que você consegue enxergar.",
            description:
              "Entenda seu ritmo por meio de sequências, tendências e tempo focado — sem transformar o seu dia em uma planilha.",
          },
        ],
      },
      timer: {
        eyebrow: "Um timer que se adapta ao seu dia",
        title: "Pense no trabalho.",
        highlight: "Não no timer.",
        description:
          "Personalize a duração do foco, das pausas curtas e das pausas longas. O início automático pode alternar entre trabalho e descanso sem exigir sua atenção constantemente.",
        duration: "Durações flexíveis",
        transitions: "Transições automáticas",
        imageLabel: "Imagem do timer ou painel",
        previewStatus: "Em foco",
        previewProject: "Trabalho profundo · Focus App",
        previewDuration: "de 50 minutos",
        previewAction: "Iniciar sessão",
        previewToday: "Hoje",
        previewFocused: "3h24 de foco",
      },
      focusHome: {
        eyebrow: "Novo no Focus 5.0",
        title: "Seu foco desenvolve",
        highlight: "uma identidade própria.",
        description:
          "O FocushoMe analisa padrões reais das suas sessões, tarefas, projetos e metas para revelar como você naturalmente constrói progresso.",
        item1: "12 identidades formadas pelo seu comportamento",
        item2: "Uma nova avaliação após cada mês completo",
        item3: "Seu emblema vive dentro do timer",
        previewEyebrow: "Seu FocushoMe",
        previewDescription:
          "Clareza por meio da estrutura. Progresso construído com intenção.",
        trait1: "Clareza",
        trait2: "Estrutura",
        trait3: "Ritmo",
        principles: [
          {
            title: "Living Glass",
            description:
              "Superfícies translúcidas, luz sutil e profundidade substituem os blocos opacos em todo o Focus 5.0.",
          },
          {
            title: "Criado pelos seus padrões",
            description:
              "Sua identidade surge da forma como você realmente foca — nunca de um teste de personalidade genérico.",
          },
          {
            title: "Presente em todo lugar",
            description:
              "Sua cor e seu emblema acompanham você no timer, nos relatórios e nos widgets.",
          },
        ],
      },
      notification: {
        eyebrow: "Seu timer acompanha você",
        title: "Saia do aplicativo.",
        highlight: "Continue focado.",
        description:
          "Em dispositivos Android e Samsung compatíveis, sessões ativas permanecem visíveis em notificações contínuas e integrações com a tela bloqueada.",
        item1: "Tarefa e projeto ativos",
        item2: "Tempo de foco restante",
        item3: "Sequência atual",
        imageLabel: "Notificação Android ou tela bloqueada",
      },
      projects: {
        eyebrow: "Projetos + tarefas + metas",
        title: "Dê propósito a cada",
        highlight: "minuto de foco.",
        description:
          "O Focus conecta intenção e execução. Escolha o que importa, trabalhe, conclua e mantenha o resultado como parte de uma história maior.",
        projectTitle: "Projetos dão significado ao tempo",
        projectDescription:
          "Veja exatamente para onde sua atenção está indo, em vez de visualizar apenas um total de horas.",
        taskTitle: "Tarefas criam um ciclo de progresso",
        taskDescription:
          "Escolha o que importa → Foque → Conclua → Veja o progresso.",
        goalTitle: "Metas mantêm o ano visível",
        goalDescription:
          "Acompanhe conquistas maiores do que a lista de tarefas de hoje.",
        imageLabel: "Imagem de projetos e tarefas",
      },
      analytics: {
        eyebrow: "Análises que entendem o seu foco",
        title: "Usar o Focus cria o relatório",
        highlight: "automaticamente.",
        description:
          "Alterne entre esta semana, mês, ano e todo o período. Veja tempo total de foco, sessões concluídas, médias diárias e o projeto que mais recebeu sua atenção.",
        week: "Semana",
        month: "Mês",
        year: "Ano",
        allTime: "Todo o período",
        analyticsImage: "Imagem completa das análises",
        historyImage: "Imagem do histórico de seis meses",
        thisMonth: "Este mês",
        currentStreak: "Sequência atual",
        longestStreak: "Maior sequência",
        days: "dias",
      },
      insights: {
        eyebrow: "Informações sem precisar investigar",
        title1: "O que aconteceu.",
        title2: "Para onde seu tempo foi.",
        highlight: "Se você está melhorando.",
        cards: [
          {
            label: "Ritmo de foco",
            value: "+18%",
            detail: "Mais foco do que no mês passado",
          },
          {
            label: "Dia mais produtivo",
            value: "Terça-feira",
            detail: "7h42 de trabalho focado",
          },
          {
            label: "Foco principal",
            value: "MaDev",
            detail: "42% de todo o tempo focado",
          },
          {
            label: "Dias ativos",
            value: "24 dias",
            detail: "Consistência acima da intensidade",
          },
        ],
      },
      badges: {
        eyebrow: "Uma consistência que vale colecionar",
        title: "Sua sequência se torna parte da",
        highlight: "sua identidade.",
        description:
          "Os marcos ficam gradualmente mais difíceis, transformando uma disciplina invisível em uma progressão que você deseja proteger — sem pontos sem significado ou pressão.",
        imageLabel: "Imagem das insígnias e mapa de atividades",
      },
      widgets: {
        eyebrow: "Sua produtividade de relance",
        title: "Não são apenas atalhos.",
        highlight: "São janelas para o seu progresso.",
        description:
          "Diversos widgets para Android levam os mesmos dados conectados do Focus diretamente para a tela inicial.",
        imageLabel: "Widgets do Focus para Android",
      },
      connection: {
        eyebrow: "Tudo está conectado",
        title: "Você se concentra.",
        highlight: "O Focus se lembra.",
        steps: [
          "O tempo focado aumenta",
          "O projeto recebe tempo",
          "As análises são recalculadas",
          "Sua sequência avança",
          "Os widgets são atualizados",
          "Sua história cresce",
        ],
      },
      origin: {
        quote:
          "Um software de produtividade não deveria se tornar outra coisa que você precisa administrar.",
        description:
          "O Focus foi criado para a vida real, na qual alguns dias possuem quatro horas de foco e outros apenas vinte e cinco minutos. Ambos importam. Com o tempo, eles se transformam em um registro verdadeiro dos dias em que você realmente apareceu.",
      },
      final: {
        eyebrow: "Focus 5.0 disponível",
        title: "Inicie o timer.",
        highlight: "Veja seu progresso crescer.",
        description:
          "Use o Focus diretamente pela web ou baixe o APK oficial do Focus 5.0 para Android.",
        platform: "Android",
        available: "Disponível agora",
        versionLabel: "Versão",
        sizeLabel: "Tamanho",
        formatLabel: "Formato",
        download: "Baixar Focus para Android",
        openWeb: "Abrir Focus na web",
        signed:
          "APK oficial assinado digitalmente pelo desenvolvedor.",
        checksum: "Verificar SHA-256",
        instructionsTitle: "Como instalar",
        steps: [
          "Baixe o APK usando o botão.",
          "Abra o arquivo baixado no seu dispositivo Android.",
          "Se solicitado, permita que o navegador instale apps desta fonte.",
        ],
        permissionNote:
          "O Android poderá exibir um aviso de segurança porque o Focus ainda não está distribuído pela Galaxy Store.",
        galaxyStoreSoon:
          "Em breve na Galaxy Store",
        playStoreSoon:
          "Em breve na Google Play",
        appStoreSoon:
          "Em breve na App Store",
      },
      footer: {
        message: "Projetado e desenvolvido com intenção.",
      },
    },
  },
};

const savedLanguage = localStorage.getItem("focus-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("pt")
  ? "pt-BR"
  : "en";

void i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || browserLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("focus-language", language);
  document.documentElement.lang = language;
});

export default i18n;
