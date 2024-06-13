import React from "react";
import { RecycledItem } from "./RecycledItem";

export const RecycledItemsContainer = ({ data }) => {
  const recycledItems = data;

  if (recycledItems) return (
    <div className="w-full divide-y-2 divide-white rounded-3xl overflow-hidden *:text-white">
      {recycledItems.map((item) => (
        <RecycledItem key={item.id} item={item} />
      ))}
    </div>
  );
};
