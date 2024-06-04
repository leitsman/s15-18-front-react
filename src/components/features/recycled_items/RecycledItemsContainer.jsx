import React from "react";
import { RecycledItem } from "./RecycledItem";

export const RecycledItemsContainer = (data) => {
  return null;

  return (
    <div>
      {data.map((item) => (
        <RecycledItem key={item.id} data={item} />
      ))}
    </div>
  );
};
