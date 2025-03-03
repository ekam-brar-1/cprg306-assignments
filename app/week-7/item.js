export default function Item(props) {
  return (
    <div className="border-2 border-gray-900 my-2 p-2 rounded-lg">
      <ul className="text-2xl mx-3 hover:text-blue-500">
        <li>{props.name}</li>
        <li>{props.quantity}</li>
        <li>{props.category}</li>
      </ul>
    </div>
  );
}
