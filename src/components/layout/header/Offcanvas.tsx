import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
}

const Offcanvas = ({ openNav, setOpenNav }: HeaderProps) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " nav__dropdown-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " navbar__item-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  return (
    <div className="offcanvas-nav">
      <div
        className={"offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")}
      >
        <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
          <div className="offcanvas-menu__header nav-fade">
            <div className="logo">
              <Link href="/">
                <Image src={logo} alt="Image" title="Image" priority />
              </Link>
            </div>
            <button
              aria-label="close offcanvas menu"
              className="close-offcanvas-menu"
              onClick={closeNav}
            >
              <i className="fa-light fa-xmark-large"></i>
            </button>
          </div>
          <div className="offcanvas-menu__list">
            <div className="navbar__menu">
              <ul>
                <li className="navbar__item nav-fade">
                  <Link href="/">Home</Link>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "company"
                    )}`}
                    onClick={() => handleSubmenu("company")}
                  >
                    Company
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("company")}`}>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/life-at-digitar">Life @ Digitar</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "products"
                    )}`}
                    onClick={() => handleSubmenu("products")}
                  >
                    Products
                  </button>
                  <ul className={`navbar__sub-menu ${isSubMenuOpen("products")}`}>
                    <li>
                      <Link href="/services/programmatic">Adxity - DSP</Link>
                    </li>
                    <li>
                      <Link href="/services/branding">Adpocket</Link>
                    </li>
                    <li>
                      <Link href="/services/storytelling">Yogza</Link>
                    </li>
                    <li>
                      <Link href="/services/performance">Lending Leaf</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item navbar__item--has-children nav-fade">
                  <button
                    aria-label="dropdown menu"
                    className={`navbar__dropdown-label ${isSubMenuButton(
                      "services"
                    )}`}
                    onClick={() => handleSubmenu("services")}
                  >
                    Services
                  </button>
                  <ul
                    className={`navbar__sub-menu ${isSubMenuOpen("services")}`}
                  >
                    <li>
                      <Link href="/services/performance">Performance</Link>
                    </li>
                    <li>
                      <Link href="/services/social">Social</Link>
                    </li>
                    <li>
                      <Link href="/services/branding">Branding</Link>
                    </li>
                    <li>
                      <Link href="/services/influencer">Influencer</Link>
                    </li>
                    <li>
                      <Link href="/services/creative">Creative</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar__item nav-fade">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="offcanvas-menu__options nav-fade">
            <div className="offcanvas__mobile-options d-flex">
              <Link href="/" className="btn btn--secondary">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
          <div className="offcanvas-menu__social social nav-fade">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              aria-label="share us on facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="https://www.twitter.com/"
              target="_blank"
              aria-label="share us on twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              aria-label="share us on pinterest"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              aria-label="share us on instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Offcanvas;
