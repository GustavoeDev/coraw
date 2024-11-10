"use client";

import { Article } from "@/contexts/UserValidLogin";
import { usersApi } from "@/lib/axios";
import {
  CloseButton,
  Content,
  Overlay,
  Portal,
  Title,
} from "@/styles/components/RemoveDashboardButton";
import { BiTrash } from "react-icons/bi";
import { MdClose } from "react-icons/md";

interface RemoveDashboardButtonUsersProps {
  userId: number | null;
  articleData: Article;
}

export default function RemoveDashboardButtonArticles({
  userId,
  articleData,
}: RemoveDashboardButtonUsersProps) {
  async function removeArticle() {
    if (userId === null) {
      return;
    }

    const response = await usersApi.get(`/users/${userId}`);
    const data = response.data;

    const updatedArticles = data.articles.filter(
      (article: Article) => article.title !== articleData.title
    );

    if (updatedArticles) {
      await usersApi.patch(`/users/${userId}`, { articles: updatedArticles });
      window.location.reload();
    }
  }

  return (
    <Portal>
      <Overlay />

      <Content>
        <Title>Deseja realmente excluir este artigo?</Title>

        <CloseButton>
          <MdClose size={26} />
        </CloseButton>

        <div>
          <button onClick={removeArticle}>
            <BiTrash size={18} />
            <span>Excluir</span>
          </button>
        </div>
      </Content>
    </Portal>
  );
}
