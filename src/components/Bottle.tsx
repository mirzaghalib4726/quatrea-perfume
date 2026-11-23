import type { BottleProps } from "@/components/bottle/Bottle.types";

export function Bottle({ perfume, compact = false }: BottleProps) {
  return (
    <div className={`bottle-stage ${compact ? "bottle-stage--compact" : ""}`} aria-label={`${perfume.name} perfume bottle`}>
      <div className="bottle-shadow" />
      <div className="bottle">
        <div className="bottle-cap">
          <span />
        </div>
        <div className="bottle-neck" />
        <div className="bottle-glass" style={{ "--liquid": perfume.liquidColor } as React.CSSProperties}>
          <div className="bottle-liquid" />
          <div className="bottle-label">
            <p>QUATREA</p>
            <span>{perfume.name}</span>
            <small>EAU DE PARFUM · PARIS</small>
          </div>
        </div>
      </div>
    </div>
  );
}
