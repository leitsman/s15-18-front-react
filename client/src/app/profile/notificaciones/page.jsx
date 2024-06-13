import { BreadCrumbs } from "@/components/ui/breadCrumbs";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { DataCard } from "@/components/ui/data_card";
import { Switch } from "@/components/ui/switch";

const singleDataCardOptions = {
  mainContent: "Notificaciones",
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
      <div className="mt-5 flex flex-col  justify-center">
          <div className="mb-5 w-full ">
            <DataCard variant="single" dataCardOptions={singleDataCardOptions} />
          </div>

      <div>
          <div  className="mb-7 w-full flex flex-row justify-between" >
            <h4 >Recibir notificaciones al realizar la verificación del dispositivo</h4>
            <p>ON <Switch /></p>
            
          </div>
          <div  className="mb-7 w-full flex flex-row justify-between" >
            <h4 >Recibir notificaciones al correo electrónico registrado</h4>
            <p>ON <Switch /></p>
           
          </div>
          <div  className="mb-7 w-full flex flex-row justify-between" >
            <h4>Recibir notificaciones al acreditarse mi puntaje</h4>
            <p>ON <Switch /></p>
            
          </div> 
      </div>
      </div>
    </main>
  );
};
export default page;