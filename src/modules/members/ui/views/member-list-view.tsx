import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";

import { MembersList, MembersListSkeleton } from "../components/members-list";
import { Suspense } from "react";
import YearSelector from "@/modules/about/ui/components/year-selector";

export const MemberListView = ({}) => {
  return (
    <div className="px-4 lg:px-20 py-10 flex flex-col items-center">
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid max-w-[500px] grid-cols-2 gap-2 mx-auto">
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="team">Meet Our Team</TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="about">
          <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
            <h1 className="text-6xl font-extrabold">About Us</h1>
          </div>
          <div className="flex flex-col">
            <div className="text-justify leading-6">
              Incididunt et laborum non consequat qui est anim do qui amet sit
              excepteur eu do. Aute sit Lorem exercitation minim deserunt aliqua
              cupidatat nisi. Ex culpa in nulla commodo aliquip consequat.
              Cillum ex Lorem Lorem nisi dolor anim amet laboris. Pariatur
              excepteur cupidatat duis consequat sunt excepteur Lorem ex labore
              tempor do tempor. Sit eiusmod officia cupidatat aliquip occaecat
              dolore nulla excepteur est qui qui nisi. Id id id non officia sit
              duis excepteur minim qui sit magna exercitation. In labore labore
              do anim sint nisi esse ex consequat eiusmod eiusmod. Aliqua et
              pariatur incididunt adipisicing enim laboris non ullamco aliqua
              esse labore laborum.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12 py-5">
            <div className="lg:col-span-3 xl:col-span-5">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-extrabold">Our Vision</h1>
                  <p>
                    Incididunt et laborum non consequat qui est anim do qui amet
                    sit excepteur eu do. Aute sit Lorem exercitation minim
                    deserunt aliqua cupidatat nisi.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-extrabold">Our Mission</h1>
                  <p>
                    Incididunt et laborum non consequat qui est anim do qui amet
                    sit excepteur eu do. Aute sit Lorem exercitation minim
                    deserunt aliqua cupidatat nisi.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 xl:col-span-2">
              <Image src="/cat.gif" alt="logo" width={100} height={100} />
            </div>
          </div>
        </TabsContent>
        <TabsContent className="w-full" value="team">
          <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
            <h1 className="text-6xl font-extrabold">
              Meet Our <span className="text-main">Team</span>
            </h1>
          </div>
          <div className="flex flex-col">
            {/* pb-80 */}
            <div className="text-justify leading-6">
              Meet the people behind Sema FTD, Voluptate reprehenderit qui
              exercitation sint veniam fugiat ullamco commodo est in non ut
              mollit. Elit officia velit eiusmod occaecat commodo. Ipsum aliquip
              non enim voluptate sunt do tempor proident. Voluptate
              reprehenderit qui exercitation sint veniam fugiat ullamco commodo
              est in non ut mollit. Elit officia velit eiusmod occaecat commodo.
              Ipsum aliquip non enim voluptate sunt do tempor proident.
            </div>
          </div>
          {/* <div className="flex w-full justify-center pb-10">
            <ArrowDown/>
          </div> */}
          <YearSelector />
          <Tabs defaultValue="bph" className="w-full py-5">
            <TabsList className="grid max-w-[500px] grid-cols-5 gap-2 mx-auto">
              <TabsTrigger value="bph">BPH</TabsTrigger>
              <TabsTrigger value="litbang">Litbang</TabsTrigger>
              <TabsTrigger value="humas">Humas</TabsTrigger>
              <TabsTrigger value="medkom">Medkom</TabsTrigger>
              <TabsTrigger value="advokasi">Advokasi</TabsTrigger>
            </TabsList>
            <Suspense fallback={<MembersListSkeleton />}>
              <MembersList />
            </Suspense>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};
