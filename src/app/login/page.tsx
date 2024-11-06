import {
  Header,
  LoginContainer,
  LoginContent,
  LoginInput,
} from "@/styles/pages/login";
import Image from "next/image";

import logoCoraw from "../../assets/logo.svg";
import octopusImg from "../../assets/octopus.png";

export default function Login() {
  return (
    <>
      <Header>
        <Image src={logoCoraw} alt="Logo do Coraw" />
      </Header>
      <LoginContainer>
        <LoginContent>
          <div>
            <h2>
              Bem-vindo ao <strong>Coraw</strong>
            </h2>
            <p>Faça login para ver e publicar novos artigos</p>
          </div>

          <LoginInput>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="coraw@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="digite sua senha"
              />
            </div>
          </LoginInput>

          <button type="submit">Entrar</button>
        </LoginContent>
        <Image src={octopusImg} alt="" width={500} height={500} priority />
      </LoginContainer>
    </>
  );
}
