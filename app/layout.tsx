import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KriukLagi — Snack Enak, Renyah & Bikin Mau Lagi",
  description: "KriukLagi menghadirkan snack renyah, gurih, dan enak untuk teman ngemil setiap saat. Pesan snack favoritmu sekarang.",
  keywords: ["snack Indonesia", "makanan ringan", "keripik", "basreng", "makaroni", "snack pedas", "cemilan"],
  icons: {
    icon: "/kriuklagi_logo.png",
    apple: "/kriuklagi_logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
