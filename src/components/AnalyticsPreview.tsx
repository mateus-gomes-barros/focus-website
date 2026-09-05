import { useTranslation } from "react-i18next";

const hours = [48, 72, 55, 91, 66, 82, 62];

export function AnalyticsPreview() {
  const { t } = useTranslation();

  return (
    <div className="analytics-card">
      <div className="analytics-head">
        <div>
          <span>{t("analytics.thisMonth")}</span>
          <strong>42h 18m</strong>
        </div>

        <span className="analytics-badge">+12.4%</span>
      </div>

      <div className="chart" aria-label={t("analytics.eyebrow")}>
        {hours.map((height, index) => (
          <div
            className={index === 3 ? "bar active" : "bar"}
            key={index}
            style={{ height: `${height}%` }}
          >
            <span />
          </div>
        ))}
      </div>

      <div className="chart-labels">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <div className="analytics-stats">
        <div>
          <span>{t("analytics.currentStreak")}</span>
          <strong>6 {t("analytics.days")}</strong>
        </div>

        <div>
          <span>{t("analytics.longestStreak")}</span>
          <strong>12 {t("analytics.days")}</strong>
        </div>
      </div>
    </div>
  );
}
