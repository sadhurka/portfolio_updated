import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jack -- 3D Creator",
  description:
    "Jack is a 3D creator driven by crafting striking and unforgettable projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#0C0C0C", overflowX: "clip" }}>
        {children}
      </body>
    </html>
  );
}
