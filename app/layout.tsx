
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Najmun Nahar | Developer Portfolio",
  description:
    "Explore the portfolio, skills, education and projects of Najmun Nahar, a Computer Science student and web developer.",
  applicationName: "Najmun Nahar Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
