import Welcome from '@/components/mdx/Welcome.mdx'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-semibold">
        Hola team: s15-18-t-java-react
      </h1>

      <Welcome />
    </main>
  );
}
