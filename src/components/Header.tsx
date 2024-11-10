import { HeaderContainer } from "@/styles/components/Header";
import Image from "next/image";

import logoCoraw from "../assets/logo.svg";
import Link from "next/link";

interface HeaderProps {
  variant: "dashboard" | "normal";
}

export default function Header({ variant }: HeaderProps) {
  return (
    <>
      {variant === "normal" && (
        <HeaderContainer>
          <div>
            <Image src={logoCoraw} alt="Logo do Coraw" />
          </div>
        </HeaderContainer>
      )}

      {variant === "dashboard" && (
        <HeaderContainer>
          <div>
            <Image src={logoCoraw} alt="Logo do Coraw" />
            <Link href="/login">Sair</Link>
          </div>
        </HeaderContainer>
      )}
    </>
  );
}
