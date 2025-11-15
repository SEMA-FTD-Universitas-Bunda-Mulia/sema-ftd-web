// import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 lg:px-20 py-20 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 justify-between">
        <h1 className="text-6xl lg:text-8xl font-extrabold">
          Welcome,
          <br />
          <span className="text-main">Signtechers</span>
        </h1>
        <div>
          {/* <Image src="/cat.gif" alt="logo" width={100} height={100} /> */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12">
        <div className="lg:col-span-2 xl:col-span-2">Test 2</div>
        <div className="lg:col-span-4 xl:col-span-6">Test 3</div>
      </div>
    </div>
  );
}
