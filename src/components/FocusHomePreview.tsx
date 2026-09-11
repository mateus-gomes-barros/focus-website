import {
  FocusHomeSymbol,
  type FocusHomeKey,
} from "./FocusHomeSymbol";

const surroundingSymbols: {
  type: FocusHomeKey;
  name: string;
}[] = [
  {
    type: "aster",
    name: "Aster",
  },
  {
    type: "ember",
    name: "Ember",
  },
  {
    type: "tide",
    name: "Tide",
  },
  {
    type: "verdant",
    name: "Verdant",
  },
];

type FocusHomePreviewProps = {
  eyebrow: string;
  name: string;
  description: string;
  traits: string[];
};

export function FocusHomePreview({
  eyebrow,
  name,
  description,
  traits,
}: FocusHomePreviewProps) {
  return (
    <div className="focushome-preview">
      <div className="focushome-ambient focushome-ambient-one" />
      <div className="focushome-ambient focushome-ambient-two" />

      <div className="focushome-orbit">
        {surroundingSymbols.map(
          (symbol, index) => (
            <div
              className={`focushome-mini focushome-mini-${index + 1}`}
              key={symbol.type}
            >
              <FocusHomeSymbol
                type={symbol.type}
                size={52}
              />

              <span>{symbol.name}</span>
            </div>
          ),
        )}
      </div>

      <div className="focushome-identity-card">
        <span className="focushome-preview-eyebrow">
          {eyebrow}
        </span>

        <div className="focushome-main-symbol">
          <FocusHomeSymbol
            type="prism"
            size={150}
          />
        </div>

        <strong>{name}</strong>

        <p>{description}</p>

        <div className="focushome-traits">
          {traits.map((trait) => (
            <span key={trait}>
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
