"use client";

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
}

export default function RemoveDashboardButtonUsers({
  userId,
}: RemoveDashboardButtonUsersProps) {
  async function removeUser() {
    if (userId === null) {
      return;
    }

    await usersApi.delete(`/users/${userId}`);
    window.location.reload();
  }

  return (
    <Portal>
      <Overlay />

      <Content>
        <Title>Deseja realmente excluir este usuário?</Title>

        <CloseButton>
          <MdClose size={26} />
        </CloseButton>

        <div>
          <button onClick={removeUser}>
            <BiTrash size={18} />
            <span>Excluir</span>
          </button>
        </div>
      </Content>
    </Portal>
  );
}
