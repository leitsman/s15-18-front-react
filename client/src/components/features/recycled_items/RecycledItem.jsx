export function RecycledItem({ item }) {
  return (
    <div className="w-full p-3  h-24 flex flex-col justify-between bg-[#cdc5c5] *:text-black">
      <div className="flex justify-between *:font-bold">
        <p>{item.waste.name}</p>
        <p>{item.waste.points}</p>
      </div>
      <div className="flex justify-between *:font-bold">
        <p>{item.date}</p>
        <p>{item.recycleCenter.name}</p>
      </div>
    </div>
  );
}
