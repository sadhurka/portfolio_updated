import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sadhurka",
  verification: {
    google: "6Mzzs7N-4PDkgxMShlY3CNnhzFFGDrhcP6LHBDLZUts",
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
