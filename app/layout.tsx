import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sadhurka",
  verification: {
    google: "googleb6b50b67b1a9cbac.html",
  },
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
