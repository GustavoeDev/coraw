import Header from "@/components/Header";
import {
  RegistrationContainer,
  RegistrationContent,
  RegistrationIcons,
  RegistrationModal,
  RegistrationModalInputs,
  RegistrationTerms,
} from "@/styles/pages/home";
import Link from "next/link";

import {
  MdCalendarMonth,
  MdLocationOn,
  MdOutlineTimer,
  MdPeopleAlt,
} from "react-icons/md";

export const metadata = {
  title: "Login | Coraw",
  description: "Esta é a página de Inscrição do Coraw",
};
export default function Home() {
  return (
    <>
      <Header />
      <RegistrationContainer>
        <RegistrationContent>
          <h1>Coraw</h1>
          <p>
            Descubra os impactos devastadores do branqueamento de corais e saiba
            como você pode fazer a diferença. Participe do nosso evento e ajude
            a preservar os recifes de coral, um tesouro marinho em perigo.
          </p>
          <RegistrationIcons>
            <div>
              <MdPeopleAlt size={22} />
              <span>Qualquer um pode participar</span>
            </div>
            <div>
              <MdOutlineTimer size={22} />
              <span>13:30 até 16:30</span>
            </div>
            <div>
              <MdLocationOn size={22} />
              <span>Remoto</span>
            </div>
            <div>
              <MdCalendarMonth size={22} />
              <span>20/12/2024</span>
            </div>
          </RegistrationIcons>
        </RegistrationContent>
        <RegistrationModal>
          <h3>Complete seu cadastro</h3>
          <RegistrationModalInputs>
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Gustavo Emanuel"
            />
          </RegistrationModalInputs>
          <RegistrationModalInputs>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="coraw@exemplo.com"
            />
          </RegistrationModalInputs>
          <RegistrationModalInputs>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="digite sua senha"
            />
          </RegistrationModalInputs>
          <RegistrationTerms>
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label htmlFor="terms">
              Concordo com os termos de licença do evento.
            </label>
          </RegistrationTerms>

          <button type="submit">Cadastrar</button>

          <p>
            Já possui cadastro? <Link href="/login">Faça login</Link>
          </p>
        </RegistrationModal>
      </RegistrationContainer>
    </>
  );
}
