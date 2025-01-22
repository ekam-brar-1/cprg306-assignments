import ItemList from './item-list.js';
export default function Page() {
    return (
        <div className="bg-gray-200 p-2">
        <h1 className="text-4xl text-center">Shopping List</h1>
        <ItemList />
        </div>
    );
}