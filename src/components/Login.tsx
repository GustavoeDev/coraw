"use client";

import {
  LoginContainer,
  LoginContent,
  LoginFooter,
  LoginInput,
} from "@/styles/pages/login";
import Image from "next/image";

import octopusImg from "../assets/octopus.png";
import Header from "@/components/Header";
import Link from "next/link";
import { useState } from "react";
import { usersApi } from "@/lib/axios";
import { redirect } from "next/navigation";

interface UserValid {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCheckUserValid(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await usersApi.get("/users");
    const data = response.data;

    const userValid = data.find(
      (user: UserValid) => user.email === email && user.password === password
    );

    console.log(userValid);

    if (userValid) {
      redirect("/articles");
    }
  }

  return (
    <>
      <Header />
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
              Ainda não possui cadastro? <Link href="/">Cadastre-se</Link>
            </span>
          </LoginFooter>
        </LoginContent>
        <Image src={octopusImg} alt="" width={500} height={500} priority />
      </LoginContainer>
    </>
  );
}
