import Image from "next/image";
import React from "react";
import RegisterForm from "../../components/features/register/registerform"
const page = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center">
      <div className="w-3/5 flex flex-col justify-center items-center gap-10">
        <div className="w-1/2 bg-gray-300">
          <Image src="" width={168.95} height={168.95} alt="imagen" />
        </div>    
        <h1 className="text-center text-6xl">Crea tu cuenta</h1>
        
        <a className="flex items-center space-x-2 justify-center w-64 text-black bg-gray-200 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-2xl text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-bold" ><span>CONTINUAR CON GOOGLE</span></a>
      </div>
      
      <RegisterForm />
    </main>
  );
};
export default page;
