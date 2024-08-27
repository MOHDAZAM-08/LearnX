import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <div className="flex items-center justify-center min-h-screen bg-gray-100 "
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Link href="/home"> 
      <h1 className="text-3xl font-bold text-white">Home</h1>
      </Link> 
      <Link href="/Expanded"> 
      <h1 className="text-3xl font-bold text-white">Expanded</h1>
      </Link>

    </div>
    </main>
  );
}
