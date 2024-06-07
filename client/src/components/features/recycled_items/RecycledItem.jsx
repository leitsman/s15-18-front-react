export function RecycledItem({ item }) {
  return (
    <div className="w-full p-3  h-24 flex flex-col justify-between bg-custom-recycle-background">
      <div className="flex justify-between *:font-bold">
        <p>{item.name}</p>
        <p>{item.points}</p>
      </div>
      <div className="flex justify-between *:font-bold">
        <p>{item.date}</p>
        <p>{item.center}</p>
      </div>
    </div>
  );
}
