"use client";

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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import {
  MdCalendarMonth,
  MdLocationOn,
  MdOutlineTimer,
  MdPeopleAlt,
} from "react-icons/md";
import { usersApi } from "@/lib/axios";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login | Coraw",
  description: "Esta é a página de Inscrição do Coraw",
};

const newUserValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  password: zod.string(),
  terms: zod.boolean(),
});

interface User {
  name: string;
  email: string;
  password: string;
  terms: boolean;
  articles: string[] | undefined;
}

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm<User>({
    resolver: zodResolver(newUserValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
      articles: [],
    },
  });

  async function handleCreateNewUser(data: User) {
    const { name, email, password, articles } = data;

    const existingUser = await usersApi.get("/users");

    const emailExists = existingUser.data.find(
      (user: { email: string }) => user.email === email
    );

    if (!emailExists) {
      const finalArticles = articles ?? [];

      await usersApi.post("/users", {
        name,
        email,
        password,
        articles: finalArticles,
      });
      reset();
      redirect("/signin");
    } else {
      alert("Este email já está em uso");
      reset();
    }
  }

  return (
    <>
      <Header variant="normal" />
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
        <RegistrationModal
          action=""
          onSubmit={handleSubmit(handleCreateNewUser)}
        >
          <h3>Complete seu cadastro</h3>
          <RegistrationModalInputs>
            <label htmlFor="name">Nome completo</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Gustavo Emanuel"
              required
            />
          </RegistrationModalInputs>
          <RegistrationModalInputs>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              {...register("email")}
              placeholder="coraw@exemplo.com"
              required
            />
          </RegistrationModalInputs>
          <RegistrationModalInputs>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              {...register("password")}
              placeholder="digite sua senha"
              required
            />
          </RegistrationModalInputs>
          <RegistrationTerms>
            <input type="checkbox" {...register("terms")} required />

            <label htmlFor="terms">
              Concordo com os termos de licença do evento.
            </label>
          </RegistrationTerms>

          <button type="submit">Cadastrar</button>

          <p>
            Já possui cadastro? <Link href="/signin">Faça login</Link>
          </p>
        </RegistrationModal>
      </RegistrationContainer>
    </>
  );
}
