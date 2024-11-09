export async function uploadFileToCloudinary(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
  );
  formData.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_NAME || "");

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/raw/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Falha ao fazer upload. Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error("Falha ao obter a URL segura do arquivo");
    }
  } catch (error) {
    console.error("Erro ao fazer upload para o Cloudinary:", error);
    throw new Error(
      error instanceof Error ? error.message : "Erro desconhecido"
    );
  }
}
