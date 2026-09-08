import {
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import {
  useTranslation,
} from "react-i18next";

import {
  FocusMark,
} from "../components/FocusMark";
import {
  LanguageSwitcher,
} from "../components/LanguageSwitcher";

const content = {
  en: {
    back: "Back to Focus",
    eyebrow: "Privacy and transparency",
    title: "Privacy Policy",
    updated: "Effective date: September 8, 2026",
    introduction:
      "Focus is a productivity application designed to help you manage focus sessions, tasks, projects, goals, streaks, and personal retrospectives. This policy explains what information is processed and how it is protected.",
    sections: [
      {
        title: "Information we process",
        paragraphs: [
          "When you sign in with Google, Focus receives the account information necessary for authentication, such as your user identifier, email address, and profile name.",
          "The app stores the information you create, including focus sessions, tasks, projects, goals, activity events, streak data, reports, FocushoMe assessments, and preferences.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "Your information is used to operate the timer, synchronize your account, calculate analytics, maintain streaks and badges, generate retrospectives, and reveal your FocushoMe identity.",
          "Focus does not sell your personal information and does not use your productivity data for advertising.",
        ],
      },
      {
        title: "FocusMe and artificial intelligence",
        paragraphs: [
          "FocusMe calculates behavioral metrics from your activity in the app. When a personalized monthly narrative is requested, selected numerical metrics may be securely processed by an artificial intelligence provider.",
          "Task names, project names, goal names, email addresses, and direct personal identifiers are not included in the information sent to generate the narrative. FocushoMe classification is performed from calculated behavioral metrics.",
        ],
      },
      {
        title: "Storage and service providers",
        paragraphs: [
          "Account authentication and synchronized app data are stored using Supabase. Google is used as the authentication provider. OpenAI may process selected, minimized report metrics when generating a personalized narrative.",
          "Temporary PNG retrospective files are generated locally. Images are only shared when you explicitly choose to share them.",
        ],
      },
      {
        title: "Data retention and account deletion",
        paragraphs: [
          "Your synchronized information is retained while your account remains active. You can permanently delete your account from Settings inside the app.",
          "Deleting your account removes your sessions, tasks, projects, goals, reports, narratives, activity history, and FocushoMe journey. This action cannot be undone.",
        ],
      },
      {
        title: "Security",
        paragraphs: [
          "Focus uses authentication, access-control policies, encrypted network connections, and server-side authorization to protect synchronized information.",
          "No digital service can guarantee absolute security, but access is restricted to the authenticated account and trusted service operations.",
        ],
      },
      {
        title: "Your choices and rights",
        paragraphs: [
          "You may use guest mode without connecting a Google account. Guest data remains on the device unless you choose to connect an account.",
          "You may stop using the service, sign out, or permanently delete your account. You may also contact us with questions about your information.",
        ],
      },
      {
        title: "Children",
        paragraphs: [
          "Focus is not directed to children under 13 and does not knowingly collect personal information from children under 13.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "This policy may be updated when Focus changes or when legal and platform requirements evolve. The effective date on this page will identify the latest revision.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For privacy questions or account-deletion assistance, contact mateusgomes.dev@icloud.com.",
        ],
      },
    ],
  },

  "pt-BR": {
    back: "Voltar para o Focus",
    eyebrow: "Privacidade e transparência",
    title: "Política de Privacidade",
    updated: "Vigente desde: 8 de setembro de 2026",
    introduction:
      "O Focus é um aplicativo de produtividade criado para ajudar você a administrar sessões de foco, tarefas, projetos, metas, sequências e retrospectivas pessoais. Esta política explica quais informações são tratadas e como elas são protegidas.",
    sections: [
      {
        title: "Informações que tratamos",
        paragraphs: [
          "Quando você entra com o Google, o Focus recebe as informações necessárias para autenticação, como identificador da conta, endereço de e-mail e nome de perfil.",
          "O aplicativo armazena as informações que você cria, incluindo sessões de foco, tarefas, projetos, metas, eventos de atividade, sequências, relatórios, análises FocushoMe e preferências.",
        ],
      },
      {
        title: "Como as informações são utilizadas",
        paragraphs: [
          "Suas informações são utilizadas para operar o timer, sincronizar sua conta, calcular análises, manter sequências e insígnias, gerar retrospectivas e revelar sua identidade FocushoMe.",
          "O Focus não vende suas informações pessoais e não utiliza seus dados de produtividade para publicidade.",
        ],
      },
      {
        title: "FocusMe e inteligência artificial",
        paragraphs: [
          "O FocusMe calcula métricas comportamentais a partir das suas atividades no aplicativo. Quando uma narrativa mensal personalizada é solicitada, algumas métricas numéricas podem ser processadas com segurança por um provedor de inteligência artificial.",
          "Nomes de tarefas, projetos ou metas, endereços de e-mail e identificadores pessoais diretos não são incluídos nas informações enviadas para gerar a narrativa. A classificação FocushoMe é realizada a partir de métricas comportamentais calculadas.",
        ],
      },
      {
        title: "Armazenamento e prestadores de serviço",
        paragraphs: [
          "A autenticação e os dados sincronizados do aplicativo são armazenados utilizando o Supabase. O Google é utilizado como provedor de autenticação. A OpenAI pode processar métricas selecionadas e minimizadas quando uma narrativa personalizada é gerada.",
          "Os arquivos PNG das retrospectivas são gerados localmente. As imagens só são compartilhadas quando você escolhe explicitamente compartilhá-las.",
        ],
      },
      {
        title: "Retenção e exclusão da conta",
        paragraphs: [
          "Suas informações sincronizadas são mantidas enquanto sua conta permanecer ativa. Você pode excluir permanentemente sua conta pelas Configurações do aplicativo.",
          "A exclusão remove sessões, tarefas, projetos, metas, relatórios, narrativas, histórico de atividades e sua jornada FocushoMe. Essa ação não pode ser desfeita.",
        ],
      },
      {
        title: "Segurança",
        paragraphs: [
          "O Focus utiliza autenticação, políticas de controle de acesso, conexões de rede criptografadas e autorização no servidor para proteger as informações sincronizadas.",
          "Nenhum serviço digital pode garantir segurança absoluta, mas o acesso é restrito à conta autenticada e a operações confiáveis do serviço.",
        ],
      },
      {
        title: "Suas escolhas e direitos",
        paragraphs: [
          "Você pode utilizar o modo visitante sem conectar uma conta Google. Os dados de visitante permanecem no dispositivo, a menos que você decida conectar uma conta.",
          "Você pode deixar de utilizar o serviço, sair da conta ou excluí-la permanentemente. Também pode entrar em contato em caso de dúvidas sobre suas informações.",
        ],
      },
      {
        title: "Crianças e adolescentes",
        paragraphs: [
          "O Focus não é direcionado a crianças menores de 13 anos e não coleta intencionalmente informações pessoais de crianças menores de 13 anos.",
        ],
      },
      {
        title: "Alterações nesta política",
        paragraphs: [
          "Esta política poderá ser atualizada quando o Focus mudar ou quando requisitos legais e das plataformas evoluírem. A data exibida nesta página identificará a revisão mais recente.",
        ],
      },
      {
        title: "Contato",
        paragraphs: [
          "Para dúvidas sobre privacidade ou ajuda com a exclusão da conta, entre em contato pelo e-mail mateusgomes.dev@icloud.com.",
        ],
      },
    ],
  },
};

export function PrivacyPolicyPage() {
  const {
    i18n,
  } = useTranslation();

  const language =
    i18n.resolvedLanguage
      ?.startsWith("pt")
      ? "pt-BR"
      : "en";

  const page =
    content[language];

  return (
    <main className="privacy-page">
      <nav className="nav shell">
        <a
          className="brand"
          href="/"
          aria-label="Focus"
        >
          <FocusMark />
          <span>focus</span>
        </a>

        <LanguageSwitcher />
      </nav>

      <article className="privacy-content shell">
        <a
          className="privacy-back"
          href="/"
        >
          <ArrowLeft size={16} />
          {page.back}
        </a>

        <header className="privacy-header">
          <div className="privacy-shield">
            <ShieldCheck size={24} />
          </div>

          <p className="section-kicker">
            {page.eyebrow}
          </p>

          <h1>{page.title}</h1>

          <p className="privacy-updated">
            {page.updated}
          </p>

          <p className="privacy-introduction">
            {page.introduction}
          </p>
        </header>

        <div className="privacy-sections">
          {page.sections.map(
            (section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>

                {section.paragraphs.map(
                  (paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  ),
                )}
              </section>
            ),
          )}
        </div>
      </article>

      <footer className="footer shell">
        <div className="brand">
          <FocusMark />
          <span>focus</span>
        </div>

        <p>
          mateusgomes.dev@icloud.com
        </p>

        <span>© 2026 Focus</span>
      </footer>
    </main>
  );
}
