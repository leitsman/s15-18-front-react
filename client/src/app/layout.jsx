import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Container } from "@/components/layout/container";
import { ThemeProvider } from "@/components/providers/NextThemeProvider";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReCycle",
  description: "Tu asistente en el reciclaje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          enableColorScheme
          themes={["light", "dark"]}
        >
          <Container className={"overflow-hidden"}>{children}</Container>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
