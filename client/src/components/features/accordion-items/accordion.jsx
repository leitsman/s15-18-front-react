"use client";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useState } from "react";

const AccordionItems = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const RadioGroup = ({ options }) => {
    const [selected, setSelected] = useState(null);

    return (
      <div className="space-y-2 h-44">
        {options.map((option, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio-group"
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
              className="form-radio h-4 w-4 bg-custom-gradient-from"
            />
            <span className="font-bold text-custom-gradient-from">
              {option.label}
            </span>
          </label>
        ))}
        <div className="mt-5 flex justify-center space-x-4">
          <Button className="w-1/3 bg-gray-500 rounded-full">
            <Text
              size="md"
              variant="subtitle"
              className="w-full text-white font-serif"
            >
              Borrar
            </Text>
          </Button>
          <Button className="w-1/3 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
            <Text
              size="md"
              variant="subtitle"
              className="w-full text-white font-serif"
            >
              Aplicar
            </Text>
          </Button>
        </div>
      </div>
    );
  };

  const TextInput = () => {
    const [text, setText] = useState("");

    return (
      <div className="space-y-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 text-sm rounded-full border-2 border-custom-gradient-from"
          placeholder="Ingrese puntaje"
        />
        <div className="mt-5 flex justify-center space-x-4">
          <Button className="w-1/3 bg-gray-500 rounded-full">
            <Text
              size="md"
              variant="subtitle"
              className="w-full text-white font-serif"
            >
              Borrar
            </Text>
          </Button>
          <Button className="w-1/3 bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-full">
            <Text
              size="md"
              variant="subtitle"
              className="w-full text-white font-serif"
            >
              Continuar
            </Text>
          </Button>
        </div>
      </div>
    );
  };

  const accordionData = [
    {
      title: "Categorias",
      options: [
        { label: "Cables", value: "option1" },
        { label: "Baterias", value: "option2" },
        { label: "Disp Grande", value: "option3" },
        { label: "Disp Mediano", value: "option4" },
        { label: "Disp Pequeño", value: "option5" },
      ],
    },
    {
      title: "Dispositivos",
      options: [
        { label: "Celular", value: "option1" },
        { label: "Tablet", value: "option2" },
        { label: "Camara de foto", value: "option3" },
        { label: "Gps", value: "option4" },
        { label: "Otro", value: "option5" },
      ],
    },
    {
      title: "Cantidad",
      options: [
        { label: "Uno", value: "option1" },
        { label: "Dos", value: "option2" },
        { label: "Tres", value: "option3" },
        { label: "Cuatro", value: "option4" },
        { label: "Otro", value: "option5" },
      ],
    },
    {
      title: "Puntaje",
      options: [],
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10 space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="border rounded-lg">
          <div
            className="flex justify-between items-center p-4 h-fit bg-gradient-to-r from-custom-gradient-from to-custom-gradient-to rounded-2xl text-white max-sm:h-6"
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            <span className="font-bold text-custom-gradient-from">
              {openItem === index ? "-" : "+"}
            </span>
          </div>
          {openItem === index && (
            <div className="p-4 bg-white">
              {item.title === "Puntaje" ? (
                <TextInput />
              ) : (
                <RadioGroup options={item.options} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionItems;
