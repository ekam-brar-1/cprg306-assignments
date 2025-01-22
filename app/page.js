import Link from "next/link";

export default function Page() {
    return (
      <main className="mx-3 flex flex-col items-center border-2 border-gray-900 my-2 p-2 rounded-lg">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="./week-2"> Week-2</Link>
        <Link href="./week-3"> Week-3</Link>
      </main>
    );
}