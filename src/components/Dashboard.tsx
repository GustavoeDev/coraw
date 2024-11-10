"use client";

import Header from "@/components/Header";
import * as Dialog from "@radix-ui/react-dialog";
import { UserValid } from "@/contexts/UserValidLogin";
import { usersApi } from "@/lib/axios";
import {
  ArticlesTable,
  DashboardContainer,
  DashboardInfo,
  TableContainer,
  TdButton,
  UsersTable,
} from "@/styles/pages/dashboard";
import { dateFormatter } from "@/utils/dateFormatter";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import {
  MdCreate,
  MdInsertDriveFile,
  MdOutlinePeopleOutline,
  MdOutlineVisibility,
} from "react-icons/md";

import RemoveDashboardButtonArticles from "./RemoveDashboardButtonArticles";
import RemoveDashboardButtonUsers from "./RemoveDashboardButtonUsers";

export default function Dashboard() {
  const [users, setUsers] = useState<UserValid[]>([]);
  const [quantityArticles, setQuantityArticles] = useState(0);
  const [userClicked, setUserClicked] = useState(0);

  async function getUsers() {
    const response = await usersApi.get("/users");
    const data = response.data;

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setQuantityArticles(
      users.reduce((acc, user) => acc + user.articles.length, 0)
    );
  }, [users]);

  return (
    <>
      <Header />
      <DashboardContainer>
        <h3>Dashboard</h3>
        <DashboardInfo>
          <div>
            <p>Quantidade de artigos</p>
            <span>
              <MdInsertDriveFile size={32} />
              <strong>{quantityArticles}</strong>
            </span>
          </div>
          <div>
            <p>Quantidade de inscritos</p>
            <span>
              <MdOutlinePeopleOutline size={36} />
              <strong>{users.length}</strong>
            </span>
          </div>
        </DashboardInfo>
        <h4>Tabela de artigos</h4>
        <div>
          <TableContainer>
            <ArticlesTable>
              <tbody>
                {users.map((user) => {
                  return user.articles.map((article, index) => (
                    <tr key={index}>
                      <td width="45%">{article.title}</td>
                      <td width="25%">{user.name}</td>
                      <td>
                        {dateFormatter.format(new Date(article.createdAt))}
                      </td>
                      <TdButton>
                        <button>
                          <MdOutlineVisibility size={16} />
                        </button>
                        <button>
                          <MdCreate size={16} />
                        </button>

                        <Dialog.Root>
                          <Dialog.Trigger asChild>
                            <button onClick={() => setUserClicked(user.id)}>
                              <BiTrash color="#FF1313" size={16} />
                            </button>
                          </Dialog.Trigger>

                          <RemoveDashboardButtonArticles
                            userId={userClicked}
                            articleData={article}
                          />
                        </Dialog.Root>
                      </TdButton>
                    </tr>
                  ));
                })}
              </tbody>
            </ArticlesTable>
          </TableContainer>
          <h4>Tabela de usuários</h4>
          <TableContainer>
            <UsersTable>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td width="45%">{user.name}</td>
                      <td>{user.articles.length} artigos</td>
                      <TdButton>
                        <button>
                          <MdOutlineVisibility size={16} />
                        </button>
                        <button>
                          <MdCreate size={16} />
                        </button>
                        <Dialog.Root>
                          <Dialog.Trigger asChild>
                            <button onClick={() => setUserClicked(user.id)}>
                              <BiTrash color="#FF1313" size={16} />
                            </button>
                          </Dialog.Trigger>

                          <RemoveDashboardButtonUsers userId={userClicked} />
                        </Dialog.Root>
                      </TdButton>
                    </tr>
                  );
                })}
              </tbody>
            </UsersTable>
          </TableContainer>
        </div>
      </DashboardContainer>
    </>
  );
}
