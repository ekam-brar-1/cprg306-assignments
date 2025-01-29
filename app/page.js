import Link from "next/link";

export default function Page() {
    return (
      <main className="mx-3 flex flex-col  items-center border-2 border-gray-900 my-2 p-2 rounded-lg">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
       <button className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> <Link href="./week-2"> Week-2</Link></button>
       <button className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> <Link href="./week-3"> Week-3</Link></button>
       <button className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> <Link href="./week-4"> Week-4</Link></button>
       
      </main>
    );
}