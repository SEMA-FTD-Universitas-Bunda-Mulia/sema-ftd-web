import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Sema FTD";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ width: "30%", marginRight: "2rem" }}>
        <img
          src="logo.png"
          alt="FTD"
          width={200}
          height={200}
        />
      </div>
      <div style={{ width: "70%", textAlign: "center" }}>
        <h1>Sema FTD</h1>
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
