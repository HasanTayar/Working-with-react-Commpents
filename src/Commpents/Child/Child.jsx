import Balloon from "../Balloon/Ballon";

export default function Child({ children }) {
  const { name, color } = children;
  console.log(name , color);
  return (
    <div>
      <h3>{name}</h3>
      <Balloon color={color} />
    </div>
  );
}
