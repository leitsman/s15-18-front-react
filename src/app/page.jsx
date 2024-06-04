import Welcome from "@/components/mdx/Welcome.mdx";
import { NavBar } from "@/components/features/navbar/NavBar";
import { Stack } from "@/components/layout/stack";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24">
      <h1 className="font-semibold">Hola team: s15-18-t-java-react</h1>
      <Stack showOutline>
        <NavBar />
      </Stack>
      <Welcome />
    </main>
  );
}
