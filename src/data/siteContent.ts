export const siteLinks = {
  github: "https://github.com/mateus-gomes-barros/pomodoro",
  download: "#download",
};

export function getImageSlots(language: string) {
  const locale = language.toLowerCase().startsWith("pt")
    ? "pt-BR"
    : "en";

  const image = (filename: string) =>
    `/images/${locale}/${filename}`;

  return {
    timer: image("timer-dashboard.webp"),
    notifications: image("android-notification.webp"),
    projects: image("projects-and-tasks.webp"),
    analytics: image("analytics-dashboard.webp"),
    history: image("monthly-history.webp"),
    badges: image("badges-and-heatmap.webp"),
    widgets: image("android-widgets.webp"),
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
  "Goals", "Top Project", "Focus Timer",
];
