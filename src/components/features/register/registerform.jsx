'use client';
import { Textfield } from "@/components/ui/textfield";

const RegisterForm = () => {
  return (
    <>
      <form className="max-w-sm mx-auto flex items-center flex-col">
        <div className="mb-5 w-56">
          <input
            type="text"
            id="nombre"
            className="placeholder-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Nombre completo"
          />
        </div>
        <div className="mb-5 w-56">
          <Textfield className="w-72 h-9 border-b-2 border-green-300 placeholder-custom focus:outline" placeholder="Email" type="text"/>
        </div>
        <div className="mb-5 w-56">
          <input
            type="text"
            id="contrasenia"
            className="placeholder-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Contraseña"
          />
        </div>
        <div className="mb-5 w-56">
          <input
            type="text"
            id="recordar-contrasenia"
            className="placeholder-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Recordar contraseña"
          />
        </div>
        <button
          type="submit"
          className="items-center text-black bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;