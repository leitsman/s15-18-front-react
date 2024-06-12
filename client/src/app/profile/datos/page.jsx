import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import {Button} from "@/components/ui/button";

const singleDataCardOptions = {
  mainContent: "Datos personales",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      

    </Text>
  ),
};
const singleDataCardOptions1 = {
  mainContent: "Nombre: Pepita Flores",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions2 = {
  mainContent: "Direcion: San Patricio 1234",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions3 = {
  mainContent: "Localidad: San Rafael",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions4 = {
  mainContent: "Mail: pepitaflores@gmail.ocm",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions5 = {
  mainContent: "Contraseña: ********",
  secondaryContent: "",
  iconName: "rightArrow",
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
      <div className="mt-5 flex flex-col  justicefy-center items-center">
         <div className="mb-5 w-full ">
             <DataCard variant="single" dataCardOptions={singleDataCardOptions} />
        </div>
        <div className="border-4 rounded-xl">
          <div className="mb-5 h-7 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions1} />
          </div>
          <div className="mb-5 h-7 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions2} />
          </div>
          <div className="mb-5 h-7 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions3} />
          </div>
          <div className="mb-5 h-7 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions4} />
          </div>
          <div className="mb-5 h-7 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions5} />
          </div>
        </div>
        <div className="mt-10 flex flex-row  justicefy-center items-center ">
            <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                Editar
                </Text>
            </Button>
            <Button className="w-full bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
                <Text
                  size="md"
                  variant="subtitle"
                  className="w-full text-white font-serif"
                >
                Compartir
                </Text>
            </Button>
          
        </div>
      </div>
    </main>
  );
};
export default page;