import React, { useEffect, useState } from "react";

type Target = {
  top: string;
  left: string;
  isBomb: boolean;
  id: string;
};

export default function PepsiChallengeAd(): JSX.Element {
  const [step, setStep] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [playing, setPlaying] = useState<boolean>(false);
  const [targets, setTargets] = useState<Target[]>([]);

  useEffect(() => {
    let timer: number | null = null;

    if (playing && timeLeft > 0) {
      // position targets immediately at start
      setTargets(generateTargets());
      timer = window.setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            setPlaying(false);
            setStep(2);
            return 0;
          }
          return t - 1;
        });
        // Smooth target repositioning
        setTimeout(() => setTargets(generateTargets()), 100);
      }, 1500); // Slower repositioning for better gameplay
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [playing, timeLeft]);

  function startGame() {
    setStep(1);
    setScore(0);
    setTimeLeft(20);
    setPlaying(true);
  }

  function handleClick(target: Target) {
    if (target.isBomb) {
      setPlaying(false);
      setStep(2);
    } else {
      setScore((s) => s + 1);
      // Smooth feedback with slight delay
      setTimeout(() => setTargets(generateTargets()), 150);
    }
  }

  function generateTargets(): Target[] {
    const spots = Array.from({ length: 3 }, (_, i) => {
      const top = `${Math.random() * 70 + 10}%`;
      const left = `${Math.random() * 70 + 10}%`;
      return {
        id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`,
        top,
        left,
        isBomb: i !== 0,
      } as Target;
    });
    return spots.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="ad-root">
      <style>{`
        .ad-root {
          height: 100%;
          width: 100%;
          background: linear-gradient(180deg, #2563eb 0%, #0f172a 60%, #000 100%);
          color: #fff;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
          border-radius: 12px;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }
        .logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          margin-bottom: 12px;
          transform: scale(0);
          animation: fade-in-scale 800ms ease forwards;
        }
        .headline {
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0 0 8px;
          text-align: center;
          letter-spacing: 0.2px;
        }
        .sub {
          font-size: 0.9rem;
          opacity: 0.95;
          margin-bottom: 16px;
          text-align: center;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.875rem;
          box-shadow: 0 6px 15px rgba(0,0,0,0.25);
          transition: transform 120ms ease, filter 120ms ease, opacity 120ms ease;
          user-select: none;
        }
        .btn:active { transform: translateY(1px) scale(0.98); }
        .btn.primary { background: #ef4444; color: #fff; }
        .btn.primary:hover { filter: brightness(1.05); }
        .btn.success { background: #22c55e; color: #fff; }
        .btn.success:hover { filter: brightness(1.05); }
        .hud {
          position: absolute;
          top: 12px;
          left: 12px;
          font-weight: 700;
          font-size: 0.9rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
        }
        .hud.score {
          left: auto;
          right: 12px;
        }
        .stage {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .target {
          width: 50px;
          height: 50px;
          position: absolute;
          transform: translate(-50%, -50%) scale(0.8);
          cursor: pointer;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4));
          animation: pop-in 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          will-change: transform;
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .target:hover {
          transform: translate(-50%, -50%) scale(0.9);
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.6));
        }
        .target:active {
          transform: translate(-50%, -50%) scale(0.75);
        }
        .target.bomb { 
          animation: pulse 1000ms ease-in-out infinite;
        }
        .bomb-icon {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.8);
          border: 2px solid #e0e0e0;
          transition: all 0.2s ease;
        }
        .bomb-icon:hover {
          background: linear-gradient(145deg, #f8f8f8, #e8e8e8);
          transform: scale(1.05);
        }
        .center { text-align: center; }
        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 16px 18px;
          backdrop-filter: blur(6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.35);
        }
        .spacer { height: 10px; }
        a.cta { display: inline-flex; text-decoration: none; }

        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.3) rotate(-180deg); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1) rotate(-90deg); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(0.8) rotate(0deg); }
        }
        @keyframes pulse {
          0%,100% { transform: translate(-50%, -50%) scale(0.8); filter: drop-shadow(0 4px 8px rgba(255,0,0,0.4)); }
          50% { transform: translate(-50%, -50%) scale(0.9); filter: drop-shadow(0 6px 12px rgba(255,0,0,0.6)); }
        }
      `}</style>

      <img
        className="logo"
        src="	https://panel.digitarmedia.com/admin/uploads/Pepsi_white1756281944.png"
        alt="Pepsi Logo"
        style={{
          scale: "2",
        }}
      />

      {step === 0 && (
        <div className="center card">
          <h1 className="headline">Pepsi Challenge ⚡</h1>
          <p className="sub">Catch Pepsi cans &amp; avoid bombs. Can you beat the challenge?</p>
          <button className="btn primary" onClick={startGame}>Start Game</button>
        </div>
      )}

      {step === 1 && playing && (
        <>
          <div className="hud">⏱ {timeLeft}s</div>
          <div className="hud score">⭐ {score}</div>
          <div className="stage" aria-live="polite" aria-label="Game area">
            {targets.map((t) => (
              t.isBomb ? (
                <div
                  key={t.id}
                  className="target bomb"
                  style={{ top: t.top, left: t.left }}
                  onClick={() => handleClick(t)}
                >
                  <div className="bomb-icon">
                    💣
                  </div>
                </div>
              ) : (
                <img
                  key={t.id}
                  className="target"
                  src="https://panel.digitarmedia.com/admin/uploads/pepsiCan1756282734.png"
                  alt="Pepsi can"
                  style={{ top: t.top, left: t.left }}
                  onClick={() => handleClick(t)}
                />
              )
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <div className="center card">
          <h2 className="headline" style={{ fontSize: "2rem" }}>Game Over 🎮</h2>
          <p className="sub" style={{ marginBottom: 18 }}>Your Score: {score}</p>
          <div className="spacer" />
          <button className="btn primary" onClick={() => setStep(0)} style={{ marginRight: 10 }}>
            Try Again
          </button>
          <div
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
          >

          <a className="cta" href="https://www.pepsi.com" target="_blank" rel="noreferrer">
            <button className="btn success">Shop Pepsi Now</button>
          </a>
          </div>
        </div>
      )}
    </div>
  );
}
