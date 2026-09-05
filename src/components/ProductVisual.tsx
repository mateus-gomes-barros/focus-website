import { ImagePlus } from "lucide-react";
import { useState } from "react";

type ProductVisualProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export function ProductVisual({ src, alt, label, className = "" }: ProductVisualProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`product-visual ${className}`}>
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <div className="image-placeholder">
          <ImagePlus size={24} />
          <strong>{label}</strong>
          <code>{src.replace("/", "public/")}</code>
        </div>
      )}
    </div>
  );
}
