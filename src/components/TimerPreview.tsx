import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FocusMark } from "./FocusMark";

export function TimerPreview() {
  const { t } = useTranslation();

  return (
    <div className="timer-stage" aria-label={t("timer.imageLabel")}>
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="app-window">
        <div className="window-top">
          <div className="mini-brand">
            <FocusMark />
            <span>focus</span>
          </div>

          <span className="live-dot">
            {t("timer.previewStatus")}
          </span>
        </div>

        <div className="timer-content">
          <span className="session-label">
            {t("timer.previewProject")}
          </span>

          <div className="timer-ring">
            <svg viewBox="0 0 240 240" aria-hidden="true">
              <circle
                className="ring-track"
                cx="120"
                cy="120"
                r="108"
              />

              <circle
                className="ring-progress"
                cx="120"
                cy="120"
                r="108"
              />
            </svg>

            <div className="timer-value">
              <strong>24:16</strong>
              <span>{t("timer.previewDuration")}</span>
            </div>
          </div>

          <button className="session-button" type="button">
            <Play size={19} fill="currentColor" />
            {t("timer.previewAction")}
          </button>
        </div>

        <div className="window-footer">
          <span>{t("timer.previewToday")}</span>
          <strong>{t("timer.previewFocused")}</strong>
          <span className="trend">+18%</span>
        </div>
      </div>
    </div>
  );
}
