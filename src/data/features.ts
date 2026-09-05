import { BarChart3, Clock3, ListTodo, type LucideIcon } from "lucide-react";

export type Feature = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    number: "01",
    icon: Clock3,
    title: "Deep focus, made simple.",
    text: "Start a session in seconds. No setup maze, no distractions — just you and the work that matters.",
  },
  {
    number: "02",
    icon: ListTodo,
    title: "Your work, in context.",
    text: "Connect every focus session to a task and project, so your time always tells a useful story.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Progress you can see.",
    text: "Understand your rhythm with streaks, trends and focused time — without turning your day into a spreadsheet.",
  },
];
