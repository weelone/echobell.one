import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="rounded-2xl"
          src="/logo.png"
          alt="Echobell logo"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-xl font-bold text-center">Welcome to Echobell</h1>
      </main>
    </div>
  );
}
