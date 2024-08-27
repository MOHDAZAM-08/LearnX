import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
     <div className="flex  flex-col items-center justify-center min-h-screen bg-gray-100 "
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Link href="/home"> 
      <div className="text-3xl font-bold text-white">Home</div>
      </Link> 
      <Link href="/Expanded"> 
      <div className="text-3xl font-bold text-white">Expanded</div>
      </Link>

    </div>
    </main>
  );
}
