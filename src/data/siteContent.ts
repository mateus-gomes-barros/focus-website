export const siteLinks = {
  webApp: "https://pomodoro-1ktl-theta.vercel.app/",
  android:
    "https://github.com/mateus-gomes-barros/focus-releases/releases/download/v6.0.0/focus-6.0.0.apk",
  macOS:
    "https://github.com/mateus-gomes-barros/focus-releases/releases/download/v6.0.0/Focus%20Horizon_6.0.0_aarch64.dmg",
  windows:
    "https://github.com/mateus-gomes-barros/focus-releases/releases/download/v6.0.0/Focus%20Horizon_6.0.0_x64-setup.exe",
};

export function getImageSlots(language: string) {
  const locale = language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
  const image = (filename: string) => `/images/${locale}/${filename}`;

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
  { icon: "01", name: "First Drop", days: "1 day" },
  { icon: "03", name: "First Steps", days: "3 days" },
  { icon: "07", name: "On Fire", days: "7 days" },
  { icon: "14", name: "Flame Keeper", days: "14 days" },
  { icon: "30", name: "Momentum", days: "30 days" },
  { icon: "60", name: "Liftoff", days: "60 days" },
  { icon: "365", name: "Diamond Mind", days: "365 days" },
];

export const widgetNames = [
  "Today’s Focus",
  "Current Streak",
  "Weekly Activity",
  "Monthly Activity",
  "Weekly Analytics",
  "Monthly Analytics",
  "Goals",
  "Top Project",
  "Focus Timer",
  "FocushoMe",
];
