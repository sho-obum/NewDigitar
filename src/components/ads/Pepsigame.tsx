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
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const [playing, setPlaying] = useState<boolean>(false);
  const [targets, setTargets] = useState<Target[]>([]);
  const [isClickDisabled, setIsClickDisabled] = useState<boolean>(false);
  const [lastScoreUpdate, setLastScoreUpdate] = useState<number>(0);

  // Refs to track timers and prevent conflicts
  const gameTimerRef = React.useRef<number | null>(null);
  const targetUpdateTimeoutRef = React.useRef<number | null>(null);
  const isGameActiveRef = React.useRef<boolean>(false);

  // Cleanup function to clear all timers
  const cleanupTimers = React.useCallback(() => {
    if (gameTimerRef.current) {
      window.clearInterval(gameTimerRef.current);
      gameTimerRef.current = null;
    }
    if (targetUpdateTimeoutRef.current) {
      window.clearTimeout(targetUpdateTimeoutRef.current);
      targetUpdateTimeoutRef.current = null;
    }
  }, []);

  // Safe target update function that checks game state
  const updateTargetsIfPlaying = React.useCallback(() => {
    if (isGameActiveRef.current && playing) {
      setTargets(generateTargets());
    }
  }, [playing]);

  // Game timer effect
  useEffect(() => {
    cleanupTimers();
    isGameActiveRef.current = playing;

    if (playing && timeLeft > 0) {
      // Set initial targets immediately
      setTargets(generateTargets());
      
      // Start the main game timer
      gameTimerRef.current = window.setInterval(() => {
        setTimeLeft((currentTime) => {
          const newTime = currentTime - 1;
          
          if (newTime <= 0) {
            // Game over by time
            isGameActiveRef.current = false;
            setPlaying(false);
            setStep(2);
            cleanupTimers();
            return 0;
          }
          
          // Only update targets if game is still active
          if (isGameActiveRef.current) {
            // Clear any pending target updates to avoid conflicts
            if (targetUpdateTimeoutRef.current) {
              window.clearTimeout(targetUpdateTimeoutRef.current);
            }
            
            // Schedule target update with proper timing
            targetUpdateTimeoutRef.current = window.setTimeout(() => {
              updateTargetsIfPlaying();
            }, 100);
          }
          
          return newTime;
        });
      }, 1500);
    }

    return cleanupTimers;
  }, [playing, timeLeft, cleanupTimers, updateTargetsIfPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanupTimers;
  }, [cleanupTimers]);

  function startGame() {
    // Reset all states
    cleanupTimers();
    setStep(1);
    setScore(0);
    setTimeLeft(15);
    setLastScoreUpdate(0);
    isGameActiveRef.current = true;
    setPlaying(true);
  }

  function endGame() {
    isGameActiveRef.current = false;
    setPlaying(false);
    cleanupTimers();
    
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setStep(2);
      setTargets([]);
    }, 100);
  }

  function handleClick(target: Target) {
    // Prevent clicks if game is not active
    if (!playing || !isGameActiveRef.current) {
      return;
    }

    if (target.isBomb) {
      // Bomb clicks always work - end immediately
      endGame();
    } else {
      // Successful hit - no cooldown needed since there's only 1 can per round
      setScore((s) => {
        const newScore = s + 1;
        setLastScoreUpdate(Date.now());
        return newScore;
      });
      
      // Clear any pending target updates
      if (targetUpdateTimeoutRef.current) {
        window.clearTimeout(targetUpdateTimeoutRef.current);
      }
      
      // Generate new targets immediately
      targetUpdateTimeoutRef.current = window.setTimeout(() => {
        if (isGameActiveRef.current && playing) {
          setTargets(generateTargets());
        }
      }, 150);
    }
  }

  function generateTargets(): Target[] {
    const positions: Array<{top: number, left: number}> = [];
    const minDistance = 15; // Minimum distance between targets (in percentage)
    
    // Generate non-overlapping positions
    const generatePosition = (): {top: number, left: number} => {
      let attempts = 0;
      let position: {top: number, left: number};
      
      do {
        position = {
          top: Math.random() * 70 + 10,
          left: Math.random() * 70 + 10
        };
        attempts++;
      } while (
        attempts < 50 && 
        positions.some(pos => 
          Math.abs(pos.top - position.top) < minDistance && 
          Math.abs(pos.left - position.left) < minDistance
        )
      );
      
      return position;
    };

    const spots = Array.from({ length: 3 }, (_, i) => {
      const position = generatePosition();
      positions.push(position);
      
      return {
        id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 7)}`,
        top: `${position.top}%`,
        left: `${position.left}%`,
        isBomb: i !== 0, // Only the first target is a can (1 can, 2 bombs)
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
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 25%, #3b82f6 50%, #dc2626 75%, #1d4ed8 100%);
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
          color: #fff;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
          border-radius: 16px;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .center-tile-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          object-fit: contain;
          opacity: 0.1;
          z-index: 0;
          pointer-events: none;
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
          gap: 8px;
          padding: 12px 24px;
          border-radius: 16px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          position: relative;
          overflow: hidden;
        }
        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s;
        }
        .btn:hover::before {
          left: 100%;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4);
        }
        .btn:active { 
          transform: translateY(0) scale(0.98); 
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .btn.primary { 
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: #fff; 
        }
        .btn.primary:hover { 
          background: linear-gradient(135deg, #ff7979, #fd79a8);
        }
        .btn.success { 
          background: linear-gradient(135deg, #00b894, #00cec9);
          color: #fff; 
        }
        .btn.success:hover { 
          background: linear-gradient(135deg, #55efc4, #81ecec);
        }
        .discount-btn {
          background: linear-gradient(135deg, #ffd700, #ffb347) !important;
          color: #000 !important;
          font-size: 1rem !important;
          padding: 14px 28px !important;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.5) !important;
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .discount-btn:hover {
          background: linear-gradient(135deg, #ffed4e, #ffc048) !important;
          transform: translateY(-3px) scale(1.05);
        }
        .hud {
          position: absolute;
          top: 12px;
          left: 12px;
          font-weight: 700;
          font-size: 1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.4);
          background: rgba(0,0,0,0.2);
          padding: 8px 12px;
          border-radius: 20px;
          backdrop-filter: blur(4px);
          transition: all 0.3s ease;
        }
        .hud.score {
          left: auto;
          right: 12px;
          animation: score-pulse 0.3s ease;
        }
        .hud:hover {
          background: rgba(0,0,0,0.3);
          transform: scale(1.05);
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
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .target:hover {
          transform: translate(-50%, -50%) scale(0.95);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.6)) brightness(1.1);
        }
        .target:active {
          transform: translate(-50%, -50%) scale(0.7);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8)) brightness(1.2);
        }
        .target.bomb { 
          animation: pulse 1200ms ease-in-out infinite;
        }
        .target.disabled {
          pointer-events: none;
          opacity: 0.6;
          filter: grayscale(50%) drop-shadow(0 2px 4px rgba(0,0,0,0.3));
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
          background: linear-gradient(145deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 20px;
          padding: 24px 28px;
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.5);
        }
        .game-over-card {
          max-width: 400px;
          animation: slide-up 0.5s ease-out;
        }
        .discount-banner {
          background: linear-gradient(135deg, #ffd700, #ff6b35);
          border: 2px solid #fff;
          border-radius: 16px;
          padding: 16px 20px;
          margin: 16px 0;
          text-align: center;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
          animation: discount-bounce 1s ease-out;
          position: relative;
          overflow: hidden;
        }
        .discount-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shine 3s ease-in-out infinite;
        }
        .discount-text {
          font-size: 1.4rem;
          font-weight: 900;
          color: #000;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.8);
          letter-spacing: 1px;
        }
        .discount-code {
          font-size: 0.9rem;
          color: #333;
          font-weight: 600;
          margin-top: 4px;
        }
        .celebration {
          animation: celebrate 0.8s ease-out;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
        }
        .celebration-text {
          animation: fade-in-up 0.6s ease-out 0.2s both;
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
          0%,100% { transform: translate(-50%, -50%) scale(0.8); filter: drop-shadow(0 4px 8px rgba(255,50,50,0.5)) hue-rotate(0deg); }
          33% { transform: translate(-50%, -50%) scale(0.85); filter: drop-shadow(0 6px 12px rgba(255,100,100,0.7)) hue-rotate(20deg); }
          66% { transform: translate(-50%, -50%) scale(0.9); filter: drop-shadow(0 8px 16px rgba(255,0,0,0.8)) hue-rotate(-20deg); }
        }
        @keyframes score-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); background: rgba(34,197,94,0.3); }
          100% { transform: scale(1); }
        }
        @keyframes hit-effect {
          0% { transform: translate(-50%, -50%) scale(0.8); }
          50% { transform: translate(-50%, -50%) scale(1.2); filter: brightness(2) drop-shadow(0 0 20px rgba(34,197,94,0.8)); }
          100% { transform: translate(-50%, -50%) scale(0.8); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes discount-bounce {
          0% { opacity: 0; transform: scale(0.3) rotate(-10deg); }
          50% { transform: scale(1.1) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes shine {
          0% { transform: rotate(-45deg) translate(-100%, -100%); }
          50% { transform: rotate(-45deg) translate(0%, 0%); }
          100% { transform: rotate(-45deg) translate(100%, 100%); }
        }
        @keyframes celebrate {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-2deg); }
          50% { transform: scale(1.2) rotate(2deg); }
          75% { transform: scale(1.1) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.5), 0 0 0 rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.7), 0 0 20px rgba(255, 215, 0, 0.6); }
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
          <p className="sub">
            Find the Pepsi can &amp; avoid the bombs! 15 seconds to score big!
          </p>
          <button className="btn primary" onClick={startGame}>
            Start Game
          </button>
        </div>
      )}

      {step === 1 && playing && (
        <>
          <div className="hud">⏱ {timeLeft}s</div>
          <div 
            className="hud score" 
            key={lastScoreUpdate}
            style={{ 
              animation: lastScoreUpdate > 0 ? 'score-pulse 0.4s ease' : 'none' 
            }}
          >
            ⭐ {score}
          </div>
          <div className="stage" aria-live="polite" aria-label="Game area">
            {targets.map((t) =>
              t.isBomb ? (
                <div
                  key={t.id}
                  className="target bomb"
                  style={{ 
                    top: t.top, 
                    left: t.left
                  }}
                  onClick={() => handleClick(t)}
                >
                  <div className="bomb-icon">💣</div>
                </div>
              ) : (
                <img
                  key={t.id}
                  className="target"
                  src="https://panel.digitarmedia.com/admin/uploads/pepsiCan1756282734.png"
                  alt="Pepsi can"
                  style={{ 
                    top: t.top, 
                    left: t.left
                  }}
                  onClick={() => handleClick(t)}
                />
              )
            )}
          </div>
        </>
      )}

      {step === 2 && (
        <div className="center card game-over-card">
          {score >= 10 ? (
            <>
              <h2 className="headline celebration" style={{ fontSize: "2rem", color: "#ffd700" }}>
                 CONGRATULATIONS! 
              </h2>
              <p className="sub celebration-text" style={{ marginBottom: 18, fontSize: "1rem" }}>
                Amazing! You scored {score} points!<br/>
                <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                  You get 10% OFF on your order!
                </span>
              </p>
              <div className="discount-banner">
                <div className="discount-text">Use Code: PEPSI10</div>
                {/* <div className="discount-code">Use code: PEPSI10</div> */}
              </div>
              <div className="spacer" />
           
              <button
                className="btn primary"
                onClick={() => {
                  cleanupTimers();
                  setStep(0);
                  setTargets([]);
                  setLastScoreUpdate(0);
                  isGameActiveRef.current = false;
                }}
                style={{ marginTop: 10 }}
              >
                Play Again
              </button>
            </>
          ) : (
            <>
              <h2 className="headline" style={{ fontSize: "2rem" }}>
                Game Over 🎮
              </h2>
              <p className="sub" style={{ marginBottom: 18 }}>
                Your Score: {score}
                {score >= 5 && score < 10 && (
                  <>
                    <br/>
                    <span style={{ color: "#fbbf24" }}>
                      So close! Get 10 points for a special discount!
                    </span>
                  </>
                )}
              </p>
              <div className="spacer" />
              <button
                className="btn primary"
                onClick={() => {
                  cleanupTimers();
                  setStep(0);
                  setTargets([]);
                  setLastScoreUpdate(0);
                  isGameActiveRef.current = false;
                }}
                style={{ marginRight: 10 }}
              >
                Try Again
              </button>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                <a
                  className="cta"
                  href="https://www.pepsi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn success">Shop Pepsi Now</button>
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
