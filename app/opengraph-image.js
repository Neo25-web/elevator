import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Classic Elevators — Elevator company in Daska, Sialkot, Pakistan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const gold = "#c9a227";
const navy = "#0a1628";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${navy} 0%, #132238 60%, #1a2d4a 100%)`,
          borderTop: `10px solid ${gold}`,
          borderBottom: `10px solid ${gold}`,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* Same mark as app/icon.svg */}
          <div
            style={{
              width: 110,
              height: 110,
              borderRadius: 24,
              background: navy,
              border: `3px solid ${gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 48,
                height: 76,
                borderRadius: 6,
                background: gold,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 7,
              }}
            >
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 34, height: 10, borderRadius: 3, background: navy }} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700 }}>
            Classic<span style={{ color: gold, marginLeft: 18 }}>Elevators</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 46, fontWeight: 700, lineHeight: 1.2 }}>
            Passenger, Capsule &amp; Freight Elevators
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1" }}>
            Installation · Maintenance · Control Panels — since 2005
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30 }}>
          <div style={{ color: gold }}>{site.location}</div>
          <div style={{ fontWeight: 700 }}>{site.phoneDisplay}</div>
        </div>
      </div>
    ),
    size
  );
}
