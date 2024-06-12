import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";

const singleDataCardOptions = {
  mainContent: "Notificaciones",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions1 = {
  mainContent: "Recibir notificaciones al realizar la verificación del dispositivo",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions2 = {
  mainContent: "Recibir notificaciones al correo electrónico registrado",
  secondaryContent: "",
  iconName: "rightArrow",
  secondSectionElements: (
    <Text variant={"body"} className={"font-bold"}>
      
    </Text>
  ),
};
const singleDataCardOptions3 = {
  mainContent: "Recibir notificaciones al acreditarse mi puntaje",
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
          <div className="mb-5 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions1} />
          </div>
          <div className="mb-5 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions2} />
          </div>
          <div className="mb-5 w-full ">
              <DataCard variant="single" dataCardOptions={singleDataCardOptions3} />
          </div>
        </div>
        
      </div>
     


    </main>
  );
};
export default page;