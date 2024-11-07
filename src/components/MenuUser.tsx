"use client";

import {
  HeaderArticles,
  HeaderNavigation,
  NavIcon,
  NavList,
  NavMenu,
} from "@/styles/components/MenuUser";

import Image from "next/image";
import logoCoraw from "../assets/logo.svg";

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
    <HeaderArticles>
      <div>
        <Image src={logoCoraw} alt="Logo do Coraw" />
        <HeaderNavigation>
          <a href="#" data-active={true}>
            Meus artigos
          </a>
          <a href="#" data-active={false}>
            Publicar artigo
          </a>
          <p>
            Olá, <span>Gustavo!</span>
          </p>
        </HeaderNavigation>
        <NavIcon
          onClick={toggleMenu}
          position={isMenuOpen ? "fixed" : undefined}
        >
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
      </div>
    </HeaderArticles>
  );
}
