import UserValidLogin from "@/contexts/UserValidLogin";
import { globalStyles } from "@/styles/global";
import { Footer } from "@/styles/pages/layout";
import { getCssText } from "@/styles/stitches.config";
import { Baloo_2, Epilogue } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo2",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-epilogue",
});

globalStyles();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${baloo2.variable} ${epilogue.variable}`}>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <UserValidLogin>{children}</UserValidLogin>
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
