import Welcome from '@/components/mdx/Welcome.mdx'
import { Textfield } from '@/components/ui/textfield';
import "../styles/globals.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-semibold">
        Hola team: s15-18-t-java-react
      </h1>
      <Textfield className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline-none" placeholder="Label" type="text" />
      <Welcome />
    </main>
  );
}
