import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sadhurka",

 
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
