import React, { useMemo, useRef, useState, useEffect } from "react";

type CSS = React.CSSProperties;

export interface DoorRevealCardProps {
  /** Width of the card (px, %, etc.) */
  width?: number | string;
  /** Height of the card */
  height?: number | string;
  /** Content shown on the door face */
  front?: React.ReactNode;
  /** Content revealed behind the door */
  back?: React.ReactNode;
  /** Door face background */
  frontBg?: string;
  /** Revealed panel background */
  backBg?: string;
  /** Corner radius in px */
  radius?: number;
  /** How far the door swings open (degrees, negative opens to the left) */
  openAngle?: number;
  /** Transition duration in ms */
  durationMs?: number;
  /** Shadow applied to the door */
  doorShadow?: string;
  /** Shadow applied to the revealed content */
  backShadow?: string;
  /** If true, starts opened */
  defaultOpen?: boolean;
  /** Optional className wrapper passthrough */
  className?: string;
}

/**
 * DoorRevealCard
 * A single-file, inline-styled 3D "door opening" component.
 *
 * Usage:
 * <DoorRevealCard
 *   width={340}
 *   height={220}
 *   front={<strong>Hover me</strong>}
 *   back={<div>New content revealed 🎉</div>}
 * />
 */
const DoorRevealCard: React.FC<DoorRevealCardProps> = ({
  width = 320,
  height = 200,
  front = <span style={{ fontWeight: 700 }}>Hover me</span>,
  back = <span>New content revealed 🎉</span>,
  frontBg = "#4f46e5", // indigo
  backBg = "#16a34a", // green
  radius = 16,
  openAngle = -110,
  durationMs = 800,
  doorShadow = "0 14px 30px rgba(0,0,0,0.20), 0 4px 10px rgba(0,0,0,0.15)",
  backShadow = "inset 0 0 0 1px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.10)",
  defaultOpen = false,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [reduced, setReduced] = useState<boolean>(false);
  const touching = useRef(false);

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const set = () => setReduced(!!mq.matches);
      set();
      mq.addEventListener?.("change", set);
      return () => mq.removeEventListener?.("change", set);
    }
  }, []);

  const duration = reduced ? 0 : durationMs;

  const containerStyle: CSS = useMemo(
    () => ({
      width,
      height,
      position: "relative",
      perspective: "1200px",
      WebkitPerspective: "1200px",
      transformStyle: "preserve-3d",
      WebkitTransformStyle: "preserve-3d",
      userSelect: "none",
      outline: "none",
      display: "inline-block",
    }),
    [width, height]
  );

  const stageStyle: CSS = useMemo(
    () => ({
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: radius,
      overflow: "hidden",
      background: backBg,
      boxShadow: backShadow,
    }),
    [radius, backBg, backShadow]
  );

  const revealedContentStyle: CSS = useMemo(
    () => ({
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      padding: 16,
      color: "#fff",
      textAlign: "center",
      // To ensure it's behind the door:
      zIndex: 0,
    }),
    []
  );

  const doorStyle: CSS = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: radius,
      background: frontBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18,
      fontWeight: 600,
      color: "#fff",
      transformOrigin: "left center",
      transform: `rotateY(${open ? openAngle : 0}deg)`,
      transition: `transform ${duration}ms cubic-bezier(.2,.7,.1,1)`,
      willChange: "transform",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      zIndex: 1,
      boxShadow: doorShadow,
    }),
    [radius, frontBg, open, openAngle, duration, doorShadow]
  );

  const doorGlossStyle: CSS = useMemo(
    () => ({
      position: "absolute",
      inset: 0,
      borderRadius: radius,
      pointerEvents: "none",
      background:
        "linear-gradient(120deg, rgba(255,255,255,0.28), rgba(255,255,255,0) 40%)",
      opacity: 0.7,
      mixBlendMode: "soft-light",
    }),
    [radius]
  );

  const hingeGlowStyle: CSS = useMemo(
    () => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: 24,
      height: "100%",
      pointerEvents: "none",
      background:
        "linear-gradient(to right, rgba(255,255,255,0.20), rgba(255,255,255,0))",
      opacity: open ? 1 : 0.6,
      transition: `opacity ${Math.max(200, duration / 2)}ms ease`,
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
    }),
    [open, duration, radius]
  );

  // Interaction handlers (hover, focus, touch, keyboard)
  const onEnter = () => !touching.current && setOpen(true);
  const onLeave = () => !touching.current && setOpen(false);
  const onFocus = () => setOpen(true);
  const onBlur = () => setOpen(false);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touching.current = true;
    setOpen((v) => !v);
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    // let hover handlers resume after a short delay
    setTimeout(() => (touching.current = false), 200);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    }
    if (e.key.toLowerCase() === "escape") setOpen(false);
  };

  // Optional subtle parallax on mouse move
  const stageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = stageRef.current;
    if (!el || reduced) return;

    const handleMove = (ev: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width; // 0 → 1
      const y = (ev.clientY - rect.top) / rect.height; // 0 → 1
      const tiltX = (0.5 - y) * 4; // small tilt
      const tiltY = (x - 0.5) * 6;
      el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };
    const reset = () => (el.style.transform = "rotateX(0deg) rotateY(0deg)");
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [reduced]);

  return (
    <div
      className={className}
      style={containerStyle}
      aria-label="Door reveal card"
      // Accessibility: make it keyboard/touch/hover interactive
      role="button"
      tabIndex={0}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
    >
      <div
        ref={stageRef}
        style={{
          ...stageStyle,
          transition: reduced ? undefined : "transform 400ms ease",
        }}
      >
        <div style={revealedContentStyle}>{back}</div>

        <div style={doorStyle}>
          {front}
          <div style={doorGlossStyle} />
          <div style={hingeGlowStyle} />
        </div>
      </div>
      {/* Visually hidden instructions for screen readers */}
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Hover, focus, or press Enter/Space to open the door and reveal content.
      </span>
    </div>
  );
};

export default DoorRevealCard;
