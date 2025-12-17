/* eslint-disable @next/next/no-img-element */
import { caller } from "@/trpc/server";
import { ImageResponse } from "next/og";
import { Media } from "@/payload-types";
// import { readFile } from "node:fs/promises";
// import { join } from "node:path";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function ImageImage({
  params,
}: {
  params: Promise<{ activityId: string }>;
}) {
  //   const interBold = await readFile(
  //     join(process.cwd(), "assets/Inter-Bold.ttf")
  //   );
  //   const interRegular = await readFile(
  //     join(process.cwd(), "assets/Inter-Regular.ttf")
  //   );

  const { activityId } = await params;

  const data = await caller.activities.getOne({ activityId });

  const dataWithMedia = {
    ...data,
    thumbnail: data.thumbnail as Media,
  }

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fef3c8",
        fontFamily: "Inter",
      }}
    >
      <img
        src={dataWithMedia.thumbnail?.url || ""}
        style={{
          width: "90%",
          height: "90%",
          objectFit: "cover",
        }}
        alt="Sema FTD"
      />
    </div>,
    {
      ...size,
      //   fonts: [
      //     {
      //       name: "Inter",
      //       data: interBold,
      //       style: "normal",
      //       weight: 700,
      //     },
      //     {
      //       name: "Inter",
      //       data: interRegular,
      //       style: "normal",
      //       weight: 400,
      //     },
      //   ],
    }
  );
}
