import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "50 Sites in 50 Days",
  description: "A collection of 50 mini-projects built with HTML, CSSS, and JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">50 Projects in 50 Days</h1>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-200 text-center py-4 mt-8">
          <p>&copy; 2025 My Portfolio</p>
        </footer>
      </body>
    </html>
  );
}
