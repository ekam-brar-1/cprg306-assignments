import Link from "next/link";
export default function StudentInfo() {
    return (
      <div className="bg-gray-100 p-10">
        <h1 className="font-bold text-blue-700 m-10"> My Name is <span className="text-blue-950">Ekamjot Singh</span></h1>
        <Link className="font-bold hover:text-blue-500 m-10" href="https://github.com/ekam-brar-1/cprg306-assignments">This is a link to my github repo.</Link>
      </div>
    );
  }