import { globalStyles } from "@/styles/global";
import { Footer } from "@/styles/pages/layout";
import { getCssText } from "@/styles/stitches.config";
import { Baloo_2, Roboto } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={`${roboto.className} ${baloo2.className}`}>
        {children}
        <Footer>
          <div>
            <p>Todos os direitos reservados</p>
            <p>
              Copyright © 2024 | <strong>Coraw</strong>
            </p>
          </div>
        </Footer>
      </body>
    </html>
  );
}
