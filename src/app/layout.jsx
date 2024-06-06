import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Container } from "@/components/layout/container";
import { ThemeProvider } from "@/components/providers/NextThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReCycle",
  description: "Tu asistente en el reciclaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          themes={["light", "dark"]}
        >
          <Container className={"overflow-hidden"}>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
