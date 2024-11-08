"use client";

import { ArticlesContainer } from "@/styles/pages/articles";
import { ArticleCard } from "@/components/ArticlesCard";
import MenuUser from "@/components/MenuUser";
import { useContext } from "react";
import { UserValidLoginContext } from "@/contexts/UserValidLogin";

export default function Articles() {
  const { userValid } = useContext(UserValidLoginContext);

  const name = userValid?.name.split(" ")[0];

  return (
    <>
      <MenuUser name={name} />
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
