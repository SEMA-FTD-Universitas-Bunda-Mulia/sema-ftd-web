import { ImageResponse } from "next/og";
// import { readFile } from "node:fs/promises";
// import { join } from "node:path";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
//   const interBold = await readFile(
//     join(process.cwd(), "assets/Inter-Bold.ttf")
//   );
//   const interRegular = await readFile(
//     join(process.cwd(), "assets/Inter-Regular.ttf")
//   );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#f5f5f5",
        fontFamily: "Inter",
      }}
    >
      {/* Left side - Image area with border */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          borderRight: "6px solid #000000",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "90%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            color: "#cccccc",
            fontWeight: "bold",
          }}
        >
          <img
            src="logo.png"
            style={{
              width: "90%",
              height: "90%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 50px",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          boxShadow: "inset -6px 0 0 #000000",
        }}
      >
        Sema FTD
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#000000",
            lineHeight: 1.2,
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          About Acme
        </div>

        {/* Decorative line */}
        <div
          style={{
            width: 80,
            height: 5,
            backgroundColor: "#000000",
            marginBottom: 30,
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: "#1a1a1a",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          Crafted with purpose. Built with intention.
        </div>
      </div>
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
