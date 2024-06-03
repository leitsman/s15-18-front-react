import Welcome from '@/components/mdx/Welcome.mdx'
import { CustomButtonIcon } from '@/components/ui/custombuttonicon';
import { SlArrowRight } from "react-icons/sl"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-semibold">
        Hola team: s15-18-t-java-react
      </h1>
      <CustomButtonIcon className="rounded-full flex justify-center items-center border-4 bg-orange-400 text-white border-orange-400 w-40" text="Siguiente" icon={SlArrowRight} />
      <Welcome />
    </main>
  );
}
