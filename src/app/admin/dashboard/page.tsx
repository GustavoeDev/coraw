import Header from "@/components/Header";
import {
  ArticlesTable,
  ArticlesWrapper,
  DashboardContainer,
  DashboardInfo,
  UsersTable,
} from "@/styles/pages/dashboard";
import { BiTrash } from "react-icons/bi";
import {
  MdCreate,
  MdInsertDriveFile,
  MdOutlinePeopleOutline,
  MdOutlineVisibility,
} from "react-icons/md";

export default function Dashboard() {
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
              <strong>2134</strong>
            </span>
          </div>
          <div>
            <p>Quantidade de inscritos</p>
            <span>
              <MdOutlinePeopleOutline size={36} />
              <strong>12000</strong>
            </span>
          </div>
        </DashboardInfo>
        <h4>Tabela de artigos</h4>
        <ArticlesWrapper>
          <ArticlesTable>
            <tbody>
              <tr>
                <td width="45%">O impacto do ‘coral bleaching’ nos oceanos</td>
                <td width="25%">Karina Marina Cristina</td>
                <td>07/11/2024</td>
                <td>
                  <span>
                    <MdOutlineVisibility size={16} />
                  </span>
                  <span>
                    <MdCreate size={16} />
                  </span>
                  <span>
                    <BiTrash color="#FF1313" size={16} />
                  </span>
                </td>
              </tr>
            </tbody>
          </ArticlesTable>
          <h4>Tabela de usuários</h4>
          <UsersTable>
            <tbody>
              <tr>
                <td width="45%">Karina Marina Cristina</td>
                <td>20 artigos</td>
                <td>
                  <span>
                    <MdOutlineVisibility size={16} />
                  </span>
                  <span>
                    <MdCreate size={16} />
                  </span>
                  <span>
                    <BiTrash color="#FF1313" size={16} />
                  </span>
                </td>
              </tr>
            </tbody>
          </UsersTable>
        </ArticlesWrapper>
      </DashboardContainer>
    </>
  );
}
