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
import Link from "next/link";

interface MenuUserProps {
  name: string | undefined;
}

export default function MenuUser({ name }: MenuUserProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const currentUrl = window.location.pathname;

    setIsActive(currentUrl);
  }, [isActive]);

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
          <p>
            Olá, <span>{name}</span>
          </p>
          <Link
            href="/articles"
            data-active={isActive === "/articles" ? true : false}
          >
            Meus artigos
          </Link>
          <Link href="/new" data-active={isActive === "/new" ? true : false}>
            Publicar artigo
          </Link>

          <Link href="/login">Sair</Link>
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
              <Link href="/articles" onClick={closeMenu}>
                Meus Artigos
              </Link>
            </li>
            <li>
              <Link href="/new" onClick={closeMenu}>
                Publicar artigo
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={closeMenu}>
                Sair
              </Link>
            </li>
          </NavList>
        </NavMenu>
      </div>
    </HeaderArticles>
  );
}
