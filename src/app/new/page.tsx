import MenuUser from "@/components/MenuUser";
import {
  FileLabel,
  FileLabelSelect,
  LabelContainer,
  NewArticleContainer,
  NewArticleForm,
} from "@/styles/pages/new";

export default function NewArticle() {
  return (
    <>
      <MenuUser />
      <NewArticleContainer>
        <NewArticleForm action="">
          <h3>Publique um novo artigo</h3>
          <div>
            <label htmlFor="">
              Título <strong>*</strong>
            </label>
            <input
              type="text"
              placeholder="A interferência da vida humana nos oceanos"
            />
          </div>
          <div>
            <label htmlFor="">
              Descrição <strong>*</strong>
            </label>
            <textarea
              name=""
              id=""
              placeholder="Forneça uma breve descrição sobre seu artigo, contendo informações relevantes sobre ele"
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
            />
            <LabelContainer>
              <FileLabelSelect htmlFor="fileUpload">
                Nenhum arquivo selecionado
              </FileLabelSelect>
              <FileLabel htmlFor="fileUpload">Abrir</FileLabel>
            </LabelContainer>
            <p>Apenas formato .pdf, .docx com tamanho menor que 10MB.</p>
          </div>
          <div>
            <label htmlFor="imageUpload">Imagem</label>
            <input
              type="file"
              id="imageUpload"
              placeholder="Nenhum arquivo selecionado"
            />
            <LabelContainer>
              <FileLabelSelect htmlFor="imageUpload">
                Nenhum arquivo selecionado
              </FileLabelSelect>
              <FileLabel htmlFor="imageUpload">Abrir</FileLabel>
            </LabelContainer>
            <p>Apenas formato .jpg, .png, .jpeg com tamanho menor que 10MB.</p>
          </div>
          <button type="submit">Publicar</button>
        </NewArticleForm>
      </NewArticleContainer>
    </>
  );
}
