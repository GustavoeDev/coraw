"use client";

import { ArticlesContainer } from "@/styles/pages/articles";
import { ArticleCard } from "@/components/ArticlesCard";
import MenuUser from "@/components/MenuUser";
import { useContext, useEffect } from "react";
import { UserValidLoginContext } from "@/contexts/UserValidLogin";
import { useRouter } from "next/navigation";
import nookies, { parseCookies } from "nookies";

export default function Articles() {
  const { userValid } = useContext(UserValidLoginContext);

  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;

    if (token !== "userTokenValue") {
      router.push("/login");
      nookies.destroy(null, "token", { path: "/" });
    }
  }, [router]);

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
            userValid?.articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
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
