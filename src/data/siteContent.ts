export const siteLinks = {
  github: "https://github.com/mateus-gomes-barros/pomodoro",
  webApp: "https://pomodoro-1ktl-theta.vercel.app/",
  download: "/downloads/focus-5.0.0-android.apk",
  checksum:
    "/downloads/focus-5.0.0-android.apk.sha256",
};

export function getImageSlots(language: string) {
  const locale = language.toLowerCase().startsWith("pt")
    ? "pt-BR"
    : "en";

  const image = (filename: string) =>
    `/images/${locale}/${filename}`;

  if (locale === "pt-BR") {
    const focus5 = (
      filename: string,
    ) =>
      `/images/pt-BR/focus5/${filename}`;

    return {
      timer:
        focus5("timer-dashboard.png"),
      notifications:
        focus5("android-notification.jpg"),
      projects:
        focus5("projects-and-tasks.png"),
      analytics:
        focus5("analytics-dashboard.png"),
      history:
        focus5("monthly-history.png"),
      badges:
        focus5("badges-and-heatmap.png"),
      widgets:
        focus5("android-widgets.jpg"),
    };
  }

  const focus5 = (
    filename: string,
  ) =>
    `/images/en/focus5/${filename}`;

  return {
    timer:
      focus5("timer-dashboard.svg"),
    notifications:
      focus5("android-notification.svg"),
    projects:
      focus5("projects-and-tasks.svg"),
    analytics:
      focus5("analytics-dashboard.svg"),
    history:
      focus5("monthly-history.svg"),
    badges:
      focus5("badges-and-heatmap.svg"),
    widgets:
      focus5("android-widgets.svg"),
  };
}

export const badgeMilestones = [
  { icon: "💧", name: "First Drop", days: "1 day" },
  { icon: "🌱", name: "First Steps", days: "3 days" },
  { icon: "🔥", name: "On Fire", days: "7 days" },
  { icon: "❤️‍🔥", name: "Flame Keeper", days: "14 days" },
  { icon: "⚡", name: "Momentum", days: "30 days" },
  { icon: "🚀", name: "Liftoff", days: "60 days" },
  { icon: "💎", name: "Diamond Mind", days: "365 days" },
];

export const widgetNames = [
  "Today’s Focus", "Current Streak", "Weekly Activity",
  "Monthly Activity", "Weekly Analytics", "Monthly Analytics",
  "Goals", "Top Project", "Focus Timer", "FocushoMe",
];
