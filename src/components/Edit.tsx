"use client";

import Header from "@/components/Header";
import { Article, UserValidLoginContext } from "@/contexts/UserValidLogin";
import { usersApi } from "@/lib/axios";
import {
  ArticleEditContainer,
  ContainerEdit,
  EditForm,
  FileEdit,
  FileSelectEdit,
} from "@/styles/pages/edit";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";

export default function ArticleEdit() {
  const { articleClicked, userClicked } = useContext(UserValidLoginContext);

  const [articleTitle, setArticleTitle] = useState(articleClicked?.title || "");
  const [articleDescription, setArticleDescription] = useState(
    articleClicked?.description || ""
  );

  async function handleChangeInfoArticle(event: React.FormEvent) {
    event.preventDefault();

    const updatedArticle: Article = {
      title: articleTitle,
      description: articleDescription,
      fileUpload: articleClicked?.fileUpload,
      fileUrl: articleClicked?.fileUrl,
      createdAt: articleClicked?.createdAt || new Date(),
    };

    const response = await usersApi.get(`/users/${userClicked}`);
    const userData = response.data;

    const updatedArticles = response.data.articles.map((article: Article) =>
      article.createdAt === articleClicked?.createdAt ? updatedArticle : article
    );

    if (updatedArticles) {
      await usersApi.put(`users/${userClicked}`, {
        ...userData,
        articles: updatedArticles,
      });
    }

    redirect("/admin/dashboard");
  }

  return (
    <>
      <Header />
      <ArticleEditContainer>
        <EditForm action="" onSubmit={handleChangeInfoArticle}>
          <h3>Editar as informações do artigo</h3>
          <div>
            <label htmlFor="">
              Título <strong>*</strong>
            </label>
            <input
              type="text"
              value={articleTitle}
              onChange={(event) => setArticleTitle(event.target.value || "")}
            />
          </div>
          <div>
            <label htmlFor="">
              Descrição <strong>*</strong>
            </label>
            <textarea
              name=""
              id=""
              value={articleDescription}
              onChange={(event) => setArticleDescription(event.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileUpload">Artigo</label>
            <ContainerEdit href={articleClicked?.fileUrl} target="_blank">
              <FileSelectEdit>
                <span>
                  {articleClicked?.fileUrl && articleClicked.fileUrl.length > 45
                    ? articleClicked.fileUrl.slice(0, 45) + "..."
                    : articleClicked?.fileUrl}
                </span>
              </FileSelectEdit>
              <FileEdit>Download</FileEdit>
            </ContainerEdit>
            <p>O artigo não pode ser alterado, apenas fazer o download!</p>
          </div>
          <button type="submit">Confirmar alterações</button>
        </EditForm>
      </ArticleEditContainer>
    </>
  );
}
