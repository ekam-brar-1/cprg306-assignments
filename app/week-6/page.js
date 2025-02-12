import ItemList from "../week-6/item-list";

export default function Page() {
  return (
    <main className="mx-3 flex flex-col  items-center border-2 border-gray-900 my-2 p-2 rounded-lg">
      <h1 className="">Shopping List</h1>
      <ItemList />
    </main>
  );
}
