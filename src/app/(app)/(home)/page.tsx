import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sema FTD",
  description: "Sema FTD is a student organization that aims to provide a platform for students to develop their skills and interests in the field of technology.",
};

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
          <strong>The Faculty of Technology and Design Student Senate </strong>
          is a student representative institution at the
          <strong> Bunda Mulia University </strong>
          Student Organization level for both the Ancol Campus and the Serpong
          Campus. The Faculty of Technology and Design Student Senate,
          hereinafter referred to as{" "}
          <strong>
            SEMA <span className="text-main">FTD</span>
          </strong>
          , oversees 6 study programs: Informatics Engineering, Information
          Systems, Visual Communication Design, Interactive Design, Data
          Science, and Artificial Intelligence.{" "}
          <strong>
            SEMA <span className="text-main">FTD</span>
          </strong>{" "}
          is a platform that facilitates the aspirations, creativity, and
          communication among other student organizations, aiming for the
          self-development of Bunda Mulia University students. We present
          various work programs, events, and activities such as seminars,
          workshops, leadership training, social services, fundraising for
          disaster victims, and much more. These activities are designed to
          enhance the quality of students, creating high-achieving individuals
          who are beneficial for the progress of the Indonesian nation.
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
              Explore the various activities of the Faculty of Technology and
              Design Student Senate. This section is the information hub for all
              work programs, seminars, workshops, and competitions we organize.
              Discover the calendar of upcoming activities, review documentation
              of past events, and gain the latest industry insights. We dedicate
              this platform to supporting the potential of{" "}
              <strong>#Signtechers</strong> through learning, professional
              networking, and collaboration.
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
              Welcome to the{" "}
              <strong>
                SEMA <span className="text-main">FTD</span>
              </strong>{" "}
              blog, with the tagline{" "}
              <strong>
                &quot;Today&apos;s Research, Tomorrow&apos;s Breakthrough&quot;
              </strong>
              . This blog is our platform for sharing information and useful
              content. Here, you will find various articles, as well as opinions
              and analysis from our community including students, lecturers, and
              industry practitioners. Explore our archives to find topics you
              like.
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
