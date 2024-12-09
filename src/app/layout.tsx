import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import AuthProvider from "@/components/AuthProvider";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <ThemeProviderWrapper>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Hlavný obsah aplikácie */}
              <main style={{ flexGrow: 1 }}>{children}</main>
            </div>
            {/* Navigačný panel */}
            <Navbar />
          </ThemeProviderWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
