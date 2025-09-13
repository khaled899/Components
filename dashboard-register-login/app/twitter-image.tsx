import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Cryptocurrency Trading Dashboard"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation - reusing the same image for Twitter
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Background image */}
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-21%20at%2000.01.09-1DI8PlTigyTXyu5nPuXVjFdbqYc5Av.png"
        alt="Cryptocurrency Dashboard"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Semi-transparent overlay for better text visibility */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "40px",
        }}
      >
        <div style={{ fontSize: "48px", color: "white", fontWeight: "bold" }}>Crypto Dashboard</div>
        <div style={{ fontSize: "24px", color: "white", marginTop: "10px" }}>
          Modern cryptocurrency trading platform
        </div>
      </div>
    </div>,
    { ...size },
  )
}
