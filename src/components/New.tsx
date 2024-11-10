"use client";

import MenuUser from "@/components/MenuUser";
import {
  Article,
  UserValid,
  UserValidLoginContext,
} from "@/contexts/UserValidLogin";
import {
  FileLabel,
  FileLabelSelect,
  LabelContainer,
  NewArticleContainer,
  NewArticleForm,
} from "@/styles/pages/new";

import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { usersApi } from "@/lib/axios";
import { uploadFileToCloudinary } from "@/lib/cloudinary";

const newArticleValidationSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  fileUpload: zod.instanceof(File),
});

type NewArticleFormData = zod.infer<typeof newArticleValidationSchema>;

export default function NewArticle() {
  const [fileName, setFileName] = useState("");

  const { userValid, addUserValid } = useContext(UserValidLoginContext);

  const name = userValid?.name.split(" ")[0];

  const { register, handleSubmit, setValue, reset } =
    useForm<NewArticleFormData>({
      resolver: zodResolver(newArticleValidationSchema),
      defaultValues: {
        title: "",
        description: "",
        fileUpload: undefined,
      },
    });

  async function handleCreateNewArticle(data: NewArticleFormData) {
    const { title, description, fileUpload } = data;

    let fileUrl = "";

    if (fileUpload) {
      const fileType = fileUpload.type;

      if (fileType.startsWith("image/")) {
        fileUrl = await uploadFileToCloudinary(fileUpload);
        saveNewArticle(fileUrl);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(fileUpload);
        reader.onload = () => {
          const base64File = reader.result as string;
          fileUrl = base64File;

          const existingFiles = JSON.parse(
            localStorage.getItem("uploadedFiles") || "[]"
          );
          existingFiles.push(base64File);
          localStorage.setItem("uploadedFiles", JSON.stringify(existingFiles));

          saveNewArticle(fileUrl);
        };
      }
    }

    function saveNewArticle(fileUrl: string) {
      const newArticle: Article = {
        title: title,
        description: description,
        fileUpload: fileUpload,
        fileUrl: fileUrl,
        createdAt: new Date(),
      };

      const updatedUser: UserValid = {
        ...userValid!,
        articles: [...(userValid?.articles ?? []), newArticle],
      };

      usersApi.put(`/users/${userValid?.id}`, updatedUser);

      addUserValid(updatedUser);

      setFileName("");
      reset();
    }
  }

  return (
    <>
      <MenuUser name={name} />
      <NewArticleContainer>
        <NewArticleForm
          action=""
          onSubmit={handleSubmit(handleCreateNewArticle)}
        >
          <h3>Publique um novo artigo</h3>
          <div>
            <label htmlFor="title">
              Título <strong>*</strong>
            </label>
            <input
              type="text"
              id="title"
              placeholder="A interferência da vida humana nos oceanos"
              required
              {...register("title")}
            />
          </div>
          <div>
            <label htmlFor="description">
              Descrição <strong>*</strong>
            </label>
            <textarea
              id="description"
              placeholder="Forneça uma breve descrição sobre seu artigo, contendo informações relevantes sobre ele"
              required
              {...register("description")}
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileUpload">
              Artigo <strong>*</strong>
            </label>
            <input
              type="file"
              id="fileUpload"
              placeholder="Nenhum arquivo selecionado"
              {...register("fileUpload", {
                onChange: (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setValue("fileUpload", file);
                    setFileName(file.name);
                  }
                },
              })}
            />
            <LabelContainer>
              <FileLabelSelect htmlFor="fileUpload">
                {fileName ? fileName : "Nenhum arquivo selecionado"}
              </FileLabelSelect>
              <FileLabel htmlFor="fileUpload">Abrir</FileLabel>
            </LabelContainer>
            <p>Apenas formato .pdf, .docx com tamanho menor que 10MB.</p>
          </div>

          <button type="submit">Publicar</button>
        </NewArticleForm>
      </NewArticleContainer>
    </>
  );
}
