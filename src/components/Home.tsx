"use client";

import { ArticlesContainer } from "@/styles/pages/articles";
import { ArticleCard } from "@/components/ArticlesCard";
import MenuUser from "@/components/MenuUser";
import { useContext, useEffect } from "react";
import { UserValidLoginContext } from "@/contexts/UserValidLogin";
import { removeTokenUser } from "@/actions/removeToken";

export default function Articles() {
  const { userValid } = useContext(UserValidLoginContext);

  useEffect(() => {
    removeTokenUser();
  }, []);

  const name = userValid?.name.split(" ")[0];

  return (
    <>
      <MenuUser name={name} />
      <ArticlesContainer>
        <h3>Meus artigos</h3>
        <div>
          {userValid?.articles.length === 0 ? (
            <p style={{ fontSize: "0.875rem", color: "#8C8C8C" }}>
              Você ainda não publicou artigos...
            </p>
          ) : (
            userValid?.articles
              ?.slice()
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  path={article.fileUrl || ""}
                  description={article.description}
                  createdAt={article.createdAt}
                />
              ))
          )}
        </div>
      </ArticlesContainer>
    </>
  );
}
