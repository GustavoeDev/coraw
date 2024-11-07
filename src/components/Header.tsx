import { HeaderContainer } from "@/styles/components/Header";
import Image from "next/image";

import logoCoraw from "../assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={logoCoraw} alt="Logo do Coraw" />
    </HeaderContainer>
  );
}
