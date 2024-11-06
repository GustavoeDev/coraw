import {
  ArticlesContainer,
  HeaderArticles,
  HeaderNavigation,
} from "@/styles/pages/articles";

import Image from "next/image";

import logoCoraw from "../../assets/logo.svg";
import { ArticleCard } from "@/components/ArticlesCard";
import MenuHamburguer from "@/components/MenuHamburguerUser";

export default function Articles() {
  return (
    <>
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
          <MenuHamburguer />
        </div>
      </HeaderArticles>
      <ArticlesContainer>
        <h3>Meus artigos</h3>
        <div>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </ArticlesContainer>
    </>
  );
}
