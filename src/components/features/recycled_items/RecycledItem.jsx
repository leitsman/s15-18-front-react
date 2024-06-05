export function RecycledItem(data) {
  return (
    <div className="w-full p-3  h-24 flex flex-col justify-between bg-gray-300">
      <div className="flex justify-between *:font-bold">
        <p>{data.name}</p>
        <p>{data.points}</p>
      </div>
      <div className="flex justify-between *:font-bold">
        <p>{data.date}</p>
        <p>{data.center}</p>
      </div>
    </div>
  );
}
