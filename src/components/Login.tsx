"use client";

import {
  LoginContainer,
  LoginContent,
  LoginFooter,
  LoginInput,
} from "@/styles/pages/login";
import Image from "next/image";
import { useRouter } from "next/navigation";
import octopusImg from "../assets/octopus.png";
import Header from "@/components/Header";
import Link from "next/link";
import { useContext, useState } from "react";
import { usersApi } from "@/lib/axios";
import { UserValidLoginContext } from "@/contexts/UserValidLogin";
import { setCookie } from "nookies";

interface UserValid {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { addUserValid } = useContext(UserValidLoginContext);

  async function handleCheckUserValid(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await usersApi.get("/users");
    const data = response.data;

    const userValid = data.find(
      (user: UserValid) => user.email === email && user.password === password
    );

    if (userValid) {
      addUserValid(userValid);
      setCookie(null, "token", "userTokenValue", { path: "/" });
      router.push("/");
      return;
    }

    const dataAdmin: UserValid = (await usersApi.get("/admin")).data;
    const adminUserValid =
      dataAdmin.email === email && dataAdmin.password === password;

    if (adminUserValid) {
      addUserValid(null);
      setCookie(null, "token", "adminTokenValue", { path: "/" });
      router.push("/admin/dashboard");
      return;
    }
  }

  return (
    <>
      <Header variant="normal" />
      <LoginContainer>
        <LoginContent action="" onSubmit={handleCheckUserValid}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </LoginInput>

          <LoginFooter>
            <button type="submit">Entrar</button>

            <span>
              Ainda não possui cadastro? <Link href="/signup">Cadastre-se</Link>
            </span>
          </LoginFooter>
        </LoginContent>
        <Image
          src={octopusImg}
          alt="Imagem de um polvo"
          width={500}
          height={500}
        />
      </LoginContainer>
    </>
  );
}
