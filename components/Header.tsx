"use client";
import { useState } from "react";
import { waLink } from "@/config/site";
const nav = [["Produk", "#produk"], ["Kenapa Kami", "#kenapa"], ["Tentang Kami", "#tentang"], ["FAQ", "#faq"]];
export function Header() { const [isOpen,setIsOpen] = useState(false); const order = waLink("Halo KriukLagi 👋 Saya mau pesan snack!"); return <header><nav className="nav shell" aria-label="Navigasi utama"><div className={`nav-links ${isOpen ? "show" : ""}`}>{nav.map(([n,h])=><a key={h} href={h} onClick={()=>setIsOpen(false)}>{n}</a>)}</div><div className="nav-actions"><a className="button button-small" href={order} target="_blank" rel="noreferrer">Pesan Sekarang</a><button className="menu" aria-label="Buka menu" aria-expanded={isOpen} onClick={()=>setIsOpen(!isOpen)}><i /><i /><i /></button></div></nav></header>; }
