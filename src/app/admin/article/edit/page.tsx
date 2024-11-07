import Header from "@/components/Header";
import {
  ArticleEditContainer,
  EditForm,
  FileLabelEdit,
  FileLabelSelectEdit,
  LabelContainerEdit,
} from "@/styles/pages/edit";

export default function ArticleEdit() {
  return (
    <>
      <Header />
      <ArticleEditContainer>
        <EditForm action="">
          <h3>Editar as informações do artigo</h3>
          <div>
            <label htmlFor="">
              Título <strong>*</strong>
            </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">
              Descrição <strong>*</strong>
            </label>
            <textarea name="" id=""></textarea>
          </div>
          <div>
            <label htmlFor="fileUpload">
              Artigo <strong>*</strong>
            </label>
            <input type="file" id="fileUpload" />
            <LabelContainerEdit>
              <FileLabelSelectEdit htmlFor="fileUpload">
                Nenhum arquivo selecionado
              </FileLabelSelectEdit>
              <FileLabelEdit htmlFor="fileUpload">Abrir</FileLabelEdit>
            </LabelContainerEdit>
            <p>Apenas formato .pdf, .docx com tamanho menor que 10MB.</p>
          </div>
          <div>
            <label htmlFor="imageUpload">Imagem</label>
            <input type="file" id="imageUpload" />
            <LabelContainerEdit>
              <FileLabelSelectEdit htmlFor="imageUpload">
                Nenhum arquivo selecionado
              </FileLabelSelectEdit>
              <FileLabelEdit htmlFor="imageUpload">Abrir</FileLabelEdit>
            </LabelContainerEdit>
            <p>Apenas formato .jpg, .png, .jpeg com tamanho menor que 10MB.</p>
          </div>
          <button type="submit">Confirmar alterações</button>
        </EditForm>
      </ArticleEditContainer>
    </>
  );
}
