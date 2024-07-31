import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Navbar />
      <section className="relative w-full h-screen">
        <Image
          className="absolute inset-0 w-full h-full"
          src="/bgHeader.jpg"
          alt="Background header"
          fill={true}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-white text-3xl font-bold">Main content</h1>
        </div>
      </section>
      <section className="h-screen w-full"></section>
    </main>
  );
}
