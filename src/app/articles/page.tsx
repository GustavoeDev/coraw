import { ArticlesContainer } from "@/styles/pages/articles";

import { ArticleCard } from "@/components/ArticlesCard";
import MenuUser from "@/components/MenuUser";

export default function Articles() {
  return (
    <>
      <MenuUser />
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
