import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import {Button} from "@/components/ui/button";

const singleDataCardOptions = {
  mainContent: "Datos personales",
  secondaryContent: "",
  iconName: "downArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
    </Text>
  ),
};

const page = () => {
  return (
    <main className="w-full h-screen ">
       <BreadCrumbs currentRoute="Configuración">
        <Icon iconName="menu" size="lg" />
      </BreadCrumbs>
      <div className="mt-5 flex flex-col  justify-center items-center">
          <div className="mb-5 w-full ">
             <DataCard variant="single" dataCardOptions={singleDataCardOptions} />
          </div>
          <div className="border-4 rounded-xl w-full ">
            <div className="m-5 flex flex-row justicefy-center justify-between">
              <h3>Nombre: </h3>
              <p>Pepita Flores</p>
            </div>
            <div className="m-5 flex flex-row justicefy-center justify-between">
              <h3>Direcion:</h3>
              <p> San Patricio 1234</p>
            </div>
            <div className="m-5 flex flex-row justicefy-center justify-between">
              <h3>Localidad:</h3>
              <p>San Rafael</p>
            </div>
            <div className="m-5 flex flex-row justicefy-center justify-between">
              <h3>Mail:</h3>
              <p>pepitaflores@gmail.ocm</p>
            </div>
            <div className="m-5 flex flex-row justicefy-center justify-between">
              <h3>Contraseña:</h3>
              <p> ********</p>
            </div>
          
            <div className="mt-10 flex flex-row  justify-center items-center ">
              <Button variant="ghost">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                <Icon variant="circular" circularColor="green" iconName="pencil" size="lg" />
                </Text>
              </Button>
              <Button variant="ghost">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                <Icon variant="circular" circularColor="green" iconName="social" size="lg" />
                </Text>
              </Button>
            </div>
        </div>
      </div>
    </main>
  );
};
export default page;