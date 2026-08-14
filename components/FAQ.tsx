"use client";
import { useState } from "react";
const faqs = [
  ["Apakah bisa pesan lewat WhatsApp?", "Bisa! Klik tombol Pesan Sekarang atau tombol Pesan di produk favoritmu."],
  ["Bisa dikirim ke luar kota?", "Tersedia pengiriman sesuai area layanan yang tersedia. Hubungi kami via WhatsApp untuk cek tujuanmu."],
  ["Berapa lama produk tahan?", "Silakan lihat informasi masa simpan yang tertera pada kemasan setiap produk."],
  ["Apakah bisa reseller?", "Untuk informasi reseller, silakan hubungi kami melalui WhatsApp."],
  ["Apakah bisa membeli dalam jumlah banyak?", "Bisa. Hubungi kami untuk harga grosir atau kebutuhan khusus."],
];
export function FAQ() { const [open, setOpen] = useState<number | null>(0); return <div className="faq-list">{faqs.map(([q,a], i) => <div className={`faq-item ${open === i ? "open" : ""}`} key={q}><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{q}</span><b>+</b></button>{open === i && <p>{a}</p>}</div>)}</div>; }
