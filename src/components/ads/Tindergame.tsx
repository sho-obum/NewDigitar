import React, { useCallback, useMemo, useRef, useState } from "react";

type CardData = {
  id: string;
  title: string;
  subtitle: string;
  bgImage: string; // used as CSS background-image
};

type Props = {
  ctaHref?: string;
  ctaText?: string;
  finalHeadline?: string;
  finalSubcopy?: string;
  cards?: CardData[]; // if omitted, defaults supplied below
};

export default function TinderMiniGameAdModal({
  ctaHref = "https://tinder.com/",
  ctaText = "Install Tinder",
  finalHeadline = "3 swipes to spark something",
  finalSubcopy = "Match. Chat. Meet. Repeat.",
  cards,
}: Props) {
  const defaultCards: CardData[] = useMemo(
    () => [
      {
        id: "c1",
        title: "Avery, 24",
        subtitle: "Runner • Matcha addict",
        bgImage:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "c2",
        title: "Jordan, 27",
        subtitle: "Designer • Plant parent",
        bgImage:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1600&auto=format&fit=crop",
      },
      {
        id: "c3",
        title: "Riley, 23",
        subtitle: "Foodie • Vinyl collector",
        bgImage:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop",
      },
    ],
    []
  );

  const deck = (cards && cards.length ? cards.slice(0, 3) : defaultCards).map(
    (c, i) => ({ ...c, index: i })
  );

  const [activeCards, setActiveCards] = useState(deck);
  const [done, setDone] = useState(false);

  // drag state
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const startTimeRef = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    if (!el.dataset.top) return;
    draggingRef.current = true;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    currentXRef.current = 0;
    currentYRef.current = 0;
    startTimeRef.current = Date.now();
    el.setPointerCapture(e.pointerId);
    el.classList.add("moving");
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;
    currentXRef.current = dx;
    currentYRef.current = dy;

    const el = e.currentTarget as HTMLElement;
    const rotate = dx * 0.03 * (dy / 80);
    el.style.transform = `translate(${dx}px, ${dy}px) rotate(${rotate}deg)`;

    const container = el.closest(".tinder-modal");
    if (container) {
      container.classList.toggle("tinder_love", dx > 0);
      container.classList.toggle("tinder_nope", dx < 0);
    }
  }, []);

  const resetTopCardTransform = (el: HTMLElement) => {
    el.style.transform = "";
    el.classList.remove("moving");
    const container = el.closest(".tinder-modal");
    if (container) {
      container.classList.remove("tinder_love");
      container.classList.remove("tinder_nope");
    }
  };

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    const el = e.currentTarget as HTMLElement;
    const dx = currentXRef.current;
    const dy = currentYRef.current;
    const elapsed = Math.max(1, Date.now() - startTimeRef.current);
    const vx = dx / elapsed;

    const isMobile = window.innerWidth < 768;
    const SWIPE_DISTANCE = isMobile ? 40 : 110;
    const SWIPE_VELOCITY = 0.15;

    const shouldSwipe =
      Math.abs(dx) > SWIPE_DISTANCE || Math.abs(vx) > SWIPE_VELOCITY;

    if (!shouldSwipe) {
     
      el.style.transition = "transform 0.2s ease";
      el.style.transform = "translate(0px, 0px) rotate(0deg)";
      setTimeout(() => {
        el.style.transition = ""; 
      }, 200);
      resetTopCardTransform(el);
      return;
    }

    const moveOutWidth = (el.ownerDocument?.body?.clientWidth || 800) * 1.2;
    const toX = dx > 0 ? moveOutWidth : -moveOutWidth;
    const toY = dy + Math.abs(vx) * moveOutWidth * 0.5 * (dy > 0 ? 1 : -1);
    const rotate = dx * 0.03 * (dy / 80);
    el.style.transform = `translate(${toX}px, ${toY}px) rotate(${rotate}deg)`;

    window.setTimeout(() => {
      setActiveCards((prev) => {
        const next = prev.slice(1);
        if (!next.length) setDone(true);
        return next;
      });
      resetTopCardTransform(el);
    }, 180);
  }, []);

  const clickNope = () => {
    const el = document.querySelector<HTMLElement>(
      ".tinder-card[data-top='true']"
    );
    if (!el) return;
    el.style.transform = `translate(${-800}px, -100px) rotate(30deg)`;
    window.setTimeout(() => {
      setActiveCards((prev) => {
        const next = prev.slice(1);
        if (!next.length) setDone(true);
        return next;
      });
    }, 160);
  };

  const clickLove = () => {
    const el = document.querySelector<HTMLElement>(
      ".tinder-card[data-top='true']"
    );
    if (!el) return;
    el.style.transform = `translate(${800}px, -100px) rotate(-30deg)`;
    window.setTimeout(() => {
      setActiveCards((prev) => {
        const next = prev.slice(1);
        if (!next.length) setDone(true);
        return next;
      });
    }, 160);
  };

  return (
    <div className="tinder-modal">
      <style>{`
        .tinder-modal{
          /* fill parent (let your modal wrapper set size) */
          width:100%; height:100%;
          position:relative; box-sizing:border-box;
          border-radius:16px; overflow:hidden;
          background: #fff; /* ✅ Light mode background */
          color: #111; /* ✅ Dark text */
          display:flex; flex-direction:column; padding:14px;
        }

        .header{
          display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:6px;
        }
        .logo{
          display:inline-flex; align-items:center; gap:8px; opacity:.95;
        }
        .flame{ width:22px; height:22px; }
        .logo b{ font-weight:800; letter-spacing:.2px; }

        .status{
          position:absolute; top:50%; left:0; right:0; transform:translateY(-50%);
          text-align:center; pointer-events:none; z-index:6;
        }
        .status .icon{ position:absolute; left:50%; margin-left:-50px; width:100px; font-size:88px; line-height:1; opacity:0; transform:scale(.4); transition:all .18s ease; }
        .status .heart{ color: #ff4458; }
        .status .nope{ color: #888; }
        .tinder_love .status .heart{ opacity:.85; transform:scale(1); }
        .tinder_nope .status .nope{ opacity:.85; transform:scale(1); }

        .stack{
          position:relative; flex:1 1 auto; min-height:80%;
          display:flex; align-items:flex-start; justify-content:center;
          padding:6px 0 10px;
        }

        .tinder-card{
          position:absolute; width:min(92%, 460px);
          height: min(76%, 480px); /* Reduced height */
          border-radius:16px; overflow:hidden; will-change:transform;
          transition:transform .25s ease;
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.08);
          cursor: grab; display:flex; flex-direction:column;
          width: 70%;
        }
        .tinder-card.moving{ transition:none; cursor:grabbing; }

        /* Background image layer */
        .card-bg{
          position:absolute; inset:0;
          background-size:cover; 
          background-position:top center; /* Changed to top center */
          filter: saturate(1.05) contrast(1.03);
          transform: scale(1.02);
        }
        /* Gradient overlay for text legibility */
        .card-shade{
          position:absolute; inset:0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 255, 255, 0.6) 70%,
            rgba(255, 255, 255, 0.8) 100%
          ); /* ✅ White overlay instead of dark */
        }

        /* Foreground meta panel */
        .meta{
          position:absolute; left:0; right:0; bottom:0;
          padding:14px 14px 16px;
          display:flex; flex-direction:column; gap:4px;
          line-height: normal;
        }
        .title{ 
          font-weight:900; 
          font-size:20px; 
          letter-spacing:.2px;
          color: #111;
        }
        .subtitle{ 
          font-size:13px;
          color: #555;
        }

        /* depth for lower cards */
        .shadow-1{ transform: scale(.985) translateY(-12px); opacity:.9; }
        .shadow-2{ transform: scale(.97) translateY(-22px); opacity:.8; }

        /* Controls */
        .controls{
          display:flex; align-items:center; justify-content:center; gap:14px; padding-top:6px;
        }
        .btn{
          width:50px; height:50px; border-radius:999px; border:0; background:#fff; color:#111;
          display:inline-grid; place-items:center; font-weight:900;
          box-shadow: 0 10px 24px rgba(0,0,0,.28);
          transition: transform .12s ease, filter .12s ease;
          cursor:pointer;
        }
        .btn:hover{ filter:brightness(1.05) } .btn:active{ transform:translateY(1px) }

        /* Completion */
        .done{
          flex:1; display:grid; place-items:center; text-align:center; padding:10px;
        }
        .done h3{ font-size:22px; margin:6px 0 6px; }
        .done p{ opacity:.9; font-size:13px; margin:0 0 14px; }
        .install{
          border:0; border-radius:12px; padding:10px 14px; font-weight:800; cursor:pointer;
          background: linear-gradient(90deg, #ff4458, #ff7758);
          color: #fff;
          box-shadow: 0 12px 26px rgba(0,0,0,.28);
        }

        /* Tiny helper text */
        .hint{ text-align:center; font-size:11px; opacity:.7; padding-top:6px; }
      `}</style>

      {/* Header with Tinder logo */}
      <div className="header">
        <div className="logo" aria-label="Tinder">
          <svg className="flame" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12.7 2.3c.5 3.2-1 4.6-2.7 6.5-1.6 1.9-3.3 4-.3 6.6 0-2.3 1.8-3.2 3.2-4.5 1.4-1.3 2.2-3 1.7-5.7 2.8 2.2 5.1 5.2 5.1 8.9 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-5.1 4-8.2 8-11.8z"
              fill="#ff4458"
            />
          </svg>
          <b>Tinder</b>
        </div>
      </div>

      {/* Status pulse */}
      <div className="status" aria-hidden>
        <div className="icon heart">♥</div>
        <div className="icon nope">✕</div>
      </div>

      {/* Stack or completion */}
      {!done ? (
        <>
          <div className="stack" aria-live="polite">
            {activeCards.slice(0, 3).map((card, i) => {
              const isTop = i === 0;
              const cls =
                "tinder-card " +
                (isTop ? "" : i === 1 ? "shadow-1" : "shadow-2");
              return (
                <div
                  key={card.id}
                  className={cls}
                  data-top={isTop ? "true" : undefined}
                  style={{ zIndex: 100 - i }}
                  onPointerDown={isTop ? onPointerDown : undefined}
                  onPointerMove={isTop ? onPointerMove : undefined}
                  onPointerUp={isTop ? onPointerUp : undefined}
                >
                  <div
                    className="card-bg"
                    style={{ backgroundImage: `url(${card.bgImage})` }}
                    aria-hidden
                  />
                  <div className="card-shade" aria-hidden />
                  <div className="meta">
                    <div className="title">{card.title}</div>
                    <div className="subtitle">{card.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <div className="controls" aria-hidden={activeCards.length === 0}>
            <button className="btn" onClick={clickNope} aria-label="Nope">✕</button>
            <button className="btn" onClick={clickLove} aria-label="Like">♥</button>
          </div> */}

          <div className="hint">Swipe cards left or right</div>
        </>
      ) : (
        <div className="done">
          <div>
            <div
              className="logo"
              style={{ justifyContent: "center", marginBottom: 6 }}
            >
              <svg className="flame" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12.7 2.3c.5 3.2-1 4.6-2.7 6.5-1.6 1.9-3.3 4-.3 6.6 0-2.3 1.8-3.2 3.2-4.5 1.4-1.3 2.2-3 1.7-5.7 2.8 2.2 5.1 5.2 5.1 8.9 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-5.1 4-8.2 8-11.8z"
                  fill="#ff4458"
                />
              </svg>
              <b>Tinder</b>
            </div>
            <h3 className="text-black">{finalHeadline}</h3>
            <p className="text-black">{finalSubcopy}</p>
            <a href={ctaHref} target="_blank" rel="noreferrer">
              <button className="install">{ctaText}</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
