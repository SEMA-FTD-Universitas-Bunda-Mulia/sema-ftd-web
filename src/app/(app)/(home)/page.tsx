import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4 lg:px-20 py-15 flex flex-col gap-4">
      <div className="flex flex-col lg:flex-row py-28 lg:items-center gap-y-2 lg:gap-y-0 justify-between">
        <h1 className="text-6xl lg:text-8xl font-extrabold">
          Welcome,
          <br />
          <span className="text-main">Signtechers</span>
        </h1>
        <div>
          <Image src="/logo.png" alt="logo" width={300} height={300} />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center mt-20 gap-14">
        <h1 className="text-center text-6xl">
          What is <span className="text-gray-800">Sema </span>
          <span className="text-main">FTD</span>?
        </h1>
        <p className="text-lg">
          Anim eiusmod qui ipsum magna incididunt culpa anim pariatur nisi irure
          occaecat. Ea aliqua laborum ea exercitation esse cillum velit enim.
          Amet culpa velit in aliquip. Fugiat mollit exercitation laboris esse
          sit amet cupidatat proident proident amet. Reprehenderit nisi nulla
          tempor sunt id velit do cupidatat nisi deserunt sit sint et.
          Incididunt velit pariatur est velit adipisicing aliqua id. Anim
          cupidatat veniam aliquip excepteur consectetur elit. Ad pariatur ad
          proident et ad sint nisi sunt officia et eu laboris. Do eu nostrud
          esse labore aliquip consequat officia pariatur aute deserunt in
          deserunt elit tempor. Consectetur quis qui eu proident sunt.
        </p>
        <Link href="/about">
          <Button className="font-bold">
            See Details <ArrowRightIcon />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col w-full justify-center items-center mt-30 gap-14">
        <div className="flex flex-row gap-10">
          <h1 className="text-start text-5xl">
            Check Out Our <span className="text-main">Activities</span>
          </h1>
          <div className="max-w-[60%]">
            <p className="text-lg">
              Anim eiusmod qui ipsum magna incididunt culpa anim pariatur nisi
              irure occaecat. Ea aliqua laborum ea exercitation esse cillum
              velit enim. Amet culpa velit in aliquip. Fugiat mollit
              exercitation laboris esse sit amet cupidatat proident proident
              amet. Reprehenderit nisi nulla tempor sunt id velit do cupidatat
              nisi deserunt sit sint et. Incididunt velit pariatur est velit
              adipisicing aliqua id. Anim cupidatat veniam aliquip excepteur
              consectetur elit. Ad pariatur ad proident et ad sint nisi sunt
              officia et eu laboris. Do eu nostrud esse labore aliquip consequat
              officia pariatur aute deserunt in deserunt elit tempor.
              Consectetur quis qui eu proident sunt.
            </p>
          </div>
        </div>
        <div>
          <Link href="/activities">
            <Button className="font-bold">
              See Details <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center my-30 gap-14">
        <div className="flex flex-row gap-10">
          <div className="max-w-[60%]">
            <p className="text-lg">
              Anim eiusmod qui ipsum magna incididunt culpa anim pariatur nisi
              irure occaecat. Ea aliqua laborum ea exercitation esse cillum
              velit enim. Amet culpa velit in aliquip. Fugiat mollit
              exercitation laboris esse sit amet cupidatat proident proident
              amet. Reprehenderit nisi nulla tempor sunt id velit do cupidatat
              nisi deserunt sit sint et. Incididunt velit pariatur est velit
              adipisicing aliqua id. Anim cupidatat veniam aliquip excepteur
              consectetur elit. Ad pariatur ad proident et ad sint nisi sunt
              officia et eu laboris. Do eu nostrud esse labore aliquip consequat
              officia pariatur aute deserunt in deserunt elit tempor.
              Consectetur quis qui eu proident sunt.
            </p>
          </div>
          <h1 className="text-start text-5xl">
            See Our <span className="text-main">Blogs</span>
          </h1>
        </div>
        <div>
          <Link href="/activities">
            <Button className="font-bold">
              See Details <ArrowRightIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
