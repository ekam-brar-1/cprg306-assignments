"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
export default function App() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  return (
    <div>
      <h1>Week 9</h1>
      {user ? (
        <button
          onClick={() => {
            firebaseSignOut();
          }}
          className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => {
            gitHubSignIn();
          }}
          className="bg-transparent hover:bg-blue-500 m-2 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign In with GitHub
        </button>
      )}

      {user ? <p>Logged in as {user.displayName}</p> : <p>Not logged in</p>}
      {user ? (
        <div>
          <Link href="/week-10/shopping-list">Shopping list</Link>
        </div>
      ) : null}
    </div>
  );
}
