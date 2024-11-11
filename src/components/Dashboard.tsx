"use client";

import Header from "@/components/Header";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Article,
  UserValid,
  UserValidLoginContext,
} from "@/contexts/UserValidLogin";
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
import { useContext, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import {
  MdCreate,
  MdDownload,
  MdInsertDriveFile,
  MdOutlinePeopleOutline,
} from "react-icons/md";

import RemoveDashboardButtonArticles from "./RemoveDashboardButtonArticles";
import RemoveDashboardButtonUsers from "./RemoveDashboardButtonUsers";
import { redirect } from "next/navigation";
import { removeTokenAdmin } from "@/actions/removeToken";

export default function Dashboard() {
  const [users, setUsers] = useState<UserValid[]>([]);
  const [quantityArticles, setQuantityArticles] = useState(0);

  const { userClicked, updateUserClicked, updateArticleClicked } = useContext(
    UserValidLoginContext
  );

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

  function handleChangeInfoClicked(article: Article, user: number) {
    updateArticleClicked(article);
    updateUserClicked(user);
    redirect("/admin/article/edit");
  }

  useEffect(() => {
    removeTokenAdmin();
  }, []);

  return (
    <>
      <Header variant="dashboard" />
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
                {users.some((user) => user.articles.length > 0) ? (
                  users.map((user) =>
                    user.articles.map((article, index) => (
                      <tr key={index}>
                        <td width="45%">{article.title}</td>
                        <td width="25%">{user.name}</td>
                        <td>
                          {dateFormatter.format(new Date(article.createdAt))}
                        </td>
                        <TdButton>
                          <button>
                            <a href={article.fileUrl} target="_blank">
                              <MdDownload size={16} />
                            </a>
                          </button>
                          <button
                            onClick={() =>
                              handleChangeInfoClicked(article, user.id)
                            }
                          >
                            <MdCreate size={16} />
                          </button>

                          <Dialog.Root>
                            <Dialog.Trigger asChild>
                              <button
                                onClick={() => updateUserClicked(user.id)}
                              >
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
                    ))
                  )
                ) : (
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      Não tem artigos cadastrados
                    </td>
                  </tr>
                )}
              </tbody>
            </ArticlesTable>
          </TableContainer>
          <h4>Tabela de usuários</h4>
          <TableContainer>
            <UsersTable>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td width="45%">{user.name}</td>
                        <td>{user.articles.length} artigos</td>
                        <TdButton>
                          <Dialog.Root>
                            <Dialog.Trigger asChild>
                              <button
                                onClick={() => updateUserClicked(user.id)}
                              >
                                <BiTrash color="#FF1313" size={16} />
                              </button>
                            </Dialog.Trigger>

                            <RemoveDashboardButtonUsers userId={userClicked} />
                          </Dialog.Root>
                        </TdButton>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      Não tem usuários cadastrados
                    </td>
                  </tr>
                )}
              </tbody>
            </UsersTable>
          </TableContainer>
        </div>
      </DashboardContainer>
    </>
  );
}
