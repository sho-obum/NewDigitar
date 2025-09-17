import React from "react";

const SocialPage: React.FC = () => {
  return (
    <div className="social-wrapper">
      <nav>
        <p className="sitename">CoolSite</p>
        <p className="menu">Services</p>
        <p className="menu">Pricing</p>
        <p className="menu">Features</p>
        <p className="menu">About us</p>
        <svg
          className="material-icons"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
        </svg>
      </nav>

      <div className="grid">
        <svg
          className="grid-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="982"
          height="786"
          viewBox="0 0 982 786"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M490 401V537H348.5V401H490ZM490 785.5V676H348.5V785.5H347.5V676H206V785.5H205V676H63.5V785.5H62.5V676H0V675H62.5V538H0V537H62.5V401H0V400H62.5V258H0V257H62.5V116H0V115H62.5V0H63.5V115L205 115V0H206V115L347.5 115V0H348.5V115H490V0H491V115L627.5 115V0H628.5V115H765V0H766V115L902.5 115V0H903.5V115H982V116H903.5V257H982V258H903.5V400H982V401H903.5V537H982V538H903.5V675H982V676H903.5V785.5H902.5V676H766V785.5H765V676H628.5V785.5H627.5V676H491V785.5H490ZM902.5 675V538H766V675H902.5ZM902.5 537V401H766V537H902.5ZM902.5 400V258H766V400H902.5ZM902.5 257V116L766 116V257H902.5ZM627.5 675H491V538H627.5V675ZM765 675H628.5V538H765V675ZM348.5 675H490V538H348.5V675ZM347.5 538V675H206V538H347.5ZM205 538V675H63.5V538H205ZM765 537V401H628.5V537H765ZM765 400V258H628.5V400H765ZM765 257V116H628.5V257H765ZM347.5 401V537H206V401H347.5ZM205 401V537H63.5V401H205ZM627.5 401V537H491V401H627.5ZM627.5 116L491 116V257H627.5V116ZM627.5 258H491V400H627.5V258ZM63.5 257V116L205 116V257H63.5ZM63.5 400V258H205V400H63.5ZM206 116V257H347.5V116L206 116ZM348.5 116V257H490V116H348.5ZM206 400V258H347.5V400H206ZM348.5 258V400H490V258H348.5Z"
            fill="url(#paint0_radial_1_8)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1_8"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(491 392.75) rotate(90) scale(513.25 679.989)"
            >
              <stop stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className="blur"></div>
      </div>

      <div className="title">
        <p>Powerful</p>
        <p>UI Design</p>
        <p>Tool</p>
      </div>

      <a href="#" className="button first">
        <button>View Source</button>
        <span></span>
      </a>
      <a href="#" className="button sec">
        <button>Watch Video</button>
        <span></span>
      </a>
      <a href="#" className="button third">
        <button>Connect</button>
        <span></span>
      </a>

      <style jsx>{`
        .social-wrapper {
          font-family: Arial, sans-serif; /* fallback font */
          background-color: hsl(0, 0%, 7%);
          color: hsl(0, 0%, 99%);
          padding: 0 10%;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        nav {
          display: flex;
          gap: 2rem;
          color: hsl(0, 0%, 60%);
          width: 100%;
          z-index: 9999;
        }

        .menu:hover {
          color: hsl(0, 0%, 99%);
          cursor: pointer;
        }

        .sitename {
          font-weight: bold;
        }

        .grid {
          position: absolute;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
        }

        .grid-svg {
          height: 80%;
          width: 80%;
        }

        .blur {
          height: 12rem;
          width: 12rem;
          background-color: hsl(155, 100%, 65%);
          filter: blur(100px);
          border-radius: 100px;
          position: absolute;
        }

        .title {
          font-size: 10rem;
          font-weight: 700;
          letter-spacing: -0.8rem;
          display: flex;
          flex-direction: column;
          position: absolute;
          justify-content: center;
          align-self: center;
          height: 100%;
          z-index: 1000;
        }

        .title > p {
          margin: 0;
          line-height: 10rem;
        }

        .title > p:nth-child(2) {
          color: hsl(155, 100%, 65%);
          align-self: flex-end;
        }

        .button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          height: 50px;
          width: 160px;
          z-index: 9999;
        }

        button {
          height: 50px;
          width: 160px;
          border: none;
          border-radius: 13px;
          background-color: hsla(155, 100%, 65%, 1%);
          color: hsl(155, 100%, 85%);
        }

        .button.first {
          top: 12%;
          right: 20%;
        }
        .button.sec {
          bottom: 13%;
          right: 11%;
        }
        .button.third {
          bottom: 25%;
          left: 15%;
        }

        @media screen and (max-width: 1000px) {
          .title {
            font-size: 4rem;
          }
          .title > p {
            line-height: 5rem;
            letter-spacing: -0.3rem;
          }
          nav > :not(.sitename, .material-icons) {
            display: none;
          }
          nav {
            justify-content: space-between;
          }
          .material-icons {
            display: flex;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialPage;
