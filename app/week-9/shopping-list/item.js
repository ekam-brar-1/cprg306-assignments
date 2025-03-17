export default function Item({ props, onselectItem }) {
  return (
    <div className="flex flex-row items-center">
      <div
        className="border-2 border-gray-900 my-2 p-2 rounded-lg"
        onClick={() => onselectItem(props)}
      ></div>
      <ul className="text-2xl mx-3 hover:text-blue-500">
        <li>{props.name}</li>
        <li>{props.quantity}</li>
        <li>{props.category}</li>
      </ul>
    </div>
  );
}
