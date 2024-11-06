"use client";

import {
  NavIcon,
  NavList,
  NavMenu,
} from "@/styles/components/MenuHamburguerUser";

import { useEffect, useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export default function MenuHamburguer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleResize() {
    if (window.innerWidth > 900) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavIcon onClick={toggleMenu} position={isMenuOpen ? "fixed" : undefined}>
        {isMenuOpen ? <MdOutlineClose size={36} /> : <MdMenu size={36} />}
      </NavIcon>

      <NavMenu active={isMenuOpen}>
        <NavList active={isMenuOpen}>
          <li>
            <a href="#" onClick={closeMenu}>
              Meus Artigos
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Publicar artigo
            </a>
          </li>
        </NavList>
      </NavMenu>
    </>
  );
}
